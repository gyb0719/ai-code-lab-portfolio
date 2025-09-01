import { Project } from '@/lib/types';

export const projects: Project[] = [
  // Web Projects - 비즈니스 성과 중심
  {
    id: 'web-1',
    title: '글로벌 이커머스 플랫폼',
    description: '월 매출 15억원 달성, 20만 활성 사용자 보유한 AI 기반 쇼핑몰',
    category: 'web',
    technologies: ['Next.js 14', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
    image: '/images/projects/ecommerce.jpg',
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/demo/ecommerce',
    features: [
      '매출 전년 대비 300% 성장',
      'AI 추천으로 구매 전환율 45% 향상',
      '0.3초 로딩 속도 달성',
      '99.9% 가동률 유지'
    ],
    completedAt: '2024.08'
  },
  {
    id: 'web-2',
    title: 'B2B SaaS 관리 플랫폼',
    description: '500개 기업이 사용중인 업무 자동화 솔루션 (ARR 5억원)',
    category: 'web',
    technologies: ['React', 'Node.js', 'GraphQL', 'Kubernetes', 'MongoDB', 'Stripe'],
    image: '/images/projects/saas.jpg',
    liveUrl: 'https://demo-saas.com',
    githubUrl: 'https://github.com/demo/saas',
    features: [
      '업무 효율 70% 개선',
      '월 구독료 30만원 ~ 200만원',
      '멀티테넌시 아키텍처',
      'SOC2 보안 인증 획득'
    ],
    completedAt: '2024.07'
  },
  {
    id: 'web-3',
    title: '의료 예약 통합 시스템',
    description: '전국 200개 병원 체인 도입, 일 3만건 예약 처리',
    category: 'web',
    technologies: ['Vue 3', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'Celery'],
    image: '/images/projects/medical.jpg',
    liveUrl: 'https://demo-medical.com',
    githubUrl: 'https://github.com/demo/medical',
    features: [
      '예약 노쇼율 80% 감소',
      'AI 진료 시간 예측 정확도 92%',
      '실시간 대기 시간 안내',
      'HIPAA 규정 준수'
    ],
    completedAt: '2024.06'
  },
  {
    id: 'web-4',
    title: '부동산 중개 플랫폼',
    description: '월 거래액 100억원, 3D 가상 투어 제공하는 프롭테크 서비스',
    category: 'web',
    technologies: ['Next.js', 'Three.js', 'WebRTC', 'PostgreSQL', 'ElasticSearch', 'AWS S3'],
    image: '/images/projects/realestate.jpg',
    liveUrl: 'https://demo-realestate.com',
    githubUrl: 'https://github.com/demo/realestate',
    features: [
      '평균 거래 성사 기간 50% 단축',
      '3D 매물 투어 10만회 조회',
      'AI 시세 예측 정확도 85%',
      '블록체인 계약서 관리'
    ],
    completedAt: '2024.05'
  },
  {
    id: 'web-5',
    title: '온라인 교육 플랫폼',
    description: '누적 수강생 10만명, 완주율 85% 달성한 에듀테크 서비스',
    category: 'web',
    technologies: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'Redis', 'FFmpeg'],
    image: '/images/projects/education.jpg',
    liveUrl: 'https://demo-edu.com',
    githubUrl: 'https://github.com/demo/education',
    features: [
      '평균 학습 성취도 40% 향상',
      'AI 맞춤형 커리큘럼 제공',
      '실시간 화상 수업 지원',
      '기업 교육 B2B 계약 50건'
    ],
    completedAt: '2024.04'
  },
  {
    id: 'web-6',
    title: '크립토 거래소',
    description: '일 거래량 50억원, 10만 활성 트레이더 보유 거래 플랫폼',
    category: 'web',
    technologies: ['Next.js', 'WebSocket', 'Redis', 'PostgreSQL', 'Nginx', 'Docker'],
    image: '/images/projects/crypto.jpg',
    liveUrl: 'https://demo-crypto.com',
    githubUrl: 'https://github.com/demo/crypto',
    features: [
      '초당 10만 트랜잭션 처리',
      '0.001초 주문 체결 속도',
      '콜드 월렛 보안 시스템',
      '24/7 자동 거래 봇 지원'
    ],
    completedAt: '2024.03'
  },

  // Mobile Projects - 실제 성과 중심
  {
    id: 'mobile-1',
    title: '배달 주문 슈퍼앱',
    description: '누적 다운로드 100만, MAU 30만의 O2O 배달 서비스',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Google Maps API', 'Stripe'],
    image: '/images/projects/delivery.jpg',
    liveUrl: 'https://apps.apple.com/delivery',
    githubUrl: 'https://github.com/demo/delivery',
    features: [
      '일 주문 5만건 처리',
      '평균 배달 시간 28분 달성',
      'AI 수요 예측으로 대기 시간 30% 단축',
      '가맹점 매출 평균 40% 증가'
    ],
    completedAt: '2024.08'
  },
  {
    id: 'mobile-2',
    title: 'AI 헬스케어 앱',
    description: '의료 기관 연계, 50만 사용자의 건강을 관리하는 디지털 헬스케어',
    category: 'mobile',
    technologies: ['Flutter', 'TensorFlow Lite', 'Firebase', 'HealthKit', 'Core ML'],
    image: '/images/projects/healthcare.jpg',
    liveUrl: 'https://play.google.com/healthcare',
    githubUrl: 'https://github.com/demo/healthcare',
    features: [
      '질병 조기 발견율 35% 향상',
      'AI 건강 분석 정확도 94%',
      '병원 연계 원격 진료',
      '보험사 파트너십 체결'
    ],
    completedAt: '2024.07'
  },
  {
    id: 'mobile-3',
    title: '자산관리 핀테크 앱',
    description: '총 운용자산 500억원, 투자 수익률 평균 12% 달성',
    category: 'mobile',
    technologies: ['Swift', 'SwiftUI', 'Core Data', 'Plaid API', 'Charts'],
    image: '/images/projects/fintech.jpg',
    liveUrl: 'https://apps.apple.com/fintech',
    githubUrl: 'https://github.com/demo/fintech',
    features: [
      'AI 포트폴리오 자동 리밸런싱',
      '실시간 시장 분석 제공',
      '세금 최적화 전략 수립',
      '금융위 정식 인가 획득'
    ],
    completedAt: '2024.06'
  },
  {
    id: 'mobile-4',
    title: '라이브 커머스 앱',
    description: '누적 거래액 200억원, 라이브 방송 중 구매 전환율 25%',
    category: 'mobile',
    technologies: ['React Native', 'WebRTC', 'Socket.io', 'Redis', 'AWS MediaLive'],
    image: '/images/projects/live-commerce.jpg',
    liveUrl: 'https://play.google.com/livecommerce',
    githubUrl: 'https://github.com/demo/livecommerce',
    features: [
      '동시 시청자 10만명 처리',
      '실시간 상품 구매 기능',
      'AI 상품 추천 CTR 40%',
      '인플루언서 1000명 입점'
    ],
    completedAt: '2024.05'
  },
  {
    id: 'mobile-5',
    title: 'IoT 스마트홈 제어',
    description: '20개 가전 브랜드 연동, 5만 가구 사용중인 홈 오토메이션',
    category: 'mobile',
    technologies: ['Flutter', 'MQTT', 'Node.js', 'MongoDB', 'TensorFlow'],
    image: '/images/projects/smarthome.jpg',
    liveUrl: 'https://apps.smarthome.com',
    githubUrl: 'https://github.com/demo/smarthome',
    features: [
      '에너지 비용 평균 30% 절감',
      'AI 생활 패턴 학습',
      '음성 명령 인식률 98%',
      'Matter 표준 인증'
    ],
    completedAt: '2024.04'
  },
  {
    id: 'mobile-6',
    title: '게이미피케이션 교육앱',
    description: '누적 다운로드 200만, 유료 전환율 15%의 에듀테인먼트',
    category: 'mobile',
    technologies: ['Unity', 'C#', 'Firebase', 'AdMob', 'In-App Purchase'],
    image: '/images/projects/edugame.jpg',
    liveUrl: 'https://play.google.com/edugame',
    githubUrl: 'https://github.com/demo/edugame',
    features: [
      '일 평균 사용 시간 45분',
      '학습 완료율 80% 달성',
      'AI 난이도 자동 조절',
      '구글 에디터스 초이스 선정'
    ],
    completedAt: '2024.03'
  },

  // Desktop Projects - 기업용 솔루션
  {
    id: 'desktop-1',
    title: 'ERP 통합 관리 시스템',
    description: '중소기업 200곳 도입, 업무 효율 60% 개선 달성',
    category: 'desktop',
    technologies: ['Electron', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/projects/erp.jpg',
    githubUrl: 'https://github.com/demo/erp',
    features: [
      '재고 관리 정확도 99.5%',
      '회계 처리 시간 70% 단축',
      '실시간 경영 대시보드',
      '모바일 앱 연동 지원'
    ],
    completedAt: '2024.08'
  },
  {
    id: 'desktop-2',
    title: 'POS 매장 관리 시스템',
    description: '프랜차이즈 500개 매장 사용, 매출 데이터 실시간 분석',
    category: 'desktop',
    technologies: ['JavaFX', 'Spring Boot', 'MySQL', 'Redis', 'RabbitMQ'],
    image: '/images/projects/pos.jpg',
    githubUrl: 'https://github.com/demo/pos',
    features: [
      '초당 1000건 결제 처리',
      'AI 매출 예측 정확도 87%',
      '오프라인 모드 지원',
      '다중 결제 수단 통합'
    ],
    completedAt: '2024.07'
  },
  {
    id: 'desktop-3',
    title: '의료 영상 AI 분석',
    description: '종합병원 50곳 도입, 진단 정확도 96% 달성',
    category: 'desktop',
    technologies: ['Python', 'PyQt5', 'TensorFlow', 'DICOM', 'PostgreSQL'],
    image: '/images/projects/medical-ai.jpg',
    githubUrl: 'https://github.com/demo/medical-ai',
    features: [
      '진단 시간 80% 단축',
      'FDA 승인 획득',
      '10TB 영상 데이터 처리',
      '실시간 협진 시스템'
    ],
    completedAt: '2024.06'
  },
  {
    id: 'desktop-4',
    title: '3D CAD 설계 소프트웨어',
    description: '제조업체 100곳 사용, 설계 시간 50% 단축',
    category: 'desktop',
    technologies: ['C++', 'Qt', 'OpenGL', 'Python', 'SQLite'],
    image: '/images/projects/cad.jpg',
    githubUrl: 'https://github.com/demo/cad',
    features: [
      '100만 폴리곤 실시간 렌더링',
      'AI 설계 최적화',
      '클라우드 협업 지원',
      'VR/AR 뷰어 연동'
    ],
    completedAt: '2024.05'
  },
  {
    id: 'desktop-5',
    title: '암호화폐 자동 트레이딩',
    description: '월 평균 수익률 8%, 24시간 자동 거래 시스템',
    category: 'desktop',
    technologies: ['Python', 'Tkinter', 'ccxt', 'TensorFlow', 'PostgreSQL'],
    image: '/images/projects/trading-bot.jpg',
    githubUrl: 'https://github.com/demo/trading-bot',
    features: [
      '10개 거래소 동시 거래',
      'AI 시장 예측 모델',
      '리스크 관리 시스템',
      '백테스팅 시뮬레이터'
    ],
    completedAt: '2024.04'
  },
  {
    id: 'desktop-6',
    title: '빅데이터 분석 플랫폼',
    description: '일 100TB 데이터 처리, 실시간 인사이트 제공',
    category: 'desktop',
    technologies: ['Java', 'Apache Spark', 'Kafka', 'Elasticsearch', 'Grafana'],
    image: '/images/projects/bigdata.jpg',
    githubUrl: 'https://github.com/demo/bigdata',
    features: [
      '데이터 처리 속도 10배 향상',
      'ML 파이프라인 자동화',
      '실시간 이상 탐지',
      '50개 데이터 소스 연동'
    ],
    completedAt: '2024.03'
  }
];