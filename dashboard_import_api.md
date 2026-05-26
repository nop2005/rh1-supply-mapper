# RH1 Mapped Inventory Import API

Endpoint ที่ RH1 Mapping App เรียกใช้:

```http
POST /api/import/rh1-mapped-inventory
Content-Type: application/json
Cookie/Session: ใช้ session login ของ dashboard
```

## Crosswalk Mapping Memory

Optional endpoint for the mapper to load saved mapping before it auto-maps a new file:

```http
GET /api/mapping-crosswalk?hospital_id=SNS
Cookie/Session: use dashboard login session
```

Response shape:

```json
{
  "ok": true,
  "rows": [
    {
      "source_dr_code": "000002",
      "source_dr_name": "Needle",
      "source_dr_detail": "22G x 1 inch",
      "mapping_text": "Needle 22G x 1 inch",
      "mapped_code": "MS-0131-22B",
      "mapped_prefix": "MS",
      "mapped_group": "0131",
      "spec": "22B",
      "rh1_crisis": true,
      "scenarios": ["quake", "flood", "war"]
    }
  ]
}
```

Mapper precedence:

1. valid `master_code` / `mapped_code` from file
2. backend crosswalk
3. auto-map from item name + detail
4. Low Conf / manual review

When valid file `master_code` differs from saved crosswalk, the mapper marks `mapping_conflict = "master-code-vs-crosswalk"` and blocks upload for that row until the user chooses `master_code`, `crosswalk`, or manual code.

Additional import payload fields:

```json
{
  "crosswalk_loaded": true,
  "crosswalk_status": "136 mappings",
  "rows": [
    {
      "incoming_master_code": "MS-0131",
      "crosswalk_code": "MS-0131-22B",
      "crosswalk_match_type": "source_dr_code",
      "mapping_source": "file-master-code",
      "mapping_conflict": null
    }
  ]
}
```

Backend rules:

- Upsert crosswalk only when the row is approved/trusted and `mapping_conflict` is empty.
- Trusted sources: `manual-code`, `file-master-code`, `district-approved`.
- `crosswalk` source means the mapper used saved mapping; do not rewrite it unless the dashboard user edits it.
- If `mapping_conflict` is present, store the row in review queue and do not overwrite crosswalk silently.

แนะนำให้ host `index.html` ของ mapper บน domain เดียวกับ dashboard เพื่อลดปัญหา CORS. ถ้าเปิดจาก `file://` หรือคนละ domain ต้องเปิด CORS ให้ origin นั้น และอนุญาต credentials.

## Request Body

```json
{
  "source": "rh1-supply-mapper",
  "version": "3.1-direct-upload",
  "hospital_id": "SNS",
  "imported_at": "2026-05-19T00:00:00.000Z",
  "total_rows": 547,
  "upload_rows": 136,
  "rows": [
    {
      "hospital_id": "SNS",
      "source_dr_code": "000002",
      "source_dr_name": "Needle (กล่อง)",
      "source_dr_detail": "22G x 1 inch",
      "mapping_text": "Needle (กล่อง) 22G x 1 inch",
      "unit": "กล่อง",
      "mapped_code": "MS-0131",
      "mapped_name": "Needle",
      "mapped_prefix": "MS",
      "mapped_group": "0131",
      "spec": "",
      "confidence": "High",
      "score": 95,
      "rh1_crisis": true,
      "rh1_id": 51,
      "scenarios": ["quake", "flood", "war"],
      "incoming_master_code": "MS-0131",
      "manual_code": null,
      "mapping_source": "file-master-code",
      "current_balance": 100,
      "daily_usage_rate": 12,
      "status": "1",
      "leadtime": 30,
      "validation_warnings": []
    }
  ],
  "rejected_rows": []
}
```

## Backend Validation

- Auth/session ต้องผูกกับโรงพยาบาลที่กำลัง import
- `rows[].mapped_code` ต้องไม่ว่าง
- `current_balance`, `daily_usage_rate`, `leadtime` ต้องเป็นตัวเลข >= 0 โดย `daily_usage_rate` และ `leadtime` เป็น `null` ได้
- `status` รับเฉพาะ `"1"`, `"2"` หรือ `null`
- บันทึก `source_dr_code/source_dr_name` ไว้ trace ย้อนกลับ และใช้ `mapped_code` เป็นรหัสกลางสำหรับ dashboard
- `source_dr_detail` และ `mapping_text` เป็น optional field สำหรับเก็บรายละเอียด/spec จากไฟล์ต้นทาง และข้อความที่ mapper ใช้จับกลุ่มจริง
- `incoming_master_code` เป็น optional field จากไฟล์ รพ. ถ้ามีและถูก format mapper จะใช้เป็น mapping หลักและส่ง `mapping_source = "file-master-code"`
- Template ฝั่ง รพ. ยังใช้ field เดิมได้เหมือนเดิม และสามารถเพิ่มคอลัมน์ optional ชื่อ `master_code` / `mapped_code` / `รหัสกลาง` ได้ โดย `dr_code` ยังต้องเป็นรหัสเดิมของ รพ.
- Response แนะนำ:

```json
{
  "ok": true,
  "inserted": 120,
  "updated": 16,
  "rejected": 0,
  "import_id": "IMP-20260519-001"
}
```
