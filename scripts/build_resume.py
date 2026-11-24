import os
import base64
import subprocess
import fitz  # PyMuPDF

def get_image_base64(path):
    with open(path, "rb") as f:
        data = base64.b64encode(f.read()).decode("utf-8")
    ext = os.path.splitext(path)[1].lower()
    mime = "image/png" if ext == ".png" else "image/jpeg"
    return f"data:{mime};base64,{data}"

photo_path = os.path.abspath("public/images/profile.jpg")
photo_uri = get_image_base64(photo_path)

html_content = f"""<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume - Jenkij Sungsunee (เจนกิจ สังสุณี) | AI Developer & Software Engineer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    @page {{
      size: A4 portrait;
      margin: 0;
    }}
    *, *::before, *::after {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    body {{
      font-family: 'Plus Jakarta Sans', 'IBM Plex Sans Thai', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #1e293b;
      background-color: #f8fafc;
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;
      font-size: 13px;
    }}
    .page-sheet {{
      width: 210mm;
      min-height: 297mm;
      max-height: 297mm;
      margin: 0 auto;
      background: #ffffff;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      page-break-after: always;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }}
    @media print {{
      body {{
        background: transparent;
      }}
      .page-sheet {{
        box-shadow: none;
        margin: 0;
        width: 210mm;
        height: 297mm;
        max-height: 297mm;
      }}
    }}

    /* Top Accent Header Bar */
    .header-bar {{
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #1e3a8a 100%);
      color: #ffffff;
      padding: 24px 32px 20px 32px;
      display: flex;
      align-items: center;
      gap: 24px;
      position: relative;
    }}
    .header-bar::after {{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #06b6d4, #10b981);
    }}
    .avatar-wrapper {{
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.9);
      overflow: hidden;
      flex-shrink: 0;
      background: #334155;
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    }}
    .avatar-wrapper img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
    }}
    .header-info {{
      flex: 1;
    }}
    .header-name-th {{
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }}
    .header-name-en {{
      font-size: 14px;
      font-weight: 500;
      color: #94a3b8;
      margin-top: 2px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }}
    .header-target-role {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(59, 130, 246, 0.2);
      border: 1px solid rgba(147, 197, 253, 0.35);
      color: #60a5fa;
      font-size: 11.5px;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 20px;
      margin-top: 6px;
    }}
    .header-target-role span.dot {{
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #10b981;
    }}

    /* Contact Strip */
    .contact-strip {{
      display: flex;
      flex-wrap: wrap;
      gap: 12px 18px;
      margin-top: 10px;
      font-size: 11.5px;
      color: #cbd5e1;
    }}
    .contact-item {{
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }}
    .contact-item svg {{
      width: 13px;
      height: 13px;
      stroke: #93c5fd;
      flex-shrink: 0;
    }}
    .contact-item a {{
      color: inherit;
      text-decoration: none;
    }}

    /* Main Two-Column Layout */
    .page-content {{
      padding: 20px 30px;
      display: grid;
      grid-template-columns: 2.1fr 1fr;
      gap: 22px;
      flex: 1;
    }}
    .col-main {{
      display: flex;
      flex-direction: column;
      gap: 16px;
    }}
    .col-side {{
      display: flex;
      flex-direction: column;
      gap: 16px;
      border-left: 1px solid #e2e8f0;
      padding-left: 18px;
    }}

    /* Section Styling */
    .section {{
      display: flex;
      flex-direction: column;
      gap: 8px;
    }}
    .section-title {{
      font-size: 13px;
      font-weight: 700;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;
      gap: 6px;
      padding-bottom: 4px;
      border-bottom: 1.5px solid #e2e8f0;
      position: relative;
    }}
    .section-title::after {{
      content: "";
      position: absolute;
      bottom: -1.5px;
      left: 0;
      width: 32px;
      height: 1.5px;
      background: #2563eb;
    }}
    .section-title svg {{
      width: 14px;
      height: 14px;
      color: #2563eb;
    }}

    /* Objective Box */
    .objective-box {{
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 3.5px solid #2563eb;
      padding: 9px 12px;
      border-radius: 4px;
      font-size: 11.5px;
      line-height: 1.55;
      color: #334155;
    }}
    .objective-box strong {{
      color: #0f172a;
    }}

    /* Project Item */
    .project-card {{
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }}
    .project-card.featured {{
      border-left: 3px solid #2563eb;
    }}
    .project-header {{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
    }}
    .project-title {{
      font-size: 12.5px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.3;
    }}
    .project-subtitle {{
      font-size: 11px;
      font-weight: 600;
      color: #2563eb;
    }}
    .project-role {{
      font-size: 10.5px;
      color: #64748b;
    }}
    .badge-award {{
      display: inline-flex;
      align-items: center;
      gap: 3px;
      background: #fef3c7;
      border: 1px solid #fde68a;
      color: #92400e;
      font-size: 9.5px;
      font-weight: 700;
      padding: 1.5px 6px;
      border-radius: 12px;
      white-space: nowrap;
    }}
    .badge-award svg {{
      width: 10px;
      height: 10px;
      color: #d97706;
    }}
    .project-desc {{
      font-size: 11px;
      color: #334155;
      line-height: 1.45;
    }}
    .project-highlights {{
      list-style: none;
      padding: 0;
      margin: 2px 0 0 0;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }}
    .project-highlights li {{
      position: relative;
      padding-left: 11px;
      font-size: 10.8px;
      color: #334155;
      line-height: 1.4;
    }}
    .project-highlights li::before {{
      content: "•";
      position: absolute;
      left: 0;
      top: -1px;
      color: #2563eb;
      font-weight: bold;
      font-size: 12px;
    }}
    .tag-container {{
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 2px;
    }}
    .tag-pill {{
      background: #f1f5f9;
      color: #475569;
      font-size: 9.5px;
      font-weight: 600;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
    }}

    /* Education Item */
    .edu-item {{
      display: flex;
      flex-direction: column;
      gap: 2px;
    }}
    .edu-school {{
      font-size: 12px;
      font-weight: 700;
      color: #0f172a;
    }}
    .edu-faculty {{
      font-size: 11px;
      color: #334155;
    }}
    .edu-degree {{
      font-size: 11px;
      color: #475569;
      font-weight: 500;
    }}
    .edu-gpax-box {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      color: #065f46;
      font-size: 10.5px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 4px;
      margin-top: 4px;
      width: fit-content;
    }}

    /* Skill Groups */
    .skill-group {{
      display: flex;
      flex-direction: column;
      gap: 4px;
    }}
    .skill-group-title {{
      font-size: 11px;
      font-weight: 700;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 4px;
    }}
    .skill-pill-list {{
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }}
    .skill-pill {{
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      color: #1e293b;
      font-size: 10px;
      font-weight: 600;
      padding: 2px 7px;
      border-radius: 4px;
    }}
    .skill-pill.core {{
      background: #eff6ff;
      border-color: #bfdbfe;
      color: #1d4ed8;
    }}

    /* Soft Skills List */
    .soft-skills-list {{
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-size: 10.5px;
      color: #334155;
    }}
    .soft-skills-list div {{
      position: relative;
      padding-left: 10px;
      line-height: 1.35;
    }}
    .soft-skills-list div::before {{
      content: "✓";
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
      font-size: 9px;
      top: 1px;
    }}

    /* Coursework Grid */
    .course-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 8px;
      font-size: 10.5px;
    }}
    .course-badge {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 3px 6px;
      border-radius: 4px;
      color: #334155;
    }}
    .course-badge .grade {{
      font-weight: 700;
      color: #2563eb;
      background: #eff6ff;
      padding: 0 4px;
      border-radius: 2px;
      font-size: 9.5px;
    }}

    /* Award Item */
    .award-item {{
      display: flex;
      flex-direction: column;
      gap: 2px;
      position: relative;
      padding-left: 12px;
      border-left: 2px solid #e2e8f0;
    }}
    .award-item::before {{
      content: "";
      position: absolute;
      left: -4px;
      top: 4px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #f59e0b;
    }}
    .award-title {{
      font-size: 11px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.3;
    }}
    .award-desc {{
      font-size: 10px;
      color: #64748b;
      line-height: 1.35;
    }}

    /* Page Footer */
    .page-footer {{
      padding: 8px 30px;
      border-top: 1px solid #e2e8f0;
      font-size: 9.5px;
      color: #94a3b8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fafafa;
    }}
  </style>
</head>
<body>

  <!-- ==================== PAGE 1 ==================== -->
  <div class="page-sheet">
    
    <!-- HEADER -->
    <header class="header-bar">
      <div class="avatar-wrapper">
        <img src="{photo_uri}" alt="Jenkij Sungsunee">
      </div>
      <div class="header-info">
        <h1 class="header-name-th">นายเจนกิจ สังสุณี</h1>
        <div class="header-name-en">MR. JENKIJ SUNGSUNEE</div>
        <div class="header-target-role">
          <span class="dot"></span>
          <span>ตำแหน่งที่สมัครฝึกงาน: AI / Machine Learning Developer & Software Engineer</span>
        </div>
        
        <!-- Contact Strip -->
        <div class="contact-strip">
          <div class="contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>094-628-6524</span>
          </div>
          <div class="contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>jenkij1159@gmail.com</span>
          </div>
          <div class="contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            <span>github.com/jenkij-cloud</span>
          </div>
          <div class="contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span>Portfolio Online</span>
          </div>
          <div class="contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>ตรัง / พัทลุง (พร้อมฝึกงานในพื้นที่และ กทม.)</span>
          </div>
        </div>
      </div>
    </header>

    <!-- CONTENT WRAPPER -->
    <div class="page-content">
      
      <!-- MAIN COLUMN (LEFT - 68%) -->
      <div class="col-main">
        
        <!-- SECTION 2: CAREER OBJECTIVE -->
        <section class="section">
          <h2 class="section-title">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            เป้าหมายการฝึกงาน (Career Objective)
          </h2>
          <div class="objective-box">
            นิสิตชั้นปีที่ 3 วท.บ. วิทยาการคอมพิวเตอร์และสารสนเทศ มหาวิทยาลัยทักษิณ มีความมุ่งมั่นสมัครเข้าฝึกงานในตำแหน่ง <strong>AI / Machine Learning Developer</strong> หรือ <strong>Software Engineer</strong> ในช่วง <strong>เมษายน – กันยายน</strong> โดยพร้อมนำองค์ความรู้และทักษะด้าน Deep Learning (PyTorch, Computer Vision) และ Full-Stack Web Development (Next.js, Python, Tailwind) มาช่วยขับเคลื่อนผลิตภัณฑ์นวัตกรรม แก้ไขโจทย์จริงทางธุรกิจ และกระตือรือร้นในการเรียนรู้มาตรฐานการทำงานแบบมืออาชีพร่วมกับทีมงาน
          </div>
        </section>

        <!-- SECTION 4: PROJECTS (HIGHLIGHT) -->
        <section class="section">
          <h2 class="section-title">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            โปรเจกต์และผลงานเด่น (Highlight Projects)
          </h2>

          <!-- Project 1: AI Lung Cancer -->
          <div class="project-card featured">
            <div class="project-header">
              <div>
                <div class="project-title">AI Lung Cancer Detection from CT-Scan</div>
                <div class="project-subtitle">ระบบ AI คัดกรองและระบุตำแหน่งรอยโรคมะเร็งปอดจากภาพถ่าย CT-Scan</div>
                <div class="project-role">บทบาท: Lead AI Developer · ทีม จี๊ด จี๊ด (Jeed Jeed)</div>
              </div>
              <span class="badge-award">
                <svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                Championship Finalists
              </span>
            </div>
            <p class="project-desc">
              พัฒนาแบบจำลอง Deep Learning เพื่อวิเคราะห์และระบุตำแหน่งรอยโรคมะเร็งปอดจากภาพรังสีส่วนตัดอาศัยคอมพิวเตอร์ (CT-Scan) ช่วยลดระยะเวลาและภาระงานของรังสีแพทย์ในการตรวจคัดกรองระยะแรก
            </p>
            <ul class="project-highlights">
              <li><strong>ผลงานระดับชาติ:</strong> ผ่านเข้าสู่รอบชิงแชมป์ระดับประเทศ <strong>Championship Finalists (Top 100 ทีม)</strong> โครงการ Startup Thailand League 2026 จัดโดย สนง.นวัตกรรมแห่งชาติ (NIA) ณ สยามพารากอน</li>
              <li><strong>ผลงานระดับภูมิภาค:</strong> ได้รับรางวัล <strong>รองชนะเลิศอันดับ 2</strong> Startup Thailand League 2026 ระดับภูมิภาคภาคใต้</li>
              <li><strong>ผลงานระดับมหาวิทยาลัย:</strong> คว้า <strong>รองชนะเลิศอันดับ 1</strong> TSU Innovation Pitching League 2025 (สายแพทย์และสุขภาพ จาก 90+ ทีม)</li>
            </ul>
            <div class="tag-container">
              <span class="tag-pill">Python</span>
              <span class="tag-pill">PyTorch</span>
              <span class="tag-pill">Computer Vision</span>
              <span class="tag-pill">OpenCV</span>
              <span class="tag-pill">CNNs</span>
              <span class="tag-pill">Medical Image Processing</span>
              <span class="tag-pill">Startup Pitching</span>
            </div>
          </div>

          <!-- Project 2: StrokeGuard -->
          <div class="project-card">
            <div class="project-header">
              <div>
                <div class="project-title">StrokeGuard — AI Health Warning Application</div>
                <div class="project-subtitle">แอปพลิเคชัน AI เฝ้าระวังโรคหลอดเลือดสมองและภาวะฉุกเฉิน</div>
                <div class="project-role">บทบาท: AI Developer &amp; System Innovator</div>
              </div>
              <span class="badge-award">
                <svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                Bronze Medal
              </span>
            </div>
            <p class="project-desc">
              ระบบปัญญาประดิษฐ์ประเมินและแจ้งเตือนความเสี่ยงโรคหลอดเลือดสมองล่วงหน้าตามหลัก FAST Principle ทางการแพทย์ เพื่อช่วยเหลือผู้ป่วยได้ทันช่วง Golden Hour
            </p>
            <ul class="project-highlights">
              <li>ได้รับ <strong>รางวัลเหรียญทองแดง (Bronze Medal)</strong> จากเวทีสิ่งประดิษฐ์และนวัตกรรม Southern Inventor Award 2026 กลุ่มสุขภาพและการแพทย์</li>
              <li>ออกแบบขั้นตอนจำแนกความเสี่ยงด้วย Predictive AI และเชื่อมต่อช่องทางส่งต่อเหตุฉุกเฉิน</li>
            </ul>
            <div class="tag-container">
              <span class="tag-pill">Machine Learning</span>
              <span class="tag-pill">Python</span>
              <span class="tag-pill">Predictive Analytics</span>
              <span class="tag-pill">Healthcare AI</span>
              <span class="tag-pill">Mobile Architecture</span>
            </div>
          </div>

        </section>

      </div>

      <!-- SIDEBAR COLUMN (RIGHT - 32%) -->
      <div class="col-side">
        
        <!-- SECTION 3: EDUCATION -->
        <section class="section">
          <h2 class="section-title">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            ประวัติการศึกษา (Education)
          </h2>
          <div class="edu-item">
            <div class="edu-school">มหาวิทยาลัยทักษิณ</div>
            <div class="edu-faculty">คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล</div>
            <div class="edu-degree">วท.บ. วิทยาการคอมพิวเตอร์และสารสนเทศ (วิชาเอก: วิทยาการดิจิทัล)</div>
            <div style="font-size: 10px; color: #64748b; margin-top: 1px;">
              วิชาโท: ผู้ประกอบการเกษตรสมัยใหม่ · ชั้นปีที่ 3 (2567 – ปัจจุบัน)
            </div>
            <div class="edu-gpax-box">
              <svg style="width: 12px; height: 12px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>เกรดเฉลี่ยสะสม (GPAX): 3.51 / 4.00</span>
            </div>
          </div>
        </section>

        <!-- SECTION 5: SKILLS -->
        <section class="section">
          <h2 class="section-title">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            ทักษะความสามารถ (Skills)
          </h2>

          <!-- AI & ML -->
          <div class="skill-group">
            <div class="skill-group-title">AI &amp; Deep Learning (Hard Skills)</div>
            <div class="skill-pill-list">
              <span class="skill-pill core">Python</span>
              <span class="skill-pill core">PyTorch</span>
              <span class="skill-pill core">Computer Vision</span>
              <span class="skill-pill core">OpenCV</span>
              <span class="skill-pill">CNNs</span>
              <span class="skill-pill">Image Preprocessing</span>
              <span class="skill-pill">Scikit-Learn</span>
              <span class="skill-pill">NumPy / Pandas</span>
            </div>
          </div>

          <!-- Web & Software -->
          <div class="skill-group" style="margin-top: 4px;">
            <div class="skill-group-title">Software &amp; Web Development</div>
            <div class="skill-pill-list">
              <span class="skill-pill core">Next.js</span>
              <span class="skill-pill core">React</span>
              <span class="skill-pill core">JavaScript (ES6+)</span>
              <span class="skill-pill">TypeScript</span>
              <span class="skill-pill">Tailwind CSS</span>
              <span class="skill-pill">RESTful APIs</span>
              <span class="skill-pill">Git / GitHub</span>
            </div>
          </div>

          <!-- Soft Skills -->
          <div class="skill-group" style="margin-top: 4px;">
            <div class="skill-group-title">Soft Skills &amp; Strengths</div>
            <div class="soft-skills-list">
              <div><strong>Startup Pitching &amp; Presentation:</strong> ถ่ายทอดไอเดียเทคนิคสู่เชิงธุรกิจ</div>
              <div><strong>Problem Solving:</strong> คิดวิเคราะห์และแก้ไขปัญหาอย่างเป็นระบบ</div>
              <div><strong>Teamwork &amp; Leadership:</strong> ร่วมงานกับทีมหลากหลายสาขา</div>
              <div><strong>Continuous Learning:</strong> กระตือรือร้นและเรียนรู้ไว</div>
            </div>
          </div>

          <!-- Languages -->
          <div class="skill-group" style="margin-top: 4px;">
            <div class="skill-group-title">ภาษา (Languages)</div>
            <div style="font-size: 10px; color: #334155; line-height: 1.4;">
              <div>• <strong>ไทย:</strong> ภาษาแม่ (Native Proficiency)</div>
              <div>• <strong>อังกฤษ:</strong> สื่อสารทางเทคนิคและวิชาการได้ดี (ผ่านการสอบวัดผล English Exit Exam)</div>
            </div>
          </div>

        </section>

      </div>

    </div>

    <!-- FOOTER PAGE 1 -->
    <footer class="page-footer">
      <span>นายเจนกิจ สังสุณี · เรซูเม่สมัครฝึกงาน (AI / ML Developer &amp; Software Engineer)</span>
      <span>หน้า 1 จาก 2</span>
    </footer>

  </div>

  <!-- ==================== PAGE 2 ==================== -->
  <div class="page-sheet">
    
    <!-- Top Compact Header for Page 2 -->
    <header style="background: #0f172a; color: #ffffff; padding: 12px 30px; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb;">
      <div>
        <span style="font-size: 13px; font-weight: 700;">นายเจนกิจ สังสุณี (Jenkij Sungsunee)</span>
        <span style="font-size: 11px; color: #94a3b8; margin-left: 8px;">| เรซูเม่สมัครฝึกงาน 2569–2570</span>
      </div>
      <div style="font-size: 11px; color: #93c5fd; display: flex; gap: 14px;">
        <span>📞 094-628-6524</span>
        <span>✉️ jenkij1159@gmail.com</span>
      </div>
    </header>

    <div class="page-content" style="padding-top: 18px;">
      
      <!-- MAIN COLUMN (PAGE 2) -->
      <div class="col-main">

        <!-- PROJECT 3: TAIWAN FELLOWSHIP -->
        <section class="section">
          <h2 class="section-title">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            โครงการระดับนานาชาติ (International Fellowship)
          </h2>
          <div class="project-card">
            <div class="project-header">
              <div>
                <div class="project-title">Taiwan Innovation Ecosystem Fellowship &amp; Pitching Winner</div>
                <div class="project-subtitle">โครงการพัฒนานวัตกรรม AI และศึกษาดูงานระบบนิเวศนวัตกรรม ณ ประเทศไต้หวัน</div>
                <div class="project-role">บทบาท: Team Lead &amp; AI Innovator · ทีม จี๊ด จี๊ด (Jeed Jeed)</div>
              </div>
              <span class="badge-award">
                <svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                Global Fellowship
              </span>
            </div>
            <p class="project-desc">
              ได้รับคัดเลือกเป็นตัวแทนมหาวิทยาลัยทักษิณและรับทุนสนับสนุนเดินทางไปศึกษาดูงานระบบนิเวศนวัตกรรม (Innovation Ecosystem) และ Deep Tech สตาร์ทอัพ ณ ประเทศไต้หวัน
            </p>
            <ul class="project-highlights">
              <li>แลกเปลี่ยนองค์ความรู้ด้านการพัฒนางานวิจัยปัญญาประดิษฐ์ทางการแพทย์ออกสู่เชิงพาณิชย์</li>
              <li>ศึกษาโมเดลบ่มเพาะสตาร์ทอัพสากลและการเชื่อมต่อภาคอุตสาหกรรมเทคโนโลยี</li>
            </ul>
            <div class="tag-container">
              <span class="tag-pill">Global Innovation</span>
              <span class="tag-pill">Deep Tech Commercialization</span>
              <span class="tag-pill">Startup Ecosystem</span>
              <span class="tag-pill">Pitching</span>
            </div>
          </div>
        </section>

        <!-- SECTION 6: AWARDS & HONORS -->
        <section class="section">
          <h2 class="section-title">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            รางวัลและเกียรติประวัติ (Honours &amp; Awards)
          </h2>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div class="award-item">
              <div class="award-title">Championship Finalists (Top 100 ประเทศ) — Startup Thailand League 2026</div>
              <div class="award-desc">ผ่านเข้ารอบชิงแชมป์ระดับประเทศ ณ สยามพารากอน จัดโดย สำนักงานนวัตกรรมแห่งชาติ (องค์การมหาชน) - NIA</div>
            </div>

            <div class="award-item">
              <div class="award-title">รางวัลเหรียญทองแดง (Bronze Medal) — Southern Inventor Award 2026</div>
              <div class="award-desc">การประกวดสิ่งประดิษฐ์และนวัตกรรม กลุ่มสุขภาพและการแพทย์ ผลงาน StrokeGuard AI ณ หอเปรมดนตรี ม.ทักษิณ โดย ม.สงขลานครินทร์และเครือข่ายนวัตกรรมภาคใต้</div>
            </div>

            <div class="award-item">
              <div class="award-title">รางวัลรองชนะเลิศอันดับ 2 — Startup Thailand League 2026 ระดับภูมิภาค</div>
              <div class="award-desc">ทีมตัวแทนภูมิภาคภาคใต้ จากอุทยานวิทยาศาสตร์และนวัตกรรมสังคม มหาวิทยาลัยทักษิณ (SSIP TSU)</div>
            </div>

            <div class="award-item">
              <div class="award-title">รองชนะเลิศอันดับ 1 &amp; ทุนศึกษาดูงานไต้หวัน — TSU Innovation Pitching League 2025</div>
              <div class="award-desc">ผลงาน AI ตรวจคัดกรองมะเร็งปอด ชนะการแข่งขันในสายการแพทย์และสุขภาพ จาก 90+ ทีม</div>
            </div>

            <div class="award-item">
              <div class="award-title">รางวัลเชิดชูเกียรติ นิสิตผู้สร้างชื่อเสียงและความภาคภูมิใจด้าน Startup และการเป็นผู้ประกอบการ</div>
              <div class="award-desc">ประจำปีการศึกษา 2568 คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล มหาวิทยาลัยทักษิณ</div>
            </div>

            <div class="award-item">
              <div class="award-title">รางวัลเชิดชูเกียรติ นิสิตดีเด่นด้านบำเพ็ญประโยชน์ ประจำปีการศึกษา 2568</div>
              <div class="award-desc">มอบให้แก่นิสิตผู้มีจิตสาธารณะ เสียสละ และอุทิศตนเพื่อประโยชน์ของส่วนรวมและสังคม คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล</div>
            </div>
          </div>
        </section>

        <!-- EXTRACURRICULAR & ACTIVITIES -->
        <section class="section">
          <h2 class="section-title">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            กิจกรรมและบทบาทความเป็นผู้นำ (Activities &amp; Leadership)
          </h2>
          <div style="font-size: 11px; color: #334155; line-height: 1.5; display: flex; flex-direction: column; gap: 4px;">
            <div>• <strong>ผู้นำทีมและตัวแทนแข่งขันนวัตกรรม (Team Lead):</strong> วางแผนการพัฒนาระบบ AI และรับผิดชอบการนำเสนอ Pitching ต่อหน้านักลงทุนและผู้ทรงคุณวุฒิระดับประเทศ</div>
            <div>• <strong>กิจกรรมจิตอาสาและพัฒนาสังคม:</strong> เข้าร่วมและริเริ่มกิจกรรมบำเพ็ญประโยชน์เพื่อชุมชน จนได้รับรางวัลเชิดชูเกียรตินิสิตดีเด่นด้านบำเพ็ญประโยชน์ของคณะ</div>
            <div>• <strong>กิจกรรมสโมสรนิสิตและค่ายวิชาการ:</strong> ช่วยเหลือการจัดกิจกรรมส่งเสริมทักษะทางเทคโนโลยีดิจิทัลและการแบ่งปันความรู้แก่นิสิตรุ่นน้อง</div>
          </div>
        </section>

      </div>

      <!-- SIDEBAR COLUMN (PAGE 2) -->
      <div class="col-side">

        <!-- SECTION 3 (CONT): RELEVANT COURSEWORK -->
        <section class="section">
          <h2 class="section-title">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            รายวิชาที่เกี่ยวข้อง (Coursework)
          </h2>
          <div style="font-size: 10px; color: #64748b; margin-bottom: 2px;">
            เน้นวิชาเฉพาะทางด้านซอฟต์แวร์ AI และนวัตกรรม
          </div>
          <div class="course-grid">
            <div class="course-badge">
              <span>Web App Design &amp; Dev</span>
              <span class="grade">A</span>
            </div>
            <div class="course-badge">
              <span>Cloud &amp; Internet Proc.</span>
              <span class="grade">A</span>
            </div>
            <div class="course-badge">
              <span>Digital Innovation</span>
              <span class="grade">A</span>
            </div>
            <div class="course-badge">
              <span>Cybersecurity &amp; Net</span>
              <span class="grade">A</span>
            </div>
            <div class="course-badge">
              <span>E-Commerce Tech</span>
              <span class="grade">A</span>
            </div>
            <div class="course-badge">
              <span>IoT Architecture Design</span>
              <span class="grade">A</span>
            </div>
            <div class="course-badge">
              <span>Software QA &amp; Testing</span>
              <span class="grade">B+</span>
            </div>
            <div class="course-badge">
              <span>Software Project Mgmt</span>
              <span class="grade">B+</span>
            </div>
            <div class="course-badge">
              <span>Modern Software Design</span>
              <span class="grade">B+</span>
            </div>
            <div class="course-badge">
              <span>Data Structures &amp; Algo</span>
              <span class="grade">B</span>
            </div>
          </div>

          <div style="background: #f1f5f9; padding: 6px 8px; border-radius: 4px; font-size: 9.8px; color: #475569; margin-top: 6px;">
            <strong>วิชาเตรียมความพร้อมและ AI ปัจจุบัน:</strong><br>
            • AI of Things (AIoT) System Development Module<br>
            • Mobile Application Development<br>
            • การเตรียมความพร้อมในการฝึกประสบการณ์วิชาชีพ
          </div>
        </section>

        <!-- TOOLS & METHODOLOGIES -->
        <section class="section" style="margin-top: 4px;">
          <h2 class="section-title">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            เครื่องมือ &amp; สภาพแวดล้อม
          </h2>
          <div class="skill-pill-list">
            <span class="skill-pill">Visual Studio Code</span>
            <span class="skill-pill">Google Colab / Jupyter</span>
            <span class="skill-pill">Vercel</span>
            <span class="skill-pill">Postman / API Test</span>
            <span class="skill-pill">Figma (UI/UX)</span>
            <span class="skill-pill">Canva</span>
            <span class="skill-pill">Microsoft Office</span>
          </div>
        </section>

        <!-- INTERNSHIP AVAILABILITY BOX -->
        <section class="section" style="margin-top: 4px;">
          <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 6px; padding: 10px; font-size: 10.5px; color: #1e3a8a;">
            <div style="font-weight: 700; display: flex; align-items: center; gap: 4px; margin-bottom: 4px; color: #1d4ed8;">
              <svg style="width: 13px; height: 13px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ความพร้อมในการฝึกงาน
            </div>
            <div>• <strong>ระยะเวลา:</strong> เมษายน – กันยายน (พร้อมปฏิบัติงานเต็มเวลา)</div>
            <div>• <strong>รูปแบบ:</strong> On-site (กทม./ต่างจังหวัด) หรือ Hybrid / Remote</div>
            <div>• <strong>เอกสาร:</strong> มีหนังสือรับรองจากมหาวิทยาลัยและผลการเรียนฉบับจริงพร้อมยื่น</div>
          </div>
        </section>

      </div>

    </div>

    <!-- FOOTER PAGE 2 -->
    <footer class="page-footer">
      <span>นายเจนกิจ สังสุณี · เรซูเม่สมัครฝึกงาน (AI / ML Developer &amp; Software Engineer)</span>
      <span>หน้า 2 จาก 2</span>
    </footer>

  </div>

</body>
</html>
"""

with open("public/resume_template.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("Generated public/resume_template.html successfully!")
