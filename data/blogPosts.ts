export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Next.js 15의 새로운 기능과 마이그레이션 가이드',
    summary: 'Next.js 15에서 도입된 주요 기능들과 기존 프로젝트를 안전하게 업그레이드하는 방법을 알아봅니다.',
    date: '2024-12-01',
    category: 'React',
    readTime: '8분',
    slug: 'nextjs-15-migration-guide',
    featured: true,
  },
  {
    id: '2',
    title: 'Flutter vs React Native: 2024년 크로스플랫폼 선택 기준',
    summary: '실제 프로젝트 경험을 바탕으로 두 프레임워크의 장단점과 프로젝트별 적합성을 비교합니다.',
    date: '2024-11-15',
    category: 'Mobile',
    readTime: '10분',
    slug: 'flutter-vs-react-native-2024',
    featured: true,
  },
  {
    id: '3',
    title: 'Tailwind CSS로 다크모드 완벽 구현하기',
    summary: 'CSS 변수와 Tailwind CSS를 활용해 사용자 친화적인 다크모드를 구현하는 방법을 소개합니다.',
    date: '2024-11-08',
    category: 'CSS',
    readTime: '6분',
    slug: 'tailwind-dark-mode-guide',
  },
  {
    id: '4',
    title: 'TypeScript 5.0 실무 활용 팁',
    summary: '새로운 데코레이터 문법부터 const 타입 파라미터까지, 실무에서 바로 적용할 수 있는 팁들을 공유합니다.',
    date: '2024-10-25',
    category: 'TypeScript',
    readTime: '7분',
    slug: 'typescript-5-tips',
  },
  {
    id: '5',
    title: 'Electron으로 생산성 도구 만들기',
    summary: '웹 기술로 데스크톱 앱을 만드는 방법과 성능 최적화 노하우를 공유합니다.',
    date: '2024-10-10',
    category: 'Desktop',
    readTime: '12분',
    slug: 'electron-productivity-app',
  },
  {
    id: '6',
    title: '프리랜서 개발자로 살아남기: 1년차 회고',
    summary: '프리랜서 전환 후 겪은 시행착오와 배운 점들을 솔직하게 공유합니다.',
    date: '2024-09-20',
    category: '커리어',
    readTime: '9분',
    slug: 'freelancer-first-year-review',
  },
];
