# RH1 Mapping Import Integration Guide

เอกสารนี้สำหรับทีมพัฒนา Dashboard หรือ AI agent ที่จะนำ RH1 Mapping App ไปต่อเข้ากับเว็บ `rh1inventory.lpho.go.th` หรือเวปอื่นที่สนใจการพัฒนา code มาตรฐาน เพื่อให้โรงพยาบาลหรือหน่วยงานอัปโหลด Excel/CSV ได้หลาย template แล้วส่งข้อมูลที่ map เป็นรหัสกลาง `MS / MD / GS` เข้า Dashboard โดยตรง

## 1. เป้าหมาย

เพิ่ม workflow ใหม่ให้ Dashboard รับข้อมูล inventory ที่ผ่าน RH1 Mapping App แล้ว โดยไม่ต้องรื้อหน้า Dashboard เดิมทั้งหมด

สิ่งที่ต้องเพิ่ม:

- หน้า Import ใหม่สำหรับ `RH1 Mapping Import`
- Backend API ใหม่สำหรับรับ mapped payload
- Field หรือ crosswalk table สำหรับเก็บรหัสเดิมของ รพ. คู่กับรหัสกลาง
- UI เพิ่มเติมบน Dashboard เฉพาะกรณีต้องการแสดง mapping / RH1 Crisis ให้ชัดเจน

สิ่งที่ไม่จำเป็นต้องทำ:

- ไม่ต้องสร้าง Dashboard ใหม่ทั้งหน้า
- ไม่ต้องยกเลิก template import เดิมทันที
- ไม่ต้องบังคับ รพ. ให้มี `master_code` ตั้งแต่แรก

## 2. Mapper Capability ปัจจุบัน

RH1 Mapping App อ่านไฟล์ `.xlsx`, `.xls`, `.csv` และตรวจ header อัตโนมัติ

รองรับ field หลัก:

| Logical Field | Header ที่รองรับตัวอย่าง | หมายเหตุ |
|---|---|---|
| `dr_name` | `dr_name`, `ชื่อสินค้า`, `รายการ`, `item name`, `product name` | จำเป็น ใช้ map จากชื่อสินค้า |
| `dr_code` | `dr_code`, `local code`, `hospital code`, `รหัสเดิม`, `รหัสสินค้า` | optional แต่แนะนำให้มี เพื่อ trace รหัสเดิมของ รพ. |
| `detail` | `รายละเอียด`, `detail`, `description`, `spec`, `specification`, `ขนาด`, `size` | optional ใช้ช่วยแยก spec/size |
| `unit` | `unit`, `หน่วย`, `หน่วยนับ` | optional |
| `current_balance` | `current_balance`, `balance`, `stock`, `on hand`, `คงเหลือ` | จำเป็นสำหรับ upload |
| `daily_usage_rate` | `daily_usage_rate`, `usage rate`, `avg use`, `อัตราใช้` | optional |
| `status` | `status`, `สถานะ`, `มีในบัญชี` | optional, รับ `1` หรือ `2` |
| `leadtime` | `leadtime`, `lead time`, `ระยะรอคอย` | optional |
| `master_code` | `master_code`, `mapped_code`, `standard_code`, `rh1_code`, `รหัสกลาง`, `รหัสมาตรฐาน` | optional |

กติกา `master_code`:

- ถ้าไม่มี `master_code`: mapper จะ map จาก `dr_name`
- ถ้ามี `master_code` และ format ถูกต้อง: mapper ใช้ code นี้เป็น mapping หลัก และส่ง `mapping_source = "file-master-code"`
- ถ้ามี `master_code` แต่ format ผิด: row เป็น `Low Conf` / error และไม่ upload จนกว่าผู้ใช้แก้
- `dr_code` ต้องเป็นรหัสเดิมของ รพ. ห้ามเอา `MS/MD/GS` มาใส่แทน

กติกา `detail`:

- ถ้ามี `detail` ที่ดูเป็น spec เช่น `L`, `XL`, `16G`, `20x30`, mapper จะสร้าง `mapping_text` จาก `dr_name + detail`
- ถ้า `detail` เป็นค่าทั่วไป เช่น `1`, `0`, `-`, `N/A` mapper จะไม่เอาไปต่อชื่อ
- ถ้า detail ซ้ำกับชื่อสินค้าอยู่แล้ว เช่น ชื่อมี `16G` และ detail เป็น `16G` mapper จะไม่ต่อซ้ำ

ตัวอย่าง `master_code` ที่ถูกต้อง:

```text
MS-0131-25A
MS-0501
MD-02-35172
GS-07-47131600
```

## 3. Frontend Integration

เพิ่มเมนูใหม่ในเว็บเดิม เช่น:

```text
คลังสำรอง > นำเข้าข้อมูล > RH1 Mapping Import
```

นำไฟล์ static ของ mapper ไป serve ในเว็บเดิม:

```text
index.html
app.js
styles.css
```

แนะนำ path:

```text
https://rh1inventory.lpho.go.th/rh1-mapper/import
```

เหตุผลที่ควร host บน domain เดียวกับ Dashboard:

- ใช้ login session เดิมได้
- ลดปัญหา CORS
- ปุ่ม `Upload to Dashboard` เรียก API ได้ด้วย cookie/session เดิม

ค่า endpoint ที่ mapper ใช้:

```text
https://rh1inventory.lpho.go.th/api/import/rh1-mapped-inventory
```

หน้า Dashboard เดิมยังใช้ต่อได้ ถ้า API ใหม่บันทึกลง table/field ที่ Dashboard อ่านอยู่แล้ว แต่ถ้าต้องการให้ผู้ใช้เห็น mapping ชัดขึ้น ให้เพิ่ม:

- คอลัมน์ `Mapped Code`
- filter `MS / MD / GS`
- badge `RH1 Crisis`
- confidence badge เช่น `High Conf`, `Medium Conf`, `Low Conf`

## 4. Backend API Contract

เพิ่ม endpoint:

```http
POST /api/import/rh1-mapped-inventory
Content-Type: application/json
Cookie/Session: ใช้ session login ของ Dashboard
```

Request payload:

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
      "source_dr_code": "3010980",
      "source_dr_name": "Disposable Needle No.27 x 1 Inch",
      "source_dr_detail": null,
      "mapping_text": "Disposable Needle No.27 x 1 Inch",
      "unit": "SET",
      "mapped_code": "MS-0131-27B",
      "mapped_name": "Needle",
      "mapped_prefix": "MS",
      "mapped_group": "0131",
      "spec": "27B",
      "confidence": "High",
      "score": 100,
      "rh1_crisis": true,
      "rh1_id": 51,
      "rh1_source": "auto",
      "scenarios": ["quake", "flood", "war"],
      "incoming_master_code": null,
      "manual_code": null,
      "manual_confirmed": false,
      "mapping_source": "auto",
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

Response แนะนำ:

```json
{
  "ok": true,
  "inserted": 120,
  "updated": 16,
  "rejected": 0,
  "import_id": "IMP-20260519-001"
}
```

กรณี error:

```json
{
  "ok": false,
  "message": "Validation failed",
  "rejected": 3,
  "errors": [
    {
      "source_dr_code": "3010980",
      "mapped_code": "MS-0131-27B",
      "message": "current_balance must be >= 0"
    }
  ]
}
```

## 5. Backend Validation

API ต้องตรวจอย่างน้อย:

- auth/session ต้องผูกกับโรงพยาบาลที่กำลัง import
- `rows[].mapped_code` ต้องไม่ว่าง
- `current_balance` ต้องเป็นตัวเลข `>= 0`
- `daily_usage_rate` ต้องเป็นตัวเลข `>= 0` หรือ `null`
- `leadtime` ต้องเป็นตัวเลข `>= 0` หรือ `null`
- `status` รับเฉพาะ `"1"`, `"2"` หรือ `null`
- ตรวจ duplicate ตาม policy เดิมของ Dashboard
- reject row ที่ `mapped_code` ไม่ถูก format

Format ที่รับ:

```text
MS-xxxx
MS-xxxx-spec
MD-xx-yyyyy
GS-xx-yyyyyyyy
```

ตัวอย่าง:

```text
MS-0131-27B
MS-0501
MD-02-35172
GS-07-47131600
```

## 6. Database / Storage Changes

เพิ่ม field ใน stock table เดิม หรือสร้าง crosswalk/import table แยก แล้ว sync เข้า stock table

Field ที่ควรเก็บ:

```text
hospital_id
source_dr_code
source_dr_name
source_dr_detail
mapping_text
mapped_code
mapped_prefix
mapped_group
mapped_name
spec
confidence
score
rh1_crisis
rh1_id
rh1_source
scenarios
incoming_master_code
manual_code
mapping_source
current_balance
daily_usage_rate
status
leadtime
updated_by
updated_at
```

Key ที่แนะนำ:

```text
hospital_id + mapped_code
```

เหตุผล:

- ใช้ `mapped_code` เป็นรหัสกลางสำหรับ dashboard ระยะยาว
- เก็บ `source_dr_code` เพื่อ trace ย้อนกลับไปยังรหัสเดิมของ รพ.
- ถ้า รพ. เปลี่ยน local code ภายหลัง ยังดูประวัติจาก `mapped_code` และ `source_dr_name` ได้

ถ้าระบบเดิมยังยึด `dr_code` เป็น key:

- ระยะสั้น: import ลง field เดิมต่อได้ แต่ต้องเก็บ `mapped_code` เพิ่ม
- ระยะกลาง: เพิ่ม crosswalk table ระหว่าง `source_dr_code` และ `mapped_code`
- ระยะยาว: Dashboard รวมศูนย์ด้วย `mapped_code`

## 7. Hospital Template Guidance

Template เดิมยังใช้ได้:

```text
dr_code, dr_name, current_balance, daily_usage_rate, status, leadtime
```

Template ใหม่ที่แนะนำ:

```text
dr_code, dr_name, detail, master_code, current_balance, daily_usage_rate, status, leadtime
```

กติกาให้ รพ.:

- `dr_code` = รหัสเดิมของ รพ.
- `dr_name` = ชื่อสินค้าเดิมของ รพ.
- `detail` = รายละเอียด/spec/size ถ้ามี เช่น `L`, `16G`, `20x30`
- `master_code` = รหัสกลาง `MS/MD/GS` เท่านั้น
- ถ้าไม่รู้รหัสกลาง ให้เว้น `master_code` ว่าง
- ห้ามนำ `MS/MD/GS` ไปใส่ใน `dr_code`

## 8. Dashboard Display Recommendation

ถ้าเพิ่ม UI บนหน้า Dashboard เดิม ให้เพิ่มแบบเล็กและไม่กระทบ flow เดิม:

- table column: `Mapped Code`
- table column: `Prefix`
- filter: `MS`, `MD`, `GS`
- filter: `RH1 Crisis`
- badge: `High Conf`, `Medium Conf`, `Low Conf`
- badge: crisis scenario เช่น `quake`, `flood`, `war`, `resp`, `pm25`

หากไม่เพิ่ม UI ตอนแรก Dashboard ยังใช้ข้อมูลยอดคงเหลือและอัตราใช้ต่อได้ ขอเพียง API บันทึก field หลักลงฐานข้อมูลถูกต้อง

## 9. Test Checklist

ทดสอบ import:

- ไฟล์ template เดิมที่ไม่มี `master_code`
- ไฟล์ที่มี `master_code = MS-0501`
- ไฟล์ที่มี `mapped_code = MD-02-35172`
- ไฟล์ที่มี `master_code = GS-07-47131600`
- ไฟล์ที่มี `master_code` ผิด เช่น `MS-13`
- ไฟล์ที่มี `detail = L`, `16G`, `20x30`

ทดสอบ validation:

- ไม่มี `mapped_code`
- `current_balance` เป็นค่าว่าง
- `current_balance` เป็นตัวอักษร
- `daily_usage_rate` ติดลบ
- `status` ไม่ใช่ `1` หรือ `2`
- duplicate `source_dr_code`
- duplicate `mapped_code`

ทดสอบ workflow:

- Low Conf ไม่ถูกส่งขึ้น Dashboard จนกว่าจะยืนยัน
- รายการที่ manual confirmed ส่ง `mapping_source = "manual-code"`
- รายการที่มาจาก master code ในไฟล์ส่ง `mapping_source = "file-master-code"`
- Upload สำเร็จแล้ว Dashboard เห็น `current_balance`, `daily_usage_rate`, `status`, `leadtime` ตรงกับ preview

## 10. Acceptance Criteria

งานถือว่าเสร็จเมื่อ:

- เปิดหน้า RH1 Mapping Import จากเว็บเดิมได้
- ผู้ใช้ upload Excel/CSV ได้
- mapper preview mapping และ validation ได้
- กด `Upload to Dashboard` แล้ว backend รับ payload ได้
- backend บันทึกข้อมูลโดยเก็บทั้งรหัสเดิมและรหัสกลาง
- Dashboard เดิมแสดงยอด inventory ต่อได้
- Export Excel จาก mapper ยังออกได้ 5 sheets เหมือนเดิม

## 11. Crosswalk + master_code Precedence

Mapper now supports backend mapping memory and optional file `master_code` together.

Mapping precedence is fixed:

1. Valid file `master_code` / `mapped_code`
2. Backend crosswalk from `GET /api/mapping-crosswalk?hospital_id=...`
3. Auto-map from item name + detail
4. Low Conf / manual review

Conflict rule:

- If file `master_code` is valid but differs from saved crosswalk, mapper sets `mapping_conflict = "master-code-vs-crosswalk"`.
- Conflict rows are not uploadable until the user chooses file master code, crosswalk code, or manual code.
- Backend must not overwrite crosswalk silently when `mapping_conflict` is present.
- If file `master_code` is invalid but crosswalk exists, mapper falls back to crosswalk and keeps the invalid master code as a warning.

Crosswalk response fields:

```text
source_dr_code
source_dr_name
source_dr_detail
mapping_text
mapped_code
mapped_prefix
mapped_group
spec
rh1_crisis
scenarios
```

Additional payload fields:

```text
crosswalk_loaded
crosswalk_status
crosswalk_code
crosswalk_match_type
mapping_conflict
```
