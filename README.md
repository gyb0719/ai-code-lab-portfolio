<<<<<<< HEAD
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
=======
# gyb0719-project



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/topics/git/add_files/#add-files-to-a-git-repository) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/ai-code-lab1/gyb0719-project.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/ai-code-lab1/gyb0719-project/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/user/project/merge_requests/auto_merge/)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
>>>>>>> 48c5ac7dc813d79ef5c9cca915cab1c749fe8443
