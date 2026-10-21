'use client';

import { useState } from 'react';
import Link from 'next/link';
import { personalInfo, projects, skillsData, awardsData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className="flex flex-col bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full bg-white pt-28 pb-[100px] md:pb-[120px] border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Giant Editorial Heading */}
          <div className="w-full select-none pb-8 md:pb-12">
            <h1 className="text-[clamp(2.4rem,8.5vw,9.5rem)] font-extrabold uppercase leading-[0.92] tracking-tighter flex flex-wrap items-baseline gap-x-4 md:gap-x-7">
              <span className="text-outline">JENKIJ</span>
              <span className="text-[#111111]">SUNGSUNEE</span>
            </h1>
          </div>

          {/* Hero Content Grid (Left Info, Center Portrait, Right GPAX & Contacts) */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 items-end">
            {/* Left Column: Bio & CTAs */}
            <div className="flex flex-col items-start md:col-span-5">
              <div className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-[#111111]">
                <span className="size-1.5 rounded-full bg-[#111111]"></span>
                <span>{personalInfo.role}</span>
              </div>

              <p className="mt-4 text-[16px] leading-[1.6] text-[#525252]">
                นิสิตวิทยาการคอมพิวเตอร์และสารสนเทศ ม.ทักษิณ เชี่ยวชาญการพัฒนาโมเดลปัญญาประดิษฐ์ (Deep Learning) สำหรับการตรวจคัดกรองทางการแพทย์ และการสร้างเว็บแอปพลิเคชัน พร้อมร่วมงานและเปิดรับฝึกงานช่วง <span className="text-[#111111] font-semibold">{personalInfo.internshipPeriod}</span>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
                >
                  <span>ดูผลงานเด่น</span>
                  <span className="text-sm leading-none">↗</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-3 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
                >
                  <span>ดาวน์โหลดเรซูเม่ (PDF)</span>
                  <span className="text-[13px]">↓</span>
                </a>
              </div>
            </div>

            {/* Center Column: Portrait Photo */}
            <div className="flex justify-center md:col-span-4">
              <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#F5F5F5] flex items-end justify-center shadow-sm group">
                <img
                  src="/images/profile-portrait.png"
                  alt={`ภาพของ ${personalInfo.nameTh}`}
                  className="size-full object-cover object-center select-none transition-transform duration-300 group-hover:scale-105"
                  draggable="false"
                />
              </div>
            </div>

            {/* Right Column: GPAX Box & Contacts */}
            <div className="flex flex-col items-start md:items-end md:col-span-3">
              <div className="flex w-full flex-col md:w-auto md:min-w-[210px]">
                {/* GPAX Box */}
                <div className="w-full rounded-2xl border border-[#E5E5E5] bg-white p-5 transition-colors hover:border-[#CCCCCC] mb-6 shadow-sm">
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#525252] uppercase tracking-wider">
                    <span>เกรดเฉลี่ยสะสม (GPAX)</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold tracking-tight text-[#111111] tabular-nums">
                      {personalInfo.gpax}
                    </span>
                    <span className="text-[13px] font-medium text-[#525252] tabular-nums">
                      / 4.00
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center">
                    <p className="text-[12px] leading-relaxed text-[#525252]">
                      ตัวแทนชิงแชมป์ Startup Thailand League 2026 ระดับประเทศ &amp; รองชนะเลิศ TSU Pitching
                    </p>
                  </div>
                </div>

                {/* Quick Contact Links */}
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#525252] mb-2">
                  ช่องทางติดต่อ
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 rounded-full border border-[#E5E5E5] bg-white px-4 py-2.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                  >
                    <span>GitHub (jenkij-cloud)</span>
                    <span className="text-[13px] text-[#525252]">↗</span>
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center justify-between gap-4 rounded-full border border-[#E5E5E5] bg-white px-4 py-2.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                  >
                    <span>อีเมล</span>
                    <span className="text-[13px] text-[#525252]">↗</span>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone.replace(/-/g, '')}`}
                    className="flex items-center justify-between gap-4 rounded-full border border-[#E5E5E5] bg-white px-4 py-2.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                  >
                    <span className="tabular-nums">{personalInfo.phone}</span>
                    <span className="text-[13px] text-[#525252]">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="mt-16 pt-12 border-t border-[#E5E5E5]">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="py-6 first:pt-0 last:pb-0 md:py-0 md:px-6 text-center">
                  <span className="block text-[44px] md:text-[48px] font-semibold text-[#111111] leading-none tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <span className="block text-[13px] text-[#525252] mt-2 max-w-xs mx-auto">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="w-full bg-white py-[100px] md:py-[120px] scroll-mt-20 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
                ผลงานเด่น
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#525252] max-w-xl">
                โครงการปัญญาประดิษฐ์ทางการแพทย์ แอปพลิเคชันนวัตกรรม และผลงานซอฟต์แวร์ที่พัฒนาขึ้นจริง
              </p>
            </div>
            <div>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-[#111111] hover:text-[#525252] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1"
              >
                <span>ดูทั้งหมด <span className="tabular-nums font-mono">[{projects.length}]</span></span>
                <span className="text-sm">↗</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="group flex flex-col rounded-2xl border border-[#E5E5E5] bg-white overflow-hidden transition-all duration-200 hover:border-[#CCCCCC] hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
              >
                {/* Image Cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F5F5] border-b border-[#E5E5E5]">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-[#111111] group-hover:text-[#525252] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <span className="text-[13px] text-[#525252] shrink-0 mt-1">↗</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#525252] line-clamp-2">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-[#E5E5E5]">
                    <span className="inline-flex items-center rounded-full border px-3 py-1 text-[12px] border-[#E5E5E5] bg-white text-[#111111] font-medium">
                      {project.category}
                    </span>
                    {project.tags.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full border px-3 py-1 text-[12px] border-[#E5E5E5] bg-white text-[#525252]"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-[12px] border-[#E5E5E5] bg-white text-[#525252] tabular-nums">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="w-full bg-white py-[100px] md:py-[120px] scroll-mt-20 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="pb-12">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
                ทักษะและความเชี่ยวชาญ
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#525252] max-w-xl">
                บูรณาการระหว่างปัญญาประดิษฐ์ (Artificial Intelligence), การพัฒนาซอฟต์แวร์ และทักษะการสร้างสรรค์นวัตกรรม
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col justify-between rounded-2xl border border-[#E5E5E5] bg-white p-6 sm:p-8 transition-colors hover:border-[#CCCCCC] shadow-sm"
              >
                <div>
                  <span className="font-mono text-[13px] font-semibold text-[#525252] tabular-nums">
                    {skill.id}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#111111]">
                    {skill.category}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#525252] font-medium">
                    {skill.title}
                  </p>
                  <p className="mt-4 text-sm leading-[1.6] text-[#525252]">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#525252] block mb-3">
                    เครื่องมือและเทคโนโลยี
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full border px-3 py-1 text-[12px] border-[#E5E5E5] bg-white text-[#111111] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & TIMELINE SECTION */}
      <section id="activities" className="w-full bg-white py-[100px] md:py-[120px] scroll-mt-20 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="pb-12">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
                รางวัลและเกียรติประวัติสำคัญ
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#525252] max-w-xl">
                ความสำเร็จจากการแข่งขันระดับประเทศ ระดับภูมิภาค และการสร้างชื่อเสียงให้แก่มหาวิทยาลัย พร้อมภาพเกียรติบัตรและโปสเตอร์ประชาสัมพันธ์ทางการ
              </p>
            </div>
          </div>

          <div className="relative border-l border-[#E5E5E5] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8 max-w-4xl">
            {awardsData.map((award, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[31px] sm:-left-[47px] top-6 size-3.5 rounded-full border-2 border-white bg-[#111111]"></span>
                <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 sm:p-8 transition-colors hover:border-[#CCCCCC] shadow-sm">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center rounded-full border px-3 py-1 text-[12px] border-[#E5E5E5] bg-[#F5F5F5] text-[#111111] font-mono font-semibold tabular-nums">
                      ปี {award.year}
                    </span>
                    <span className="inline-flex items-center rounded-full border px-3 py-1 text-[12px] border-[#111111] bg-[#111111] text-white font-medium">
                      {award.category}
                    </span>
                    <span className="text-xs text-[#525252] font-medium">
                      {award.organizer}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4 items-start">
                    <div className={award.image ? "md:col-span-8" : "md:col-span-12"}>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#111111] leading-snug">
                        {award.title}
                      </h3>

                      <p className="mt-2.5 text-sm sm:text-[15px] leading-[1.6] text-[#525252]">
                        {award.desc}
                      </p>
                    </div>

                    {award.image && (
                      <div className="md:col-span-4">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => setPreviewImage({ src: award.image, title: award.title, organizer: award.organizer })}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setPreviewImage({ src: award.image, title: award.title, organizer: award.organizer });
                            }
                          }}
                          className="group/img relative overflow-hidden rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                          aria-label={`คลิกเพื่อดูภาพความละเอียดสูง ${award.title}`}
                        >
                          <img
                            src={award.image}
                            alt={award.title}
                            loading="lazy"
                            className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-3 text-center text-white text-xs font-medium">
                            <span>🔍 ดูภาพขนาดเต็ม HD</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenImage={(imgSrc, imgTitle) => setPreviewImage({ src: imgSrc, title: imgTitle })}
        />
      )}

      {/* HD IMAGE LIGHTBOX MODAL */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex w-full items-start justify-between pb-3 border-b border-[#E5E5E5] mb-4 gap-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#111111] leading-snug">
                  {previewImage.title}
                </h4>
                {previewImage.organizer && (
                  <p className="text-xs sm:text-sm text-[#525252] mt-0.5">
                    {previewImage.organizer}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                aria-label="ปิดรูปภาพ"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#E5E5E5] bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                ✕
              </button>
            </div>

            <div className="overflow-auto max-h-[72vh] w-full flex items-center justify-center bg-[#F8F9FA] rounded-2xl border border-[#E5E5E5] p-2">
              <img
                src={previewImage.src}
                alt={previewImage.title}
                className="max-w-full max-h-[68vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
