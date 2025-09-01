const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// 캔버스 생성
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// 배경 그라데이션
const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#0D1117');
gradient.addColorStop(1, '#1C2333');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// 패턴 오버레이
ctx.strokeStyle = 'rgba(0, 217, 255, 0.05)';
ctx.lineWidth = 1;
for (let i = 0; i < width + height; i += 30) {
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(0, i);
  ctx.stroke();
}

// 로고 배경
const logoGradient = ctx.createLinearGradient(500, 200, 700, 300);
logoGradient.addColorStop(0, '#00D9FF');
logoGradient.addColorStop(1, '#BD93F9');
ctx.fillStyle = logoGradient;
ctx.roundRect(550, 200, 100, 100, 20);
ctx.fill();

// 로고 텍스트
ctx.fillStyle = '#0D1117';
ctx.font = 'bold 60px Arial';
ctx.textAlign = 'center';
ctx.fillText('</>', 600, 265);

// 메인 타이틀
ctx.font = 'bold 72px Arial';
ctx.fillStyle = '#00D9FF';
ctx.textAlign = 'center';
ctx.fillText('AI 코드 연구소', 600, 380);

// 서브 타이틀
ctx.font = '32px Arial';
ctx.fillStyle = '#E1E8ED';
ctx.fillText('혁신적인 기술과 창의적인 솔루션으로', 600, 440);
ctx.fillText('당신의 아이디어를 현실로 만들어드립니다', 600, 480);

// 기술 스택
const techs = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Flutter'];
const techWidth = 120;
const startX = (width - (techs.length * (techWidth + 20) - 20)) / 2;

ctx.font = '18px Arial';
techs.forEach((tech, i) => {
  const x = startX + i * (techWidth + 20);
  
  // 배경
  ctx.fillStyle = 'rgba(0, 217, 255, 0.1)';
  ctx.strokeStyle = 'rgba(0, 217, 255, 0.3)';
  ctx.lineWidth = 1;
  ctx.roundRect(x, 520, techWidth, 40, 20);
  ctx.fill();
  ctx.stroke();
  
  // 텍스트
  ctx.fillStyle = '#00D9FF';
  ctx.textAlign = 'center';
  ctx.fillText(tech, x + techWidth/2, 545);
});

// URL
ctx.font = '20px Arial';
ctx.fillStyle = '#8B92A9';
ctx.textAlign = 'right';
ctx.fillText('www.ai-code-lap.com', width - 40, height - 30);

// Canvas roundRect polyfill
if (!ctx.roundRect) {
  ctx.roundRect = function(x, y, width, height, radius) {
    this.beginPath();
    this.moveTo(x + radius, y);
    this.lineTo(x + width - radius, y);
    this.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.lineTo(x + width, y + height - radius);
    this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    this.lineTo(x + radius, y + height);
    this.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.lineTo(x, y + radius);
    this.quadraticCurveTo(x, y, x + radius, y);
    this.closePath();
  };
}

// 이미지 저장
const buffer = canvas.toBuffer('image/png');
const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
fs.writeFileSync(outputPath, buffer);

console.log('✅ Open Graph 이미지 생성 완료: public/og-image.png');