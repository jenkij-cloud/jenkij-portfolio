import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Jenkij Sungsunee (เจนกิจ สังสุณี) • AI / Machine Learning Developer & Software Engineer',
  description: 'Portfolio of Jenkij Sungsunee, Computer Science student at Thaksin University (GPAX 3.42). Specializing in Deep Learning, Medical Imaging AI, and Modern Web Applications.',
  keywords: [
    'Jenkij Sungsunee',
    'เจนกิจ สังสุณี',
    'AI Developer',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Thaksin University',
    'มหาวิทยาลัยทักษิณ',
    'Startup Thailand League',
    'Medical AI'
  ],
  authors: [{ name: 'Jenkij Sungsunee' }],
  openGraph: {
    title: 'Jenkij Sungsunee — AI Developer & Software Engineer',
    description: 'Computer Science student at Thaksin University (GPAX 3.42). Runner-up in TSU Pitching League and National Finalist in Startup Thailand League 2026.',
    url: 'https://jenkij-cloud.github.io',
    siteName: 'Jenkij Sungsunee Portfolio',
    locale: 'th_TH',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="min-h-screen bg-white text-[#111111] antialiased selection:bg-[#111111] selection:text-white">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[#111111] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111]"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>
        <Navbar />
        <main id="main-content" className="relative z-10 flex min-h-screen flex-col bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
