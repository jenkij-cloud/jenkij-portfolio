'use client';

import { useState } from 'react';
import { projects } from '../../data/portfolioData';
import ProjectModal from '../../components/ProjectModal';

export default function WorksPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className="relative min-h-screen bg-white pt-28 pb-[100px] md:pb-[120px] text-[#111111]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Page Title */}
        <div className="pb-12 border-b border-[#E5E5E5] mb-12">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase tracking-tighter leading-none flex items-baseline gap-3">
            <span className="text-outline">SELECTED</span>
            <span className="text-[#111111]">WORKS</span>
            <span className="text-base font-mono text-[#525252] ml-2 tabular-nums">
              [{projects.length}]
            </span>
          </h1>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#525252] max-w-xl">
            แฟ้มสะสมผลงานด้านปัญญาประดิษฐ์ทางการแพทย์ โครงการพัฒนานวัตกรรมระดับประเทศ และการศึกษาดูงานต่างประเทศ
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-2xl border border-[#E5E5E5] bg-white overflow-hidden transition-all duration-200 hover:border-[#CCCCCC] hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group block w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2 rounded-2xl flex-1 flex flex-col"
                aria-label={`ดูรายละเอียดผลงาน ${project.title}`}
              >
                {/* Cover Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F5F5] border-b border-[#E5E5E5]">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-semibold text-[#111111] group-hover:text-[#525252] transition-colors leading-snug">
                        {project.title}
                      </h2>
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
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full border px-3 py-1 text-[12px] border-[#E5E5E5] bg-white text-[#525252]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenImage={(imgSrc, imgTitle) => setPreviewImage({ src: imgSrc, title: imgTitle })}
        />
      )}

      {/* HD Image Lightbox Modal */}
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
              <h4 className="text-base sm:text-lg font-bold text-[#111111] leading-snug">
                {previewImage.title}
              </h4>
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
