# RH1 Supply Mapper By นพ.นพรัตน์ CIO Sansai Hospital @2026

เว็บแอปแบบ static สำหรับให้โรงพยาบาลอัปโหลดไฟล์ `.xlsx`, `.xls`, หรือ `.csv` แล้ว map กลุ่ม `MS / MD / GS`, เสนอรหัสมาตรฐาน และบอกว่าเป็นรายการใน `RH1 Crisis Database v2.1` หรือไม่

เอกสารส่งต่อทีม Dashboard: [RH1_MAPPING_DASHBOARD_INTEGRATION_GUIDE.md](RH1_MAPPING_DASHBOARD_INTEGRATION_GUIDE.md)

## วิธีใช้

1. เปิด `index.html` ใน browser
2. ลากไฟล์ Excel/CSV เข้ามา หรือคลิกเลือกไฟล์
3. ตรวจผล mapping ในตาราง
4. กด `Export CSV` เพื่อดาวน์โหลดผลลัพธ์

หมายเหตุ: การอ่าน Excel ใช้ SheetJS จาก CDN (`cdn.jsdelivr.net`) ถ้าเครื่องไม่มีอินเทอร์เน็ตจะยังอ่าน CSV ได้ตามปกติ
