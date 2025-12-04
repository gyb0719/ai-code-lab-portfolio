export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  projectType: 'web' | 'mobile' | 'desktop';
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '김민수',
    company: '테크스타트업',
    role: 'CEO',
    content: '프로젝트 진행 과정에서 소통이 원활했고, 기대 이상의 퀄리티로 완성해주셨습니다. 특히 반응형 디자인과 애니메이션 효과가 인상적이었어요.',
    rating: 5,
    projectType: 'web',
  },
  {
    id: '2',
    name: '이서연',
    company: '헬스케어 앱',
    role: 'PM',
    content: 'Flutter로 iOS/Android 동시 개발을 진행했는데, 일정 내에 완벽하게 마무리해주셨습니다. 유지보수도 체계적으로 해주셔서 만족합니다.',
    rating: 5,
    projectType: 'mobile',
  },
  {
    id: '3',
    name: '박정훈',
    company: '물류 솔루션',
    role: 'CTO',
    content: 'Electron 기반 데스크톱 앱 개발을 의뢰했는데, 안정성과 성능 모두 훌륭했습니다. 기술적인 제안도 많이 해주셔서 감사했어요.',
    rating: 5,
    projectType: 'desktop',
  },
  {
    id: '4',
    name: '최지원',
    company: '이커머스 스타트업',
    role: '대표',
    content: 'Next.js로 쇼핑몰을 개발해주셨는데, SEO 최적화와 성능 개선까지 꼼꼼하게 신경 써주셨습니다. 매출이 30% 증가했어요!',
    rating: 5,
    projectType: 'web',
  },
  {
    id: '5',
    name: '한승우',
    company: '핀테크 기업',
    role: '개발팀장',
    content: '보안이 중요한 금융 앱이었는데, 꼼꼼한 코드 리뷰와 테스트로 안정적인 서비스를 구축해주셨습니다. 다음 프로젝트도 함께하고 싶습니다.',
    rating: 5,
    projectType: 'mobile',
  },
];
