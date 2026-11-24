import Link from 'next/link';
import { personalInfo, awardsData } from '../../data/portfolioData';
import GradeViewer from '../../components/GradeViewer';

export const metadata = {
  title: 'Jenkij Sungsunee • เกี่ยวกับ (About)',
  description: 'ข้อมูลประวัติ วิสัยทัศน์ และเป้าหมายการทำงานของ เจนกิจ สังสุณี (GPAX 3.51)',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* ABOUT HERO */}
      <section className="relative flex flex-col overflow-hidden bg-white pt-32 pb-16 md:pb-24 border-b border-[#E5E5E5] text-[#111111]">
        <div className="px-6 text-center mx-auto max-w-4xl">
          <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-extrabold uppercase tracking-tight leading-[1] text-[#111111]">
            <span>Developing Medical AI &amp;</span>
            <br />
            <span className="text-outline">Impactful Software</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#525252] max-w-2xl mx-auto">
            นิสิตวิทยาการคอมพิวเตอร์และสารสนเทศ ชั้นปีที่ 3 • มหาวิทยาลัยทักษิณ (GPAX {personalInfo.gpax})
          </p>
        </div>

        {/* MARQUEE TICKER */}
        <div className="mt-12 overflow-hidden border-y border-[#E5E5E5] bg-[#FAFAFA] py-4" aria-hidden="true">
          <div className="animate-marquee flex gap-8 items-center text-sm font-mono text-[#525252]">
            <span>import torch</span>
            <span>•</span>
            <span>AI LUNG CANCER DETECTION</span>
            <span>•</span>
            <span>STROKEGUARD AI</span>
            <span>•</span>
            <span>TSU PITCHING RUNNER-UP</span>
            <span>•</span>
            <span>STARTUP THAILAND LEAGUE TOP 100</span>
            <span>•</span>
            <span>GPAX 3.51 / 4.00</span>
            <span>•</span>
            <span>NEXT.JS &amp; TAILWIND CSS</span>
            <span>•</span>
            <span>OPEN FOR INTERNSHIP 2026</span>
            <span>•</span>
            {/* Duplication for continuous loop */}
            <span>import torch</span>
            <span>•</span>
            <span>AI LUNG CANCER DETECTION</span>
            <span>•</span>
            <span>STROKEGUARD AI</span>
            <span>•</span>
            <span>TSU PITCHING RUNNER-UP</span>
            <span>•</span>
            <span>STARTUP THAILAND LEAGUE TOP 100</span>
            <span>•</span>
            <span>GPAX 3.51 / 4.00</span>
            <span>•</span>
            <span>NEXT.JS &amp; TAILWIND CSS</span>
            <span>•</span>
            <span>OPEN FOR INTERNSHIP 2026</span>
          </div>
        </div>
      </section>

      {/* DETAILED BIO & INTERNSHIP GOALS */}
      <section className="bg-white px-6 py-[100px] md:py-[120px] border-b border-[#E5E5E5] text-[#111111]">
        <div className="mx-auto max-w-[1200px]">
          <p className="max-w-3xl text-[clamp(1.5rem,2.8vw,2.3rem)] leading-[1.4] tracking-tight text-[#111111] font-semibold">
            {personalInfo.bio}
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-start">
            <div className="relative aspect-[3/4] w-full max-w-[24rem] overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#F5F5F5] md:col-span-5 flex items-center justify-center shadow-sm">
              <img
                src="/images/profile-portrait.png"
                alt={personalInfo.nameTh}
                className="size-full object-cover object-center select-none"
              />
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#111111]">
                เป้าหมายการฝึกงานและการทำงาน
              </span>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#525252]">
                ต้องการนำความรู้และทักษะด้าน <span className="text-[#111111] font-medium">Python, Deep Learning, Computer Vision, และ Modern Web Application</span> มาสร้างคุณประโยชน์จริงให้กับทีมงาน พัฒนาโปรดักต์ที่แก้ปัญหาจริงให้กับผู้ใช้ และพร้อมเรียนรู้วัฒนธรรมการทำงานแบบมืออาชีพ ทั้งในสาย AI/ML Engineering และ Software Development โดยพร้อมเริ่มงานในช่วง <span className="text-[#111111] font-medium">{personalInfo.internshipPeriod}</span>
              </p>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800"
                >
                  <span>เปิดดูและดาวน์โหลดเรซูเม่ (PDF)</span>
                  <span>↓</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <dl className="mt-16 grid gap-6 border-t border-[#E5E5E5] pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-sm">
              <dt className="text-[13px] text-[#525252] font-medium">เกรดเฉลี่ยสะสม</dt>
              <dd className="mt-2 text-[18px] leading-snug font-bold text-[#111111] tabular-nums">
                {personalInfo.gpax} / 4.00
              </dd>
            </div>

            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-sm">
              <dt className="text-[13px] text-[#525252] font-medium">ช่วงฝึกงาน</dt>
              <dd className="mt-2 text-[18px] leading-snug font-bold text-[#111111]">
                {personalInfo.internshipPeriod}
              </dd>
            </div>

            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-sm">
              <dt className="text-[13px] text-[#525252] font-medium">สถาบันการศึกษา</dt>
              <dd className="mt-2 text-[16px] leading-snug font-semibold text-[#111111]">
                {personalInfo.faculty} {personalInfo.university}
              </dd>
            </div>

            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-sm">
              <dt className="text-[13px] text-[#525252] font-medium">สาขาวิชา</dt>
              <dd className="mt-2 text-[16px] leading-snug font-semibold text-[#111111]">
                {personalInfo.major}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* WORK PRINCIPLES */}
      <section className="w-full bg-white px-6 py-[100px] md:py-[120px] text-[#111111] border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-[#111111]">
              แนวคิดและการทำงาน (Work Principles)
            </span>
            <p className="mt-6 text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.35] tracking-tight text-[#111111] font-semibold">
              ผมเชื่อในการสร้างสรรค์เทคโนโลยีที่ตอบโจทย์มนุษย์ โดยอาศัยความถูกต้องทางวิชาการและการส่งมอบผลลัพธ์ที่ใช้งานได้จริง
            </p>

            <ul className="mt-12 divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
              {personalInfo.workPrinciples.map((item, idx) => (
                <li key={idx} className="py-6 text-[16px] leading-[1.6]">
                  <h4 className="text-lg font-semibold text-[#111111] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[#525252] text-sm">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GRADES SECTION */}
      <section className="w-full bg-white px-6 py-[100px] md:py-[120px] border-b border-[#E5E5E5] text-[#111111]">
        <div className="max-w-[1200px] mx-auto">
          <div className="pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#111111]">
                Academic Transcript
              </span>
              <h2 className="mt-3 text-[32px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
                ผลการเรียนรายภาคการศึกษา
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#525252] max-w-xl">
                บันทึกรายวิชา หน่วยกิต และผลการเรียนทุกภาคการศึกษา สามารถกรองดูตามปีการศึกษาได้
              </p>
            </div>
          </div>
          <GradeViewer />
        </div>
      </section>

      {/* AWARDS SUMMARY IN ABOUT */}
      <section className="w-full bg-white px-6 py-[100px] md:py-[120px] text-[#111111]">
        <div className="max-w-[1200px] mx-auto">
          <div className="pb-12">
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
              เกียรติประวัติและความสำเร็จ
            </h2>
          </div>

          <ol className="border-t border-[#E5E5E5]">
            {awardsData.map((award, idx) => (
              <li key={idx} className="grid gap-4 border-b border-[#E5E5E5] py-8 md:grid-cols-12 md:gap-6 items-start">
                <div className="md:col-span-2 flex flex-col gap-1">
                  <span className="font-mono text-sm font-semibold text-[#525252] tabular-nums">
                    ปี {award.year}
                  </span>
                  {award.category && (
                    <span className="inline-block rounded-full border border-[#E5E5E5] bg-[#FAFAFA] px-2.5 py-0.5 text-[11px] font-medium text-[#525252] w-fit">
                      {award.category}
                    </span>
                  )}
                </div>
                <div className={award.image ? "md:col-span-7" : "md:col-span-10"}>
                  <p className="text-lg font-semibold text-[#111111] leading-snug">
                    {award.title}
                  </p>
                  <p className="mt-2 text-sm leading-[1.6] text-[#525252]">
                    {award.desc}
                  </p>
                  {award.organizer && (
                    <p className="mt-2 text-xs text-[#737373]">
                      {award.organizer}
                    </p>
                  )}
                </div>
                {award.image && (
                  <div className="md:col-span-3">
                    <a
                      href={award.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] aspect-[4/3] shadow-sm"
                      title={`คลิกเพื่อดูภาพขนาดเต็ม: ${award.title}`}
                    >
                      <img
                        src={award.image}
                        alt={award.title}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                        ดูรูปภาพ ↗
                      </div>
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
