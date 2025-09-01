'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // 포인터가 될 요소들 체크
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsPointer(true);
      }
    };

    const handleMouseOut = () => {
      setIsPointer(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    // 모바일 체크
    if ('ontouchstart' in window) {
      return;
    }

    // 기본 커서 숨기기
    document.body.style.cursor = 'none';
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  // 모바일에서는 렌더링하지 않음
  if ('ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* 메인 커서 */}
      <motion.div
        className={`
          fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference
          ${isHidden ? 'opacity-0' : 'opacity-100'}
          transition-opacity duration-300
        `}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div 
          className={`
            relative w-full h-full rounded-full
            ${isPointer ? 'scale-150' : 'scale-100'}
            transition-transform duration-300 ease-out
          `}
        >
          {/* 중심점 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`
              w-2 h-2 rounded-full bg-neon-cyan
              ${isPointer ? 'scale-0' : 'scale-100'}
              transition-transform duration-300
            `} />
          </div>
          
          {/* 외곽 링 */}
          <div className={`
            absolute inset-0 rounded-full border-2
            ${isPointer ? 'border-neon-purple' : 'border-neon-cyan'}
            ${isPointer ? 'animate-pulse' : ''}
            transition-colors duration-300
          `} />
        </div>
      </motion.div>

      {/* 트레일 효과 */}
      <motion.div
        className={`
          fixed top-0 left-0 w-32 h-32 pointer-events-none z-[9998]
          ${isHidden ? 'opacity-0' : 'opacity-30'}
          transition-opacity duration-300
        `}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-neon-cyan/20 via-transparent to-transparent blur-xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-neon-purple/20 via-transparent to-transparent blur-xl animate-pulse" />
        </div>
      </motion.div>
    </>
  );
}