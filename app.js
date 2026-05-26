const RH1_RAW = [
  [1, "70% Ethyl Alcohol", "ขวด", "MS", "MS-0304-ALC", "MS03", "0304", "Chemicals and stain", "resp"],
  [2, "คลอรีนน้ำ 2500 มล", "แกลลอน", "GS", "GS-07-47131700", "GS-07", "47131700", "Sanitation chemical", "flood"],
  [3, "คลอรีนผง/เม็ด", "กระปุก", "GS", "GS-07-47131700", "GS-07", "47131700", "Sanitation chemical", "resp,flood"],
  [4, "จุลินทรีย์กำจัดลูกน้ำ", "กระปุก", "GS", "GS-07-47131900", "GS-07", "47131900", "Biological larvicide", "flood"],
  [5, "ชุดตรวจสอบคลอรีนอิสระ (อ31)", "ชุด", "MS", "MS-0309-CLR", "MS03", "0309", "Reagent kit", "flood"],
  [6, "ชุดตรวจสอบโคลิฟอร์มแบคทีเรีย (อ11)", "ชุด", "MS", "MS-0309-COL", "MS03", "0309", "Reagent kit", "flood"],
  [7, "ชุดทดสอบ Rapid Influenza test", "ชุด", "MS", "MS-0309-FLU", "MS03", "0309", "Reagent kit", "resp"],
  [8, "ชุดทำความสะอาด V-clean", "ชุด", "GS", "GS-07-47131500", "GS-07", "47131500", "Sanitation kit", "flood"],
  [9, "ชุด Sanitation tool kit", "ชุด", "GS", "GS-07-47131500", "GS-07", "47131500", "Sanitation kit", "flood"],
  [10, "ทรายเทมีฟอส", "ซอง", "GS", "GS-07-47131900", "GS-07", "47131900", "Larvicide chemical", "flood"],
  [11, "ปูนขาว", "ถุง", "GS", "GS-07-47131700", "GS-07", "47131700", "Lime disinfectant", "flood"],
  [12, "ผลิตภัณฑ์ทากันยุง Picaridin", "ขวด", "GS", "GS-07-51281700", "GS-07", "51281700", "Insect repellent", "flood"],
  [14, "ผลิตภัณฑ์ทากันยุง DEET", "ซอง", "GS", "GS-07-51281700", "GS-07", "51281700", "Insect repellent", "flood"],
  [16, "มุ้งธรรมดา", "หลัง", "GS", "GS-15-49221700", "GS-15", "49221700", "Field/camp supply", "flood"],
  [17, "ไม้กดลิ้น Sterile ใช้แล้วทิ้ง", "ชิ้น", "MS", "MS-0308-TWS", "MS03", "0308", "Microscopy/Swab", "resp,flood"],
  [18, "Nasopharyngeal Swab Non-Calcium Alginate", "ชิ้น", "MS", "MS-0308-NSA", "MS03", "0308", "Microscopy/Swab", "resp"],
  [19, "Throat swab Rayon tipped", "ชิ้น", "MS", "MS-0308-TSR", "MS03", "0308", "Microscopy/Swab", "resp"],
  [20, "สเปรย์ฉีดยุง แอโรโซล", "กระป๋อง", "GS", "GS-07-47131900", "GS-07", "47131900", "Insecticide aerosol", "flood"],
  [21, "สารเคมีซีต้าไซเปอร์เมทริน", "ลิตร", "GS", "GS-07-47131900", "GS-07", "47131900", "Pesticide", "flood"],
  [22, "สารเคมีซีโอไลท์", "ซอง", "GS", "GS-07-47131700", "GS-07", "47131700", "Water treatment", "flood"],
  [23, "สารเคมีเดลต้าเมทริน", "ลิตร", "GS", "GS-07-47131900", "GS-07", "47131900", "Pesticide", "flood"],
  [24, "สารเคมีไตรคลอฟอน", "kg", "GS", "GS-07-47131900", "GS-07", "47131900", "Pesticide", "flood"],
  [25, "สารส้ม", "kg", "GS", "GS-07-47131700", "GS-07", "47131700", "Water coagulant", "flood"],
  [26, "Alcohol gel 70%", "ขวด", "MS", "MS-0304-GEL", "MS03", "0304", "Chemicals and stain", "resp"],
  [27, "EM ball", "ลูก", "GS", "GS-07-47131900", "GS-07", "47131900", "Biological water treatment", "flood"],
  [28, "Glutaraldehyde", "แกลลอน", "MS", "MS-0304-GLU", "MS03", "0304", "Chemicals and stain", "resp"],
  [29, "Sodium Hypochlorite", "ซอง", "MS", "MS-0304-NHC", "MS03", "0304", "Chemicals and stain", "resp,flood"],
  [31, "Transport medium Cary Blair", "หลอด", "MS", "MS-0307-CBM", "MS03", "0307", "Media", "resp,flood"],
  [32, "Universal Transport Media (UTM)", "ชิ้น", "MS", "MS-0307-UTM", "MS03", "0307", "Media", "resp,flood"],
  [33, "Viral Transport Media (VTM)", "ชิ้น", "MS", "MS-0307-VTM", "MS03", "0307", "Media", "resp,flood"],
  [34, "กล่อง/ถังทิ้งเข็ม", "ชิ้น", "MS", "MS-0501-SC", "MS05", "0501", "Container & closure", "war"],
  [35, "ขวดยา (30ml, 60ml, 180ml)", "ขวด", "MS", "MS-0501-AB", "MS05", "0501", "Container & closure", "war"],
  [36, "ตลับแบ่งบรรจุยา", "ชิ้น", "MS", "MS-0501-DT", "MS05", "0501", "Container & closure", "war"],
  [37, "ถุงมือศัลยกรรม", "กล่อง", "MS", "MS-0124-LF4S", "MS01", "0124", "Glove", "war"],
  [38, "ถุงมือ Sterile ทุกขนาด", "กล่อง", "MS", "MS-0124-LF3S", "MS01", "0124", "Glove", "war"],
  [39, "เฝือกสำเร็จรูป", "โหล", "MS", "MS-0107-C48", "MS01", "0107", "Cast", "war"],
  [40, "พลาสเตอร์ (transpore, micropore)", "ม้วน", "MS", "MS-0132-MPW", "MS01", "0132", "Plaster", "war"],
  [41, "Arm sling", "ชุด", "MS", "MS-0139-SNA", "MS01", "0139", "Sling", "war"],
  [42, "Cotton roll", "ม้วน", "MS", "MS-0103-C7N", "MS01", "0103", "Bandages", "war"],
  [43, "Elastic bandage", "โหล", "MS", "MS-0103-E7N", "MS01", "0103", "Bandages", "war"],
  [44, "Endotracheal tube", "เส้น", "MS", "MS-0154-IC", "MS01", "0154", "Tube endotracheal", "war"],
  [45, "Feeding tube", "เส้น", "MS", "MS-0155-88B", "MS01", "0155", "Tube feeding", "war"],
  [46, "Gauze", "ห่อ", "MS", "MS-0122-B8N", "MS01", "0122", "Gauze", "war"],
  [47, "Injection Plug", "กล่อง", "MS", "MS-0112-NFS", "MS01", "0112", "Connector", "war"],
  [48, "IV drip set", "set", "MS", "MS-0128-SFN", "MS01", "0128", "IV set", "war"],
  [49, "Medicut (IV cannula)", "กล่อง", "MS", "MS-0108-MCI", "MS01", "0108", "Catheter", "war"],
  [50, "Microdrip", "set", "MS", "MS-0128-MFN", "MS01", "0128", "IV set", "war"],
  [51, "Needle", "กล่อง", "MS", "MS-0131-22B", "MS01", "0131", "Needle", "quake,flood,war"],
  [52, "NG tube", "เส้น", "MS", "MS-0156-G14", "MS01", "0156", "Tube stomach", "war"],
  [53, "Oral airway", "อัน", "MS", "MS-0136-OPA", "MS01", "0136", "Respiratory", "war"],
  [54, "Splint roll", "ม้วน", "MS", "MS-0107-F45", "MS01", "0107", "Cast", "war"],
  [55, "Suction set", "set", "MS", "MS-0145-SAP", "MS01", "0145", "Suction bag", "war"],
  [56, "Suction tube", "เส้น", "MS", "MS-0108-STA", "MS01", "0108", "Catheter", "war"],
  [57, "Syringe Insulin", "กล่อง", "MS", "MS-0148-1TN", "MS01", "0148", "Syringe", "war"],
  [58, "Three-Way Stopcock", "กล่อง", "MS", "MS-0144-3WS", "MS01", "0144", "Stopcock", "war"],
  [59, "Urine Bag 2000ml", "ถุง", "MS", "MS-0159-A2S", "MS01", "0159", "Urine bag", "war"],
  [60, "Urine Catheter", "เส้น", "MS", "MS-0108-FCW", "MS01", "0108", "Catheter", "war"],
  [61, "ชุดตรวจ Dengue NS1 rapid test", "ชุด", "MS", "MS-0309-DGN", "MS03", "0309", "Reagent kit", "flood"],
  [62, "ชุดทดสอบ Leptospirosis", "ชุด", "MS", "MS-0309-LEP", "MS03", "0309", "Reagent kit", "flood"],
  [63, "ชุดทดสอบ Melioid", "ชุด", "MS", "MS-0309-MEL", "MS03", "0309", "Reagent kit", "flood"],
  [64, "ชุดทดสอบ Scrub typhus", "ชุด", "MS", "MS-0309-SCR", "MS03", "0309", "Reagent kit", "flood"],
  [65, "Nasopharyngeal Swab (flood set)", "ชิ้น", "MS", "MS-0308-NSA", "MS03", "0308", "Microscopy/Swab", "flood"],
  [66, "Throat swab Rayon (flood set)", "ชิ้น", "MS", "MS-0308-TSR", "MS03", "0308", "Microscopy/Swab", "flood"],
  [67, "ซองซิปใส่ยาทุกขนาด", "kg", "MS", "MS-0503-ZPB", "MS05", "0503", "Pharmacy supplies", "war"],
  [68, "ถุงซิปสีชา ทุกขนาด", "kg", "MS", "MS-0503-BZB", "MS05", "0503", "Pharmacy supplies", "war"],
  [69, "ถุงหูหิ้วพลาสติก ทุกขนาด", "kg", "MS", "MS-0503-HGB", "MS05", "0503", "Pharmacy supplies", "war"],
  [70, "เครื่องช่วยหายใจ Ventilator", "เครื่อง", "MD", "MD-02-VENT", "MD-02", "02", "Anaesthetic & Respiratory", "pm25"],
  [71, "ชุดทำแผล", "ชุด", "MS", "MS-0118-BL", "MS01", "0118", "Dressing", "pm25,flood,war"],
  [72, "High flow nasal cannula (HFnc)", "เครื่อง", "MD", "MD-02-HFNC", "MD-02", "02", "Anaesthetic & Respiratory", "pm25"],
  [74, "หลอดเก็บเลือด Clot blood", "หลอด", "MS", "MS-0303-CBC", "MS03", "0303", "Blood bank", "quake,flood"],
  [75, "หลอดเลือดสุญญากาศ EDTA", "หลอด", "MS", "MS-0303-EDT", "MS03", "0303", "Blood bank", "quake"],
  [76, "Syringe (3,5,10,20,50ml)", "ชิ้น", "MS", "MS-0148-5LW", "MS01", "0148", "Syringe", "quake,flood,war"],
  [78, "100% Oxygen with set", "ถัง", "MD", "MD-02-35239", "MD-02", "02", "Anaesthetic & Respiratory", "quake"],
  [79, "กรวย/อุปกรณ์สะท้อนแสง", "อัน", "GS", "GS-18-46181500", "GS-18", "46181500", "Traffic control", "quake"],
  [80, "กระเป๋า/กระติกเย็น (วัคซีน)", "ใบ", "GS", "GS-16-41122500", "GS-16", "41122500", "Survey & cold chain", "resp"],
  [81, "กระเป๋าปฐมพยาบาล First Aid Kit", "ชุด", "MS", "MS-0118-BL", "MS01", "0118", "Dressing", "quake"],
  [82, "AED เครื่องกระตุกหัวใจอัตโนมัติ", "เครื่อง", "MD", "MD-04-42845", "MD-04", "04", "Electro-mechanical", "quake,flood"],
  [83, "เครื่องวัดความดัน Auto BP Monitor", "ชุด", "MD", "MD-04-34462", "MD-04", "04", "Electro-mechanical", "quake"],
  [84, "เครื่องวัดความดัน+Stethoscope", "ชุด", "MD", "MD-04-34462", "MD-04", "04", "Electro-mechanical", "quake"],
  [85, "Pulse Oximeter", "เครื่อง", "MD", "MD-04-17943", "MD-04", "04", "Electro-mechanical", "quake"],
  [86, "ถังออกซิเจนพกพา Portable O2", "ชุด", "MD", "MD-02-35239", "MD-02", "02", "Anaesthetic & Respiratory", "quake"],
  [87, "ถุงขยะติดเชื้อสีแดง", "kg", "MS", "MS-0502-RWB", "MS05", "0502", "Pharmacy chemical agent", "resp,flood,war"],
  [88, "ถุงดำใส่ขยะทั่วไป", "kg", "GS", "GS-07-47131600", "GS-07", "47131600", "Sanitation/waste", "flood,war"],
  [89, "ถุงมือยางธรรมชาติ (งานบ้าน)", "คู่", "GS", "GS-10-53102700", "GS-10", "53102700", "Household rubber glove", "flood"],
  [90, "ถุงยังชีพ", "ถุง", "GS", "GS-15-49221700", "GS-15", "49221700", "Field & camp", "flood"],
  [91, "Thermometer เทอร์โมมิเตอร์", "อัน", "MS", "MS-0149-DTM", "MS01", "0149", "Thermometer", "quake"],
  [92, "นกหวีด", "ตัว", "GS", "GS-15-49221700", "GS-15", "49221700", "Field & camp", "quake"],
  [93, "แปรงถูพื้นด้ามยาว", "ด้าม", "GS", "GS-07-47131600", "GS-07", "47131600", "Sanitation supply", "flood"],
  [94, "ไฟฉาย", "กระบอก", "GS", "GS-02-39111700", "GS-02", "39111700", "Electrical supply", "quake"],
  [95, "ไฟฉาย Penlight", "กระบอก", "GS", "GS-02-39111700", "GS-02", "39111700", "Electrical supply", "quake"],
  [97, "มุ้งสู้ฝุ่น", "หลัง", "GS", "GS-15-49221700", "GS-15", "49221700", "Field & camp", "pm25"],
  [98, "ส้วมกระดาษ portable toilet", "ชิ้น", "GS", "GS-07-47170500", "GS-07", "47170500", "Sanitation/waste", "flood"],
  [99, "เสื้อชูชีพ", "ตัว", "GS", "GS-14-46181500", "GS-14", "46181500", "Fire fighting & safety", "flood"],
  [100, "หมวกกันกระแทก+ไฟส่องสว่าง", "อัน", "GS", "GS-14-46181700", "GS-14", "46181700", "Fire fighting & safety", "quake"],
  [102, "เก้าอี้ยกผู้ป่วย Stair Chair", "ตัว", "MD", "MD-05-CHRS", "MD-05", "05", "Hospital hardware", "quake"],
  [103, "เปลล้อเลื่อน Wheeled Stretcher", "ชุด", "MD", "MD-05-STRC", "MD-05", "05", "Hospital hardware", "quake"],
  [104, "เฝือกคอแข็ง Hard Cervical Collar", "อัน", "MS", "MS-0109-HM", "MS01", "0109", "Collar", "quake"],
  [105, "เฝือกดามแขน-ขา/สุญญากาศ", "อัน", "MS", "MS-0140-SAV", "MS01", "0140", "Splint", "quake"],
  [106, "อุปกรณ์ดามหลัง KED", "ชุด", "MS", "MS-0146-KED", "MS01", "0146", "Support", "quake"],
  [107, "อุปกรณ์รัดกระดูกเชิงกราน Pelvic Binder", "อัน", "MS", "MS-0146-PLV", "MS01", "0146", "Support", "quake"],
  [108, "กระบังหน้าเลนส์ใส Face shield", "ชิ้น", "MS", "MS-0137-FSC", "MS01", "0137", "Shield/Goggles", "quake,resp"],
  [109, "ชุดป้องกันร่างกาย Coverall", "คู่", "MS", "MS-0133-CVN", "MS01", "0133", "Protective apron/Gown", "quake,resp,flood"],
  [110, "ถุงคลุมศีรษะ Hood", "ชิ้น", "MS", "MS-0106-BNU", "MS01", "0106", "Cap/Hood", "quake,resp"],
  [111, "ถุงมือไนไตร ยาว 12 นิ้ว", "คู่", "MS", "MS-0124-NF4N", "MS01", "0124", "Glove", "quake,resp,flood"],
  [112, "ถุงมือยางธรรมชาติ ใช้แล้วทิ้ง", "คู่", "MS", "MS-0124-NF3N", "MS01", "0124", "Glove", "quake,resp,flood,war"],
  [113, "ถุงสวมขา Leg cover", "ชิ้น", "MS", "MS-0106-BNM", "MS01", "0106", "Cap/Hood", "quake,resp,flood"],
  [114, "พลาสติกหุ้มรองเท้า Shoe Cover", "ชิ้น", "MS", "MS-0106-SCA", "MS01", "0106", "Cap/Hood", "quake,resp,flood"],
  [115, "รองเท้าบูทยาว", "คู่", "GS", "GS-14-46181600", "GS-14", "46181600", "Fire fighting & safety", "quake,resp,flood"],
  [116, "รองเท้าบูทสั้น", "คู่", "GS", "GS-14-46181600", "GS-14", "46181600", "Fire fighting & safety", "quake,flood"],
  [117, "แว่นครอบตา Goggles", "ชิ้น", "MS", "MS-0137-GGS", "MS01", "0137", "Shield/Goggles", "quake,resp"],
  [118, "เสื้อกาวน์กันน้ำ Level 1", "ชุด", "MS", "MS-0133-GWL1", "MS01", "0133", "Protective apron/Gown", "quake,resp,war"],
  [119, "เสื้อกาวน์กันน้ำ Level 3 (Medical)", "ชุด", "MS", "MS-0133-GWL3", "MS01", "0133", "Protective apron/Gown", "quake,resp"],
  [120, "หน้ากากชั้นกรองคาร์บอน", "ชิ้น", "MS", "MS-0130-CF", "MS01", "0130", "Mask", "pm25"],
  [121, "หน้ากาก FFP2 มีวาล์ว", "ชิ้น", "MS", "MS-0130-F2V", "MS01", "0130", "Mask", "pm25"],
  [122, "หน้ากากอนามัย surgical (เด็ก)", "ชิ้น", "MS", "MS-0130-SC", "MS01", "0130", "Mask", "pm25,quake,resp,flood"],
  [123, "หน้ากากอนามัย surgical (ผู้ใหญ่)", "ชิ้น", "MS", "MS-0130-SA", "MS01", "0130", "Mask", "pm25,quake,resp,flood"],
  [124, "หน้ากาก N95 มีวาล์ว", "ชิ้น", "MS", "MS-0130-NV", "MS01", "0130", "Mask", "pm25,resp"],
  [125, "หน้ากาก N95 ไม่มีวาล์ว", "ชิ้น", "MS", "MS-0130-NN", "MS01", "0130", "Mask", "pm25,quake,resp,flood"],
  [126, "หมวกคลุมผม ใช้แล้วทิ้ง", "ชิ้น", "MS", "MS-0106-BNU", "MS01", "0106", "Cap/Hood", "quake,resp"],
  [127, "เอี๊ยมพลาสติกใส Apron", "ชิ้น", "MS", "MS-0133-APL", "MS01", "0133", "Protective apron/Gown", "quake,resp"],
];

const RH1_DB = RH1_RAW.map(r => ({
  id: r[0],
  name: r[1],
  unit: r[2],
  prefix: r[3],
  code: r[4],
  type: r[5],
  groupCode: r[6],
  group: r[7],
  scenarios: String(r[8] || "").split(",").filter(Boolean),
}));

const STSG = {
  "0101": [
    "MS01",
    "Adhesion barrier",
    "เยื่อกั้นการยึดเกาะ"
  ],
  "0102": [
    "MS01",
    "Bag",
    "ถุงทางการแพทย์"
  ],
  "0103": [
    "MS01",
    "Bandages",
    "ผ้าพันแผล/ผ้าก๊อซพัน"
  ],
  "0104": [
    "MS01",
    "Bone cement",
    "ซีเมนต์กระดูก"
  ],
  "0105": [
    "MS01",
    "Breathing circuit",
    "วงจรการหายใจ"
  ],
  "0106": [
    "MS01",
    "Cap",
    "หมวก/หมวกผ่าตัด"
  ],
  "0107": [
    "MS01",
    "Cast",
    "เฝือก/Cast"
  ],
  "0108": [
    "MS01",
    "Catheter",
    "สายสวน"
  ],
  "0109": [
    "MS01",
    "Collar",
    "คอลลาร์/Collar"
  ],
  "0110": [
    "MS01",
    "Colostomy bag",
    "ถุงรองรับลำไส้"
  ],
  "0111": [
    "MS01",
    "Condom",
    "ถุงยางอนามัย"
  ],
  "0112": [
    "MS01",
    "Connector",
    "ข้อต่อสาย"
  ],
  "0113": [
    "MS01",
    "Cord tape",
    "เทปรัดสาย"
  ],
  "0114": [
    "MS01",
    "Cotton",
    "สำลี"
  ],
  "0115": [
    "MS01",
    "Cuff",
    "Cuff วัดความดัน"
  ],
  "0116": [
    "MS01",
    "Drain",
    "ท่อระบาย"
  ],
  "0117": [
    "MS01",
    "Drape",
    "ผ้าคลุมผ่าตัด"
  ],
  "0118": [
    "MS01",
    "Dressing",
    "วัสดุปิดแผล"
  ],
  "0119": [
    "MS01",
    "Electric cautery",
    "อุปกรณ์จี้ไฟฟ้า"
  ],
  "0120": [
    "MS01",
    "Electrodes",
    "อิเล็กโทรด"
  ],
  "0121": [
    "MS01",
    "Extension tube",
    "สายต่อ Extension"
  ],
  "0122": [
    "MS01",
    "Gauze",
    "ผ้าก๊อซ"
  ],
  "0123": [
    "MS01",
    "Gel",
    "เจลทางการแพทย์"
  ],
  "0124": [
    "MS01",
    "Glove",
    "ถุงมือ"
  ],
  "0125": [
    "MS01",
    "Hemostat",
    "วัสดุห้ามเลือด"
  ],
  "0126": [
    "MS01",
    "Heparin lock",
    "Heparin lock"
  ],
  "0127": [
    "MS01",
    "Implant/Prosthesis",
    "อวัยวะเทียม/Implant"
  ],
  "0128": [
    "MS01",
    "IV set",
    "ชุดให้สารน้ำ IV"
  ],
  "0129": [
    "MS01",
    "Knife/Blade",
    "มีด/ใบมีด"
  ],
  "0130": [
    "MS01",
    "Mask",
    "หน้ากาก"
  ],
  "0131": [
    "MS01",
    "Needle",
    "เข็ม"
  ],
  "0132": [
    "MS01",
    "Plaster",
    "พลาสเตอร์"
  ],
  "0133": [
    "MS01",
    "Protective apron/Gown",
    "เสื้อกาวน์/ผ้ากันเปื้อน"
  ],
  "0134": [
    "MS01",
    "Recording papers",
    "กระดาษบันทึกสัญญาณ"
  ],
  "0135": [
    "MS01",
    "Rehability",
    "วัสดุฟื้นฟูสมรรถภาพ"
  ],
  "0136": [
    "MS01",
    "Respiratory",
    "วัสดุระบบหายใจ"
  ],
  "0137": [
    "MS01",
    "Shield/Goggles",
    "กระจังหน้า/แว่นครอบตา"
  ],
  "0138": [
    "MS01",
    "Skin stapler",
    "ที่ลวดเย็บผิวหนัง"
  ],
  "0139": [
    "MS01",
    "Sling",
    "ผ้าคล้องแขน"
  ],
  "0140": [
    "MS01",
    "Splint",
    "เฝือกชั่วคราว"
  ],
  "0141": [
    "MS01",
    "Sterilization indicator",
    "ตัวบ่งชี้การฆ่าเชื้อ"
  ],
  "0142": [
    "MS01",
    "Sterilizing gas",
    "แก๊สฆ่าเชื้อ"
  ],
  "0143": [
    "MS01",
    "Stoma adhesive",
    "กาว/แผ่นติด Stoma"
  ],
  "0144": [
    "MS01",
    "Stopcock",
    "Stopcock"
  ],
  "0145": [
    "MS01",
    "Suction bag",
    "ถุงดูดเสมหะ"
  ],
  "0146": [
    "MS01",
    "Support",
    "อุปกรณ์พยุงร่างกาย"
  ],
  "0147": [
    "MS01",
    "Suture",
    "ไหมเย็บแผล"
  ],
  "0148": [
    "MS01",
    "Syringe",
    "กระบอกฉีดยา"
  ],
  "0149": [
    "MS01",
    "Thermometer",
    "เทอร์โมมิเตอร์"
  ],
  "0150": [
    "MS01",
    "Tissue support",
    "วัสดุรองเนื้อเยื่อ"
  ],
  "0151": [
    "MS01",
    "Traction",
    "อุปกรณ์ดึงถ่วง"
  ],
  "0152": [
    "MS01",
    "Tube, biliary",
    "สาย Biliary"
  ],
  "0153": [
    "MS01",
    "Tube, duodenal",
    "สาย Duodenal"
  ],
  "0154": [
    "MS01",
    "Tube, endotracheal",
    "ท่อช่วยหายใจ"
  ],
  "0155": [
    "MS01",
    "Tube, feeding",
    "สายให้อาหาร"
  ],
  "0156": [
    "MS01",
    "Tube, stomach",
    "สายกระเพาะ"
  ],
  "0157": [
    "MS01",
    "Tube, tracheostomy",
    "ท่อเจาะคอ"
  ],
  "0158": [
    "MS01",
    "Undercast padding",
    "วัสดุรองเฝือก"
  ],
  "0159": [
    "MS01",
    "Urine bag",
    "ถุงปัสสาวะ"
  ],
  "0160": [
    "MS01",
    "Urostomy bag",
    "ถุง Urostomy"
  ],
  "0201": [
    "MS02",
    "Bur",
    "หัวกรอฟัน"
  ],
  "0202": [
    "MS02",
    "Endodontics",
    "วัสดุรักษารากฟัน"
  ],
  "0203": [
    "MS02",
    "Examination",
    "วัสดุตรวจช่องปาก"
  ],
  "0204": [
    "MS02",
    "General dental",
    "วัสดุทันตกรรมทั่วไป"
  ],
  "0205": [
    "MS02",
    "Implant (dental)",
    "รากฟันเทียม"
  ],
  "0206": [
    "MS02",
    "Operative",
    "วัสดุอุดฟัน"
  ],
  "0207": [
    "MS02",
    "Orthodontics",
    "วัสดุจัดฟัน"
  ],
  "0208": [
    "MS02",
    "Pedodontics",
    "ทันตกรรมเด็ก"
  ],
  "0209": [
    "MS02",
    "Periodontics",
    "วัสดุปริทันต์"
  ],
  "0210": [
    "MS02",
    "Prevention",
    "วัสดุป้องกันฟัน"
  ],
  "0211": [
    "MS02",
    "Prosthodontics",
    "วัสดุฟันปลอม"
  ],
  "0212": [
    "MS02",
    "Oral surgery",
    "วัสดุผ่าตัดช่องปาก"
  ],
  "0301": [
    "MS03",
    "Antiserum",
    "แอนติซีรั่ม"
  ],
  "0302": [
    "MS03",
    "Biochemistry test",
    "น้ำยาชีวเคมี"
  ],
  "0303": [
    "MS03",
    "Blood bank",
    "วัสดุธนาคารเลือด"
  ],
  "0304": [
    "MS03",
    "Chemicals and stain",
    "สารเคมีและสีย้อม"
  ],
  "0305": [
    "MS03",
    "Hematology reagent",
    "น้ำยาโลหิตวิทยา"
  ],
  "0306": [
    "MS03",
    "Immunology and serology",
    "น้ำยาภูมิคุ้มกัน"
  ],
  "0307": [
    "MS03",
    "Media",
    "อาหารเลี้ยงเชื้อ"
  ],
  "0308": [
    "MS03",
    "Microscopy/Swab",
    "วัสดุกล้องจุลทรรศน์/Swab"
  ],
  "0309": [
    "MS03",
    "Reagent kit",
    "ชุดน้ำยาสำเร็จรูป"
  ],
  "0310": [
    "MS03",
    "Sensitive disk",
    "แผ่นทดสอบความไว"
  ],
  "0311": [
    "MS03",
    "Tests and reagents",
    "น้ำยาทดสอบ"
  ],
  "0401": [
    "MS04",
    "Diagnostic agent",
    "สารทึบรังสี"
  ],
  "0402": [
    "MS04",
    "Film X-ray",
    "ฟิล์มเอกซเรย์"
  ],
  "0403": [
    "MS04",
    "Imaging chemicals",
    "น้ำยาล้างฟิล์ม"
  ],
  "0404": [
    "MS04",
    "Imaging supply",
    "วัสดุถ่ายภาพรังสี"
  ],
  "0501": [
    "MS05",
    "Container & closure",
    "ภาชนะบรรจุและจุกปิด"
  ],
  "0502": [
    "MS05",
    "Pharmacy chemical agent",
    "สารเคมีเภสัชกรรม"
  ],
  "0503": [
    "MS05",
    "Pharmacy supplies",
    "วัสดุเภสัชกรรม"
  ]
};

const SPEC_HINTS = {
  "0101": "①anatomical site · ②form · ③sterility -> MS-0101-ASS = Abdominal, Sheet, Sterile",
  "0102": "①bag type · ②capacity · ③material -> MS-0102-I5P = IV fluid bag 500ml PVC",
  "0103": "①type · ②width(cm) · ③sterility -> MS-0103-C7N = Crepe 7.5cm Non-sterile",
  "0104": "①type · ②pack size · ③sterility -> MS-0104-ASS = Antibiotic-loaded 20g Sterile",
  "0105": "①type · ②circuit type · ③HME filter -> MS-0105-ACW = Adult Coaxial With-HME",
  "0106": "①type · ②material · ③size -> MS-0106-BNU = Bouffant Non-woven Universal",
  "0107": "①material · ②width(inch) · ③length(yard) -> MS-0107-F45 = Fiberglass 4in 5yd",
  "0108": "①type · ②Fr size · ③balloon -> MS-0108-FCW = Foley Fr20 With-balloon",
  "0109": "①type · ②size -> MS-0109-SM = Soft Medium",
  "0110": "①system · ②type · ③opening -> MS-0110-1CD = 1-piece Colostomy Closed",
  "0111": "①type · ②material · ③lubrication -> MS-0111-MLL = Male Latex Lubricated",
  "0112": "①type · ②gender · ③sterility -> MS-0112-LMS = Luer-lock Male Sterile",
  "0113": "①width · ②material -> MS-0113-2C = 2cm Cotton",
  "0114": "①form · ②sterility · ③qty/pack -> MS-0114-BNA = Ball Non-sterile 100pc",
  "0115": "①patient type · ②cuff type · ③connector -> MS-0115-ASD = Adult Standard Dual-tube",
  "0116": "①type · ②Fr size · ③suction -> MS-0116-JJA = JP-drain Fr10 Active",
  "0117": "①type · ②material · ③sterility -> MS-0117-USS = Universal SMS Sterile",
  "0118": "①type · ②size -> MS-0118-HL = Hydrocolloid Large",
  "0119": "①electrode type · ②tip type · ③length -> MS-0119-MBT = Monopolar Blade Standard",
  "0120": "①application · ②patient · ③adhesion -> MS-0120-EAD = ECG Adult Disposable",
  "0121": "①length(cm) · ②stopcock · ③material -> MS-0121-CWP = 30cm With-stopcock PVC",
  "0122": "①size · ②ply · ③sterility -> MS-0122-B8N = 4x4in 8ply Non-sterile",
  "0123": "①type · ②pack · ③sterility -> MS-0123-USN = Ultrasound Sachet Non-sterile",
  "0124": "①material · ②powder · ③size · ④sterility -> MS-0124-NF3N = Nitrile PF M Non-sterile",
  "0125": "①type · ②form · ③sterility -> MS-0125-GPS = Gelatin Pad Sterile",
  "0126": "①volume(ml) · ②concentration · ③sterility -> MS-0126-1AS = 1ml 10U/ml Sterile",
  "0127": "①implant type · ②material · ③stock type -> MS-0127-STC = Screw Titanium Consignment",
  "0128": "①type · ②filter · ③needle -> MS-0128-SFN = Standard With-filter Needleless",
  "0129": "①blade no. · ②handle · ③sterility -> MS-0129-AWS = No.10 With-handle Sterile",
  "0130": "①type · ②size -> MS-0130-NA = N95 Adult",
  "0131": "①gauge · ②length -> MS-0131-22B = 22G 1.0in",
  "0132": "①type · ②width(cm) · ③sterility -> MS-0132-E5N = Elastic 5cm Non-sterile",
  "0133": "①type · ②material · ③size -> MS-0133-SNN = Surgical Non-woven Standard",
  "0134": "①equipment · ②size -> MS-0134-EA = ECG 63mmx30m",
  "0135": "①type · ②size/resistance -> MS-0135-WM = Walking-aid Medium",
  "0136": "①type · ②patient · ③flow rate -> MS-0136-NAL = Nasal-cannula Adult Low-flow",
  "0137": "①type · ②material -> MS-0137-EP = Eye-shield Polycarbonate",
  "0138": "①staples/device · ②type · ③sterility -> MS-0138-DDS = 25-staples Disposable Sterile",
  "0139": "①type · ②size -> MS-0139-AM = Arm-sling Medium",
  "0140": "①type · ②material · ③size -> MS-0140-VF3 = Volar Fiberglass M",
  "0141": "①type · ②sterilization method · ③class -> MS-0141-CSC = Chemical Steam Class-1",
  "0142": "①agent · ②form -> MS-0142-EC = EO-gas Cartridge",
  "0143": "①type · ②size · ③stoma type -> MS-0143-W5C = Wafer 57mm Colostomy",
  "0144": "①way · ②material · ③sterility -> MS-0144-3CS = 3-way PC Sterile",
  "0145": "①capacity · ②type · ③connector -> MS-0145-5DS = 500ml Disposable Standard",
  "0146": "①type · ②size · ③rigidity -> MS-0146-K3S = Knee M Soft",
  "0147": "①material · ②size · ③needle -> MS-0147-V4R = Vicryl 3-0 Round",
  "0148": "①capacity · ②tip · ③needle -> MS-0148-5LW = 5ml Luer-lock With-needle",
  "0149": "①type · ②disposable -> MS-0149-TD = Tympanic Disposable",
  "0150": "①type · ②material · ③sterility -> MS-0150-MPS = Mesh Polypropylene Sterile",
  "0151": "①type · ②component -> MS-0151-SS = Skin-traction Complete-set",
  "0152": "①type · ②Fr size · ③sterility -> MS-0152-T8S = T-tube Fr8 Sterile",
  "0153": "①Fr size · ②weighted · ③sterility -> MS-0153-AWS = Fr10 Weighted Sterile",
  "0154": "①ID size(mm) · ②cuff -> MS-0154-IC = 7.0mm Cuffed",
  "0155": "①Fr size · ②length(cm) · ③tip -> MS-0155-88B = Fr8 90cm Blunt",
  "0156": "①Fr size · ②type · ③sterility -> MS-0156-CLS = Fr14 Levin Sterile",
  "0157": "①size(ID mm) · ②cuff · ③inner cannula -> MS-0157-7CW = 7.0mm Cuffed With-inner",
  "0158": "①material · ②width(inch) -> MS-0158-C3 = Cotton 3in",
  "0159": "①capacity · ②drainage · ③anti-reflux -> MS-0159-ACW = 2000ml Closed With-anti-reflux",
  "0160": "①system · ②flange(mm) · ③tap -> MS-0160-15W = 1-piece 57mm With-tap",
  "0201": "①type · ②shank · ③grit -> MS-0201-RFF = Round FG Fine",
  "0202": "①item type · ②ISO size -> MS-0202-F25 = File ISO#25",
  "0203": "①item type · ②sterility -> MS-0203-MS = Mirror Sterile",
  "0204": "①item type · ②size -> MS-0204-GM = Glove Medium",
  "0205": "①diameter(mm) · ②length(mm) · ③surface -> MS-0205-55S = 4.1mm 12mm Sandblasted",
  "0206": "①material · ②shade/type -> MS-0206-C2 = Composite A2",
  "0207": "①item type · ②material -> MS-0207-BN = Bracket NiTi",
  "0208": "①item type · ②tooth · ③size -> MS-0208-CMP = Strip-crown Molar Primary",
  "0209": "①item type · ②type detail -> MS-0209-CG = Curette Gracey",
  "0210": "①item type · ②flavor/type -> MS-0210-FM = Fluoride-varnish Mint",
  "0211": "①item type · ②type -> MS-0211-IL = Impression Alginate",
  "0212": "①item type · ②material · ③size -> MS-0212-SVK = Suture Vicryl 3-0",
  "0301": "①specificity · ②volume -> MS-0301-A5 = ABO 5ml",
  "0302": "①panel · ②tests/kit -> MS-0302-LA = Liver-panel 100-tests",
  "0303": "①item type · ②volume -> MS-0303-B4 = Blood-bag 450ml",
  "0304": "①stain type · ②volume -> MS-0304-GA = Gram-stain 100ml",
  "0305": "①test type · ②tests/kit -> MS-0305-CA = CBC 100-tests",
  "0306": "①test type · ②tests/kit -> MS-0306-H5 = HIV 50-tests",
  "0307": "①type · ②form -> MS-0307-BP = Blood-agar Plate",
  "0308": "①item type · ②size · ③qty/box -> MS-0308-SAA = Slide 25x75mm 100pc",
  "0309": "①test type · ②tests/kit -> MS-0309-CA = CBC 100-tests",
  "0310": "①antibiotic · ②disk strength · ③disks/cartridge -> MS-0310-AS5 = Ampicillin Standard 50-disks",
  "0311": "①test type · ②tests/kit -> MS-0311-UA = Urine-dipstick 100-tests",
  "0401": "①type · ②concentration · ③volume -> MS-0401-N35 = Non-ionic 300mgI 50ml",
  "0402": "①size · ②qty/box -> MS-0402-DA = 14x17in 100-sheets",
  "0403": "①type · ②volume -> MS-0403-D5 = Developer 5L",
  "0404": "①item type · ②size -> MS-0404-CB = CR-plate 24x30cm",
  "0501": "①container type · ②volume/count -> MS-0501-AB = Amber-bottle 10ml",
  "0502": "①agent type · ②grade · ③volume -> MS-0502-WU5 = Purified-water USP 500ml",
  "0503": "①item type · ②material · ③size -> MS-0503-MGM = Mortar-pestle Glass M"
};

const MD_CATS = {
  "01": "Active implantable devices",
  "02": "Anaesthetic & Respiratory",
  "03": "Dental devices",
  "04": "Electro-mechanical",
  "05": "Hospital hardware",
  "06": "In vitro diagnostic",
  "07": "Non-active implantable",
  "08": "Ophthalmic & optical",
  "09": "Reusable instruments",
  "10": "Single use devices",
  "11": "Technical aids disabled",
  "12": "Radiation devices",
};

const GS_GROUPS = {
  "01": "วัสดุสำนักงาน",
  "02": "วัสดุไฟฟ้าและวิทยุ",
  "03": "วัสดุงานบ้านงานครัว",
  "04": "วัสดุก่อสร้าง",
  "05": "วัสดุยานพาหนะและขนส่ง",
  "06": "วัสดุเชื้อเพลิงและหล่อลื่น",
  "07": "วัสดุวิทยาศาสตร์/การแพทย์",
  "08": "วัสดุการเกษตร",
  "09": "วัสดุโฆษณาและเผยแพร่",
  "10": "วัสดุเครื่องแต่งกาย",
  "11": "วัสดุกีฬา",
  "12": "วัสดุคอมพิวเตอร์",
  "13": "วัสดุการศึกษา",
  "14": "วัสดุเครื่องดับเพลิง",
  "15": "วัสดุสนาม",
  "16": "วัสดุสำรวจ",
  "17": "วัสดุดนตรี",
  "18": "วัสดุจราจร",
  "19": "วัสดุอื่น",
};

const CRISIS = {
  pm25: ["PM2.5", "ฝุ่น"],
  quake: ["แผ่นดินไหว", "quake"],
  resp: ["ทางเดินหายใจ", "resp"],
  flood: ["อุทกภัย", "flood"],
  war: ["สงคราม", "war"],
};

const KW = [
  ["MS", "0130", "MS-0130", ["mask", "n95", "ffp2", "surgical mask", "หน้ากาก"]],
  ["MS", "0124", "MS-0124", ["glove", "latex", "nitrile", "ถุงมือ", "ไนไตร"]],
  ["MS", "0133", "MS-0133", ["gown", "apron", "coverall", "เสื้อกาวน์", "เอี๊ยม", "ชุดป้องกัน"]],
  ["MS", "0137", "MS-0137", ["face shield", "goggles", "กระบังหน้า", "แว่นครอบตา"]],
  ["MS", "0131", "MS-0131", ["needle", "เข็ม"]],
  ["MS", "0148", "MS-0148", ["syringe", "กระบอกฉีดยา"]],
  ["MS", "0128", "MS-0128", ["iv set", "drip set", "microdrip"]],
  ["MS", "0108", "MS-0108", ["catheter", "foley", "medicut", "iv cannula", "สายสวน"]],
  ["MS", "0118", "MS-0118", ["dressing", "wound", "first aid", "ชุดทำแผล", "ปฐมพยาบาล"]],
  ["MS", "0309", "MS-0309", ["rapid test", "dengue", "influenza", "leptospirosis", "melioid", "scrub", "ชุดทดสอบ", "ชุดตรวจ"]],
  ["MS", "0308", "MS-0308", ["swab", "nasopharyngeal", "throat swab", "ไม้กดลิ้น"]],
  ["MS", "0307", "MS-0307", ["transport medium", "utm", "vtm", "cary blair"]],
  ["MS", "0304", "MS-0304", ["alcohol", "glutaraldehyde", "sodium hypochlorite", "สารเคมี"]],
  ["MS", "0501", "MS-0501", ["bottle", "container", "sharps", "ขวดยา", "ตลับ", "ถังทิ้งเข็ม"]],
  ["MS", "0502", "MS-0502", ["infectious waste", "biohazard", "ถุงขยะติดเชื้อ"]],
  ["MD", "02", "MD-02", ["ventilator", "hfnc", "oxygen", "เครื่องช่วยหายใจ", "ออกซิเจน"]],
  ["MD", "04", "MD-04", ["aed", "bp monitor", "pulse oximeter", "เครื่องวัดความดัน", "เครื่องกระตุกหัวใจ"]],
  ["MD", "05", "MD-05", ["stair chair", "stretcher", "เปล", "เก้าอี้ยกผู้ป่วย"]],
  ["GS", "07", "GS-07", ["chlorine", "sanitation", "waste", "แปรงถูพื้น", "ถุงดำ", "ส้วม", "คลอรีน", "ปูนขาว", "สารส้ม"]],
  ["GS", "14", "GS-14", ["life jacket", "helmet", "boot", "เสื้อชูชีพ", "หมวกกันกระแทก", "รองเท้าบูท"]],
  ["GS", "15", "GS-15", ["field", "camp", "relief bag", "มุ้ง", "ถุงยังชีพ", "นกหวีด"]],
  ["GS", "02", "GS-02", ["flashlight", "ไฟฉาย"]],
  ["GS", "16", "GS-16", ["cooler", "vaccine", "กระติกเย็น", "วัคซีน"]],
  ["GS", "18", "GS-18", ["traffic", "cone", "กรวย", "สะท้อนแสง"]],
];

const MD_GMDN = [
  { cat: "02", code: "31309", name: "Nebulizing system delivery set, single-use", terms: ["adult oxygen with nebulizer", "ped oxygen with nebulizer", "pediatric oxygen with nebulizer", "oxygen with nebulizer", "oxygen nebulizer", "nebulizer mask", "aerosol mask with nebulizer", "adult nebulizer mask", "pediatric nebulizer mask", "nebulizer kit with mask", "ชุดพ่นยาผู้ใหญ่", "ชุดพ่นยาเด็ก", "ชุดพ่นยา"] },
  { cat: "02", code: "35172", name: "Non-rebreathing oxygen face mask / oxygen mask with reservoir bag", terms: ["oxygen mask with bag", "oxygen mask reservoir", "oxygen mask with reservoir", "non rebreather", "non-rebreather", "high concentration oxygen mask", "ped oxygen mask with bag", "pediatric oxygen mask with bag", "mask with bag", "หน้ากากออกซิเจนพร้อมถุง", "หน้ากากออกซิเจนแบบมีถุง"] },
  { cat: "02", code: "35201", name: "Nasal oxygen cannula, basic", terms: ["nasal cannula", "oxygen cannula", "oxygen canula", "oxygen canula pediatric", "pediatric oxygen cannula", "pediatric oxygen canula", "สายออกซิเจน", "สายให้ออกซิเจน"] },
  { cat: "02", code: "35239", name: "Portable oxygen cylinder", terms: ["portable oxygen cylinder", "oxygen cylinder", "ถังออกซิเจน", "oxygen with set"] },
  { cat: "02", code: "13832", name: "Anaesthesia machine", terms: ["anaesthesia machine", "anesthesia machine", "เครื่องดมยาสลบ"] },
  { cat: "04", code: "42845", name: "Automated external defibrillator", terms: ["aed", "automated external defibrillator", "เครื่องกระตุกหัวใจ"] },
  { cat: "04", code: "34462", name: "Electronic sphygmomanometer", terms: ["bp monitor", "auto bp", "electronic sphygmomanometer", "เครื่องวัดความดัน"] },
  { cat: "04", code: "17943", name: "Pulse oximeter", terms: ["pulse oximeter", "pulse ox", "เครื่องวัดออกซิเจนปลายนิ้ว", "เครื่องวัดความอิ่มตัวออกซิเจน"] },
];

const GS_UNSPSC = [
  { grp: "07", code: "47121701", name: "Trash bags", terms: ["trash bag", "trash bags", "garbage bag", "garbage bags", "refuse bag", "black trash bag", "black garbage bag", "ถุงดำ", "ถุงขยะ", "ถุงใส่ขยะ"] },
  { grp: "07", code: "51241225", name: "Camphor or topical camphor preparations", terms: ["camphor", "camphor powder", "camphor powder 450 gm", "การบูร", "ผงการบูร"] },
  { grp: "07", code: "47131600", name: "Brooms, brushes, mops and sponges", terms: ["mop", "floor brush", "แปรงถูพื้น", "ไม้ถูพื้น"] },
  { grp: "07", code: "47131700", name: "Cleaning and disinfecting solutions", terms: ["chlorine", "disinfectant", "sodium hypochlorite", "น้ำยาฆ่าเชื้อ", "คลอรีน"] },
  { grp: "14", code: "46181500", name: "Safety apparel", terms: ["life jacket", "safety vest", "เสื้อชูชีพ", "เสื้อสะท้อนแสง"] },
  { grp: "14", code: "46181600", name: "Safety footwear", terms: ["boot", "safety boot", "รองเท้าบูท"] },
  { grp: "02", code: "39111700", name: "Emergency lighting and accessories", terms: ["flashlight", "torch", "ไฟฉาย"] },
];

const SAMPLE = [
  { name: "หน้ากาก N95 ไม่มีวาล์ว", unit: "ชิ้น", local_code: "SNS-001" },
  { name: "AED เครื่องกระตุกหัวใจอัตโนมัติ", unit: "เครื่อง", local_code: "SNS-002" },
  { name: "ถุงมือไนไตร ยาว 12 นิ้ว", unit: "คู่", local_code: "SNS-003" },
  { name: "กรวยสะท้อนแสง", unit: "อัน", local_code: "SNS-004" },
  { name: "ชุดตรวจ Dengue NS1 rapid test", unit: "ชุด", local_code: "SNS-005" },
];

const els = {
  fileInput: document.getElementById("fileInput"),
  dropzone: document.getElementById("dropzone"),
  fileName: document.getElementById("fileName"),
  stats: document.getElementById("stats"),
  prefixTabs: document.getElementById("prefixTabs"),
  resultsPanel: document.getElementById("resultsPanel"),
  resultsBody: document.getElementById("resultsBody"),
  tabs: document.getElementById("tabs"),
  searchInput: document.getElementById("searchInput"),
  exportBtn: document.getElementById("exportBtn"),
  lookupInput: document.getElementById("lookupInput"),
  lookupBtn: document.getElementById("lookupBtn"),
  lookupResult: document.getElementById("lookupResult"),
  importPanel: document.getElementById("importPanel"),
  importSummary: document.getElementById("importSummary"),
  apiEndpoint: document.getElementById("apiEndpoint"),
  crosswalkEndpoint: document.getElementById("crosswalkEndpoint"),
  hospitalId: document.getElementById("hospitalId"),
  uploadDashboardBtn: document.getElementById("uploadDashboardBtn"),
  uploadStatus: document.getElementById("uploadStatus"),
  editModal: document.getElementById("editModal"),
  editRowLabel: document.getElementById("editRowLabel"),
  closeEditBtn: document.getElementById("closeEditBtn"),
  editNameInput: document.getElementById("editNameInput"),
  manualCodeInput: document.getElementById("manualCodeInput"),
  systemSelect: document.getElementById("systemSelect"),
  majorGroupSelect: document.getElementById("majorGroupSelect"),
  subGroupSelect: document.getElementById("subGroupSelect"),
  rh1Modal: document.getElementById("rh1Modal"),
  rh1RowLabel: document.getElementById("rh1RowLabel"),
  closeRh1Btn: document.getElementById("closeRh1Btn"),
  rh1ProductName: document.getElementById("rh1ProductName"),
  rh1ProductMeta: document.getElementById("rh1ProductMeta"),
  rh1CurrentInfo: document.getElementById("rh1CurrentInfo"),
  rh1OverrideSelect: document.getElementById("rh1OverrideSelect"),
  rh1ScenarioChecks: document.getElementById("rh1ScenarioChecks"),
  rh1Preview: document.getElementById("rh1Preview"),
  saveRh1Btn: document.getElementById("saveRh1Btn"),
  editPreview: document.getElementById("editPreview"),
  checkEditedNameBtn: document.getElementById("checkEditedNameBtn"),
  useManualCodeBtn: document.getElementById("useManualCodeBtn"),
  saveEditBtn: document.getElementById("saveEditBtn"),
  sampleBtn: document.getElementById("sampleBtn"),
  resetBtn: document.getElementById("resetBtn"),
};

const MS_TYPE_NAMES = {
  MS01: "วัสดุการแพทย์ทั่วไป / General Medical Supply",
  MS02: "วัสดุทันตกรรม / Dental Supply",
  MS03: "วัสดุวิทยาศาสตร์ / Laboratory Supply",
  MS04: "วัสดุเอกซเรย์ / X-ray Supply",
  MS05: "วัสดุเภสัชกรรม / Pharmacy Supply",
};

let results = [];
let activeTab = "all";
let activePrefix = "all";
let editingRow = null;
let editingRh1Row = null;
let pendingEdit = null;
let crosswalkIndex = { byCode: new Map(), byName: new Map(), rows: [], loaded: false, status: "not loaded" };

function norm(s) {
  return String(s || "").toLowerCase().replace(/[()[\]/\\,.+]/g, " ").replace(/\s+/g, " ").trim();
}

function similarity(a, b) {
  const aa = norm(a);
  const bb = norm(b);
  if (!aa || !bb) return 0;
  if (aa === bb) return 100;
  if (aa.includes(bb) || bb.includes(aa)) return Math.min(96, 65 + Math.min(30, Math.min(aa.length, bb.length)));
  const aw = new Set(aa.split(" ").filter(x => x.length > 1));
  const bw = new Set(bb.split(" ").filter(x => x.length > 1));
  const hit = [...aw].filter(x => bw.has(x)).length;
  return hit ? Math.min(72, Math.round((hit / Math.max(aw.size, bw.size)) * 80)) : 0;
}

function parseSpec(groupCode, name) {
  const l = norm(name);
  const u = String(name).toUpperCase();
  if (groupCode === "0103") {
    const type = l.includes("elastic") ? "E" : l.includes("cohesive") ? "H" : l.includes("crepe") ? "C" : "";
    const width = /6\s*inch|15\s*cm/.test(l) ? "B" : /4\s*inch|10\s*cm/.test(l) ? "A" : /3\s*inch|7\s*cm|7\.5\s*cm/.test(l) ? "7" : /2\s*inch|5\s*cm/.test(l) ? "5" : "";
    if (!type || !width) return "";
    return `${type}${width}N`;
  }
  if (groupCode === "0131") {
    const m = u.match(/(?:NO[.\s]*)?(\d{2})\s*G?\s*(?:[Xx×]|$)/) || u.match(/(?:NO[.\s]*|G\s*)(\d{2})\b/);
    if (!m) return "";
    const g = m[1];
    const lenText = u.slice(m.index + m[0].length);
    const len = /0\.5|1\/2|5\/8/.test(lenText) ? "A" : /3\.5|3\s*1\/2/.test(lenText) ? "E" : /1\.5|1\s*1\/2/.test(lenText) ? "C" : /\b2(?:\.0)?\b|2\s*INCH/.test(lenText) ? "D" : "B";
    return `${g}${len}`;
  }
  if (groupCode === "0148") {
    if (l.includes("insulin")) return "1TN";
    const cap = l.includes("50ml") ? "C" : l.includes("20ml") ? "B" : l.includes("10ml") ? "A" : l.includes("5ml") ? "5" : l.includes("3ml") ? "3" : "";
    return cap ? `${cap}${l.includes("luer") ? "L" : "S"}N` : "";
  }
  if (groupCode === "0130") {
    if (l.includes("n95")) return l.includes("ไม่มีวาล์ว") || l.includes("no valve") ? "NN" : l.includes("มีวาล์ว") ? "NV" : "NA";
    if (l.includes("ffp2")) return "F2V";
    if (l.includes("surgical") || l.includes("อนามัย")) return `S${l.includes("เด็ก") || l.includes("child") ? "C" : "A"}`;
  }
  if (groupCode === "0124") {
    const mat = l.includes("nitrile") || l.includes("ไนไตร") ? "N" : l.includes("vinyl") ? "V" : "L";
    const size = l.includes("xl") ? "5" : l.includes("large") || l.includes("ศัลยกรรม") ? "4" : "3";
    const sterile = l.includes("sterile") || l.includes("ปลอดเชื้อ") || l.includes("ศัลยกรรม") ? "S" : "N";
    return `${mat}F${size}${sterile}`;
  }
  if (groupCode === "0108") {
    const type = /suction|ดูด/.test(l) ? "S" : /nelaton/.test(l) ? "N" : /foley|catheter|สายสวน/.test(l) ? "F" : "";
    const frMatch = l.match(/\bfr\s*(\d{1,2})\b/) || l.match(/\bno\.?\s*(\d{1,2})\b/) || l.match(/\b(\d{1,2})\s*fr\b/);
    const frMap = { 8: "8", 10: "A", 12: "B", 14: "C", 16: "D", 18: "E", 20: "F", 22: "G", 24: "H" };
    const fr = frMatch ? frMap[Number(frMatch[1])] || "" : "";
    const balloon = /without|no balloon|ไม่มีบอลลูน/.test(l) ? "N" : "W";
    if (!type || !fr) return "";
    return `${type}${fr}${balloon}`;
  }
  if (groupCode === "0128") {
    const type = l.includes("microdrip") ? "M" : l.includes("blood") ? "B" : l.includes("soluset") ? "L" : /iv|drip|infusion/.test(l) ? "S" : "";
    if (!type) return "";
    return `${type}FN`;
  }
  if (groupCode === "0122") {
    const size = /2\s*x\s*2/.test(l) ? "A" : /4\s*x\s*4/.test(l) ? "B" : /4\s*x\s*8/.test(l) ? "C" : "";
    const ply = /\b16\s*ply\b|\b16p\b/.test(l) ? "G" : /\b12\s*ply\b|\b12p\b/.test(l) ? "C" : /\b8\s*ply\b|\b8p\b/.test(l) ? "8" : "8";
    const sterile = /sterile|ปลอดเชื้อ/.test(l) ? "S" : "N";
    if (!size) return "";
    return `${size}${ply}${sterile}`;
  }
  if (groupCode === "0133") {
    const type = /isolation/.test(l) ? "I" : /surgical/.test(l) ? "S" : /coverall|non woven|non-woven|gown|apron|เสื้อกาวน์|เอี๊ยม|ชุดป้องกัน/.test(l) ? "N" : "";
    const mat = /laminate|waterproof|กันน้ำ/.test(l) ? "L" : /plastic|poly|พลาสติก/.test(l) ? "P" : "N";
    const size = /\bxl\b|extra large/.test(l) ? "X" : /\blarge\b|\bl\b/.test(l) ? "L" : /\bmedium\b|\bm\b/.test(l) ? "M" : /\bsmall\b|\bs\b/.test(l) ? "S" : "N";
    if (!type) return "";
    return `${type}${mat}${size}`;
  }
  if (groupCode === "0139") {
    const type = /arm sling|sling|ผ้าคล้องแขน/.test(l) ? "A" : "";
    const size = /\bxs\b|extra small/.test(l) ? "1" : /\bxl\b|extra large/.test(l) ? "X" : /\bl\b|large/.test(l) ? "L" : /\bm\b|medium/.test(l) ? "M" : /\bs\b|small/.test(l) ? "S" : "";
    if (!type || !size) return "";
    return `${type}${size}`;
  }
  if (groupCode === "0154") {
    const sizeMatch = u.match(/NO[.\s]*(\d\.\d)/) || u.match(/\b(\d\.\d)\b/);
    if (!sizeMatch) return "";
    const sizeMap = { "2.5": "A", "3.0": "B", "3.5": "C", "4.0": "D", "4.5": "E", "5.0": "F", "6.0": "G", "6.5": "H", "7.0": "I", "7.5": "J", "8.0": "K" };
    const idCode = sizeMap[sizeMatch[1]];
    if (!idCode) return "";
    const cuff = /uncuff|uncuffed|ไม่มี cuff|no cuff/.test(l) ? "U" : "C";
    return `${idCode}${cuff}`;
  }
  if (groupCode === "0155") {
    const fr = /no\.?\s*8\b|\b8fr\b|\b8\s*x|\b8x/.test(l) ? "8" : /no\.?\s*10\b|\b10fr\b|\b10\s*x|\b10x/.test(l) ? "A" : /no\.?\s*12\b|\b12fr\b|\b12\s*x|\b12x/.test(l) ? "B" : "";
    const len = /x\s*110\b|(?:^|\D)110(?:\D|$)/.test(l) ? "A" : /x\s*(90|100)\b|(?:^|\D)(90|100)(?:\D|$)/.test(l) ? "8" : "";
    const tip = /weighted|weight|ถ่วง/.test(l) ? "W" : "B";
    if (!fr || !len) return "";
    return `${fr}${len}${tip}`;
  }
  return "";
}

function scoreTerms(name, terms) {
  const n = norm(name);
  let best = 0;
  for (const term of terms) {
    const t = norm(term);
    if (n === t) best = Math.max(best, 100);
    else if (n.startsWith(t) || n.includes(` ${t} `) || n.includes(t)) best = Math.max(best, Math.min(96, 58 + t.length * 5));
    else if (t.includes(n)) best = Math.max(best, Math.min(88, 48 + n.length * 4));
  }
  return best;
}

function matchMdGmdn(name) {
  let best = null;
  for (const item of MD_GMDN) {
    const score = scoreTerms(name, item.terms);
    if (!best || score > best.score) best = { ...item, score };
  }
  return best && best.score >= 70 ? best : null;
}

function matchGsUnspsc(name) {
  let best = null;
  for (const item of GS_UNSPSC) {
    const score = scoreTerms(name, item.terms);
    if (!best || score > best.score) best = { ...item, score };
  }
  return best && best.score >= 60 ? best : null;
}

function getSpecHint(prefix, groupCode) {
  if (prefix === "MS") return SPEC_HINTS[groupCode] || "MS-[STSG4]-[Spec] · ตรวจ attribute ตาม RH1 Supply Classification Standard";
  if (prefix === "MD") return groupCode ? `MD-${groupCode} : ${MD_CATS[groupCode] || "Medical Device Group"}` : "MD : Medical Device";
  if (prefix === "GS") return groupCode ? `GS-${groupCode} : ${GS_GROUPS[groupCode] || "General Supply Group"}` : "GS : General Supply";
  return "";
}

function matchItem(name) {
  const candidates = RH1_DB.map(r => ({ r, score: similarity(name, r.name) })).sort((a, b) => b.score - a.score);
  const bestRh1 = candidates[0] && candidates[0].score >= 62 ? candidates[0] : null;
  const md = matchMdGmdn(name);
  const gs = matchGsUnspsc(name);

  let keyword = null;
  for (const item of KW) {
    const score = item[3].reduce((best, k) => norm(name).includes(norm(k)) ? Math.max(best, Math.min(80, 25 + norm(k).length * 4)) : best, 0);
    if (!keyword || score > keyword.score) keyword = { prefix: item[0], groupCode: item[1], base: item[2], score };
  }

  for (const [sg, info] of Object.entries(STSG)) {
    const terms = [info[1], info[2]].filter(Boolean);
    let score = Math.max(...terms.map(t => similarity(name, t)));
    const nameWords = new Set(norm(name).split(" ").filter(w => w.length > 2));
    for (const term of terms) {
      const words = norm(term).split(" ").filter(w => w.length > 2);
      if (words.length && words.every(w => nameWords.has(w))) score = Math.max(score, 68);
    }
    if (!keyword || score > keyword.score) keyword = { prefix: "MS", groupCode: sg, base: `MS-${sg}`, score };
  }

  const rh1 = bestRh1 ? bestRh1.r : null;
  const prefix = md ? "MD" : gs ? "GS" : rh1?.prefix || (keyword?.score ? keyword.prefix : "—");
  const groupCode = md?.cat || gs?.grp || rh1?.groupCode || (keyword?.score ? keyword.groupCode : "");
  const stsgInfo = STSG[groupCode];
  const spec = prefix === "MS" ? parseSpec(groupCode, name) : "";
  const suggestedCode = md ? `MD-${md.cat}-${md.code}` : gs ? `GS-${gs.grp}-${gs.code}` : prefix === "MS" && groupCode && spec ? `MS-${groupCode}-${spec}` : rh1?.code || (prefix === "MS" && groupCode ? `MS-${groupCode}` : keyword?.base || "—");
  const score = Math.max(md?.score || 0, gs?.score || 0, bestRh1?.score || 0, keyword?.score || 0);
  const confidence = score >= 80 || !!rh1 ? "High" : score >= 45 ? "Medium" : "Low";

  return {
    rh1,
    prefix,
    groupCode,
    suggestedCode,
    spec,
    specHint: getSpecHint(prefix, groupCode),
    score,
    confidence,
    group: md?.name || gs?.name || (stsgInfo ? stsgInfo[1] : rh1?.group || keyword?.base || "Unclassified"),
    groupThai: stsgInfo ? stsgInfo[2] : "",
  };
}

function applyMapping(row, mapping) {
  row.rh1 = mapping.rh1 || null;
  row.prefix = mapping.prefix;
  row.groupCode = mapping.groupCode;
  row.suggestedCode = mapping.suggestedCode;
  row.spec = mapping.spec || "";
  row.specHint = mapping.specHint || getSpecHint(mapping.prefix, mapping.groupCode);
  row.score = mapping.score;
  row.confidence = mapping.confidence;
  row.group = mapping.group;
  row.groupThai = mapping.groupThai || "";
  return row;
}

function mappingCode(mapping) {
  return String(mapping?.suggestedCode || "").trim().toUpperCase();
}

function sameMappedCode(a, b) {
  return mappingCode(a) && mappingCode(a) === mappingCode(b);
}

function codeMappingFromManual(code) {
  const raw = String(code || "").trim().toUpperCase();
  let m = raw.match(/^MS-(\d{4})(?:-([A-Z0-9]+))?$/);
  if (m) {
    const info = STSG[m[1]];
    if (!info) return { ok: false, error: "ไม่พบ STSG กลุ่มนี้ใน MS 90 กลุ่ม" };
    const full = !!m[2];
    return {
      ok: true,
      mapping: {
        rh1: null,
        prefix: "MS",
        groupCode: m[1],
        suggestedCode: full ? `MS-${m[1]}-${m[2]}` : `MS-${m[1]}`,
        spec: m[2] || "",
        specHint: getSpecHint("MS", m[1]),
        score: full ? 100 : 75,
        confidence: full ? "High" : "Medium",
        group: info[1],
        groupThai: info[2],
      },
    };
  }
  m = raw.match(/^MD-(\d{2})-(\d{5})$/);
  if (m) {
    if (!MD_CATS[m[1]]) return { ok: false, error: "ไม่พบ MD category นี้ใน 12 กลุ่ม" };
    return {
      ok: true,
      mapping: {
        rh1: null,
        prefix: "MD",
        groupCode: m[1],
        suggestedCode: `MD-${m[1]}-${m[2]}`,
        spec: "",
        specHint: getSpecHint("MD", m[1]),
        score: 100,
        confidence: "High",
        group: MD_CATS[m[1]],
        groupThai: "",
      },
    };
  }
  m = raw.match(/^GS-(\d{2})-(\d{8})$/);
  if (m) {
    if (!GS_GROUPS[m[1]]) return { ok: false, error: "ไม่พบ GS group นี้ใน 19 กลุ่ม" };
    return {
      ok: true,
      mapping: {
        rh1: null,
        prefix: "GS",
        groupCode: m[1],
        suggestedCode: `GS-${m[1]}-${m[2]}`,
        spec: "",
        specHint: getSpecHint("GS", m[1]),
        score: 100,
        confidence: "High",
        group: GS_GROUPS[m[1]],
        groupThai: "",
      },
    };
  }
  return { ok: false, error: "รูปแบบ code ไม่ถูกต้อง: ใช้ MS-xxxx[-spec], MD-xx-xxxxx หรือ GS-xx-xxxxxxxx" };
}

const COLUMN_SYNONYMS = {
  name: ["dr_name", "itemname", "item name", "item_name", "ชื่อสินค้า", "ชื่อ", "รายการ", "ชื่อรายการ", "เวชภัณฑ์", "ชื่อเวชภัณฑ์", "product name", "name", "item"],
  code: ["dr_code", "itemcode", "item code", "item_code", "local code", "hospital code", "รหัสเดิม", "รหัสสินค้า", "รหัส", "code", "working code"],
  masterCode: ["master_code", "mapped_code", "suggested_code", "standard_code", "rh1_code", "master code", "mapped code", "standard code", "suggested code", "ms md gs code", "ms/md/gs code", "รหัสกลาง", "รหัสมาตรฐาน", "รหัส master", "รหัส mapping", "รหัส MS/MD/GS"],
  detail: ["itemsize", "item size", "item_size", "รายละเอียด", "detail", "details", "description", "spec", "specification", "ขนาด", "size"],
  unit: ["itemunit", "item unit", "item_unit", "หน่วย", "หน่วยนับ", "unit"],
  balance: ["current_balance", "คงเหลือ", "ยอดคงเหลือ", "balance", "stock", "on hand", "onhand", "คงคลัง"],
  usage: ["daily_usage_rate", "อัตราใช้", "อัตราการใช้", "usage rate", "avg use", "ใช้ต่อเดือน", "monthly usage"],
  status: ["status", "สถานะ", "มีในบัญชี", "account status"],
  leadtime: ["leadtime", "lead time", "ระยะรอคอย", "ระยะเวลาจัดหา", "ระยะเวลาการรอคอย"],
};

function columnScore(headerText, key) {
  const x = norm(headerText);
  if (!x) return 0;
  if (key === "name" && /\b(code|รหัส)\b/.test(x)) return 0;
  if (key === "code" && /\b(name|ชื่อ)\b/.test(x)) return 0;
  return COLUMN_SYNONYMS[key].reduce((score, term) => {
    const t = norm(term);
    if (x === t) return Math.max(score, 10);
    if (x.includes(t) || (x.length > 2 && t.includes(x))) return Math.max(score, Math.min(8, 3 + t.length));
    return score;
  }, 0);
}

function detectColumns(rows) {
  let headerIndex = 0;
  let bestScore = -1;
  rows.slice(0, 15).forEach((row, idx) => {
    const score = row.reduce((sum, h) => {
      return sum + columnScore(h, "name") + columnScore(h, "code") + columnScore(h, "masterCode") + columnScore(h, "detail") + columnScore(h, "balance") + columnScore(h, "usage") + columnScore(h, "status") + columnScore(h, "leadtime") + columnScore(h, "unit");
    }, 0);
    if (score > bestScore) {
      bestScore = score;
      headerIndex = idx;
    }
  });

  const header = rows[headerIndex] || [];
  const guess = { name: -1, unit: -1, code: -1, masterCode: -1, detail: -1, balance: -1, usage: -1, status: -1, leadtime: -1, headerIndex };
  header.forEach((h, i) => {
    for (const key of ["name", "unit", "code", "masterCode", "detail", "balance", "usage", "status", "leadtime"]) {
      const score = columnScore(h, key);
      if (score && (guess[key] < 0 || score > columnScore(header[guess[key]], key))) guess[key] = i;
    }
  });
  if (guess.code >= 0 && guess.code === guess.masterCode) {
    const h = header[guess.code];
    if (columnScore(h, "masterCode") >= columnScore(h, "code")) guess.code = -1;
    else guess.masterCode = -1;
  }
  if (guess.name >= 0 && guess.name === guess.code) {
    let nextName = -1;
    let nextScore = 0;
    header.forEach((h, i) => {
      if (i === guess.code) return;
      const score = columnScore(h, "name");
      if (score > nextScore) {
        nextScore = score;
        nextName = i;
      }
    });
    if (nextName >= 0) guess.name = nextName;
    else guess.name = -1;
  }
  if (guess.name < 0) {
    const textCol = header.findIndex((_, i) => i !== guess.code && i !== guess.masterCode && i !== guess.unit && i !== guess.detail);
    guess.name = textCol >= 0 ? textCol : 0;
  }
  return guess;
}

function mappingConflictWarning(autoMapping, manualMapping) {
  if (!autoMapping || !manualMapping) return "";
  if (!["High", "Medium"].includes(autoMapping.confidence)) return "";
  if (autoMapping.prefix !== manualMapping.prefix) return "incoming_master_code prefix differs from name-based mapping";
  if (String(autoMapping.groupCode || "") !== String(manualMapping.groupCode || "")) return "incoming_master_code group differs from name-based mapping";
  if (autoMapping.spec && manualMapping.spec && autoMapping.spec !== manualMapping.spec) return "incoming_master_code spec differs from name-based mapping";
  return "";
}

function normalizedNameKey(name, detail) {
  return norm(buildMappingText(name, detail));
}

function crosswalkEntryToMapping(entry) {
  const code = String(entry.mapped_code || entry.master_code || entry.code || "").trim().toUpperCase();
  const parsed = codeMappingFromManual(code);
  if (!parsed.ok) return null;
  const mapping = parsed.mapping;
  mapping.score = 100;
  mapping.confidence = "High";
  if (entry.mapped_name) mapping.group = entry.mapped_name;
  if (entry.groupThai) mapping.groupThai = entry.groupThai;
  return mapping;
}

function normalizeCrosswalkEntry(entry) {
  const mapping = crosswalkEntryToMapping(entry);
  if (!mapping) return null;
  const scenarios = Array.isArray(entry.scenarios)
    ? entry.scenarios
    : String(entry.scenarios || "").split(/[|,]/).map(x => x.trim()).filter(Boolean);
  return {
    source_dr_code: String(entry.source_dr_code || entry.dr_code || entry.local_code || "").trim(),
    source_dr_name: String(entry.source_dr_name || entry.dr_name || entry.item_name || entry.name || "").trim(),
    source_dr_detail: String(entry.source_dr_detail || entry.item_detail || entry.detail || "").trim(),
    mapping_text: String(entry.mapping_text || "").trim(),
    mapped_code: mapping.suggestedCode,
    rh1_crisis: !!entry.rh1_crisis,
    scenarios,
    mapping,
  };
}

function buildCrosswalkIndex(rows = []) {
  const byCode = new Map();
  const byName = new Map();
  const normalizedRows = rows.map(normalizeCrosswalkEntry).filter(Boolean);
  normalizedRows.forEach(entry => {
    if (entry.source_dr_code) byCode.set(norm(entry.source_dr_code), entry);
    const nameKey = entry.mapping_text ? norm(entry.mapping_text) : normalizedNameKey(entry.source_dr_name, entry.source_dr_detail);
    if (nameKey) byName.set(nameKey, entry);
  });
  crosswalkIndex = { byCode, byName, rows: normalizedRows, loaded: true, status: `${normalizedRows.length} mappings` };
  return crosswalkIndex;
}

function findCrosswalkMatch(item) {
  if (!crosswalkIndex.loaded) return null;
  if (item.local_code) {
    const byCode = crosswalkIndex.byCode.get(norm(item.local_code));
    if (byCode) return { type: "source_dr_code", entry: byCode };
  }
  const byName = crosswalkIndex.byName.get(normalizedNameKey(item.original_name, item.item_detail));
  if (byName) return { type: "name_detail", entry: byName };
  return null;
}

function applyCrosswalkRh1(row, entry) {
  if (!entry) return;
  if (entry.rh1_crisis) {
    row.rh1_override = "yes";
    row.rh1_override_scenarios = entry.scenarios || [];
  }
}

function crosswalkUrl() {
  const endpoint = String(els.crosswalkEndpoint?.value || "").trim();
  const hospitalId = String(els.hospitalId?.value || "").trim();
  if (!endpoint || !hospitalId) return "";
  const url = new URL(endpoint, window.location.href);
  url.searchParams.set("hospital_id", hospitalId);
  return url.toString();
}

async function loadCrosswalk() {
  const url = crosswalkUrl();
  if (!url) {
    crosswalkIndex = { byCode: new Map(), byName: new Map(), rows: [], loaded: false, status: "not configured" };
    return crosswalkIndex;
  }
  try {
    const res = await fetch(url, { credentials: "include" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const body = await res.json();
    const rows = Array.isArray(body) ? body : Array.isArray(body.rows) ? body.rows : [];
    return buildCrosswalkIndex(rows);
  } catch (err) {
    crosswalkIndex = { byCode: new Map(), byName: new Map(), rows: [], loaded: false, status: `load failed: ${err.message}` };
    return crosswalkIndex;
  }
}

function cleanItemDetail(value, name = "") {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  const compact = raw.replace(/\s+/g, " ").trim();
  if (/^(?:-|0|1|n\/?a|na|null|none)$/i.test(compact)) return "";
  const normalizedDetail = norm(compact);
  if (!normalizedDetail) return "";
  const likelySpec = /^(?:xs|s|m|l|xl)$/i.test(compact)
    || /^(?:aa|aaa|c|d)$/i.test(compact)
    || /\b\d{1,2}\s*g\b/i.test(compact)
    || /\b(?:fr|no\.?)\s*\d{1,2}\b/i.test(compact)
    || /\b\d+(?:\.\d+)?\s*(?:cm|mm|inch|in|ml|fr|g)\b/i.test(compact)
    || /(?:^|\s)\d+(?:\.\d+)?\s*(?:นิ้ว|เมตร|ซม\.?|มม\.?|เซนติเมตร|มิลลิเมตร|มิล\.?|มล\.?|ซีซี|ลิตร|กรัม|กก\.?|กิโลกรัม)(?:\s|$)/i.test(compact)
    || /\b\d+(?:\.\d+)?\s*[x×]\s*\d+(?:\.\d+)?\b/i.test(compact)
    || /\b\d+(?:\.\d+)?\s*\/\s*\d+(?:\.\d+)?\b/i.test(compact);
  if (!likelySpec) return "";
  const nameTokens = new Set(norm(name).split(" ").filter(Boolean));
  if (/^(?:xs|s|m|l|xl|aa|aaa|c|d)$/i.test(compact)) return nameTokens.has(normalizedDetail) ? "" : compact;
  if (nameTokens.has(normalizedDetail) || norm(name).includes(normalizedDetail)) return "";
  return likelySpec ? compact : "";
}

function buildMappingText(name, detail) {
  const base = String(name || "").trim();
  const cleanDetail = cleanItemDetail(detail, base);
  if (!base) return cleanDetail;
  return cleanDetail ? `${base} ${cleanDetail}` : base;
}

function mapRows(inputRows) {
  const rows = inputRows.filter(r => r && r.some(c => String(c || "").trim()));
  if (!rows.length) return [];
  const cols = detectColumns(rows);
  const mapped = rows.slice(cols.headerIndex + 1).filter(r => String(r[cols.name] || "").trim()).map((r, i) => {
    const original_name = String(r[cols.name] || "").trim();
    const itemDetail = cleanItemDetail(cols.detail >= 0 ? r[cols.detail] : "", original_name);
    const mappingText = buildMappingText(original_name, itemDetail);
    const incomingMasterCode = cols.masterCode >= 0 ? String(r[cols.masterCode] || "").trim().toUpperCase() : "";
    const unitFromName = (original_name.match(/\(([^)]+)\)\s*$/) || [])[1] || "";
    const autoMapping = matchItem(mappingText);
    const item = {
      row: i + 1,
      original_name,
      edited_name: "",
      item_detail: itemDetail,
      mapping_text: mappingText,
      incoming_master_code: incomingMasterCode,
      crosswalk_code: "",
      crosswalk_match_type: "",
      mapping_conflict: "",
      manual_code: "",
      manual_confirmed: false,
      mapping_source: "auto",
      import_code_error: "",
      import_code_warning: "",
      rh1_override: "auto",
      rh1_override_scenarios: [],
      unit: cols.unit >= 0 ? String(r[cols.unit] || "").trim() : unitFromName,
      local_code: cols.code >= 0 ? String(r[cols.code] || "").trim() : "",
      current_balance: cols.balance >= 0 ? String(r[cols.balance] || "").trim() : "",
      daily_usage_rate: cols.usage >= 0 ? String(r[cols.usage] || "").trim() : "",
      status: cols.status >= 0 ? String(r[cols.status] || "").trim() : "",
      leadtime: cols.leadtime >= 0 ? String(r[cols.leadtime] || "").trim() : "",
      ...autoMapping,
    };
    const crosswalkMatch = findCrosswalkMatch(item);
    const crosswalkMapping = crosswalkMatch?.entry?.mapping || null;
    if (crosswalkMapping) {
      item.crosswalk_code = crosswalkMapping.suggestedCode;
      item.crosswalk_match_type = crosswalkMatch.type;
    }
    if (incomingMasterCode) {
      const parsed = codeMappingFromManual(incomingMasterCode);
      if (parsed.ok) {
        item.manual_code = parsed.mapping.suggestedCode;
        item.manual_confirmed = true;
        item.mapping_source = "file-master-code";
        item.import_code_warning = mappingConflictWarning(autoMapping, parsed.mapping);
        if (crosswalkMapping && !sameMappedCode(parsed.mapping, crosswalkMapping)) {
          item.mapping_conflict = "master-code-vs-crosswalk";
          item.import_code_warning = [item.import_code_warning, `master_code differs from saved crosswalk (${crosswalkMapping.suggestedCode})`].filter(Boolean).join("; ");
        }
        applyMapping(item, parsed.mapping);
      } else {
        item.manual_code = incomingMasterCode;
        item.mapping_source = "invalid-file-master-code";
        item.import_code_warning = `incoming_master_code invalid: ${parsed.error}`;
        if (crosswalkMapping) {
          item.mapping_source = "crosswalk";
          item.manual_code = "";
          item.manual_confirmed = true;
          applyMapping(item, crosswalkMapping);
          applyCrosswalkRh1(item, crosswalkMatch.entry);
        } else {
          item.import_code_error = `incoming_master_code invalid: ${parsed.error}`;
          item.confidence = "Low";
          item.score = 0;
        }
      }
    } else if (crosswalkMapping) {
      item.manual_confirmed = true;
      item.mapping_source = "crosswalk";
      applyMapping(item, crosswalkMapping);
      applyCrosswalkRh1(item, crosswalkMatch.entry);
    }
    return validateMappedRow(item);
  });
  results = mapped;
  markDuplicates();
  return results;
}

function toNumberOrBlank(value) {
  const raw = String(value ?? "").replace(/,/g, "").trim();
  if (!raw) return { value: "", ok: false, blank: true };
  const n = Number(raw);
  return { value: n, ok: Number.isFinite(n) && n >= 0, blank: false };
}

function validateMappedRow(row) {
  const errors = [];
  const warnings = [];
  const balance = toNumberOrBlank(row.current_balance);
  const usage = toNumberOrBlank(row.daily_usage_rate);
  const leadtime = toNumberOrBlank(row.leadtime);
  const status = String(row.status || "").trim();

  if (!row.suggestedCode || row.suggestedCode === "—") errors.push("ไม่มี mapped_code");
  if (row.confidence === "Low" && !row.manual_confirmed) errors.push("Low Conf ต้องยืนยัน mapping");
  if (balance.blank) errors.push("ไม่มี current_balance");
  else if (!balance.ok) errors.push("current_balance ไม่ใช่ตัวเลข >= 0");
  if (!usage.blank && !usage.ok) errors.push("daily_usage_rate ไม่ใช่ตัวเลข >= 0");
  if (status && !["1", "2"].includes(status)) errors.push("status ต้องเป็น 1 หรือ 2");
  if (!leadtime.blank && !leadtime.ok) errors.push("leadtime ต้องเป็นตัวเลข >= 0");
  if (row.import_code_error) errors.push(row.import_code_error);
  if (row.mapping_conflict) errors.push("mapping conflict needs review");
  if (row.import_code_warning) warnings.push(row.import_code_warning);
  if (!row.local_code) warnings.push("ไม่มี dr_code/source code");

  row.validationErrors = errors;
  row.validationWarnings = warnings;
  row.uploadable = errors.length === 0 && ["High", "Medium"].includes(row.confidence);
  return row;
}

function markDuplicates() {
  const seen = new Map();
  results.forEach(r => {
    r.validationWarnings = (r.validationWarnings || []).filter(w => !String(w).startsWith("อาจซ้ำกับแถว "));
    const key = r.local_code ? `code:${norm(r.local_code)}` : `name:${norm(r.original_name)}`;
    if (!key.endsWith(":")) {
      if (seen.has(key)) {
        r.validationWarnings.push("อาจซ้ำกับแถว " + seen.get(key));
      } else {
        seen.set(key, r.row);
      }
    }
  });
}

function effectiveRh1(row) {
  const mode = row.rh1_override || "auto";
  if (mode === "yes") {
    return {
      isCrisis: true,
      id: row.rh1?.id || null,
      scenarios: row.rh1_override_scenarios || [],
      source: "manual-yes",
    };
  }
  if (mode === "no") {
    return {
      isCrisis: false,
      id: null,
      scenarios: [],
      source: "manual-no",
    };
  }
  return {
    isCrisis: !!row.rh1,
    id: row.rh1?.id || null,
    scenarios: row.rh1?.scenarios || [],
    source: "auto",
  };
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];
    if (ch === '"' && q && next === '"') {
      cell += '"';
      i += 1;
    } else if (ch === '"') {
      q = !q;
    } else if (ch === "," && !q) {
      row.push(cell);
      cell = "";
    } else if ((ch === "\n" || ch === "\r") && !q) {
      if (ch === "\r" && next === "\n") i += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += ch;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

async function readFile(file) {
  const ext = file.name.split(".").pop().toLowerCase();
  if (ext === "csv") return parseCsv(await file.text());
  if (!window.XLSX) throw new Error("ไม่พบ SheetJS CDN จึงอ่าน Excel ไม่ได้ กรุณาเชื่อมต่ออินเทอร์เน็ตหรือแปลงเป็น CSV");
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: "array" });
  const ws = wb.Sheets[wb.SheetNames[0]];
  return XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });
}

function renderStats() {
  const s = {
    total: results.length,
    crisis: results.filter(r => effectiveRh1(r).isCrisis).length,
    ms: results.filter(r => r.prefix === "MS").length,
    md: results.filter(r => r.prefix === "MD").length,
    gs: results.filter(r => r.prefix === "GS").length,
    ready: results.filter(r => r.uploadable).length,
  };
  els.stats.innerHTML = [
    ["ทั้งหมด", s.total, ""],
    ["MS", s.ms, "ms-stat"],
    ["MD", s.md, "md-stat"],
    ["GS", s.gs, "gs-stat"],
    ["RH1 Crisis", s.crisis, "crisis-stat"],
    ["Ready Upload", s.ready, "ready-stat"],
  ].map(([label, value, cls]) => `<div class="stat ${cls}"><strong>${value}</strong><span>${label}</span></div>`).join("");
}

function prefixFilteredResults() {
  return results.filter(r => activePrefix === "all" || r.prefix === activePrefix);
}

function filteredResults() {
  const q = norm(els.searchInput.value);
  return prefixFilteredResults().filter(r => {
    const tabOk = activeTab === "all" || (activeTab === "crisis" ? effectiveRh1(r).isCrisis : r.confidence === activeTab);
    const searchOk = !q || norm(`${r.original_name} ${r.item_detail || ""} ${r.mapping_text || ""} ${r.local_code} ${r.suggestedCode} ${r.group} ${r.specHint}`).includes(q);
    return tabOk && searchOk;
  });
}

function renderPrefixTabs() {
  const tabs = [
    ["all", "ทั้งหมด", results.length, "all-filter"],
    ["MS", "MS : Medical Supply", results.filter(r => r.prefix === "MS").length, "ms-filter"],
    ["MD", "MD : Medical Device", results.filter(r => r.prefix === "MD").length, "md-filter"],
    ["GS", "GS : General Supply", results.filter(r => r.prefix === "GS").length, "gs-filter"],
  ];
  els.prefixTabs.innerHTML = tabs.map(([key, label, count, cls]) => `<button class="tab ${cls} ${activePrefix === key ? "active" : ""}" data-prefix="${key}">${label} (${count})</button>`).join("");
  els.prefixTabs.querySelectorAll(".tab").forEach(btn => btn.addEventListener("click", () => {
    activePrefix = btn.dataset.prefix;
    activeTab = "all";
    renderAll();
  }));
}

function renderTabs() {
  const base = prefixFilteredResults();
  const tabs = [
    ["all", "ทั้งหมด", base.length, "all-conf-filter"],
    ["High", "High Conf", base.filter(r => r.confidence === "High").length, "high-conf-filter"],
    ["Medium", "Medium Conf", base.filter(r => r.confidence === "Medium").length, "medium-conf-filter"],
    ["Low", "Low Conf", base.filter(r => r.confidence === "Low").length, "low-conf-filter"],
    ["crisis", "RH1 Crisis", base.filter(r => effectiveRh1(r).isCrisis).length, "crisis-conf-filter"],
  ];
  els.tabs.innerHTML = tabs.map(([key, label, count, cls]) => `<button class="tab ${cls} ${activeTab === key ? "active" : ""}" data-tab="${key}">${label} (${count})</button>`).join("");
  els.tabs.querySelectorAll(".tab").forEach(btn => btn.addEventListener("click", () => {
    activeTab = btn.dataset.tab;
    renderAll();
  }));
}

function scenBadges(r) {
  const rh1 = effectiveRh1(r);
  if (!rh1.isCrisis) return `<span class="muted">-</span>`;
  const badges = rh1.scenarios.length ? rh1.scenarios : ["manual"];
  return badges.map(k => `<span class="badge crisis">${CRISIS[k] ? CRISIS[k][0] : k}</span>`).join(" ");
}

function importMetrics() {
  const low = results.filter(r => r.confidence === "Low").length;
  const errors = results.filter(r => r.validationErrors.length).length;
  const warnings = results.filter(r => r.validationWarnings.length).length;
  const missingBalance = results.filter(r => r.validationErrors.includes("ไม่มี current_balance")).length;
  const ready = results.filter(r => r.uploadable).length;
  const crosswalk = results.filter(r => r.mapping_source === "crosswalk").length;
  const conflicts = results.filter(r => r.mapping_conflict).length;
  return { ready, low, errors, warnings, missingBalance, crosswalk, conflicts };
}

function renderImportPanel() {
  if (!els.importPanel) return;
  const m = importMetrics();
  els.importPanel.classList.toggle("hidden", results.length === 0);
  els.importSummary.innerHTML = [
    ["ส่งได้", m.ready, "ready-stat"],
    ["Low Conf", m.low, "warn-stat"],
    ["ข้อมูลผิด", m.errors, "error-stat"],
    ["คำเตือน", m.warnings, "warn-stat"],
    ["ไม่มียอดคงเหลือ", m.missingBalance, "error-stat"],
    ["Crosswalk", m.crosswalk, "ready-stat"],
    ["Conflict", m.conflicts, "error-stat"],
  ].map(([label, value, cls]) => `<div class="stat ${cls}"><strong>${value}</strong><span>${label}</span></div>`).join("");
  if (crosswalkIndex.status) {
    els.importSummary.insertAdjacentHTML("beforeend", `<div class="stat"><strong>${escapeHtml(crosswalkIndex.loaded ? "ON" : "OFF")}</strong><span>crosswalk: ${escapeHtml(crosswalkIndex.status)}</span></div>`);
  }
  els.uploadDashboardBtn.disabled = m.ready === 0;
}

function validationText(r) {
  const parts = [];
  if (r.validationErrors.length) parts.push(`Error: ${r.validationErrors.join(", ")}`);
  if (r.validationWarnings.length) parts.push(`Warn: ${r.validationWarnings.join(", ")}`);
  return parts.join(" · ") || "พร้อมส่ง";
}

function findRow(rowNo) {
  return results.find(r => r.row === rowNo);
}

function mappingDetails(mapping) {
  const prefix = mapping.prefix || "—";
  const groupCode = mapping.groupCode || "";
  if (prefix === "MS") {
    const info = STSG[groupCode] || [];
    const type = info[0] || "";
    return {
      system: "MS : Medical Supply",
      major: type ? `${type} · ${MS_TYPE_NAMES[type] || ""}` : "MS",
      subgroup: groupCode ? `${groupCode} · ${info[1] || mapping.group || "-"}` : "-",
      category: info[2] || mapping.groupThai || mapping.group || "-",
      specHint: mapping.specHint || getSpecHint("MS", groupCode),
    };
  }
  if (prefix === "MD") {
    return {
      system: "MD : Medical Device",
      major: groupCode ? `MD-${groupCode} · ${MD_CATS[groupCode] || "-"}` : "MD",
      subgroup: "GMDN 5 หลัก",
      category: mapping.group || MD_CATS[groupCode] || "-",
      specHint: mapping.specHint || getSpecHint("MD", groupCode),
    };
  }
  if (prefix === "GS") {
    return {
      system: "GS : General Supply",
      major: groupCode ? `GS-${groupCode} · ${GS_GROUPS[groupCode] || "-"}` : "GS",
      subgroup: "UNSPSC 8 หลัก",
      category: mapping.group || GS_GROUPS[groupCode] || "-",
      specHint: mapping.specHint || getSpecHint("GS", groupCode),
    };
  }
  return {
    system: "ยังไม่จัดกลุ่ม",
    major: "-",
    subgroup: "-",
    category: mapping.group || "-",
    specHint: mapping.specHint || "-",
  };
}

function mappingPreviewHtml(mapping, label = "ผลลัพธ์") {
  const d = mappingDetails(mapping);
  return `
    <div><strong>${label}</strong></div>
    <div style="margin-top:6px">
      <span class="chip ${String(mapping.prefix).toLowerCase()}">${escapeHtml(mapping.prefix)}</span>
      <span class="mono">${escapeHtml(mapping.suggestedCode)}</span>
      <span class="badge ${mapping.confidence.toLowerCase()}">${escapeHtml(mapping.confidence)} Conf ${mapping.score}</span>
    </div>
    <div class="mapping-details">
      <div class="mapping-detail"><b>ระบบ / กลุ่มใหญ่</b><span>${escapeHtml(d.system)}</span></div>
      <div class="mapping-detail"><b>หมวดสินค้า</b><span>${escapeHtml(d.major)}</span></div>
      <div class="mapping-detail"><b>กลุ่มย่อย</b><span>${escapeHtml(d.subgroup)}</span></div>
      <div class="mapping-detail"><b>ชื่อกลุ่ม / Category</b><span>${escapeHtml(d.category)}</span></div>
      <div class="mapping-detail wide"><b>Spec Hint</b><span>${escapeHtml(d.specHint)}</span></div>
    </div>
  `;
}

function setEditPreview(html, state = "") {
  els.editPreview.className = `edit-preview ${state}`.trim();
  els.editPreview.innerHTML = html;
}

function optionHtml(value, label, selected = false) {
  return `<option value="${escapeHtml(value)}" ${selected ? "selected" : ""}>${escapeHtml(label)}</option>`;
}

function refreshCrisisPreviewOnly() {
  const row = findRow(editingRh1Row);
  if (!row) return;
  const oldMode = row.rh1_override;
  const oldScenarios = row.rh1_override_scenarios;
  applyCrisisOverride(row);
  els.rh1CurrentInfo.textContent = crisisSummary(row);
  renderCrisisControls(row);
  els.rh1Preview.className = "edit-preview ok";
  els.rh1Preview.innerHTML = `
    <div><strong>สถานะที่จะบันทึก</strong></div>
    <div style="margin-top:6px">${effectiveRh1(row).isCrisis ? `<span class="badge crisis">RH1 Crisis (${effectiveRh1(row).source})</span>` : `<span class="muted">ไม่ใช่ RH1 Crisis (${effectiveRh1(row).source})</span>`}</div>
    <div style="margin-top:6px">${scenBadges(row)}</div>
  `;
  row.rh1_override = oldMode;
  row.rh1_override_scenarios = oldScenarios;
}

function renderMappingSelectors(prefix = "MS", major = "", subgroup = "") {
  els.systemSelect.innerHTML = [
    optionHtml("MS", "MS : Medical Supply", prefix === "MS"),
    optionHtml("MD", "MD : Medical Device", prefix === "MD"),
    optionHtml("GS", "GS : General Supply", prefix === "GS"),
  ].join("");

  if (prefix === "MS") {
    const msTypes = [...new Set(Object.values(STSG).map(v => v[0]))].sort();
    const selectedMajor = major || msTypes[0] || "";
    els.majorGroupSelect.innerHTML = msTypes.map(t => optionHtml(t, `${t} · ${MS_TYPE_NAMES[t] || ""}`, t === selectedMajor)).join("");
    const groups = Object.entries(STSG).filter(([, info]) => info[0] === selectedMajor);
    const selectedSub = subgroup || (groups[0] ? groups[0][0] : "");
    els.subGroupSelect.innerHTML = groups.map(([sg, info]) => optionHtml(sg, `${sg} · ${info[1]} · ${info[2]}`, sg === selectedSub)).join("");
    els.manualCodeInput.value = selectedSub ? `MS-${selectedSub}` : "";
    previewSelectorCode(false);
    return;
  }

  if (prefix === "MD") {
    const cats = Object.entries(MD_CATS);
    const selectedMajor = major || (cats[0] ? cats[0][0] : "");
    els.majorGroupSelect.innerHTML = cats.map(([cat, name]) => optionHtml(cat, `MD-${cat} · ${name}`, cat === selectedMajor)).join("");
    const items = MD_GMDN.filter(x => x.cat === selectedMajor);
    const selectedSub = subgroup || (items[0] ? items[0].code : "");
    els.subGroupSelect.innerHTML = [
      optionHtml("", "เลือก GMDN item เพื่อเติมรหัส 5 หลัก", !selectedSub),
      ...items.map(x => optionHtml(x.code, `${x.code} · ${x.name}`, x.code === selectedSub)),
    ].join("");
    els.manualCodeInput.value = selectedSub ? `MD-${selectedMajor}-${selectedSub}` : `MD-${selectedMajor}`;
    previewSelectorCode(false);
    return;
  }

  const groups = Object.entries(GS_GROUPS);
  const selectedMajor = major || (groups[0] ? groups[0][0] : "");
  els.majorGroupSelect.innerHTML = groups.map(([grp, name]) => optionHtml(grp, `GS-${grp} · ${name}`, grp === selectedMajor)).join("");
  const items = GS_UNSPSC.filter(x => x.grp === selectedMajor);
  const selectedSub = subgroup || (items[0] ? items[0].code : "");
  els.subGroupSelect.innerHTML = [
    optionHtml("", "เลือก UNSPSC item เพื่อเติมรหัส 8 หลัก", !selectedSub),
    ...items.map(x => optionHtml(x.code, `${x.code} · ${x.name}`, x.code === selectedSub)),
  ].join("");
  els.manualCodeInput.value = selectedSub ? `GS-${selectedMajor}-${selectedSub}` : `GS-${selectedMajor}`;
  previewSelectorCode(false);
}

function selectorStateFromRow(row) {
  const prefix = ["MS", "MD", "GS"].includes(row.prefix) ? row.prefix : "MS";
  if (prefix === "MS") {
    const info = STSG[row.groupCode] || [];
    return { prefix, major: info[0] || "MS01", subgroup: row.groupCode || "" };
  }
  if (prefix === "MD") return { prefix, major: row.groupCode || "02", subgroup: (row.suggestedCode.match(/^MD-\d{2}-(\d{5})$/) || [])[1] || "" };
  if (prefix === "GS") return { prefix, major: row.groupCode || "07", subgroup: (row.suggestedCode.match(/^GS-\d{2}-(\d{8})$/) || [])[1] || "" };
  return { prefix: "MS", major: "MS01", subgroup: "" };
}

function previewSelectorCode(enableSave = true) {
  const code = els.manualCodeInput.value.trim();
  const parsed = codeMappingFromManual(code);
  if (parsed.ok) {
    pendingEdit = { type: "manual-code", code: code.toUpperCase(), mapping: parsed.mapping };
    setEditPreview(mappingPreviewHtml(parsed.mapping, "ผลจาก dropdown / Master Code"), "ok");
    els.saveEditBtn.disabled = enableSave ? false : els.saveEditBtn.disabled;
    return;
  }
  const prefix = els.systemSelect.value;
  const major = els.majorGroupSelect.value;
  const pseudo = {
    prefix,
    groupCode: major,
    suggestedCode: code || `${prefix}-${major}`,
    spec: "",
    specHint: getSpecHint(prefix, major),
    confidence: "Low",
    score: 0,
    group: prefix === "MS" ? "" : prefix === "MD" ? MD_CATS[major] : GS_GROUPS[major],
    groupThai: "",
  };
  setEditPreview(`${mappingPreviewHtml(pseudo, "เลือกกลุ่มแล้ว แต่ยังต้องเลือก/เติมรหัสให้ครบ")}<div class="muted" style="margin-top:8px">${escapeHtml(parsed.error)}</div>`, "err");
  if (enableSave) els.saveEditBtn.disabled = true;
}

function syncCodeFromSelectors() {
  const prefix = els.systemSelect.value;
  const major = els.majorGroupSelect.value;
  const sub = els.subGroupSelect.value;
  els.manualCodeInput.value = prefix === "MS" ? (sub ? `MS-${sub}` : "") : prefix === "MD" ? (sub ? `MD-${major}-${sub}` : `MD-${major}`) : (sub ? `GS-${major}-${sub}` : `GS-${major}`);
  previewSelectorCode(true);
}

function openEditModal(rowNo, mode = "edit") {
  const row = findRow(rowNo);
  if (!row) return;
  editingRow = rowNo;
  pendingEdit = null;
  els.editRowLabel.textContent = `แถว ${row.row} · ${row.local_code || "ไม่มี Local Code"}`;
  els.editNameInput.value = row.edited_name || row.original_name;
  const state = selectorStateFromRow(row);
  renderMappingSelectors(state.prefix, state.major, state.subgroup);
  els.manualCodeInput.value = row.manual_code || (mode === "confirm" && row.suggestedCode !== "—" ? row.suggestedCode : els.manualCodeInput.value);
  setEditPreview(`
    <div><strong>ข้อมูลปัจจุบัน</strong></div>
    <div style="margin-top:6px"><span class="mono">${escapeHtml(row.suggestedCode || "-")}</span> <span class="badge ${row.confidence.toLowerCase()}">${row.confidence} Conf ${row.score}</span></div>
    ${mappingPreviewHtml(row, "รายละเอียดกลุ่มปัจจุบัน")}
    <div class="muted">${escapeHtml(validationText(row))}</div>
  `);
  els.saveEditBtn.disabled = true;
  els.editModal.classList.remove("hidden");
}

function crisisSummary(row) {
  const current = effectiveRh1(row);
  if (!current.isCrisis) return `ไม่ใช่ RH1 Crisis (${current.source})`;
  const labels = current.scenarios.length ? current.scenarios.map(k => CRISIS[k] ? `${CRISIS[k][0]} · ${k}` : k).join(", ") : "ยังไม่ระบุประเภท";
  return `ใช่ RH1 Crisis (${current.source}) · ${labels}`;
}

function renderCrisisControls(row) {
  const current = effectiveRh1(row);
  els.rh1CurrentInfo.textContent = crisisSummary(row);
  els.rh1OverrideSelect.value = row.rh1_override || "auto";
  const selected = new Set(row.rh1_override_scenarios?.length ? row.rh1_override_scenarios : current.scenarios);
  els.rh1ScenarioChecks.innerHTML = Object.entries(CRISIS).map(([key, value]) => `
    <label>
      <input type="checkbox" value="${escapeHtml(key)}" ${selected.has(key) ? "checked" : ""} ${els.rh1OverrideSelect.value === "no" ? "disabled" : ""} />
      <span>${escapeHtml(value[0])} · ${escapeHtml(key)}</span>
    </label>
  `).join("");
  els.rh1ScenarioChecks.querySelectorAll("input").forEach(input => input.addEventListener("change", refreshCrisisPreviewOnly));
}

function selectedScenarios() {
  return Array.from(els.rh1ScenarioChecks.querySelectorAll("input:checked")).map(o => o.value);
}

function applyCrisisOverride(row) {
  row.rh1_override = els.rh1OverrideSelect.value;
  row.rh1_override_scenarios = row.rh1_override === "yes" ? selectedScenarios() : [];
}

function closeEditModal() {
  editingRow = null;
  pendingEdit = null;
  els.editModal.classList.add("hidden");
}

function previewEditedName() {
  const name = els.editNameInput.value.trim();
  if (!name) {
    setEditPreview("กรุณาระบุชื่อสินค้า", "err");
    els.saveEditBtn.disabled = true;
    return;
  }
  const mappingText = buildMappingText(name, findRow(editingRow)?.item_detail || "");
  const mapping = matchItem(mappingText);
  pendingEdit = { type: "edited-name", name, mappingText, mapping };
  const ok = mapping.confidence !== "Low";
  setEditPreview(mappingPreviewHtml(mapping, "ผลจากชื่อที่แก้"), ok ? "ok" : "err");
  els.saveEditBtn.disabled = !ok;
}

function previewManualCode() {
  const parsed = codeMappingFromManual(els.manualCodeInput.value);
  if (!parsed.ok) {
    pendingEdit = null;
    setEditPreview(escapeHtml(parsed.error), "err");
    els.saveEditBtn.disabled = true;
    return;
  }
  pendingEdit = { type: "manual-code", code: String(els.manualCodeInput.value).trim().toUpperCase(), mapping: parsed.mapping };
  setEditPreview(mappingPreviewHtml(parsed.mapping, "ผลจาก Master Code"), "ok");
  els.saveEditBtn.disabled = false;
}

function saveEdit() {
  const row = findRow(editingRow);
  if (!row) return;
  if (!pendingEdit) {
    validateMappedRow(row);
    markDuplicates();
    closeEditModal();
    renderAll();
    return;
  }
  row.import_code_error = "";
  row.import_code_warning = "";
  row.mapping_conflict = "";
  if (pendingEdit.type === "edited-name") {
    row.edited_name = pendingEdit.name;
    row.mapping_text = pendingEdit.mappingText;
    row.manual_confirmed = false;
    row.manual_code = "";
    row.mapping_source = "edited-name";
    applyMapping(row, pendingEdit.mapping);
  } else {
    row.manual_code = pendingEdit.code;
    row.manual_confirmed = true;
    row.mapping_source = "manual-code";
    applyMapping(row, pendingEdit.mapping);
  }
  validateMappedRow(row);
  markDuplicates();
  closeEditModal();
  renderAll();
}

function openRh1Modal(rowNo) {
  const row = findRow(rowNo);
  if (!row) return;
  editingRh1Row = rowNo;
  els.rh1RowLabel.textContent = `แถว ${row.row} · ${row.local_code || "ไม่มี Local Code"}`;
  els.rh1ProductName.textContent = row.edited_name || row.original_name;
  els.rh1ProductMeta.textContent = `${row.suggestedCode || "-"} · ${row.prefix || "-"} · ${row.group || "-"}`;
  renderCrisisControls(row);
  els.rh1Preview.className = "edit-preview";
  els.rh1Preview.innerHTML = `
    <div><strong>ข้อมูล RH1 เดิม</strong></div>
    <div style="margin-top:6px">${effectiveRh1(row).isCrisis ? `<span class="badge crisis">RH1 Crisis (${effectiveRh1(row).source})</span>` : `<span class="muted">ไม่ใช่ RH1 Crisis (${effectiveRh1(row).source})</span>`}</div>
    <div style="margin-top:6px">${scenBadges(row)}</div>
  `;
  els.rh1Modal.classList.remove("hidden");
}

function closeRh1Modal() {
  editingRh1Row = null;
  els.rh1Modal.classList.add("hidden");
}

function saveRh1Only() {
  const row = findRow(editingRh1Row);
  if (!row) return;
  applyCrisisOverride(row);
  validateMappedRow(row);
  markDuplicates();
  closeRh1Modal();
  renderAll();
}

function quickRemapRow(rowNo) {
  const row = findRow(rowNo);
  if (!row) return;
  const name = row.edited_name || row.original_name;
  const mappingText = buildMappingText(name, row.item_detail || "");
  const mapping = matchItem(mappingText);
  row.mapping_text = mappingText;
  row.mapping_source = row.edited_name ? "edited-name" : "auto";
  row.manual_code = "";
  row.manual_confirmed = false;
  row.import_code_error = "";
  row.import_code_warning = "";
  row.mapping_conflict = "";
  applyMapping(row, mapping);
  validateMappedRow(row);
  markDuplicates();
  renderAll();
}

function useConflictCode(rowNo, source) {
  const row = findRow(rowNo);
  if (!row) return;
  const code = source === "crosswalk" ? row.crosswalk_code : row.incoming_master_code;
  const parsed = codeMappingFromManual(code);
  if (!parsed.ok) {
    alert(parsed.error);
    return;
  }
  row.manual_code = parsed.mapping.suggestedCode;
  row.manual_confirmed = true;
  row.mapping_source = source === "crosswalk" ? "crosswalk" : "file-master-code";
  row.mapping_conflict = "";
  row.import_code_error = "";
  row.import_code_warning = "";
  applyMapping(row, parsed.mapping);
  if (source === "crosswalk") {
    const match = findCrosswalkMatch(row);
    applyCrosswalkRh1(row, match?.entry);
  }
  validateMappedRow(row);
  markDuplicates();
  renderAll();
}

function renderTable() {
  const data = filteredResults();
  els.resultsBody.innerHTML = data.map((r, i) => `
    <tr class="${r.rh1 ? "crisis-row" : ""}">
      <td>${i + 1}</td>
      <td class="name-cell">${escapeHtml(r.original_name)}${r.item_detail ? `<span class="source-note">detail: ${escapeHtml(r.item_detail)}</span>` : ""}${r.mapping_text && r.mapping_text !== r.original_name ? `<span class="source-note">mapping text: ${escapeHtml(r.mapping_text)}</span>` : ""}${r.edited_name ? `<span class="source-note">แก้เป็น: ${escapeHtml(r.edited_name)}</span>` : ""}${r.incoming_master_code ? `<span class="source-note">incoming master: ${escapeHtml(r.incoming_master_code)}</span>` : ""}${r.crosswalk_code ? `<span class="source-note">crosswalk: ${escapeHtml(r.crosswalk_code)}${r.crosswalk_match_type ? ` (${escapeHtml(r.crosswalk_match_type)})` : ""}</span>` : ""}${r.mapping_source && r.mapping_source !== "auto" ? `<span class="source-note">source: ${escapeHtml(r.mapping_source)}</span>` : ""}${r.mapping_conflict ? `<span class="source-note conflict-note">conflict: ${escapeHtml(r.mapping_conflict)}</span>` : ""}</td>
      <td class="mono">${escapeHtml(r.local_code || "-")}</td>
      <td>${escapeHtml(r.unit || r.rh1?.unit || "")}</td>
      <td><span class="chip ${String(r.prefix).toLowerCase()}">${r.prefix}</span></td>
      <td class="mono">${escapeHtml(r.suggestedCode)}</td>
      <td class="mono spec-cell">${escapeHtml(r.spec || "-")}</td>
      <td class="spec-hint">${escapeHtml(r.specHint || "-")}</td>
      <td class="mono">${escapeHtml(r.groupCode || "-")}</td>
      <td>${escapeHtml(r.group)}${r.groupThai ? `<br><span class="muted">${escapeHtml(r.groupThai)}</span>` : ""}</td>
      <td class="mono">${escapeHtml(r.current_balance || "-")}</td>
      <td class="mono">${escapeHtml(r.daily_usage_rate || "-")}</td>
      <td class="mono">${escapeHtml(r.status || "-")}</td>
      <td class="mono">${escapeHtml(r.leadtime || "-")}</td>
      <td><span class="badge ${r.confidence.toLowerCase()}">${r.confidence} Conf ${r.score}</span></td>
      <td>${effectiveRh1(r).isCrisis ? `<span class="badge crisis">ใช่${effectiveRh1(r).id ? ` #${effectiveRh1(r).id}` : ""}</span><span class="source-note">${escapeHtml(effectiveRh1(r).source)}</span>` : `<span class="muted">ไม่ใช่</span>${effectiveRh1(r).source !== "auto" ? `<span class="source-note">${escapeHtml(effectiveRh1(r).source)}</span>` : ""}`}</td>
      <td>${scenBadges(r)}</td>
      <td class="validation-cell">${escapeHtml(validationText(r))}</td>
      <td class="action-cell">
        ${r.mapping_conflict ? `<button class="row-action confirm" data-action="use-master" data-row="${r.row}">ใช้ master_code</button><button class="row-action" data-action="use-crosswalk" data-row="${r.row}">ใช้ crosswalk</button>` : ""}
        ${(r.confidence === "Low" || r.validationErrors.length) ? `<button class="row-action" data-action="edit" data-row="${r.row}">แก้ไข</button><button class="row-action" data-action="remap" data-row="${r.row}">เช็คใหม่</button><button class="row-action confirm" data-action="confirm" data-row="${r.row}">ยืนยัน Code</button>` : `<span class="muted">พร้อม</span>`}
        <button class="row-action crisis-action" data-action="rh1" data-row="${r.row}">RH1 Crisis</button>
      </td>
    </tr>
  `).join("");
  els.resultsBody.querySelectorAll("[data-action]").forEach(btn => btn.addEventListener("click", () => {
    const rowNo = Number(btn.dataset.row);
    if (btn.dataset.action === "remap") quickRemapRow(rowNo);
    else if (btn.dataset.action === "use-master") useConflictCode(rowNo, "master");
    else if (btn.dataset.action === "use-crosswalk") useConflictCode(rowNo, "crosswalk");
    else if (btn.dataset.action === "rh1") openRh1Modal(rowNo);
    else openEditModal(rowNo, btn.dataset.action);
  }));
}

function renderAll() {
  renderStats();
  renderImportPanel();
  renderPrefixTabs();
  renderTabs();
  renderTable();
  els.resultsPanel.classList.toggle("hidden", results.length === 0);
}

function renderLookup() {
  const q = els.lookupInput.value.trim();
  if (!q) {
    els.lookupResult.className = "lookup-result muted";
    els.lookupResult.textContent = "พิมพ์ชื่อสินค้าแล้วกดค้นหา";
    return;
  }
  const r = matchItem(q);
  els.lookupResult.className = "lookup-result";
  els.lookupResult.innerHTML = `
    <div class="stat">
      <strong><span class="chip ${String(r.prefix).toLowerCase()}">${r.prefix}</span> <span class="mono">${escapeHtml(r.suggestedCode)}</span></strong>
      <span>${escapeHtml(r.group)} ${r.groupThai ? `· ${escapeHtml(r.groupThai)}` : ""}</span>
      <div style="margin-top:8px">
        <span class="badge ${r.confidence.toLowerCase()}">${r.confidence} Conf ${r.score}</span>
        ${r.rh1 ? `<span class="badge crisis">RH1 Crisis #${r.rh1.id}</span> ${scenBadges(r)}` : `<span class="muted">ไม่พบใน RH1 Crisis DB</span>`}
      </div>
    </div>`;
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function csvEscape(v) {
  const s = String(v ?? "");
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function buildDashboardPayload() {
  const hospitalId = els.hospitalId?.value.trim() || "";
  return {
    source: "rh1-supply-mapper",
    version: "3.1-direct-upload",
    hospital_id: hospitalId,
    imported_at: new Date().toISOString(),
    total_rows: results.length,
    upload_rows: results.filter(r => r.uploadable).length,
    crosswalk_loaded: !!crosswalkIndex.loaded,
    crosswalk_status: crosswalkIndex.status,
    rows: results.filter(r => r.uploadable).map(r => ({
      hospital_id: hospitalId,
      source_dr_code: r.local_code || "",
      source_dr_name: r.original_name,
      source_dr_detail: r.item_detail || null,
      mapping_text: r.mapping_text || r.original_name,
      unit: r.unit || r.rh1?.unit || "",
      mapped_code: r.suggestedCode,
      mapped_name: r.group,
      mapped_prefix: r.prefix,
      mapped_group: r.groupCode,
      spec: r.spec || "",
      confidence: r.confidence,
      score: r.score,
      rh1_crisis: effectiveRh1(r).isCrisis,
      rh1_id: effectiveRh1(r).id,
      rh1_source: effectiveRh1(r).source,
      scenarios: effectiveRh1(r).scenarios,
      edited_name: r.edited_name || null,
      incoming_master_code: r.incoming_master_code || null,
      crosswalk_code: r.crosswalk_code || null,
      crosswalk_match_type: r.crosswalk_match_type || null,
      manual_code: r.manual_code || null,
      manual_confirmed: !!r.manual_confirmed,
      mapping_source: r.mapping_source || "auto",
      mapping_conflict: r.mapping_conflict || null,
      current_balance: toNumberOrBlank(r.current_balance).value,
      daily_usage_rate: toNumberOrBlank(r.daily_usage_rate).blank ? null : toNumberOrBlank(r.daily_usage_rate).value,
      status: String(r.status || "").trim() || null,
      leadtime: toNumberOrBlank(r.leadtime).blank ? null : toNumberOrBlank(r.leadtime).value,
      validation_warnings: r.validationWarnings,
    })),
    rejected_rows: results.filter(r => !r.uploadable).map(r => ({
      source_dr_code: r.local_code || "",
      source_dr_name: r.original_name,
      source_dr_detail: r.item_detail || null,
      mapping_text: r.mapping_text || r.original_name,
      mapped_code: r.suggestedCode,
      confidence: r.confidence,
      edited_name: r.edited_name || null,
      incoming_master_code: r.incoming_master_code || null,
      crosswalk_code: r.crosswalk_code || null,
      crosswalk_match_type: r.crosswalk_match_type || null,
      manual_code: r.manual_code || null,
      mapping_source: r.mapping_source || "auto",
      mapping_conflict: r.mapping_conflict || null,
      validation_errors: r.validationErrors,
      validation_warnings: r.validationWarnings,
    })),
  };
}

async function uploadToDashboard() {
  const endpoint = els.apiEndpoint.value.trim();
  if (!endpoint) {
    alert("กรุณาระบุ Dashboard API endpoint");
    return;
  }
  const payload = buildDashboardPayload();
  if (!payload.rows.length) {
    alert("ไม่มีรายการที่พร้อมส่ง กรุณาตรวจสอบ Low Conf หรือข้อมูลที่ผิดก่อน");
    return;
  }
  els.uploadDashboardBtn.disabled = true;
  els.uploadStatus.className = "upload-status";
  els.uploadStatus.textContent = `กำลังส่ง ${payload.rows.length} รายการไปยัง dashboard...`;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    let body = text;
    try { body = JSON.stringify(JSON.parse(text), null, 2); } catch (_) {}
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${body.slice(0, 500)}`);
    els.uploadStatus.textContent = `ส่งสำเร็จ ${payload.rows.length} รายการ · response: ${body.slice(0, 500)}`;
  } catch (err) {
    els.uploadStatus.className = "upload-status crisis";
    els.uploadStatus.textContent = `Upload ไม่สำเร็จ: ${err.message}`;
  } finally {
    renderImportPanel();
  }
}

function exportExcel() {
  const header = ["ชื่อสินค้า", "Item Detail", "Mapping Text", "Edited Name", "Local Code", "Incoming Master Code", "Crosswalk Code", "Crosswalk Match", "Mapping Conflict", "หน่วย", "Prefix", "Suggested Code", "Spec", "Spec Hint", "STSG/Group", "Group", "Current Balance", "Daily Usage Rate", "Status", "Leadtime", "Confidence", "Score", "RH1 Crisis", "RH1 ID", "RH1 Source", "Scenarios", "Uploadable", "Mapping Source", "Manual Code", "Validation"];
  const toRow = r => [r.original_name, r.item_detail || "", r.mapping_text || r.original_name, r.edited_name || "", r.local_code, r.incoming_master_code || "", r.crosswalk_code || "", r.crosswalk_match_type || "", r.mapping_conflict || "", r.unit, r.prefix, r.suggestedCode, r.spec, r.specHint, r.groupCode, r.group, r.current_balance, r.daily_usage_rate, r.status, r.leadtime, r.confidence, r.score, effectiveRh1(r).isCrisis ? "YES" : "NO", effectiveRh1(r).id || "", effectiveRh1(r).source, effectiveRh1(r).scenarios.join("|") || "", r.uploadable ? "YES" : "NO", r.mapping_source || "auto", r.manual_code || "", validationText(r)];
  const rows = filteredResults().map(toRow);
  const downloadBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  if (!window.XLSX) {
    const csv = [header, ...rows].map(row => row.map(csvEscape).join(",")).join("\r\n");
    downloadBlob(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }), "rh1_supply_mapped.csv");
    return;
  }

  try {
    const scoped = prefixFilteredResults();
    const sheets = [
      { name: "ทั้งหมด (All)", data: scoped },
      { name: "High", data: scoped.filter(r => r.confidence === "High") },
      { name: "Medium", data: scoped.filter(r => r.confidence === "Medium") },
      { name: "Low", data: scoped.filter(r => r.confidence === "Low") },
      { name: "RH1 Crisis Items", data: scoped.filter(r => effectiveRh1(r).isCrisis) },
    ];
    const wb = XLSX.utils.book_new();
    const cols = [{ wch: 36 }, { wch: 16 }, { wch: 42 }, { wch: 36 }, { wch: 14 }, { wch: 22 }, { wch: 10 }, { wch: 8 }, { wch: 20 }, { wch: 10 }, { wch: 34 }, { wch: 12 }, { wch: 28 }, { wch: 14 }, { wch: 16 }, { wch: 10 }, { wch: 10 }, { wch: 12 }, { wch: 8 }, { wch: 10 }, { wch: 10 }, { wch: 16 }, { wch: 10 }, { wch: 14 }, { wch: 20 }, { wch: 18 }, { wch: 42 }];
    sheets.forEach(sheet => {
      const ws = XLSX.utils.aoa_to_sheet([header, ...sheet.data.map(toRow)]);
      ws["!cols"] = cols;
      XLSX.utils.book_append_sheet(wb, ws, sheet.name);
    });
    const array = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    downloadBlob(new Blob([array], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), "rh1_supply_mapped.xlsx");
  } catch (err) {
    alert(`Export Excel ไม่สำเร็จ: ${err.message}`);
  }
}

async function handleFile(file) {
  if (!file) return;
  els.fileName.textContent = `กำลังอ่าน ${file.name}...`;
  try {
    const rows = await readFile(file);
    els.fileName.textContent = `กำลังโหลด crosswalk และ map ${file.name}...`;
    await loadCrosswalk();
    results = mapRows(rows);
    activeTab = "all";
    activePrefix = "all";
    els.fileName.textContent = file.name;
    renderAll();
  } catch (err) {
    els.fileName.textContent = "อ่านไฟล์ไม่สำเร็จ";
    alert(err.message);
  }
}

els.fileInput.addEventListener("change", e => handleFile(e.target.files[0]));
["dragenter", "dragover"].forEach(ev => els.dropzone.addEventListener(ev, e => { e.preventDefault(); els.dropzone.classList.add("drag"); }));
["dragleave", "drop"].forEach(ev => els.dropzone.addEventListener(ev, e => { e.preventDefault(); els.dropzone.classList.remove("drag"); }));
els.dropzone.addEventListener("drop", e => handleFile(e.dataTransfer.files[0]));
els.searchInput.addEventListener("input", renderTable);
els.exportBtn.addEventListener("click", exportExcel);
els.uploadDashboardBtn.addEventListener("click", uploadToDashboard);
els.closeEditBtn.addEventListener("click", closeEditModal);
els.editModal.addEventListener("click", e => { if (e.target === els.editModal) closeEditModal(); });
els.checkEditedNameBtn.addEventListener("click", previewEditedName);
els.useManualCodeBtn.addEventListener("click", previewManualCode);
els.saveEditBtn.addEventListener("click", saveEdit);
els.systemSelect.addEventListener("change", () => {
  renderMappingSelectors(els.systemSelect.value);
  previewSelectorCode(true);
});
els.majorGroupSelect.addEventListener("change", () => {
  renderMappingSelectors(els.systemSelect.value, els.majorGroupSelect.value);
  previewSelectorCode(true);
});
els.subGroupSelect.addEventListener("change", syncCodeFromSelectors);
els.manualCodeInput.addEventListener("input", () => {
  pendingEdit = null;
  els.saveEditBtn.disabled = true;
});
els.closeRh1Btn.addEventListener("click", closeRh1Modal);
els.rh1Modal.addEventListener("click", e => { if (e.target === els.rh1Modal) closeRh1Modal(); });
els.saveRh1Btn.addEventListener("click", saveRh1Only);
els.rh1OverrideSelect.addEventListener("change", refreshCrisisPreviewOnly);
els.lookupBtn.addEventListener("click", renderLookup);
els.lookupInput.addEventListener("keydown", e => { if (e.key === "Enter") renderLookup(); });
els.sampleBtn.addEventListener("click", () => {
  results = SAMPLE.map((r, i) => validateMappedRow({ row: i + 1, original_name: r.name, unit: r.unit, local_code: r.local_code, current_balance: "10", daily_usage_rate: "1", status: "1", leadtime: "7", ...matchItem(r.name) }));
  markDuplicates();
  activeTab = "all";
  activePrefix = "all";
  els.fileName.textContent = "ตัวอย่างข้อมูล";
  renderAll();
});
els.resetBtn.addEventListener("click", () => {
  results = [];
  activeTab = "all";
  activePrefix = "all";
  els.fileName.textContent = "ยังไม่ได้อัปโหลดไฟล์";
  els.uploadStatus.textContent = "ยังไม่ได้ส่งข้อมูลเข้า dashboard";
  els.fileInput.value = "";
  renderAll();
});

renderAll();
