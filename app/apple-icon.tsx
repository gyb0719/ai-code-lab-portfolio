import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0D1117 0%, #1a1f2e 100%)',
          borderRadius: '36px',
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="appleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="50%" stopColor="#BD93F9" />
              <stop offset="100%" stopColor="#50FA7B" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* 외부 육각형 프레임 */}
          <path
            d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z"
            stroke="url(#appleGradient)"
            strokeWidth="2.5"
            fill="none"
            filter="url(#glow)"
          />

          {/* 중앙 AI 브레인 노드 */}
          <g transform="translate(50, 50)">
            {/* 코드 브래킷 < > 를 path로 표현 */}
            <path
              d="M -20 -8 L -12 0 L -20 8"
              stroke="#00D9FF"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            <path
              d="M 20 -8 L 12 0 L 20 8"
              stroke="#00D9FF"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 중앙 AI 코어 */}
            <circle
              cx="0"
              cy="0"
              r="8"
              fill="url(#appleGradient)"
            />

            {/* 신경망 연결선 */}
            {[0, 60, 120, 180, 240, 300].map((angle) => {
              const x = Math.cos(angle * Math.PI / 180) * 25;
              const y = Math.sin(angle * Math.PI / 180) * 25;
              return (
                <line
                  key={angle}
                  x1="0"
                  y1="0"
                  x2={x}
                  y2={y}
                  stroke="url(#appleGradient)"
                  strokeWidth="1"
                  opacity="0.7"
                />
              );
            })}

            {/* 노드 포인트 */}
            {[0, 60, 120, 180, 240, 300].map((angle) => {
              const cx = Math.cos(angle * Math.PI / 180) * 25;
              const cy = Math.sin(angle * Math.PI / 180) * 25;
              return (
                <circle
                  key={`node-${angle}`}
                  cx={cx}
                  cy={cy}
                  r="3.5"
                  fill="#BD93F9"
                />
              );
            })}
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}