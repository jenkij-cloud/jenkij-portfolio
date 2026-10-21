'use client';

import { useEffect } from 'react';

export default function ProjectModal({ project, onClose, onOpenImage }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-[#E5E5E5] shadow-2xl p-6 sm:p-8 text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="ปิดหน้าต่างรายละเอียด"
          className="absolute top-5 right-5 z-10 flex size-9 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#111111] hover:bg-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
        >
          ✕
        </button>

        {/* Modal Cover Image */}
        <div 
          role={onOpenImage ? "button" : undefined}
          tabIndex={onOpenImage ? 0 : undefined}
          onClick={() => onOpenImage && onOpenImage(project.coverImage, project.title)}
          className={`relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] mb-6 group ${onOpenImage ? 'cursor-pointer' : ''}`}
          title={onOpenImage ? "คลิกเพื่อดูภาพขนาดเต็ม HD" : undefined}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {onOpenImage && (
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
              🔍 คลิกเพื่อดูภาพขนาดเต็ม HD
            </div>
          )}
        </div>

        {/* Header Information */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center rounded-full border border-[#111111] bg-[#111111] px-3 py-1 text-[12px] font-semibold text-white">
            {project.category}
          </span>
          <span className="inline-flex items-center rounded-full border border-[#E5E5E5] bg-[#F5F5F5] px-3 py-1 text-[12px] font-medium text-[#525252]">
            {project.role}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
          {project.title}
        </h2>
        <p className="text-base text-[#525252] mt-1 font-medium">
          {project.titleTh}
        </p>

        {/* Highlights Section */}
        <div className="mt-6 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#111111] mb-3">
            จุดเด่นและรางวัลความสำเร็จ
          </h3>
          <ul className="space-y-2 text-sm text-[#111111]">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Problem & Solution Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#E5E5E5] p-5">
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-[#525252] mb-2">
              โจทย์และที่มา (Problem)
            </h4>
            <p className="text-sm leading-relaxed text-[#525252]">
              {project.details.problem}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E5E5] p-5">
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-[#525252] mb-2">
              แนวทางแก้ปัญหา (Solution)
            </h4>
            <p className="text-sm leading-relaxed text-[#525252]">
              {project.details.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 pt-5 border-t border-[#E5E5E5]">
          <h4 className="text-[13px] font-semibold uppercase tracking-wider text-[#525252] mb-3">
            เครื่องมือและเทคโนโลยีที่ใช้
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.details.techStack.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full border border-[#E5E5E5] bg-white px-3 py-1 text-[13px] font-medium text-[#111111]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Recognition / Pitching */}
        {project.details.achievements && (
          <div className="mt-6 pt-5 border-t border-[#E5E5E5]">
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-[#525252] mb-2">
              ผลลัพธ์และการยอมรับ
            </h4>
            <p className="text-sm leading-relaxed text-[#525252]">
              {project.details.achievements}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
