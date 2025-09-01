'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative">
      {/* 임시 히어로 섹션 */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6">
            <span className="gradient-text">AI 코드 연구소</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground-secondary font-mono mb-8">
            당신의 아이디어를 현실로 만들어드립니다
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-gradient">
              프로젝트 시작하기
            </button>
            <button className="btn-neon">
              포트폴리오 보기
            </button>
          </div>
        </motion.div>
      </section>

      {/* 임시 About 섹션 */}
      <section id="about" className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">About Me</h2>
          <p className="text-center text-foreground-secondary max-w-2xl mx-auto">
            프리랜서 개발자 권용범입니다. Web, Mobile, Desktop 개발을 전문으로 합니다.
          </p>
        </div>
      </section>

      {/* 임시 포트폴리오 섹션 */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Portfolio</h2>
          <p className="text-center text-foreground-secondary">
            포트폴리오 섹션이 여기에 표시됩니다.
          </p>
        </div>
      </section>

      {/* 임시 Contact 섹션 */}
      <section id="contact" className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Contact</h2>
          <p className="text-center text-foreground-secondary">
            문의 폼이 여기에 표시됩니다.
          </p>
        </div>
      </section>
    </div>
  );
}