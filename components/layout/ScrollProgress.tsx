'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progressValue = Math.min(Math.round((scrolled / documentHeight) * 100), 100);
      setProgress(progressValue);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기값 설정

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="scroll-progress"
    >
      <span className="tabular-nums">
        {String(progress).padStart(2, '0')}%
      </span>
    </motion.div>
  );
}
