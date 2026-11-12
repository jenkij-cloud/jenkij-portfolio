'use client';

import { useState } from 'react';
import { academicRecords } from '../data/portfolioData';

function getGradeBadgeClass(grade) {
  switch (grade) {
    case 'A':
      return 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold';
    case 'B+':
      return 'bg-teal-50 text-teal-800 border-teal-300 font-semibold';
    case 'B':
      return 'bg-blue-50 text-blue-800 border-blue-300 font-medium';
    case 'C+':
      return 'bg-amber-50 text-amber-800 border-amber-300 font-medium';
    case 'C':
      return 'bg-orange-50 text-orange-800 border-orange-300 font-medium';
    case 'D':
      return 'bg-rose-50 text-rose-800 border-rose-300 font-medium';
    case 'S':
      return 'bg-purple-50 text-purple-800 border-purple-300 font-semibold';
    case 'กำลังเรียน':
    case '-':
      return 'bg-neutral-100 text-neutral-600 border-neutral-300 font-medium italic';
    default:
      return 'bg-neutral-50 text-neutral-700 border-neutral-200';
  }
}

export default function GradeViewer({ compact = false }) {
  const [selectedYear, setSelectedYear] = useState('all'); // 'all', '2569', '2568', '2567'
  const [searchQuery, setSearchQuery] = useState('');

  const { summary, years } = academicRecords;

  const filteredYears = years.filter((year) => {
    if (selectedYear !== 'all' && year.academicYear !== selectedYear) {
      return false;
    }
    return true;
  });

  return (
    <div className="w-full text-[#111111]">
      {/* SUMMARY BANNER */}
      <div className="rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-5 md:p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E5E5E5] px-3 py-1 text-xs font-semibold text-[#525252]">
              <span className="size-1.5 rounded-full bg-emerald-500"></span>
              <span>สถานะ: {summary.status}</span>
            </div>
            <h3 className="mt-3 text-xl md:text-2xl font-bold text-[#111111]">
              {summary.major}
            </h3>
            <p className="mt-1 text-sm text-[#525252]">
              {summary.faculty} • {summary.university} ({summary.campus})
            </p>
            <p className="mt-0.5 text-xs text-[#737373] font-mono">
              รหัสนิสิต: {summary.studentId} • วิชาโท: {summary.minor}
            </p>
          </div>

          {/* METRIC BADGES */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-[#E5E5E5] bg-white p-3.5 text-center">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                เกรดเฉลี่ยสะสม
              </span>
              <span className="text-2xl font-extrabold text-[#111111] tabular-nums">
                {summary.gpax}
              </span>
              <span className="text-[11px] text-[#737373] block">/ 4.00 (GPAX)</span>
            </div>

            <div className="rounded-xl border border-[#E5E5E5] bg-white p-3.5 text-center">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                หน่วยกิตผ่านสะสม
              </span>
              <span className="text-2xl font-extrabold text-[#111111] tabular-nums">
                {summary.totalCreditsPassed}
              </span>
              <span className="text-[11px] text-[#737373] block">/ 112 ลงทะเบียน</span>
            </div>

            <div className="rounded-xl border border-[#E5E5E5] bg-white p-3.5 text-center">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                ผลคูณสะสม (GPX)
              </span>
              <span className="text-2xl font-extrabold text-[#111111] tabular-nums">
                {summary.cumulativeGP}
              </span>
              <span className="text-[11px] text-[#737373] block">คะแนนแต้มสะสม</span>
            </div>

            <div className="rounded-xl border border-[#E5E5E5] bg-white p-3.5 text-center">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                เทอมล่าสุด (1/2569)
              </span>
              <span className="text-2xl font-extrabold text-emerald-600 tabular-nums">
                3.86
              </span>
              <span className="text-[11px] text-[#737373] block">GPA ภาคเรียน</span>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER & TAB CONTROLS */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        {/* YEAR TABS */}
        <div className="inline-flex rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] p-1 gap-1 overflow-x-auto text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={() => setSelectedYear('all')}
            className={`rounded-lg px-4 py-2 transition-all cursor-pointer whitespace-nowrap ${
              selectedYear === 'all'
                ? 'bg-white font-semibold text-[#111111] shadow-sm'
                : 'text-[#525252] hover:text-[#111111]'
            }`}
          >
            ดูเกรดทุกปีการศึกษา
          </button>
          {years.map((y) => (
            <button
              key={y.academicYear}
              type="button"
              onClick={() => setSelectedYear(y.academicYear)}
              className={`rounded-lg px-4 py-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                selectedYear === y.academicYear
                  ? 'bg-white font-semibold text-[#111111] shadow-sm'
                  : 'text-[#525252] hover:text-[#111111]'
              }`}
            >
              <span>{y.yearNumber} ({y.academicYear})</span>
              {y.academicYear === '2569' && (
                <span className="size-1.5 rounded-full bg-emerald-500" title="ปีการศึกษาปัจจุบัน"></span>
              )}
            </button>
          ))}
        </div>

        {/* SEARCH BOX */}
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหารหัสวิชา หรือชื่อวิชา..."
            className="w-full rounded-xl border border-[#E5E5E5] bg-white px-3.5 py-2 text-xs sm:text-sm text-[#111111] placeholder:text-[#888888] focus:border-[#111111] focus:outline-none focus:ring-1 focus:ring-[#111111]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#888888] hover:text-[#111111]"
              aria-label="ล้างการค้นหา"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* SEMESTERS LIST */}
      <div className="space-y-8">
        {filteredYears.map((yearGroup) => (
          <div key={yearGroup.academicYear} className="space-y-6">
            {/* YEAR SECTION HEADER (when viewing all) */}
            {selectedYear === 'all' && (
              <div className="flex items-center gap-3 pt-4 border-t border-[#E5E5E5] first:border-t-0 first:pt-0">
                <h4 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <span>{yearGroup.yearNumber}</span>
                  <span className="text-xs font-mono font-normal text-[#737373]">
                    (ปีการศึกษา {yearGroup.academicYear})
                  </span>
                </h4>
                <div className="h-px flex-1 bg-[#E5E5E5]"></div>
                <span className="text-xs font-medium text-[#737373] tabular-nums">
                  {yearGroup.summaryGpa}
                </span>
              </div>
            )}

            {yearGroup.semesters.map((sem) => {
              const matchedCourses = sem.courses.filter((course) => {
                if (!searchQuery.trim()) return true;
                const q = searchQuery.toLowerCase();
                return (
                  course.code.toLowerCase().includes(q) ||
                  course.nameTh.toLowerCase().includes(q) ||
                  course.nameEn.toLowerCase().includes(q)
                );
              });

              if (searchQuery.trim() && matchedCourses.length === 0) {
                return null;
              }

              return (
                <div
                  key={sem.id}
                  className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-sm transition-all hover:border-[#D4D4D4]"
                >
                  {/* SEMESTER HEADER */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E5E5] bg-[#FAFAFA] px-5 py-4">
                    <div className="flex items-center gap-3">
                      <h5 className="text-base font-bold text-[#111111]">
                        {sem.title}
                      </h5>
                      {sem.isCurrent ? (
                        <span className="rounded-full bg-blue-100 text-blue-800 border border-blue-200 px-2.5 py-0.5 text-[11px] font-semibold">
                          กำลังศึกษา
                        </span>
                      ) : (
                        <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-semibold">
                          ผ่านแล้ว ({sem.creditsPassed} หน่วยกิต)
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#525252]">
                      <div>
                        <span className="text-[#888888]">ลงทะเบียน: </span>
                        <strong className="text-[#111111]">{sem.creditsEnrolled}</strong> หน่วยกิต
                      </div>
                      <div>
                        <span className="text-[#888888]">GPA ประจำภาค: </span>
                        <strong className="text-[#111111] font-bold">{sem.gpa}</strong>
                      </div>
                      <div>
                        <span className="text-[#888888]">GPAX สะสม: </span>
                        <strong className="text-[#111111] font-bold">{sem.gpax}</strong>
                      </div>
                    </div>
                  </div>

                  {/* COURSES TABLE */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="border-b border-[#E5E5E5] bg-[#FDFDFD] text-[11px] uppercase tracking-wider text-[#737373] font-semibold">
                        <tr>
                          <th scope="col" className="py-3 px-4 w-12 text-center">#</th>
                          <th scope="col" className="py-3 px-4 w-28">รหัสวิชา</th>
                          <th scope="col" className="py-3 px-4">ชื่อรายวิชา (Course Name)</th>
                          <th scope="col" className="py-3 px-4 w-20 text-center">หน่วยกิต</th>
                          <th scope="col" className="py-3 px-4 w-24 text-center">ผลการเรียน</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E5E5E5]">
                        {matchedCourses.map((c, idx) => (
                          <tr key={c.code} className="hover:bg-[#F9F9F9] transition-colors">
                            <td className="py-3 px-4 text-center text-[#737373] font-mono tabular-nums">
                              {idx + 1}
                            </td>
                            <td className="py-3 px-4 font-mono font-medium text-[#111111] tabular-nums">
                              {c.code}
                            </td>
                            <td className="py-3 px-4">
                              <p className="font-medium text-[#111111] leading-snug">
                                {c.nameTh}
                              </p>
                              <p className="text-[11px] text-[#737373] uppercase tracking-wide font-sans mt-0.5">
                                {c.nameEn}
                              </p>
                            </td>
                            <td className="py-3 px-4 text-center font-mono font-semibold text-[#111111] tabular-nums">
                              {c.credits}
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span
                                className={`inline-block min-w-[2.4rem] rounded-md border px-2 py-0.5 text-center text-xs tabular-nums ${getGradeBadgeClass(
                                  c.grade
                                )}`}
                              >
                                {c.grade}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl border border-dashed border-[#D4D4D4] p-4 text-xs text-[#737373]">
        <div className="flex items-center gap-2">
          <span>🏛️</span>
          <span>
            ข้อมูลอ้างอิงจากระบบงานทะเบียนและประมวลผล มหาวิทยาลัยทักษิณ (TSU Enrollment Portal)
          </span>
        </div>
        <a
          href="https://enroll.tsu.ac.th/student/printgrade.jsp"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#111111] underline hover:text-[#525252] transition-colors"
        >
          เปิดลิงก์ระบบทะเบียน TSU ↗
        </a>
      </div>
    </div>
  );
}

