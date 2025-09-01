'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ChevronDown, Sparkles, Code2, Cpu, Zap } from 'lucide-react';
import ParticleBackground from '@/components/effects/ParticleBackground';
import ThreeDCube from '@/components/effects/ThreeDCube';

const phrases = [
  '혁신적인 웹 애플리케이션',
  '직관적인 모바일 앱',
  '강력한 데스크톱 소프트웨어',
  '최첨단 AI 솔루션',
];

const floatingIcons = [
  { Icon: Code2, delay: 0 },
  { Icon: Cpu, delay: 1 },
  { Icon: Zap, delay: 2 },
  { Icon: Sparkles, delay: 3 },
];

export default function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 효과들 */}
      <ParticleBackground />
      
      {/* 그리드 배경 */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent" />
      
      {/* 3D 큐브 - 오른쪽에 배치 */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <ThreeDCube />
      </div>

      {/* 플로팅 아이콘들 */}
      {floatingIcons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-neon-purple/30"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + index * 20}%`,
            top: `${20 + index * 15}%`,
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* 터미널 스타일 인트로 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block terminal px-4 py-2 rounded-lg mb-8"
          >
            <span className="text-neon-green text-sm font-mono">
              <span className="opacity-60">$</span> whoami
            </span>
            <span className="terminal-cursor ml-2" />
          </motion.div>

          {/* 메인 타이틀 */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-foreground-primary mb-2">안녕하세요,</span>
            <span className="gradient-text glitch" data-text="AI 코드 연구소">
              AI 코드 연구소
            </span>
          </motion.h1>

          {/* 타이핑 효과 서브타이틀 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-foreground-secondary font-mono mb-8"
          >
            <span>당신의 아이디어를 </span>
            <span className="text-neon-cyan">
              <Typewriter
                options={{
                  strings: phrases,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </span>
            <span>으로</span>
          </motion.div>

          {/* 설명 텍스트 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto mb-10"
          >
            10년 이상의 경험을 보유한 풀스택 개발자 권용범입니다.
            최신 기술과 창의적인 솔루션으로 비즈니스 성장을 도와드립니다.
          </motion.p>

          {/* CTA 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToContact}
              className="btn-gradient group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">프로젝트 시작하기</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={scrollToPortfolio}
              className="btn-neon group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>포트폴리오 보기</span>
              <Sparkles className="inline-block ml-2 w-4 h-4 group-hover:text-neon-yellow transition-colors" />
            </motion.button>
          </motion.div>

          {/* 기술 스택 배지들 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-12 flex flex-wrap gap-3 justify-center"
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Flutter'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 bg-background-secondary/50 border border-neon-cyan/30 rounded-full text-sm font-mono text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-neon-cyan cursor-pointer"
            onClick={scrollToPortfolio}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>

      {/* 마우스 추적 글로우 효과 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-neon-cyan/10 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
    </section>
  );
}