'use client';

import { motion } from 'framer-motion';

interface AILabLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export default function AILabLogo({ className = '', size = 40, animated = true }: AILabLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D9FF" />
          <stop offset="50%" stopColor="#BD93F9" />
          <stop offset="100%" stopColor="#50FA7B" />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* 외부 육각형 프레임 */}
      <motion.path
        d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z"
        stroke="url(#aiGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={animated ? { pathLength: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* 중앙 AI 브레인 노드 */}
      <g transform="translate(50, 50)">
        {/* 코드 브래킷 < > */}
        <motion.text
          x="-22"
          y="5"
          fontSize="24"
          fontFamily="monospace"
          fill="#00D9FF"
          fontWeight="bold"
          initial={animated ? { opacity: 0, x: -10 } : { opacity: 1 }}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          &lt;
        </motion.text>
        
        <motion.text
          x="12"
          y="5"
          fontSize="24"
          fontFamily="monospace"
          fill="#00D9FF"
          fontWeight="bold"
          initial={animated ? { opacity: 0, x: 10 } : { opacity: 1 }}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          &gt;
        </motion.text>

        {/* 중앙 AI 코어 */}
        <motion.circle
          cx="0"
          cy="0"
          r="8"
          fill="url(#aiGradient)"
          initial={animated ? { scale: 0 } : { scale: 1 }}
          animate={animated ? { scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
        />

        {/* 신경망 연결선 */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = parseFloat((Math.cos(angle * Math.PI / 180) * 25).toFixed(2));
          const y = parseFloat((Math.sin(angle * Math.PI / 180) * 25).toFixed(2));
          return (
            <motion.line
              key={angle}
              x1="0"
              y1="0"
              x2={x}
              y2={y}
              stroke="url(#aiGradient)"
              strokeWidth="1"
              opacity="0.6"
              initial={animated ? { scale: 0 } : { scale: 1 }}
              animate={animated ? { scale: 1 } : {}}
              transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
            />
          );
        })}

        {/* 노드 포인트 */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const cx = parseFloat((Math.cos(angle * Math.PI / 180) * 25).toFixed(2));
          const cy = parseFloat((Math.sin(angle * Math.PI / 180) * 25).toFixed(2));
          return (
            <motion.circle
              key={`node-${angle}`}
              cx={cx}
              cy={cy}
              r="3"
              fill="#BD93F9"
              initial={animated ? { scale: 0 } : { scale: 1 }}
              animate={animated ? { scale: 1 } : {}}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
            />
          );
        })}
      </g>

      {/* 펄스 애니메이션 */}
      {animated && (
        <>
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="none"
            stroke="url(#aiGradient)"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeOut"
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="none"
            stroke="url(#aiGradient)"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 1,
              ease: "easeOut"
            }}
          />
        </>
      )}
    </svg>
  );
}