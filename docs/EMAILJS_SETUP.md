# EmailJS 설정 가이드

포트폴리오 사이트의 Contact 폼에서 실제로 이메일을 받으려면 EmailJS 설정이 필요합니다.

## 📧 EmailJS 설정 단계

### 1. EmailJS 계정 생성
1. [EmailJS 웹사이트](https://www.emailjs.com/) 접속
2. 무료 계정 생성 (월 200건까지 무료)

### 2. Email Service 추가
1. Dashboard → Email Services 클릭
2. "Add New Service" 클릭
3. Gmail 선택 (추천)
4. Service ID 복사 (예: `service_abc123`)
5. Gmail 계정 연결

### 3. Email Template 생성
1. Dashboard → Email Templates 클릭
2. "Create New Template" 클릭
3. 템플릿 내용 설정:

```
제목: 새로운 문의가 도착했습니다!

내용:
이름: {{name}}
이메일: {{email}}
프로젝트 유형: {{projectType}}
예산: {{budget}}

메시지:
{{message}}
```

4. Template ID 복사 (예: `template_xyz789`)

### 4. Public Key 가져오기
1. Dashboard → Account
2. Public Key 복사

### 5. 환경 변수 설정
`.env.local` 파일에 실제 값 입력:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. 서버 재시작
```bash
# Ctrl+C로 서버 중지 후
npm run dev
```

## ✅ 테스트
1. Contact 폼에 테스트 메시지 작성
2. 전송 버튼 클릭
3. 이메일 확인

## 🔧 문제 해결
- 이메일이 안 오는 경우:
  - Gmail 스팸함 확인
  - EmailJS Dashboard에서 전송 로그 확인
  - 환경 변수가 제대로 설정되었는지 확인

## 📝 참고
- 무료 플랜: 월 200건 제한
- 유료 플랜: 더 많은 전송량과 기능 제공