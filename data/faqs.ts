export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'tech';
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: '프로젝트 견적은 어떻게 산정되나요?',
    answer: '프로젝트의 규모, 기능 복잡도, 개발 기간에 따라 견적이 산정됩니다. 초기 상담을 통해 요구사항을 파악한 후, 상세한 견적서를 제공해드립니다. 일반적으로 웹사이트는 200만원~, 모바일 앱은 500만원~ 시작합니다.',
    category: 'pricing',
  },
  {
    id: '2',
    question: '개발 기간은 얼마나 걸리나요?',
    answer: '프로젝트 규모에 따라 다르지만, 일반적인 웹사이트는 2~4주, 모바일 앱은 6~12주, 복잡한 시스템은 3~6개월 정도 소요됩니다. 정확한 일정은 요구사항 분석 후 안내드립니다.',
    category: 'process',
  },
  {
    id: '3',
    question: '수정 요청은 몇 번까지 가능한가요?',
    answer: '기본적으로 각 단계별 2회의 수정이 포함되어 있습니다. 추가 수정이 필요한 경우 협의를 통해 진행하며, 대부분의 경우 고객님이 만족하실 때까지 소통하며 조율합니다.',
    category: 'process',
  },
  {
    id: '4',
    question: '개발 후 유지보수는 어떻게 되나요?',
    answer: '프로젝트 완료 후 1개월간 무상 유지보수를 제공합니다. 이후에는 월정액 또는 건별 유지보수 계약을 체결할 수 있으며, 긴급 대응도 가능합니다.',
    category: 'general',
  },
  {
    id: '5',
    question: '어떤 기술 스택을 사용하나요?',
    answer: '프론트엔드는 React, Next.js, Vue.js를, 모바일은 Flutter, React Native를 주로 사용합니다. 백엔드는 Node.js, Python, Go 등 프로젝트에 적합한 기술을 선택합니다.',
    category: 'tech',
  },
  {
    id: '6',
    question: '원격으로도 진행 가능한가요?',
    answer: '네, 전국 어디서나 원격으로 프로젝트를 진행합니다. Slack, Discord, 카카오톡 등을 통해 실시간 소통하며, 정기적인 화상 미팅으로 진행 상황을 공유합니다.',
    category: 'general',
  },
  {
    id: '7',
    question: '계약금과 결제 조건은 어떻게 되나요?',
    answer: '일반적으로 계약금 30%, 중도금 40%, 잔금 30%로 진행됩니다. 소규모 프로젝트의 경우 착수금 50%, 완료 후 50%로 조율 가능합니다. 세금계산서 발행도 가능합니다.',
    category: 'pricing',
  },
  {
    id: '8',
    question: '소스 코드 소유권은 누구에게 있나요?',
    answer: '프로젝트 완료 및 비용 정산 후 모든 소스 코드의 소유권은 고객님께 이전됩니다. GitHub 저장소 이전 또는 코드 파일 전달 방식으로 인도해드립니다.',
    category: 'general',
  },
];
