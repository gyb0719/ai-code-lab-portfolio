'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // 하이드레이션 불일치 방지
  if (!mounted) {
    return (
      <div className="p-2.5 rounded-full border-2 border-neon-cyan/30 bg-background-secondary/50 w-10 h-10" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-2.5 rounded-full transition-all duration-300
        border-2 overflow-hidden
        ${theme === 'dark'
          ? 'border-neon-cyan/30 hover:border-neon-cyan bg-background-secondary/50 hover:bg-neon-cyan/10'
          : 'border-amber-400/30 hover:border-amber-400 bg-white/50 hover:bg-amber-400/10'
        }
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
    >
      {/* 배경 애니메이션 */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* 아이콘 전환 */}
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 180,
            opacity: theme === 'dark' ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-neon-cyan" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -180,
            opacity: theme === 'light' ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </motion.div>
      </div>

      {/* 툴팁 */}
      <div className={`
        absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
        ${theme === 'dark' ? 'bg-neon-cyan/90 text-background-primary' : 'bg-amber-400/90 text-gray-900'}
      `}>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </div>
    </motion.button>
  );
}
