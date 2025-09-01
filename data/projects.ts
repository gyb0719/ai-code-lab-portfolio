import { Project } from '@/lib/types';

export const projects: Project[] = [
  // Web Projects
  {
    id: 'web-1',
    title: 'E-Commerce Platform',
    description: '실시간 재고 관리와 AI 추천 시스템을 갖춘 차세대 이커머스 플랫폼',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/projects/ecommerce.jpg',
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/demo/ecommerce',
    features: [
      '실시간 재고 동기화',
      'AI 기반 상품 추천',
      '다국어 지원',
      '반응형 디자인'
    ],
    completedAt: '2024.08'
  },
  {
    id: 'web-2',
    title: 'Real-time Dashboard',
    description: 'WebSocket을 활용한 실시간 데이터 모니터링 대시보드',
    category: 'web',
    technologies: ['React', 'WebSocket', 'D3.js', 'Node.js', 'MongoDB'],
    image: '/images/projects/dashboard.jpg',
    liveUrl: 'https://demo-dashboard.com',
    githubUrl: 'https://github.com/demo/dashboard',
    features: [
      '실시간 데이터 시각화',
      '커스터마이징 가능한 위젯',
      '알림 시스템',
      '데이터 내보내기'
    ],
    completedAt: '2024.07'
  },
  {
    id: 'web-3',
    title: 'Social Network Platform',
    description: '차세대 소셜 네트워킹 플랫폼 with 실시간 채팅',
    category: 'web',
    technologies: ['MERN Stack', 'Socket.io', 'JWT', 'AWS S3', 'GraphQL'],
    image: '/images/projects/social.jpg',
    liveUrl: 'https://demo-social.com',
    githubUrl: 'https://github.com/demo/social',
    features: [
      '실시간 채팅 & 화상통화',
      '피드 알고리즘',
      '콘텐츠 추천 시스템',
      '프라이버시 보호'
    ],
    completedAt: '2024.06'
  },
  {
    id: 'web-4',
    title: 'Educational Platform',
    description: '인터랙티브 학습 경험을 제공하는 온라인 교육 플랫폼',
    category: 'web',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS', 'WebRTC'],
    image: '/images/projects/education.jpg',
    liveUrl: 'https://demo-edu.com',
    githubUrl: 'https://github.com/demo/education',
    features: [
      '실시간 화상 수업',
      'AI 학습 분석',
      '인터랙티브 퀴즈',
      '진도 관리 시스템'
    ],
    completedAt: '2024.05'
  },
  {
    id: 'web-5',
    title: 'Booking System',
    description: 'AI 기반 스마트 예약 관리 시스템',
    category: 'web',
    technologies: ['Django', 'PostgreSQL', 'React', 'Celery', 'Redis'],
    image: '/images/projects/booking.jpg',
    liveUrl: 'https://demo-booking.com',
    githubUrl: 'https://github.com/demo/booking',
    features: [
      'AI 예약 최적화',
      '다중 지점 관리',
      '실시간 알림',
      '통계 대시보드'
    ],
    completedAt: '2024.04'
  },

  // Mobile Projects
  {
    id: 'mobile-1',
    title: 'Fitness Tracker',
    description: 'AI 코치와 함께하는 개인 맞춤형 피트니스 앱',
    category: 'mobile',
    technologies: ['React Native', 'TensorFlow Lite', 'Firebase', 'HealthKit'],
    image: '/images/projects/fitness.jpg',
    liveUrl: 'https://apps.apple.com/fitness',
    githubUrl: 'https://github.com/demo/fitness',
    features: [
      'AI 운동 자세 분석',
      '개인 맞춤 운동 추천',
      '영양 관리',
      '소셜 챌린지'
    ],
    completedAt: '2024.08'
  },
  {
    id: 'mobile-2',
    title: 'Food Delivery App',
    description: '실시간 배송 추적이 가능한 음식 배달 서비스',
    category: 'mobile',
    technologies: ['Flutter', 'Google Maps API', 'Firebase', 'Stripe'],
    image: '/images/projects/delivery.jpg',
    liveUrl: 'https://play.google.com/delivery',
    githubUrl: 'https://github.com/demo/delivery',
    features: [
      '실시간 배송 추적',
      'AI 음식 추천',
      '다중 결제 옵션',
      '리뷰 & 평점 시스템'
    ],
    completedAt: '2024.07'
  },
  {
    id: 'mobile-3',
    title: 'Social Networking App',
    description: '차세대 소셜 네트워킹 모바일 앱',
    category: 'mobile',
    technologies: ['Swift', 'SwiftUI', 'Core Data', 'CloudKit', 'ARKit'],
    image: '/images/projects/social-mobile.jpg',
    liveUrl: 'https://apps.apple.com/social',
    githubUrl: 'https://github.com/demo/social-mobile',
    features: [
      'AR 필터 & 이펙트',
      '실시간 스토리',
      'End-to-End 암호화',
      'AI 콘텐츠 큐레이션'
    ],
    completedAt: '2024.06'
  },
  {
    id: 'mobile-4',
    title: 'Finance Manager',
    description: '스마트한 개인 재무 관리 앱',
    category: 'mobile',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Plaid API'],
    image: '/images/projects/finance.jpg',
    liveUrl: 'https://play.google.com/finance',
    githubUrl: 'https://github.com/demo/finance',
    features: [
      'AI 지출 분석',
      '자동 예산 관리',
      '투자 포트폴리오',
      '실시간 환율'
    ],
    completedAt: '2024.05'
  },
  {
    id: 'mobile-5',
    title: 'Travel Guide App',
    description: 'AR과 AI를 활용한 스마트 여행 가이드',
    category: 'mobile',
    technologies: ['Ionic', 'Capacitor', 'Angular', 'MapBox', 'OpenAI API'],
    image: '/images/projects/travel.jpg',
    liveUrl: 'https://apps.travel-guide.com',
    githubUrl: 'https://github.com/demo/travel',
    features: [
      'AR 길찾기',
      'AI 여행 일정 추천',
      '실시간 번역',
      '오프라인 지도'
    ],
    completedAt: '2024.04'
  },

  // Desktop Projects
  {
    id: 'desktop-1',
    title: 'Code Editor Pro',
    description: 'AI 자동완성을 지원하는 차세대 코드 에디터',
    category: 'desktop',
    technologies: ['Electron', 'Monaco Editor', 'TypeScript', 'Node.js'],
    image: '/images/projects/code-editor.jpg',
    githubUrl: 'https://github.com/demo/code-editor',
    features: [
      'AI 코드 자동완성',
      '실시간 협업',
      '다중 언어 지원',
      '플러그인 시스템'
    ],
    completedAt: '2024.08'
  },
  {
    id: 'desktop-2',
    title: 'File Manager Plus',
    description: '클라우드 통합 스마트 파일 관리자',
    category: 'desktop',
    technologies: ['Tauri', 'Rust', 'React', 'SQLite'],
    image: '/images/projects/file-manager.jpg',
    githubUrl: 'https://github.com/demo/file-manager',
    features: [
      '클라우드 동기화',
      'AI 파일 정리',
      '빠른 검색',
      '파일 암호화'
    ],
    completedAt: '2024.07'
  },
  {
    id: 'desktop-3',
    title: 'Video Conference App',
    description: '고품질 화상 회의 데스크톱 애플리케이션',
    category: 'desktop',
    technologies: ['Electron', 'WebRTC', 'Socket.io', 'FFmpeg'],
    image: '/images/projects/video-conf.jpg',
    githubUrl: 'https://github.com/demo/video-conf',
    features: [
      '4K 화상 통화',
      '화면 공유',
      'AI 배경 제거',
      '실시간 자막'
    ],
    completedAt: '2024.06'
  },
  {
    id: 'desktop-4',
    title: 'Music Player Studio',
    description: 'DJ 기능을 갖춘 프로페셔널 음악 플레이어',
    category: 'desktop',
    technologies: ['Qt', 'C++', 'FMOD', 'SQLite'],
    image: '/images/projects/music-player.jpg',
    githubUrl: 'https://github.com/demo/music-player',
    features: [
      'DJ 믹싱 기능',
      'AI 플레이리스트',
      '오디오 이펙트',
      '음악 시각화'
    ],
    completedAt: '2024.05'
  },
  {
    id: 'desktop-5',
    title: 'Database Manager',
    description: '다중 데이터베이스 통합 관리 도구',
    category: 'desktop',
    technologies: ['JavaFX', 'Java', 'JDBC', 'H2 Database'],
    image: '/images/projects/db-manager.jpg',
    githubUrl: 'https://github.com/demo/db-manager',
    features: [
      '다중 DB 지원',
      '쿼리 빌더',
      '데이터 시각화',
      '백업 & 복원'
    ],
    completedAt: '2024.04'
  }
];