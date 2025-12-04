import { Project } from '@/lib/types';

export const projects: Project[] = [
  // Web Projects - 프리랜서 인기 의뢰
  {
    id: 'web-1',
    title: '쇼핑몰/이커머스',
    description: '결제 연동, 상품관리, 회원관리 기능을 갖춘 온라인 쇼핑몰',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    image: '/images/projects/ecommerce.jpg',
    features: [
      'PG사 결제 연동 (토스, 카카오페이)',
      '상품/재고 관리 시스템',
      '회원 등급별 혜택 관리',
      '주문/배송 추적 기능'
    ],
    completedAt: '300~1,000만원'
  },
  {
    id: 'web-2',
    title: '기업 소개 홈페이지',
    description: '반응형 디자인, SEO 최적화된 기업/브랜드 웹사이트',
    category: 'web',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    image: '/images/projects/corporate.jpg',
    features: [
      '반응형 웹 디자인',
      'SEO 최적화 (메타태그, 사이트맵)',
      '문의 폼 및 이메일 연동',
      '관리자 콘텐츠 수정 기능'
    ],
    completedAt: '200~500만원'
  },
  {
    id: 'web-3',
    title: '관리자 대시보드',
    description: '데이터 시각화, CRM, 어드민 패널 구축',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'PostgreSQL'],
    image: '/images/projects/dashboard.jpg',
    features: [
      '실시간 데이터 시각화',
      '고객 관리 (CRM) 시스템',
      '권한별 접근 제어',
      '리포트 생성 및 내보내기'
    ],
    completedAt: '300~800만원'
  },
  {
    id: 'web-4',
    title: 'AI 챗봇/상담 서비스',
    description: 'ChatGPT API 연동, 자동 응답 고객 상담 시스템',
    category: 'web',
    technologies: ['Next.js', 'OpenAI API', 'LangChain', 'Pinecone', 'WebSocket'],
    image: '/images/projects/chatbot.jpg',
    features: [
      'GPT 기반 자연어 상담',
      'FAQ 자동 응답 시스템',
      '상담 이력 관리',
      '실시간 채팅 인터페이스'
    ],
    completedAt: '200~600만원'
  },
  {
    id: 'web-5',
    title: '예약/매칭 플랫폼',
    description: '실시간 예약, 결제, 알림 기능이 포함된 O2O 서비스',
    category: 'web',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io'],
    image: '/images/projects/booking.jpg',
    features: [
      '실시간 예약 캘린더',
      '결제 및 환불 시스템',
      '카카오/문자 알림 연동',
      '리뷰 및 평점 시스템'
    ],
    completedAt: '500~1,500만원'
  },
  {
    id: 'web-6',
    title: '랜딩페이지',
    description: '마케팅용 전환율 최적화 원페이지 웹사이트',
    category: 'web',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Google Analytics'],
    image: '/images/projects/landing.jpg',
    features: [
      '반응형 원페이지 디자인',
      '전환율 최적화 CTA',
      '애니메이션 효과',
      '분석 도구 연동'
    ],
    completedAt: '100~300만원'
  },

  // Mobile Projects - 프리랜서 인기 의뢰
  {
    id: 'mobile-1',
    title: 'O2O 매칭 앱',
    description: '배달, 예약, 서비스 매칭 기능을 갖춘 플랫폼 앱',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js', 'PostgreSQL'],
    image: '/images/projects/o2o.jpg',
    features: [
      '실시간 위치 기반 매칭',
      '결제 시스템 연동',
      '푸시 알림',
      '채팅 기능'
    ],
    completedAt: '500~2,000만원'
  },
  {
    id: 'mobile-2',
    title: '소셜/커뮤니티 앱',
    description: '채팅, 피드, 푸시알림 기능의 소셜 네트워크 앱',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Socket.io', 'FCM', 'Cloud Storage'],
    image: '/images/projects/social.jpg',
    features: [
      '뉴스피드 및 게시물',
      '실시간 채팅/DM',
      '팔로우/팔로잉 시스템',
      '푸시 알림'
    ],
    completedAt: '500~1,500만원'
  },
  {
    id: 'mobile-3',
    title: '쇼핑몰 앱',
    description: '결제, 장바구니, 주문관리 기능의 모바일 커머스',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Stripe', 'Firebase'],
    image: '/images/projects/shopping-app.jpg',
    features: [
      '상품 카탈로그',
      '장바구니 및 결제',
      '주문 추적',
      '위시리스트 기능'
    ],
    completedAt: '500~1,500만원'
  },
  {
    id: 'mobile-4',
    title: '헬스케어/피트니스 앱',
    description: '운동 기록, 건강 데이터 연동 피트니스 앱',
    category: 'mobile',
    technologies: ['Flutter', 'HealthKit', 'Google Fit', 'Firebase', 'Charts'],
    image: '/images/projects/fitness.jpg',
    features: [
      '운동 기록 및 통계',
      '건강 데이터 연동',
      '목표 설정 및 알림',
      '운동 루틴 관리'
    ],
    completedAt: '300~1,000만원'
  },
  {
    id: 'mobile-5',
    title: '교육/LMS 앱',
    description: '강의 시청, 진도관리, 퀴즈 기능의 이러닝 앱',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Video Player', 'SQLite', 'FCM'],
    image: '/images/projects/lms.jpg',
    features: [
      '동영상 강의 스트리밍',
      '학습 진도 관리',
      '퀴즈 및 평가',
      '오프라인 다운로드'
    ],
    completedAt: '500~1,500만원'
  },
  {
    id: 'mobile-6',
    title: '유틸리티 앱',
    description: '메모, 일정관리, 가계부 등 실용 앱',
    category: 'mobile',
    technologies: ['Flutter', 'SQLite', 'Provider', 'Local Notifications'],
    image: '/images/projects/utility.jpg',
    features: [
      '메모/노트 기능',
      '일정 관리 캘린더',
      '지출 내역 관리',
      '위젯 지원'
    ],
    completedAt: '200~500만원'
  },

  // Desktop Projects - 프리랜서 인기 의뢰
  {
    id: 'desktop-1',
    title: '업무 자동화 프로그램',
    description: '엑셀 매크로, 데이터 처리, RPA 자동화 솔루션',
    category: 'desktop',
    technologies: ['Electron', 'Python', 'Node.js', 'Excel API', 'Puppeteer'],
    image: '/images/projects/automation.jpg',
    features: [
      '반복 업무 자동화',
      '엑셀 데이터 처리',
      '정기 작업 스케줄링',
      '보고서 자동 생성'
    ],
    completedAt: '100~500만원'
  },
  {
    id: 'desktop-2',
    title: '데이터 크롤링/수집 툴',
    description: '웹 스크래핑, 자동 데이터 수집 프로그램',
    category: 'desktop',
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Electron', 'SQLite'],
    image: '/images/projects/crawler.jpg',
    features: [
      '웹사이트 데이터 수집',
      '자동 스크래핑 스케줄',
      '데이터 정제 및 저장',
      'Excel/CSV 내보내기'
    ],
    completedAt: '50~300만원'
  },
  {
    id: 'desktop-3',
    title: '재고/POS 관리 시스템',
    description: '매장용 재고관리, 판매 관리 프로그램',
    category: 'desktop',
    technologies: ['Electron', 'React', 'Node.js', 'SQLite', 'Printer API'],
    image: '/images/projects/pos.jpg',
    features: [
      '상품 재고 관리',
      '판매/매출 기록',
      '영수증 출력',
      '바코드 스캔 연동'
    ],
    completedAt: '300~1,000만원'
  },
  {
    id: 'desktop-4',
    title: '파일 변환/처리 툴',
    description: 'PDF, 이미지, 문서 변환 유틸리티',
    category: 'desktop',
    technologies: ['Electron', 'Sharp', 'PDF-lib', 'Node.js', 'FFmpeg'],
    image: '/images/projects/converter.jpg',
    features: [
      '파일 포맷 변환',
      '이미지 리사이즈/압축',
      'PDF 병합/분할',
      '일괄 처리 기능'
    ],
    completedAt: '100~400만원'
  },
  {
    id: 'desktop-5',
    title: '모니터링/대시보드 앱',
    description: '실시간 데이터 모니터링 데스크탑 앱',
    category: 'desktop',
    technologies: ['Electron', 'React', 'Chart.js', 'WebSocket', 'Node.js'],
    image: '/images/projects/monitoring.jpg',
    features: [
      '실시간 데이터 모니터링',
      '알림 및 경고 시스템',
      '데이터 시각화',
      '리포트 생성'
    ],
    completedAt: '200~600만원'
  },
  {
    id: 'desktop-6',
    title: '키오스크/디지털 사이니지',
    description: '매장용 터치스크린 키오스크 앱',
    category: 'desktop',
    technologies: ['Electron', 'React', 'Node.js', 'Printer API', 'Touch Events'],
    image: '/images/projects/kiosk.jpg',
    features: [
      '터치스크린 UI',
      '주문/결제 시스템',
      '영수증/티켓 출력',
      '원격 콘텐츠 관리'
    ],
    completedAt: '300~800만원'
  }
];
