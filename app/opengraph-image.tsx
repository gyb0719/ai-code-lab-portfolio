import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'AI 코드 연구소';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0D1117 0%, #1C2333 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* 배경 패턴 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                rgba(0, 217, 255, 0.03) 0px,
                rgba(0, 217, 255, 0.03) 1px,
                transparent 1px,
                transparent 15px
              )
            `,
          }}
        />
        
        {/* 로고 영역 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              background: 'linear-gradient(135deg, #00D9FF 0%, #BD93F9 100%)',
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 60,
              color: '#0D1117',
              fontWeight: 'bold',
            }}
          >
            {'</>'}
          </div>
        </div>

        {/* 메인 타이틀 */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #00D9FF 0%, #BD93F9 50%, #50FA7B 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          AI 코드 연구소
        </div>

        {/* 서브 타이틀 */}
        <div
          style={{
            fontSize: 32,
            color: '#E1E8ED',
            opacity: 0.9,
            marginBottom: 40,
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          혁신적인 기술과 창의적인 솔루션으로
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#E1E8ED',
            opacity: 0.9,
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          당신의 아이디어를 현실로 만들어드립니다
        </div>

        {/* 기술 스택 */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 50,
            fontSize: 20,
          }}
        >
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Flutter'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '8px 20px',
                background: 'rgba(0, 217, 255, 0.1)',
                border: '1px solid rgba(0, 217, 255, 0.3)',
                borderRadius: 20,
                color: '#00D9FF',
                fontSize: 18,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* 푸터 */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            right: 40,
            fontSize: 20,
            color: '#8B92A9',
            opacity: 0.8,
          }}
        >
          www.ai-code-lap.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}