'use client';

import { useState } from 'react';
import Link from 'next/link';
import { personalInfo, projects, awardsData } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]">
      <nav aria-label="Main Navigation" className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Status Badge */}
        <div className="flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#111111]">
          <span className="size-2 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
          <span>{personalInfo.status}</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-[#525252]">
          <li>
            <Link 
              href="/" 
              className="transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-0.5 text-[#111111] font-semibold"
            >
              หน้าแรก
            </Link>
          </li>
          <li>
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-0.5"
            >
              <span>ผลงาน</span>
              <span className="text-[12px] text-[#525252] font-mono">[{projects.length}]</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/#skills" 
              className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-0.5"
            >
              <span>ทักษะ</span>
              <span className="text-[12px] text-[#525252] font-mono">[3]</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/#activities" 
              className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-0.5"
            >
              <span>รางวัล</span>
              <span className="text-[12px] text-[#525252] font-mono">[{awardsData.length}]</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-0.5"
            >
              เกี่ยวกับ
            </Link>
          </li>
          <li>
            <Link 
              href="/resume" 
              className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-2 py-0.5 font-semibold text-[#111111] bg-slate-100 hover:bg-slate-200 border border-slate-200"
            >
              <span>เรซูเม่</span>
              <span className="text-[10px] bg-blue-600 text-white font-bold px-1.5 py-0.2 rounded-full">PDF</span>
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ดู GitHub ของ Jenkij"
            className="hidden sm:inline-flex items-center justify-center size-10 rounded-full border border-[#E5E5E5] bg-white text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <button
            onClick={scrollToContact}
            className="flex items-center gap-1.5 rounded-full bg-[#111111] px-4 sm:px-5 py-2.5 min-h-[40px] text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
          >
            <span>ติดต่อ</span>
            <span className="text-sm leading-none">↗</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="เปิดเมนู"
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center size-10 rounded-full border border-[#E5E5E5] bg-white text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <svg className="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              {mobileMenuOpen ? (
                <path d="M5 5L15 15M15 5L5 15" strokeLinecap="round" />
              ) : (
                <path d="M4 6h12M4 10h12M4 14h12" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-white px-6 py-4 shadow-lg animate-fadeIn">
          <ul className="flex flex-col gap-4 text-base font-medium text-[#111111]">
            <li>
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 hover:text-[#525252]"
              >
                หน้าแรก
              </Link>
            </li>
            <li>
              <Link 
                href="/#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-1 hover:text-[#525252]"
              >
                <span>ผลงาน</span>
                <span className="text-xs text-[#525252] font-mono">[{projects.length}]</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-1 hover:text-[#525252]"
              >
                <span>ทักษะ</span>
                <span className="text-xs text-[#525252] font-mono">[3]</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/#activities" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-1 hover:text-[#525252]"
              >
                <span>รางวัลและกิจกรรม</span>
                <span className="text-xs text-[#525252] font-mono">[{awardsData.length}]</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 hover:text-[#525252]"
              >
                เกี่ยวกับ
              </Link>
            </li>
            <li>
              <Link 
                href="/resume" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-1 font-semibold text-blue-600 hover:text-blue-700"
              >
                <span>เรซูเม่ (Internship Resume)</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">PDF Ready</span>
              </Link>
            </li>
            <li className="pt-2 border-t border-[#E5E5E5]">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1 text-sm text-[#525252]"
              >
                <span>ดู GitHub (jenkij-cloud)</span>
                <span>↗</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
