'use client';

import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#F5F5F5] border-t border-[#E5E5E5] py-[100px] md:py-[120px] scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="rounded-2xl border border-[#E5E5E5] bg-white p-8 md:p-14 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-[32px] md:text-[44px] font-semibold tracking-tight text-[#111111] leading-tight">
              พร้อมร่วมงานและสร้างสรรค์นวัตกรรมร่วมกับทีมของคุณ
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#525252]">
              เปิดรับโอกาสฝึกงานและร่วมงาน (พร้อมเริ่มฝึกงานช่วง {personalInfo.internshipPeriod}) ในตำแหน่ง {personalInfo.role} ยินดีพูดคุย แลกเปลี่ยนไอเดีย และนัดสัมภาษณ์ครับ
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={copyEmail}
              aria-label="คัดลอกอีเมลสำหรับติดต่อ"
              className="relative inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
            >
              <span>{copied ? '✓ คัดลอกอีเมลเรียบร้อย!' : personalInfo.email}</span>
              <span className="text-sm leading-none" aria-hidden="true">
                {copied ? '' : '↗'}
              </span>
            </button>

            <a
              href={`tel:${personalInfo.phone.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-3.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
            >
              <span>โทร {personalInfo.phone}</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-3.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
            >
              <span>GitHub</span>
              <span className="text-[13px] text-[#525252]">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#525252] pt-6 border-t border-[#E5E5E5]">
          <p>
            {personalInfo.nameEn} ({personalInfo.nameTh}) • {personalInfo.faculty} {personalInfo.university}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-[#525252] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1"
          >
            <span>กลับขึ้นด้านบน</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
