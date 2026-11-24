'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Printer, 
  Download, 
  ArrowLeft, 
  Phone, 
  Mail, 
  Github, 
  Globe, 
  MapPin, 
  Award, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Layers, 
  BookOpen, 
  Calendar, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { personalInfo, projects, awardsData, academicRecords } from '../../data/portfolioData';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100/80 text-slate-900 pb-20 pt-24 print:bg-white print:p-0 print:m-0">
      
      {/* TOP ACTION BAR (HIDDEN IN PRINT) */}
      <div className="max-w-[880px] mx-auto px-4 mb-6 print:hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>กลับสู่หน้าพอร์ตโฟลิโอ</span>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>เรซูเม่สมัครฝึกงาน (Internship Resume)</span>
              <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2.5 py-0.5 rounded-full border border-blue-200">
                A4 Ready
              </span>
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              ออกแบบตามโครงสร้าง 6 ส่วนมาตรฐานพร้อมยื่นฝึกงานด้าน AI &amp; Software Development
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>พิมพ์ / สั่งพิมพ์ PDF</span>
            </button>

            <a
              href="/Resume_Jenkij_Sungsunee_AI_Developer.pdf"
              download="Resume_Jenkij_Sungsunee_AI_Developer.pdf"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm shadow-blue-500/20 transition-all active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>โหลดไฟล์ PDF</span>
            </a>
          </div>
        </div>

        {/* TIPS BANNER */}
        <div className="mt-3 bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 text-[12px] text-amber-900 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>ทริคการใช้งาน:</strong> ไฟล์ PDF ฉบับนี้จัดหน้าแบบ A4 สองหน้าพอดี สามารถกดปุ่ม <strong>&quot;โหลดไฟล์ PDF&quot;</strong> เพื่อนำไปแนบอีเมลยื่นฝึกงานได้ทันที หรือกด <strong>&quot;พิมพ์ / สั่งพิมพ์ PDF&quot;</strong> เพื่อสั่งพรินต์จากเบราว์เซอร์
          </div>
        </div>
      </div>

      {/* ===================== RESUME CONTAINER (2 PAGES) ===================== */}
      <div className="resume-printable-area max-w-[210mm] mx-auto flex flex-col gap-8 print:gap-0 print:m-0 print:w-full print:max-w-none">
        
        {/* ==================== PAGE 1 ==================== */}
        <div className="resume-page bg-white shadow-xl rounded-2xl print:rounded-none print:shadow-none border border-slate-200/80 print:border-none w-full min-h-[297mm] overflow-hidden flex flex-col justify-between print:break-after-page">
          <div>
            {/* HEADER BAR */}
            <header className="bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 text-white p-6 sm:p-8 relative">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400" />
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* Photo */}
                <div className="w-24 h-24 rounded-full border-2 border-white/90 overflow-hidden shrink-0 shadow-lg bg-slate-800">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Jenkij Sungsunee" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Identity */}
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-2xl font-bold tracking-tight text-white">
                    นายเจนกิจ สังสุณี
                  </h1>
                  <div className="text-xs font-semibold text-slate-300 tracking-wider uppercase mt-0.5">
                    MR. JENKIJ SUNGSUNEE
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-full mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ตำแหน่งที่สมัครฝึกงาน: AI / Machine Learning Developer &amp; Software Engineer</span>
                  </div>

                  {/* Contact Strip */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 mt-3 text-[11.5px] text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-blue-300" />
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-300" />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Github className="w-3.5 h-3.5 text-blue-300" />
                      <span>github.com/jenkij-cloud</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-blue-300" />
                      <span>jenkij-portfolio</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-300" />
                      <span>ตรัง / พัทลุง (พร้อมฝึกงาน กทม. และทุกพื้นที่)</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* PAGE 1 CONTENT GRID */}
            <div className="p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 print:grid-cols-12">
              
              {/* LEFT / MAIN COLUMN (7 cols) */}
              <div className="md:col-span-8 print:col-span-8 flex flex-col gap-5">
                
                {/* 1. CAREER OBJECTIVE */}
                <section>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-1 mb-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>เป้าหมายการฝึกงาน (Career Objective)</span>
                  </h2>
                  <div className="bg-slate-50/80 border border-slate-200 border-l-4 border-l-blue-600 p-3 rounded-lg text-xs leading-relaxed text-slate-700">
                    นิสิตชั้นปีที่ 3 วท.บ. วิทยาการคอมพิวเตอร์และสารสนเทศ มหาวิทยาลัยทักษิณ มีความมุ่งมั่นสมัครเข้าฝึกงานในตำแหน่ง <strong>AI / Machine Learning Developer</strong> หรือ <strong>Software Engineer</strong> ในช่วง <strong>เมษายน – กันยายน</strong> โดยพร้อมนำองค์ความรู้และทักษะด้าน Deep Learning (PyTorch, Computer Vision) และ Full-Stack Web Development (Next.js, Python, Tailwind) มาช่วยขับเคลื่อนผลิตภัณฑ์นวัตกรรม แก้ไขโจทย์จริงทางธุรกิจ และกระตือรือร้นในการเรียนรู้มาตรฐานการทำงานแบบมืออาชีพร่วมกับทีมงาน
                  </div>
                </section>

                {/* 2. HIGHLIGHT PROJECTS */}
                <section>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-1 mb-2.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>โปรเจกต์และผลงานเด่น (Highlight Projects)</span>
                  </h2>

                  {/* Project 1 */}
                  <div className="border border-slate-200 border-l-4 border-l-blue-600 rounded-xl p-3.5 bg-white mb-3 shadow-xs">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-[13px] font-bold text-slate-900 leading-snug">
                          AI Lung Cancer Detection from CT-Scan
                        </h3>
                        <div className="text-[11px] font-semibold text-blue-600">
                          ระบบ AI คัดกรองและระบุตำแหน่งรอยโรคมะเร็งปอดจากภาพถ่าย CT-Scan
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">
                          บทบาท: Lead AI Developer · ทีม จี๊ด จี๊ด (Jeed Jeed)
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                        <Award className="w-3 h-3 text-amber-500" />
                        Championship Finalists
                      </span>
                    </div>
                    <p className="text-[11.5px] text-slate-600 mt-2 leading-relaxed">
                      พัฒนาโมเดล Deep Learning วิเคราะห์ภาพรังสีส่วนตัดอาศัยคอมพิวเตอร์ (CT-Scan) เพื่อช่วยแพทย์ลดระยะเวลาและภาระงานในการตรวจคัดกรองระยะแรก
                    </p>
                    <ul className="mt-2 space-y-1 text-[11px] text-slate-700">
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>ผลงานระดับชาติ:</strong> ผ่านเข้ารอบชิงแชมป์ระดับประเทศ <strong>Championship Finalists (Top 100 ทีม)</strong> Startup Thailand League 2026 จัดโดย สนง.นวัตกรรมแห่งชาติ (NIA) ณ สยามพารากอน</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>ผลงานระดับภูมิภาค:</strong> ได้รับรางวัล <strong>รองชนะเลิศอันดับ 2</strong> Startup Thailand League 2026 ระดับภูมิภาคภาคใต้</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>ผลงานระดับมหาวิทยาลัย:</strong> คว้า <strong>รองชนะเลิศอันดับ 1</strong> TSU Innovation Pitching League 2025 (สายแพทย์และสุขภาพ จาก 90+ ทีม)</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {['Python', 'PyTorch', 'Computer Vision', 'OpenCV', 'CNNs', 'Medical Imaging', 'Pitching'].map(t => (
                        <span key={t} className="text-[9.5px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="border border-slate-200 rounded-xl p-3.5 bg-white shadow-xs">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-[13px] font-bold text-slate-900 leading-snug">
                          StrokeGuard — AI Health Warning Application
                        </h3>
                        <div className="text-[11px] font-semibold text-blue-600">
                          แอปพลิเคชัน AI เฝ้าระวังโรคหลอดเลือดสมองและภาวะฉุกเฉิน
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">
                          บทบาท: AI Developer &amp; System Innovator
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                        <Award className="w-3 h-3 text-amber-500" />
                        Bronze Medal
                      </span>
                    </div>
                    <p className="text-[11.5px] text-slate-600 mt-2 leading-relaxed">
                      ระบบปัญญาประดิษฐ์ประเมินและแจ้งเตือนความเสี่ยงโรคหลอดเลือดสมองล่วงหน้าตามหลัก FAST Principle ทางการแพทย์ เพื่อช่วยเหลือผู้ป่วยได้ทันช่วง Golden Hour
                    </p>
                    <ul className="mt-2 space-y-1 text-[11px] text-slate-700">
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>ได้รับ <strong>รางวัลเหรียญทองแดง (Bronze Medal)</strong> จากเวทีสิ่งประดิษฐ์และนวัตกรรม Southern Inventor Award 2026 กลุ่มสุขภาพและการแพทย์</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>ออกแบบขั้นตอนจำแนกความเสี่ยงด้วย Predictive AI และเชื่อมต่อช่องทางส่งต่อเหตุฉุกเฉิน</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {['Machine Learning', 'Python', 'Predictive Analytics', 'HealthTech', 'Mobile Architecture'].map(t => (
                        <span key={t} className="text-[9.5px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </section>

              </div>

              {/* RIGHT / SIDE COLUMN (4 cols) */}
              <div className="md:col-span-4 print:col-span-4 flex flex-col gap-5 md:border-l print:border-l border-slate-200 md:pl-5 print:pl-5">
                
                {/* 3. EDUCATION */}
                <section>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-1 mb-2.5">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                    <span>ประวัติการศึกษา (Education)</span>
                  </h2>
                  <div className="space-y-1">
                    <div className="text-[12.5px] font-bold text-slate-900 leading-snug">
                      มหาวิทยาลัยทักษิณ
                    </div>
                    <div className="text-[11px] text-slate-700 font-medium">
                      คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล
                    </div>
                    <div className="text-[11px] text-slate-600">
                      วท.บ. วิทยาการคอมพิวเตอร์และสารสนเทศ (วิชาเอก: วิทยาการดิจิทัล)
                    </div>
                    <div className="text-[10px] text-slate-500">
                      วิชาโท: ผู้ประกอบการเกษตรสมัยใหม่ · ชั้นปีที่ 3 (2567 – ปัจจุบัน)
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-md mt-2 w-full">
                      <Award className="w-3.5 h-3.5 text-emerald-600" />
                      <span>เกรดเฉลี่ยสะสม (GPAX): 3.51 / 4.00</span>
                    </div>
                  </div>
                </section>

                {/* 5. SKILLS */}
                <section className="space-y-3.5">
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-1">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>ทักษะความเชี่ยวชาญ (Skills)</span>
                  </h2>

                  {/* AI & ML */}
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 mb-1.5">
                      AI &amp; Deep Learning (Hard Skills)
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['Python', 'PyTorch', 'Computer Vision', 'OpenCV', 'CNNs', 'Data Preprocessing', 'Scikit-Learn', 'NumPy / Pandas'].map((s, idx) => (
                        <span 
                          key={s} 
                          className={`text-[9.5px] font-semibold px-2 py-0.5 rounded border ${idx < 4 ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold' : 'bg-slate-50 text-slate-700 border-slate-200'}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Software & Web */}
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 mb-1.5">
                      Software &amp; Web Development
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['Next.js', 'React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'RESTful APIs', 'Git / GitHub'].map((s, idx) => (
                        <span 
                          key={s} 
                          className={`text-[9.5px] font-semibold px-2 py-0.5 rounded border ${idx < 3 ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold' : 'bg-slate-50 text-slate-700 border-slate-200'}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 mb-1.5">
                      Soft Skills &amp; Strengths
                    </div>
                    <div className="space-y-1 text-[10.5px] text-slate-700">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                        <span><strong>Startup Pitching:</strong> ถ่ายทอดไอเดียเทคนิคสู่เชิงธุรกิจ</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                        <span><strong>Problem Solving:</strong> วิเคราะห์และแก้ปัญหาอย่างเป็นระบบ</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                        <span><strong>Teamwork &amp; Leadership:</strong> ประสานงานทีมหลากหลายสาขา</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                        <span><strong>Continuous Learning:</strong> กระตือรือร้นและเรียนรู้ไว</span>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 mb-1">
                      ภาษา (Languages)
                    </div>
                    <div className="text-[10px] text-slate-600 space-y-0.5">
                      <div>• <strong>ไทย:</strong> ภาษาแม่ (Native Proficiency)</div>
                      <div>• <strong>อังกฤษ:</strong> สื่อสารและอ่านเปเปอร์เทคนิคได้ดี (ผ่านเกณฑ์ English Exit Exam)</div>
                    </div>
                  </div>

                </section>

              </div>

            </div>
          </div>

          {/* FOOTER PAGE 1 */}
          <footer className="px-7 py-2.5 border-t border-slate-200 text-[10px] text-slate-400 flex items-center justify-between bg-slate-50/50">
            <span>นายเจนกิจ สังสุณี · เรซูเม่สมัครฝึกงาน (AI / ML Developer &amp; Software Engineer)</span>
            <span>หน้า 1 จาก 2</span>
          </footer>
        </div>

        {/* ==================== PAGE 2 ==================== */}
        <div className="resume-page bg-white shadow-xl rounded-2xl print:rounded-none print:shadow-none border border-slate-200/80 print:border-none w-full min-h-[297mm] overflow-hidden flex flex-col justify-between print:break-before-page">
          <div>
            {/* COMPACT TOP BAR FOR PAGE 2 */}
            <header className="bg-slate-900 text-white px-6 sm:px-8 py-3 flex items-center justify-between border-b-2 border-blue-600">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">นายเจนกิจ สังสุณี (Jenkij Sungsunee)</span>
                <span className="text-xs text-slate-400">| เรซูเม่สมัครฝึกงาน 2569–2570</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-blue-300">
                <span>📞 {personalInfo.phone}</span>
                <span>✉️ {personalInfo.email}</span>
              </div>
            </header>

            {/* PAGE 2 CONTENT GRID */}
            <div className="p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 print:grid-cols-12">
              
              {/* LEFT / MAIN COLUMN (7 cols) */}
              <div className="md:col-span-8 print:col-span-8 flex flex-col gap-5">
                
                {/* INTERNATIONAL FELLOWSHIP */}
                <section>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-1 mb-2.5">
                    <Globe className="w-3.5 h-3.5 text-blue-600" />
                    <span>โครงการระดับนานาชาติ (International Fellowship)</span>
                  </h2>
                  <div className="border border-slate-200 rounded-xl p-3.5 bg-white shadow-xs">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-[13px] font-bold text-slate-900 leading-snug">
                          Taiwan Innovation Ecosystem Fellowship &amp; Pitching Winner
                        </h3>
                        <div className="text-[11px] font-semibold text-blue-600">
                          โครงการพัฒนานวัตกรรม AI และศึกษาดูงานระบบนิเวศนวัตกรรม ณ ประเทศไต้หวัน
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">
                          บทบาท: Team Lead &amp; AI Innovator · ทีม จี๊ด จี๊ด (Jeed Jeed)
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                        <Award className="w-3 h-3 text-blue-600" />
                        Global Fellowship
                      </span>
                    </div>
                    <p className="text-[11.5px] text-slate-600 mt-2 leading-relaxed">
                      ได้รับคัดเลือกเป็นตัวแทนมหาวิทยาลัยทักษิณและรับทุนสนับสนุนเดินทางไปศึกษาดูงานระบบนิเวศนวัตกรรม (Innovation Ecosystem) และ Deep Tech สตาร์ทอัพ ณ ประเทศไต้หวัน
                    </p>
                    <ul className="mt-2 space-y-1 text-[11px] text-slate-700">
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>แลกเปลี่ยนองค์ความรู้ด้านการพัฒนางานวิจัยปัญญาประดิษฐ์ทางการแพทย์ออกสู่เชิงพาณิชย์</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>ศึกษาโมเดลบ่มเพาะสตาร์ทอัพสากลและการเชื่อมต่อภาคอุตสาหกรรมเทคโนโลยี</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {['Global Innovation', 'Deep Tech Commercialization', 'Startup Ecosystem', 'Pitching'].map(t => (
                        <span key={t} className="text-[9.5px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 6. AWARDS & HONORS */}
                <section>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-1 mb-2.5">
                    <Award className="w-3.5 h-3.5 text-blue-600" />
                    <span>รางวัลและเกียรติประวัติ (Honours &amp; Awards)</span>
                  </h2>

                  <div className="space-y-2.5">
                    <div className="border-l-2 border-blue-500 pl-3">
                      <div className="text-[11.5px] font-bold text-slate-900 leading-snug">
                        Championship Finalists (Top 100 ประเทศ) — Startup Thailand League 2026
                      </div>
                      <div className="text-[10px] text-slate-600 mt-0.5">
                        ผ่านเข้ารอบชิงแชมป์ระดับประเทศ ณ สยามพารากอน จัดโดย สำนักงานนวัตกรรมแห่งชาติ (องค์การมหาชน) - NIA
                      </div>
                    </div>

                    <div className="border-l-2 border-amber-500 pl-3">
                      <div className="text-[11.5px] font-bold text-slate-900 leading-snug">
                        รางวัลเหรียญทองแดง (Bronze Medal) — Southern Inventor Award 2026
                      </div>
                      <div className="text-[10px] text-slate-600 mt-0.5">
                        การประกวดสิ่งประดิษฐ์และนวัตกรรม กลุ่มสุขภาพและการแพทย์ ผลงาน StrokeGuard AI ณ หอเปรมดนตรี ม.ทักษิณ โดย ม.สงขลานครินทร์และเครือข่ายนวัตกรรมภาคใต้
                      </div>
                    </div>

                    <div className="border-l-2 border-blue-500 pl-3">
                      <div className="text-[11.5px] font-bold text-slate-900 leading-snug">
                        รางวัลรองชนะเลิศอันดับ 2 — Startup Thailand League 2026 ระดับภูมิภาค
                      </div>
                      <div className="text-[10px] text-slate-600 mt-0.5">
                        ทีมตัวแทนภูมิภาคภาคใต้ จากอุทยานวิทยาศาสตร์และนวัตกรรมสังคม มหาวิทยาลัยทักษิณ (SSIP TSU)
                      </div>
                    </div>

                    <div className="border-l-2 border-blue-500 pl-3">
                      <div className="text-[11.5px] font-bold text-slate-900 leading-snug">
                        รองชนะเลิศอันดับ 1 &amp; ทุนศึกษาดูงานไต้หวัน — TSU Innovation Pitching League 2025
                      </div>
                      <div className="text-[10px] text-slate-600 mt-0.5">
                        ผลงาน AI ตรวจคัดกรองมะเร็งปอด ชนะการแข่งขันในสายการแพทย์และสุขภาพ จาก 90+ ทีม
                      </div>
                    </div>

                    <div className="border-l-2 border-emerald-500 pl-3">
                      <div className="text-[11.5px] font-bold text-slate-900 leading-snug">
                        รางวัลเชิดชูเกียรติ นิสิตผู้สร้างชื่อเสียงและความภาคภูมิใจด้าน Startup และการเป็นผู้ประกอบการ
                      </div>
                      <div className="text-[10px] text-slate-600 mt-0.5">
                        ประจำปีการศึกษา 2568 คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล มหาวิทยาลัยทักษิณ
                      </div>
                    </div>

                    <div className="border-l-2 border-emerald-500 pl-3">
                      <div className="text-[11.5px] font-bold text-slate-900 leading-snug">
                        รางวัลเชิดชูเกียรติ นิสิตดีเด่นด้านบำเพ็ญประโยชน์ ประจำปีการศึกษา 2568
                      </div>
                      <div className="text-[10px] text-slate-600 mt-0.5">
                        มอบให้แก่นิสิตผู้มีจิตสาธารณะ เสียสละ และอุทิศตนเพื่อประโยชน์ของส่วนรวม คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล
                      </div>
                    </div>
                  </div>
                </section>

                {/* ACTIVITIES & LEADERSHIP */}
                <section>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-1 mb-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>กิจกรรมและบทบาทความเป็นผู้นำ (Activities &amp; Leadership)</span>
                  </h2>
                  <div className="space-y-1.5 text-[11px] text-slate-700 leading-relaxed">
                    <div>
                      • <strong>ผู้นำทีมและตัวแทนแข่งขันนวัตกรรม (Team Lead):</strong> วางแผนการพัฒนาระบบ AI และรับผิดชอบการนำเสนอ Pitching ต่อหน้านักลงทุนและผู้ทรงคุณวุฒิระดับประเทศ
                    </div>
                    <div>
                      • <strong>กิจกรรมจิตอาสาและพัฒนาสังคม:</strong> เข้าร่วมและริเริ่มกิจกรรมบำเพ็ญประโยชน์เพื่อชุมชน จนได้รับรางวัลเชิดชูเกียรตินิสิตดีเด่นด้านบำเพ็ญประโยชน์ของคณะ
                    </div>
                    <div>
                      • <strong>กิจกรรมสโมสรนิสิตและค่ายวิชาการ:</strong> ช่วยเหลือการจัดกิจกรรมส่งเสริมทักษะทางเทคโนโลยีดิจิทัลและการแบ่งปันความรู้แก่นิสิตรุ่นน้อง
                    </div>
                  </div>
                </section>

              </div>

              {/* RIGHT / SIDE COLUMN (4 cols) */}
              <div className="md:col-span-4 print:col-span-4 flex flex-col gap-5 md:border-l print:border-l border-slate-200 md:pl-5 print:pl-5">
                
                {/* RELEVANT COURSEWORK */}
                <section>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-1 mb-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    <span>รายวิชาที่เกี่ยวข้อง (Coursework)</span>
                  </h2>
                  <div className="text-[10px] text-slate-500 mb-2">
                    เน้นวิชาเฉพาะทางด้านซอฟต์แวร์ AI และนวัตกรรม
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                    {[
                      { name: 'Web App Design', grade: 'A' },
                      { name: 'Cloud Computing', grade: 'A' },
                      { name: 'Digital Innovation', grade: 'A' },
                      { name: 'Cybersecurity', grade: 'A' },
                      { name: 'E-Commerce Tech', grade: 'A' },
                      { name: 'IoT Architecture', grade: 'A' },
                      { name: 'Software QA & Test', grade: 'B+' },
                      { name: 'Software Project', grade: 'B+' },
                      { name: 'Modern Software', grade: 'B+' },
                      { name: 'Data Structures', grade: 'B' },
                    ].map(c => (
                      <div key={c.name} className="flex items-center justify-between bg-slate-50 border border-slate-200 px-2 py-1 rounded">
                        <span className="truncate pr-1 text-slate-700 font-medium">{c.name}</span>
                        <span className="font-bold text-blue-700 bg-blue-50 px-1 rounded text-[9.5px] shrink-0">{c.grade}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-100/70 border border-slate-200/80 p-2 rounded-lg text-[9.5px] text-slate-600 mt-2.5 space-y-0.5">
                    <strong>วิชาเตรียมความพร้อมและ AI ปัจจุบัน:</strong>
                    <div>• AI of Things (AIoT) System Development</div>
                    <div>• Mobile Application Development</div>
                    <div>• เตรียมความพร้อมในการฝึกประสบการณ์วิชาชีพ</div>
                  </div>
                </section>

                {/* TOOLS & ENVIRONMENTS */}
                <section>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-1 mb-2">
                    <Code2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>เครื่องมือ &amp; สภาพแวดล้อม</span>
                  </h2>
                  <div className="flex flex-wrap gap-1">
                    {['VS Code', 'Google Colab', 'Jupyter', 'Vercel', 'Postman', 'Figma (UI/UX)', 'Canva', 'Microsoft Office'].map(tool => (
                      <span key={tool} className="text-[9.5px] font-medium bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>

                {/* INTERNSHIP READINESS BOX */}
                <section>
                  <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3 text-[11px] text-blue-950">
                    <div className="font-bold text-blue-800 flex items-center gap-1.5 mb-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>ความพร้อมในการฝึกงาน</span>
                    </div>
                    <div className="space-y-1 text-[10.5px]">
                      <div>• <strong>ช่วงเวลา:</strong> {personalInfo.internshipPeriod} (พร้อมทุ่มเทเต็มเวลา)</div>
                      <div>• <strong>รูปแบบ:</strong> On-site (กทม./ต่างจังหวัด) หรือ Hybrid / Remote</div>
                      <div>• <strong>เอกสาร:</strong> มีหนังสือรับรองจากมหาวิทยาลัยและผลการเรียนฉบับจริงพร้อมยื่น</div>
                    </div>
                  </div>
                </section>

              </div>

            </div>
          </div>

          {/* FOOTER PAGE 2 */}
          <footer className="px-7 py-2.5 border-t border-slate-200 text-[10px] text-slate-400 flex items-center justify-between bg-slate-50/50">
            <span>นายเจนกิจ สังสุณี · เรซูเม่สมัครฝึกงาน (AI / ML Developer &amp; Software Engineer)</span>
            <span>หน้า 2 จาก 2</span>
          </footer>
        </div>

      </div>

    </div>
  );
}
