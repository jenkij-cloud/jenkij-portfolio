'use client';

import { useEffect } from 'react';
import GradeViewer from './GradeViewer';

export default function GradeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="ประวัติผลการเรียนรายภาคการศึกษา"
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-[#E5E5E5] shadow-2xl p-5 sm:p-8 text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div className="flex items-start justify-between pb-6 border-b border-[#E5E5E5] mb-6 pr-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#737373] mb-1">
              <span>ACADEMIC TRANSCRIPT &amp; GRADES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
              ผลการเรียนแยกตามแต่ละปีการศึกษา
            </h2>
            <p className="mt-1 text-sm text-[#525252]">
              ประวัติการศึกษา รายวิชา หน่วยกิต และผลการเรียน มหาวิทยาลัยทักษิณ
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="ปิดหน้าต่างผลการเรียน"
            className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#111111] hover:bg-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            ✕
          </button>
        </div>

        {/* GRADE VIEWER BODY */}
        <GradeViewer />
      </div>
    </div>
  );
}

