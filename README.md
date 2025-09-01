# 🚀 AI 코드 연구소 - 포트폴리오 웹사이트

<div align="center">
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
</div>

## 📋 프로젝트 소개

**AI 코드 연구소**는 프리랜서 개발자 권용범의 포트폴리오 웹사이트입니다. 
최신 웹 기술과 화려한 비주얼 이펙트를 활용하여 개발 역량을 효과적으로 보여주는 것을 목표로 제작되었습니다.

### ✨ 주요 특징

- 🎨 **다크 테마 네온 디자인** - 코드 에디터를 연상시키는 독특한 UI/UX
- 🎭 **인터랙티브 3D 효과** - Three.js를 활용한 몰입감 있는 경험
- ⚡ **고성능 최적화** - Next.js 14의 최신 기능 활용
- 📱 **완벽한 반응형** - 모든 디바이스에서 최적화된 경험
- 🔍 **SEO 최적화** - 검색 엔진 최적화 및 PWA 지원

## 🛠 기술 스택

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion, GSAP
- **3D Graphics:** Three.js, React Three Fiber
- **Icons:** Lucide React

### Features
- **Email Service:** EmailJS
- **Type Animation:** Typewriter Effect
- **Particles:** Custom Canvas Animation
- **Custom Cursor:** Framer Motion

## 📂 프로젝트 구조

```
ai-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   ├── globals.css        # 전역 스타일
│   ├── sitemap.ts         # 동적 사이트맵
│   └── robots.txt         # 검색 엔진 크롤링 설정
├── components/
│   ├── layout/            # 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/          # 페이지 섹션
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── ContactSection.tsx
│   └── effects/           # 비주얼 이펙트
│       ├── ParticleBackground.tsx
│       ├── ThreeDCube.tsx
│       └── CustomCursor.tsx
├── lib/
│   ├── types.ts           # TypeScript 타입 정의
│   └── utils/
│       └── cn.ts          # 유틸리티 함수
├── data/
│   └── projects.ts        # 프로젝트 데이터
├── public/
│   └── manifest.json      # PWA 매니페스트
└── styles/
    └── design-tokens.css  # 디자인 토큰
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/yourusername/ai-portfolio.git
cd ai-portfolio

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 브라우저에서 확인
# http://localhost:3000
```

### 프로덕션 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🎨 디자인 시스템

### 색상 팔레트

- **Background:** `#0D1117` (Dark Navy)
- **Neon Cyan:** `#00D9FF`
- **Neon Purple:** `#BD93F9`
- **Neon Green:** `#50FA7B`
- **Text Primary:** `#F0F6FC`

### 폰트

- **Heading:** JetBrains Mono
- **Body:** Inter

## 📱 반응형 브레이크포인트

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔧 환경 설정

### EmailJS 설정

1. [EmailJS](https://www.emailjs.com/) 계정 생성
2. 서비스 ID, 템플릿 ID, Public Key 획득
3. `ContactSection.tsx`에 환경변수 설정:

```javascript
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
```

### 환경변수 (.env.local)

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📊 성능 최적화

- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **Code Splitting:** 자동 코드 분할
- **Image Optimization:** Next.js Image 컴포넌트 활용
- **Font Optimization:** Next.js Font 최적화
- **Lazy Loading:** 컴포넌트 지연 로딩

## 🚀 배포

### Vercel 배포 (권장)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-portfolio)

1. 위 버튼 클릭 또는 [Vercel](https://vercel.com) 접속
2. GitHub 저장소 연결
3. 환경변수 설정
4. Deploy 클릭

## 📝 라이센스

MIT License - 자유롭게 사용하실 수 있습니다.

## 👨‍💻 개발자

**권용범**
- Email: gyb07190@gmail.com
- Phone: 010-3825-5659
- GitHub: [@yourusername](https://github.com)
- Location: Seoul, South Korea

## 🤝 기여하기

이 프로젝트는 개인 포트폴리오이지만, 개선 사항이나 버그 리포트는 언제든 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  Made with ❤️ by <b>AI 코드 연구소</b>
</div>