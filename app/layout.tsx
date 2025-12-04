import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00D9FF',
};

export const metadata: Metadata = {
  title: "AI 코드 연구소",
  description: "Web, Mobile, Desktop 개발 전문 - 혁신적인 기술과 창의적인 솔루션으로 비즈니스 성장을 도와드립니다",
  keywords: ["웹개발", "모바일앱개발", "프리랜서", "React", "Next.js", "Flutter", "TypeScript", "Node.js", "Python"],
  authors: [{ name: "권용범", url: "https://github.com" }],
  creator: "권용범",
  publisher: "AI 코드 연구소",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ai-code-lap.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AI 코드 연구소",
    description: "혁신적인 기술과 창의적인 솔루션으로 당신의 아이디어를 현실로",
    url: 'https://www.ai-code-lap.com',
    siteName: 'AI 코드 연구소',
    images: [
      {
        url: 'https://www.ai-code-lap.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'AI 코드 연구소',
        type: 'image/png',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 코드 연구소',
    description: '혁신적인 기술과 창의적인 솔루션으로 당신의 아이디어를 현실로',
    images: ['https://www.ai-code-lap.com/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
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
