'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Particle {
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // 클라이언트에서만 파티클 생성
    const newParticles = [...Array(20)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);

    // 프로그레스 애니메이션
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // 최소 로딩 시간 후 완료
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background-primary"
        >
          {/* 배경 그라디언트 */}
          <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary" />

          {/* 그리드 배경 */}
          <div className="absolute inset-0 grid-background opacity-20" />

          {/* 파티클 효과 */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                initial={{
                  x: particle.x,
                  y: particle.y,
                  opacity: 0,
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>

          {/* 로고 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative z-10 mb-8"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 217, 255, 0.3)',
                  '0 0 40px rgba(189, 147, 249, 0.5)',
                  '0 0 20px rgba(0, 217, 255, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-4 rounded-2xl bg-background-secondary/50 backdrop-blur-sm border border-neon-cyan/30"
            >
              <Image
                src="/logo.png"
                alt="AI 코드 연구소"
                width={80}
                height={80}
                className="relative z-10"
              />
            </motion.div>
          </motion.div>

          {/* 타이틀 */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold font-mono gradient-text mb-4 relative z-10"
          >
            AI 코드 연구소
          </motion.h1>

          {/* 로딩 바 */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 200, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="relative z-10 h-1 bg-background-tertiary rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* 퍼센트 표시 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-sm font-mono text-neon-cyan relative z-10"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>

          {/* 로딩 텍스트 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-2 flex items-center gap-1 text-xs text-foreground-secondary font-mono relative z-10"
          >
            <span>초기화 중</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
