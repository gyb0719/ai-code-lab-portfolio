import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "AI 코드 연구소 | 권용범 포트폴리오",
  description: "Web, Mobile, Desktop 개발 전문 프리랜서 개발자 권용범의 포트폴리오",
  keywords: ["웹개발", "모바일앱개발", "프리랜서", "React", "Next.js", "Flutter"],
  authors: [{ name: "권용범", url: "https://github.com" }],
  openGraph: {
    title: "AI 코드 연구소 | 권용범 포트폴리오",
    description: "혁신적인 기술과 창의적인 솔루션으로 당신의 아이디어를 현실로",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background-primary text-foreground-primary`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
