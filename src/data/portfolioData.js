export const personalInfo = {
  nameTh: "เจนกิจ สังสุณี",
  nameEn: "Jenkij Sungsunee",
  studentId: "6720210035",
  role: "AI / Machine Learning Developer & Software Engineer",
  university: "มหาวิทยาลัยทักษิณ วิทยาเขตพัทลุง",
  faculty: "คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล",
  major: "วท.บ. วิทยาการคอมพิวเตอร์และสารสนเทศ (วิชาเอก : วิทยาการดิจิทัล) ชั้นปีที่ 3",
  minor: "ผู้ประกอบการเกษตรสมัยใหม่ (โท)",
  gpax: "3.51",
  totalCreditsPassed: 94,
  totalCreditsEnrolled: 112,
  cumulativeGP: 330,
  hometown: "จ.ตรัง / พัทลุง",
  email: "jenkij1159@gmail.com",
  phone: "094-628-6524",
  github: "https://github.com/jenkij-cloud",
  status: "พร้อมรับงาน & เปิดรับโอกาสฝึกงาน",
  internshipPeriod: "เมษายน – กันยายน",
  tagline: "Developing Intelligent Medical AI & Innovative Software Solutions to Create Real-World Impact",
  bio: "นิสิตวิทยาการคอมพิวเตอร์และสารสนเทศ ม.ทักษิณ เชี่ยวชาญการพัฒนาโมเดลปัญญาประดิษฐ์ (Deep Learning & Computer Vision) ในการตรวจคัดกรองทางการแพทย์ และการสร้างเว็บแอปพลิเคชันยุคใหม่ พร้อมนำทักษะด้าน AI, Python, และ Full-Stack มาร่วมสร้างคุณค่าจริงให้กับองค์กร",
  workPrinciples: [
    {
      title: "ความถูกต้องและความแม่นยำของโมเดล AI",
      desc: "ให้ความสำคัญกับคุณภาพข้อมูล การทำ Preprocessing และการประเมินผลรอบด้าน ไม่ใช่แค่ Overall Accuracy"
    },
    {
      title: "การออกแบบระบบที่เข้าใจง่ายและใช้งานได้จริง",
      desc: "มุ่งมั่นเชื่อมต่อโมเดล AI สู่ User Interface และ Workflow ของบุคลากร เพื่อให้เกิดประโยชน์สูงสุด"
    },
    {
      title: "การสื่อสารและการต่อยอดเชิงธุรกิจ (Startup Mindset)",
      desc: "ไม่เพียงแค่เขียนโค้ด แต่เข้าใจ Pain Point ของผู้ใช้และการ Validate ผลิตภัณฑ์สู่การนำไปใช้จริง"
    },
    {
      title: "การเรียนรู้เทคโนโลยีใหม่อย่างไม่หยุดนิ่ง",
      desc: "เปิดรับคำแนะนำ เทคโนโลยีใหม่ และพร้อมปรับตัวทำงานร่วมกับทีมงานมืออาชีพอย่างกระตือรือร้น"
    }
  ],
  stats: [
    { value: "90+ ทีม", label: "คู่แข่งในการประกวด TSU Innovation Pitching League (คว้าอันดับ 1 สายแพทย์)" },
    { value: "Top 100", label: "ทีมตัวแทนผ่านเข้าชิงแชมป์ Startup Thailand League ระดับประเทศ" },
    { value: "3.51", label: "เกรดเฉลี่ยสะสม (GPAX) สาขาวิทยาการคอมพิวเตอร์และสารสนเทศ" }
  ]
};

export const projects = [
  {
    id: "lung-cancer-ai",
    title: "AI Lung Cancer Detection from CT-Scan",
    titleTh: "ระบบ AI ตรวจคัดกรองมะเร็งปอดจากภาพถ่าย CT-Scan",
    category: "Medical AI & Computer Vision",
    role: "AI / ML Developer · ทีม Jeed Jeed (จิ๊ด จิ๊ด)",
    shortDesc: "การประยุกต์ใช้เทคโนโลยีปัญญาประดิษฐ์ Deep Learning ในการตรวจคัดกรองและระบุตำแหน่งรอยโรคมะเร็งปอดจากภาพถ่าย CT-Scan เพื่อช่วยสนับสนุนการตัดสินใจของแพทย์",
    coverImage: "/images/startup-thailand-league-national.jpg",
    tags: ["Deep Learning", "PyTorch", "Python", "Computer Vision", "Medical Imaging"],
    highlights: [
      "รองชนะเลิศอันดับ 1 เทคโนโลยีทางการแพทย์ TSU Innovation Pitching League 2025 (จาก 90+ ทีม)",
      "รองชนะเลิศอันดับ 2 Startup Thailand League 2026 ระดับภูมิภาค",
      "ผ่านเข้าสู่รอบชิงแชมป์ระดับประเทศ (Championship Finalists) จาก 100 ทีมทั่วประเทศ โดย NIA (สยามพารากอน)",
      "ได้รับคัดเลือกศึกษาดูงานระบบนิเวศนวัตกรรมและเทคโนโลยี ณ ประเทศไต้หวัน"
    ],
    details: {
      problem: "มะเร็งปอดเป็นหนึ่งในสาเหตุการเสียชีวิตอันดับต้นๆ หากตรวจพบตั้งแต่ระยะเริ่มต้นจะมีโอกาสรักษาหายสูงขึ้นมาก ทว่าภาพถ่าย CT-Scan ปอดมีจำนวนสไลซ์ต่อเคสจำนวนมาก การวิเคราะห์ใช้เวลานานและต้องอาศัยรังสีแพทย์ผู้เชี่ยวชาญ",
      solution: "พัฒนาโมเดลปัญญาประดิษฐ์ตรวจจับและจำแนกรอยโรคจากภาพถ่ายรังสีส่วนตัดอาศัยคอมพิวเตอร์ (CT-Scan) เพื่อทำหน้าที่เป็น Secondary Reader ช่วยแพทย์ลดภาระงานและลดความคลาดเคลื่อนในการวินิจฉัย",
      techStack: ["Python", "PyTorch", "OpenCV", "Convolutional Neural Networks (CNN)", "Medical Image Preprocessing"],
      achievements: "นำเสนอผลงานและ Pitching จนชนะเลิศระดับมหาวิทยาลัย ระดับภูมิภาค และเป็นตัวแทนเข้าแข่งขันระดับประเทศในเวที Startup Thailand League 2026 จัดโดย สนง.นวัตกรรมแห่งชาติ (NIA) ณ สยามพารากอน ฮอลล์"
    }
  },
  {
    id: "strokeguard-ai",
    title: "StrokeGuard — AI Health Warning Application",
    titleTh: "StrokeGuard: แอปพลิเคชัน AI เฝ้าระวังโรคหลอดเลือดสมองและภาวะฉุกเฉิน",
    category: "Healthcare AI & Mobile Solution",
    role: "AI Developer & System Innovator",
    shortDesc: "แอปพลิเคชันปัญญาประดิษฐ์สำหรับตรวจประเมิน เฝ้าระวัง และแจ้งเตือนความเสี่ยงโรคหลอดเลือดสมอง (Stroke) และ Heart Stroke ล่วงหน้าเพื่อการช่วยเหลือที่ทันท่วงที",
    coverImage: "/images/strokeguard-hd.jpg",
    tags: ["Machine Learning", "HealthTech", "Python", "Mobile Application", "Predictive AI"],
    highlights: [
      "รางวัลเหรียญทองแดง (Bronze Medal) Southern Inventor Award 2026",
      "ผลงานเด่นสาขาสุขภาพและการแพทย์ ในงาน Southern Innovation Festival 2026",
      "ออกแบบการประเมินความเสี่ยงล่วงหน้าตามหลัก FAST Principle ทางการแพทย์"
    ],
    details: {
      problem: "โรคหลอดเลือดสมอง (Stroke) ต้องการการรักษาภายใน Golden Hour (ชั่วโมงทอง) เพื่อลดโอกาสพิการหรือเสียชีวิต แต่คนส่วนใหญ่ไม่ทราบสัญญาณเตือนล่วงหน้า",
      solution: "ออกแบบและพัฒนา StrokeGuard เพื่อให้ผู้ใช้และคนในครอบครัวสามารถประเมินสัญญาณเสี่ยง มีระบบ AI ช่วยจำแนกความเสี่ยง และมีช่องทางแจ้งเหตุฉุกเฉินส่งต่อไปยังสถานพยาบาลใกล้เคียงได้ทันที",
      techStack: ["Machine Learning", "Python", "Predictive Analytics", "Mobile App Prototype"],
      achievements: "ได้รับรางวัลเหรียญทองแดง ประเภทสิ่งประดิษฐ์และนวัตกรรมทางการแพทย์ จากการประกวดระดับภาคใต้ Southern Inventor Award 2026 ณ หอเปรมดนตรี มหาวิทยาลัยทักษิณ"
    }
  },
  {
    id: "taiwan-innovation-study",
    title: "Taiwan Innovation Ecosystem Fellowship & Pitching Winner",
    titleTh: "โครงการพัฒนานวัตกรรม AI และศึกษาดูงานระบบนิเวศนวัตกรรม ณ ประเทศไต้หวัน",
    category: "Innovation & Global Ecosystem",
    role: "Team Lead & AI Developer · ทีม จี๊ด จี๊ด (Jeed Jeed)",
    shortDesc: "ได้รับทุนสนับสนุนและผ่านการคัดเลือกเป็นตัวแทนศึกษาดูงานระบบนิเวศนวัตกรรมและเทคโนโลยี ณ ประเทศไต้หวัน จากผลงาน AI ตรวจคัดกรองมะเร็งปอด ในโครงการ TSU Innovation Pitching League 2025",
    coverImage: "/images/taiwan-study-trip.jpg",
    tags: ["Taiwan Ecosystem", "Medical AI", "Startup Pitching", "Global Innovation", "Tech Commercialization"],
    highlights: [
      "คว้ารางวัลและทุนสนับสนุนในโครงการ TSU Innovation Pitching League 2025",
      "ได้รับคัดเลือกเป็นตัวแทนไปศึกษาดูงานระบบนิเวศนวัตกรรม (Innovation Ecosystem) ณ ประเทศไต้หวัน",
      "ต่อยอดงานวิจัย AI ทางการแพทย์สู่โมเดลธุรกิจสตาร์ทอัพที่จับต้องได้จริง",
      "แลกเปลี่ยนองค์ความรู้ด้านเทคโนโลยี ปัญญาประดิษฐ์ และการบ่มเพาะธุรกิจระดับสากล"
    ],
    details: {
      problem: "การนำผลงานวิจัยด้านปัญญาประดิษฐ์และเทคโนโลยีขั้นสูง (Deep Tech) ออกสู่การใช้งานจริง จำเป็นต้องมีความรู้ความเข้าใจในระบบนิเวศนวัตกรรมระดับนานาชาติ และกระบวนการผลักดันผลงานวิจัยสู่เชิงพาณิชย์",
      solution: "นำเสนอผลงาน 'การประยุกต์ใช้เทคโนโลยีปัญญาประดิษฐ์ AI ในการตรวจหามะเร็งปอดจากภาพถ่าย CT Scan' ในเวที Pitching จนชนะใจคณะกรรมการ ได้รับทุนสนับสนุนและคัดเลือกเดินทางไปศึกษาระบบนิเวศสตาร์ทอัพ ณ ประเทศไต้หวัน",
      techStack: ["AI / Deep Learning", "Medical Image Analysis", "Startup Pitching", "Innovation Ecosystem", "Business Model Canvas"],
      achievements: "ได้รับคัดเลือกเดินทางไปศึกษาดูงานระบบนิเวศนวัตกรรม ณ ประเทศไต้หวัน จัดโดย คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล มหาวิทยาลัยทักษิณ"
    }
  }
];

export const skillsData = [
  {
    id: "01",
    category: "AI & Machine Learning",
    title: "ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง",
    desc: "เชี่ยวชาญการประยุกต์ใช้โมเดล Deep Learning สำหรับงาน Computer Vision, การวิเคราะห์ภาพถ่ายทางการแพทย์ (CT-Scan), การทำ Data Augmentation และการประเมินประสิทธิภาพโมเดลด้วย Confusion Matrix, Precision, Recall และ F1-score",
    tools: ["PyTorch", "Python", "Computer Vision", "OpenCV", "Deep Learning", "NumPy", "Jupyter", "Colab"]
  },
  {
    id: "02",
    category: "Software & Web Development",
    title: "การพัฒนาเว็บและซอฟต์แวร์",
    desc: "พัฒนาเว็บแอปพลิเคชันยุคใหม่ด้วย Next.js (App Router), React, TypeScript และ JavaScript จัดการโครงสร้างฐานข้อมูล ออกแบบ Responsive Layouts สไตล์ Minimalist และเชื่อมโยงระบบผ่าน REST APIs",
    tools: ["Next.js", "TypeScript", "JavaScript", "React", "Tailwind CSS", "HTML5/CSS3", "Git", "GitHub"]
  },
  {
    id: "03",
    category: "Innovation & Startup Pitching",
    title: "นวัตกรรมและการนำเสนอสตาร์ทอัพ",
    desc: "มีประสบการณ์การแข่งขัน Pitching ในระดับมหาวิทยาลัย ระดับภูมิภาค และระดับประเทศ การนำเสนอโมเดลธุรกิจ การค้นหาคุณค่าผลิตภัณฑ์ (Value Proposition) และได้รับคัดเลือกศึกษาดูงานระบบนิเวศนวัตกรรม ณ ประเทศไต้หวัน",
    tools: ["Startup Pitching", "Product Validation", "Team Leadership", "Business Model", "Presentation", "English Communication"]
  }
];

export const awardsData = [
  {
    year: "2569",
    category: "ระดับประเทศ",
    title: "ผ่านเข้ารอบชิงแชมป์ระดับประเทศ (Championship Finalists) Startup Thailand League 2026",
    desc: "ผลงาน 'การประยุกต์ใช้เทคโนโลยีปัญญาประดิษฐ์ (AI) ในการตรวจหามะเร็งปอดจากภาพถ่าย CT-Scan' ทีม JEED JEED ผ่านการคัดเลือกเป็น 100 ทีมตัวแทนจากทั่วประเทศ โดยสำนักงานนวัตกรรมแห่งชาติ (NIA) แข่งขัน ณ สยามพารากอน ฮอลล์ (25–27 มิ.ย. 2569)",
    organizer: "สำนักงานนวัตกรรมแห่งชาติ (องค์การมหาชน) - NIA",
    image: "/images/startup-thailand-league-national.jpg"
  },
  {
    year: "2569",
    category: "ระดับภาคใต้",
    title: "รางวัลเหรียญทองแดง (Bronze Medal) Southern Inventor Award 2026",
    desc: "การประกวดสิ่งประดิษฐ์และนวัตกรรม ในงาน Southern Innovation Festival 2026 กลุ่มสุขภาพและการแพทย์ ผลงาน 'StrokeGuard: แอปพลิเคชัน AI เฝ้าระวังโรคหลอดเลือดสมอง และ Heart Stroke' ณ หอเปรมดนตรี ม.ทักษิณ",
    organizer: "มหาวิทยาลัยสงขลานครินทร์ และ เครือข่ายนวัตกรรมภาคใต้",
    image: "/images/strokeguard-hd.jpg"
  },
  {
    year: "2569",
    category: "ระดับมหาวิทยาลัย",
    title: "ผ่านเข้ารอบ Campus League Final — TSU Innovation Pitching League 2026",
    desc: "ทีม Jeed Jeed (จี๊ด จี๊ด) ผ่านการคัดเลือกรอบ Campus League เข้าสู่รอบ Final ของ TSU Innovation Pitching League 2026 ประเภท Public Health, Health & Medical Technology ด้วยผลงาน AI ตรวจหามะเร็งปอดจากภาพถ่าย CT-Scan ณ วิทยาเขตพัทลุง มหาวิทยาลัยทักษิณ",
    organizer: "ฝ่ายกิจการนิสิต มหาวิทยาลัยทักษิณ (TSU Student Affairs)",
    image: "/images/tsu-pitching-2026-campus.jpg"
  },
  {
    year: "2569",
    category: "ระดับภูมิภาค",
    title: "รางวัลรองชนะเลิศอันดับ 2 Startup Thailand League 2026 ระดับภูมิภาค",
    desc: "ทีม Jeed Jeed ผลงาน AI ตรวจหามะเร็งปอดจากภาพถ่าย CT-Scan ได้รับเงินรางวัลสนับสนุน 5,000 บาท และได้สิทธิ์เป็นตัวแทนภูมิภาคเข้าสู่รอบชิงแชมป์ระดับประเทศ (18 พ.ค. 2569)",
    organizer: "อุทยานวิทยาศาสตร์และนวัตกรรมสังคม มหาวิทยาลัยทักษิณ (SSIP TSU)",
    image: "/images/startup-league-regional.jpeg"
  },
  {
    year: "2568",
    category: "ระดับมหาวิทยาลัย & ดูงานต่างประเทศ",
    title: "ได้รับทุนสนับสนุนและคัดเลือกศึกษาดูงานระบบนิเวศนวัตกรรม ณ ประเทศไต้หวัน",
    desc: "ทีม จี๊ด จี๊ด คว้ารางวัลจากการประกวด TSU Innovation Pitching League 2025 ด้วยผลงาน AI ตรวจหามะเร็งปอดจาก CT-Scan ได้รับทุนสนับสนุนและได้รับคัดเลือกเดินทางไปศึกษาดูงานระบบนิเวศนวัตกรรมและเทคโนโลยี ณ ประเทศไต้หวัน",
    organizer: "คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล มหาวิทยาลัยทักษิณ",
    image: "/images/taiwan-study-trip.jpg"
  },
  {
    year: "2568",
    category: "เกียรติประวัติ",
    title: "รางวัลเชิดชูเกียรติ นิสิตผู้สร้างชื่อเสียงและความภาคภูมิใจด้าน Startup และการเป็นผู้ประกอบการ",
    desc: "ประจำปีการศึกษา 2568 ได้รับการยกย่องเชิดชูเกียรติจากคณะวิทยาศาสตร์และนวัตกรรมดิจิทัล มหาวิทยาลัยทักษิณ ในฐานะนิสิตผู้สร้างผลงานและนำชื่อเสียงเกียรติประวัติมาสู่สถาบันในเวทีระดับประเทศ",
    organizer: "คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล มหาวิทยาลัยทักษิณ",
    image: "/images/startup-honor-hd.jpg"
  },
  {
    year: "2568",
    category: "เกียรติประวัติ",
    title: "รางวัลเชิดชูเกียรติ นิสิตดีเด่นด้านบำเพ็ญประโยชน์",
    desc: "ประจำปีการศึกษา 2568 ได้รับรางวัลเชิดชูเกียรตินิสิตดีเด่นด้านบำเพ็ญประโยชน์ จากคณะวิทยาศาสตร์และนวัตกรรมดิจิทัล มหาวิทยาลัยทักษิณ ในฐานะนิสิตผู้มีจิตสาธารณะ เสียสละ และอุทิศตนเพื่อประโยชน์ส่วนรวม",
    organizer: "คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล มหาวิทยาลัยทักษิณ",
    image: "/images/outstanding-service-award-2568.jpg"
  }
];

export const academicRecords = {
  summary: {
    studentId: "6720210035",
    nameTh: "นายเจนกิจ สังสุณี",
    nameEn: "Mr. Jenkij Sungsunee",
    university: "มหาวิทยาลัยทักษิณ (TSU)",
    campus: "วิทยาเขตพัทลุง",
    faculty: "คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล",
    program: "วท.บ. วิทยาการคอมพิวเตอร์และสารสนเทศ (วิชาเอก : วิทยาการดิจิทัล)",
    major: "วท.บ. วิทยาการคอมพิวเตอร์และสารสนเทศ (วิชาเอก : วิทยาการดิจิทัล)",
    minor: "ผู้ประกอบการเกษตรสมัยใหม่ (โท)",
    year: "ชั้นปีที่ 3",
    status: "กำลังศึกษา (Active / ปกติ)",
    gpax: "3.51",
    totalCreditsPassed: 94,
    totalCreditsEnrolled: 112,
    cumulativeGP: 330,
    advisor: "ผศ.ดร.สุวิมล จุงจิตร์ และ ผศ.สุดา เธียรมนตรี"
  },
  years: [
    {
      yearNumber: "ปีที่ 3",
      academicYear: "2569",
      summaryGpa: "3.86 (เทอม 1)",
      semesters: [
        {
          id: "2569-2",
          semester: "2/2569",
          title: "ภาคเรียนที่ 2 / 2569",
          status: "กำลังศึกษา (ยืนยันลงทะเบียนแล้ว)",
          isCurrent: true,
          creditsEnrolled: 18,
          creditsPassed: 0,
          cumulativePassed: 94,
          cumulativeEnrolled: 112,
          gpa: "-",
          gpax: "3.51",
          gp: "-",
          cumulativeGP: 330,
          courses: [
            { code: "0015121", nameTh: "พลังคนรุ่นใหม่ใจสะอาด", nameEn: "POWER OF NEW GENERATIONS WITH PURE MIND", credits: 3, grade: "กำลังเรียน" },
            { code: "0214322", nameTh: "การพัฒนาแอปพลิเคชันบนอุปกรณ์เคลื่อนที่", nameEn: "MOBILE APPLICATION DEVELOPMENT", credits: 3, grade: "กำลังเรียน" },
            { code: "0214323", nameTh: "ชุดวิชาการพัฒนาระบบปัญญาประดิษฐ์ของสรรพสิ่ง", nameEn: "ARTIFICIAL INTELLIGENCE OF THINGS SYSTEMS DEVELOPMENT MODULE", credits: 5, grade: "กำลังเรียน" },
            { code: "0214381", nameTh: "เทคโนโลยีความจริงเสมือนและความจริงแบบผสมผสาน", nameEn: "VIRTUAL REALITY AND MIXED REALITY TECHNOLOGY", credits: 3, grade: "กำลังเรียน" },
            { code: "0214391", nameTh: "สัมมนา", nameEn: "SEMINAR", credits: 1, grade: "กำลังเรียน" },
            { code: "0214392", nameTh: "โครงงานรวบยอด", nameEn: "CAPSTONE PROJECT", credits: 2, grade: "กำลังเรียน" },
            { code: "0214393", nameTh: "เตรียมความพร้อมในการฝึกประสบการณ์วิชาชีพ", nameEn: "PRE-PROFESSIONAL EXPERIENCE PRACTICE", credits: 1, grade: "กำลังเรียน" }
          ]
        },
        {
          id: "2569-1",
          semester: "1/2569",
          title: "ภาคเรียนที่ 1 / 2569",
          status: "ปกติ",
          isCurrent: false,
          creditsEnrolled: 19,
          creditsPassed: 19,
          cumulativePassed: 94,
          cumulativeEnrolled: 94,
          gpa: "3.86",
          gpax: "3.51",
          gp: 73.5,
          cumulativeGP: 330,
          courses: [
            { code: "0004272", nameTh: "ผู้ประกอบการรุ่นใหม่สร้างรายได้จากฟาร์ม", nameEn: "PROFITABLE FARM BUSINESS FOR YOUNG ENTREPRENEURS", credits: 3, grade: "A" },
            { code: "0214311", nameTh: "ชุดวิชาการตรวจสอบและการประกันคุณภาพซอฟต์แวร์", nameEn: "SOFTWARE TESTING AND QUALITY ASSURANCE MODULE", credits: 5, grade: "B+" },
            { code: "0214321", nameTh: "ชุดวิชาการออกแบบและพัฒนาเว็บแอปพลิเคชัน", nameEn: "WEB APPLICATION DESIGN AND DEVELOPMENT MODULE", credits: 5, grade: "A" },
            { code: "0214333", nameTh: "เทคโนโลยีพาณิชย์อิเล็กทรอนิกส์", nameEn: "ELECTRONIC COMMERCE TECHNOLOGY", credits: 3, grade: "A" },
            { code: "0214372", nameTh: "การออกแบบสถาปัตยกรรมของอินเทอร์เน็ตของสรรพสิ่ง", nameEn: "INTERNET OF THINGS ARCHITECTURE DESIGN", credits: 3, grade: "A" }
          ]
        }
      ]
    },
    {
      yearNumber: "ปีที่ 2",
      academicYear: "2568",
      summaryGpa: "3.45 (เฉลี่ยปี 2)",
      semesters: [
        {
          id: "2568-2",
          semester: "2/2568",
          title: "ภาคเรียนที่ 2 / 2568",
          status: "ปกติ",
          isCurrent: false,
          creditsEnrolled: 20,
          creditsPassed: 20,
          cumulativePassed: 75,
          cumulativeEnrolled: 75,
          gpa: "3.67",
          gpax: "3.42",
          gp: 73.5,
          cumulativeGP: 256.5,
          courses: [
            { code: "0214212", nameTh: "การจัดการโครงการซอฟต์แวร์", nameEn: "SOFTWARE PROJECT MANAGEMENT", credits: 2, grade: "B+" },
            { code: "0214213", nameTh: "ชุดวิชากระบวนการออกแบบซอฟต์แวร์แนวใหม่", nameEn: "MODERN SOFTWARE DESIGN PROCESS MODULE", credits: 5, grade: "B+" },
            { code: "0214221", nameTh: "ความมั่นคงปลอดภัยบนอินเทอร์เน็ต", nameEn: "INTERNET SECURITY", credits: 2, grade: "A" },
            { code: "0214241", nameTh: "การสื่อสารในยุคดิจิทัล", nameEn: "COMMUNICATION IN DIGITAL ERA", credits: 2, grade: "A" },
            { code: "0403394", nameTh: "ธุรกิจแมลงเศรษฐกิจ", nameEn: "ECONOMIC INSECTS BUSINESS", credits: 3, grade: "A" },
            { code: "0403396", nameTh: "ธุรกิจเมล็ดพันธุ์", nameEn: "SEED BUSINESS", credits: 3, grade: "A" },
            { code: "0403398", nameTh: "ธุรกิจการผลิตพืชในโรงเรือนอัจฉริยะ", nameEn: "SMART GREENHOUSE BUSINESS", credits: 3, grade: "B" }
          ]
        },
        {
          id: "2568-1",
          semester: "1/2568",
          title: "ภาคเรียนที่ 1 / 2568",
          status: "ปกติ",
          isCurrent: false,
          creditsEnrolled: 18,
          creditsPassed: 18,
          cumulativePassed: 55,
          cumulativeEnrolled: 55,
          gpa: "3.22",
          gpax: "3.32",
          gp: 58.0,
          cumulativeGP: 183.0,
          courses: [
            { code: "0214201", nameTh: "โครงสร้างข้อมูลและอัลกอริทึม", nameEn: "DATA STRUCTURES AND ALGORITHMS", credits: 2, grade: "B" },
            { code: "0214202", nameTh: "อินเทอร์เน็ตและการประมวลผลบนคลาวด์", nameEn: "INTERNET AND CLOUD PROCESSING", credits: 2, grade: "A" },
            { code: "0214203", nameTh: "การวิเคราะห์และออกแบบระบบตามประสบการณ์ผู้ใช้", nameEn: "SYSTEM ANALYSIS AND DESIGN BASED ON USER EXPERIENCE", credits: 3, grade: "B" },
            { code: "0214204", nameTh: "ระบบฐานข้อมูล", nameEn: "DATABASE SYSTEMS", credits: 2, grade: "C+" },
            { code: "0214211", nameTh: "การกำหนดความต้องการทางซอฟต์แวร์", nameEn: "SOFTWARE REQUIREMENT SPECIFICATION", credits: 3, grade: "B+" },
            { code: "0403369", nameTh: "การผลิตไม้ผลนอกฤดู", nameEn: "OFF-SEASON IN TOPICAL FRUIT PRODUCTION", credits: 3, grade: "B" },
            { code: "0403397", nameTh: "ธุรกิจเคมีภัณฑ์ทางการเกษตร", nameEn: "AGRICHEMICAL BUSINESS", credits: 3, grade: "B+" }
          ]
        }
      ]
    },
    {
      yearNumber: "ปีที่ 1",
      academicYear: "2567",
      summaryGpa: "3.38 (เฉลี่ยปี 1)",
      semesters: [
        {
          id: "2567-2",
          semester: "2/2567",
          title: "ภาคเรียนที่ 2 / 2567",
          status: "ปกติ",
          isCurrent: false,
          creditsEnrolled: 19,
          creditsPassed: 19,
          cumulativePassed: 37,
          cumulativeEnrolled: 37,
          gpa: "3.13",
          gpax: "3.37",
          gp: 59.5,
          cumulativeGP: 125.0,
          courses: [
            { code: "0000111", nameTh: "อัตลักษณ์ทักษิณและความเป็นพลเมือง", nameEn: "TSU IDENTITY AND CITIZENSHIP", credits: 3, grade: "A" },
            { code: "0000152", nameTh: "ภาษาอังกฤษเพื่อการสื่อสาร 2", nameEn: "ENGLISH FOR COMMUNICATION 2", credits: 3, grade: "C" },
            { code: "0002116", nameTh: "รู้ชีวิตรักษ์ธรรมชาติ", nameEn: "KNOW LIFE SAVE NATURE", credits: 3, grade: "A" },
            { code: "0002211", nameTh: "การคิดเชิงวิทยาศาสตร์", nameEn: "SCIENTIFIC THINKING", credits: 3, grade: "B+" },
            { code: "0214102", nameTh: "นวัตกรรมดิจิทัลและการคิดเชิงออกแบบ", nameEn: "DIGITAL INNOVATION AND DESIGN THINKING", credits: 2, grade: "A" },
            { code: "0214103", nameTh: "ความมั่นคงปลอดภัยไซเบอร์และกฎหมายดิจิทัล", nameEn: "CYBERSECURITY AND DIGITAL LAW", credits: 2, grade: "A" },
            { code: "0214104", nameTh: "คณิตศาสตร์และสถิติ", nameEn: "MATHEMATICS AND STATISTICS", credits: 3, grade: "D" },
            { code: "1000403", nameTh: "ภาษาอังกฤษสำหรับสำเร็จการศึกษา", nameEn: "ENGLISH EXIT EXAM", credits: 0, grade: "S" }
          ]
        },
        {
          id: "2567-1",
          semester: "1/2567",
          title: "ภาคเรียนที่ 1 / 2567",
          status: "ปกติ",
          isCurrent: false,
          creditsEnrolled: 18,
          creditsPassed: 18,
          cumulativePassed: 18,
          cumulativeEnrolled: 18,
          gpa: "3.63",
          gpax: "3.63",
          gp: 65.5,
          cumulativeGP: 65.5,
          courses: [
            { code: "0000151", nameTh: "ภาษาอังกฤษเพื่อการสื่อสาร 1", nameEn: "ENGLISH FOR COMMUNICATION 1", credits: 3, grade: "B" },
            { code: "0000261", nameTh: "การเป็นนวัตกรสังคมและการพัฒนานวัตกรรมสังคม", nameEn: "INNOVATOR’S MINDSET AND SOCIAL INNOVATION DEVELOPMENT", credits: 3, grade: "A" },
            { code: "0002121", nameTh: "วิทยาศาสตร์ถนอมชีวิต", nameEn: "SCIENCE CARES FOR LIFE", credits: 3, grade: "A" },
            { code: "0002212", nameTh: "ทันโลกวิทยาศาสตร์", nameEn: "SCIENCE ALERT", credits: 3, grade: "A" },
            { code: "0214101", nameTh: "แนวคิดการเขียนโปรแกรม", nameEn: "PROGRAMMING CONCEPT", credits: 2, grade: "B" },
            { code: "0216101", nameTh: "วิทยาศาสตร์พื้นฐาน", nameEn: "FUNDAMENTAL SCIENCE", credits: 3, grade: "B+" },
            { code: "0216191", nameTh: "ปฏิบัติการวิทยาศาสตร์พื้นฐาน", nameEn: "FUNDAMENTAL SCIENCE LABORATORY", credits: 1, grade: "A" }
          ]
        }
      ]
    }
  ]
};
