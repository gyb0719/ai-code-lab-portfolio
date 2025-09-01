'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas 크기 설정
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 파티클 클래스
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || 800);
        this.y = Math.random() * (canvas?.height || 600);
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
        
        // 네온 컬러 중 랜덤 선택
        const colors = ['#00D9FF', '#BD93F9', '#50FA7B'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // 화면 밖으로 나가면 반대편에서 나타나기
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // 반짝임 효과
        this.opacity += Math.random() * 0.02 - 0.01;
        if (this.opacity > 0.7) this.opacity = 0.7;
        if (this.opacity < 0.2) this.opacity = 0.2;
      }

      draw() {
        if (!ctx) return;
        
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
      }
    }

    // 파티클 생성
    const particles: Particle[] = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // 마우스 위치 추적
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 연결선 그리기 함수
    const drawConnections = () => {
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 150) {
            ctx.globalAlpha = (1 - distance / 150) * 0.2;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });

        // 마우스와의 연결선
        const mouseDistance = Math.sqrt(
          Math.pow(particle.x - mouseX, 2) +
          Math.pow(particle.y - mouseY, 2)
        );

        if (mouseDistance < 100) {
          ctx.globalAlpha = (1 - mouseDistance / 100) * 0.5;
          ctx.strokeStyle = '#00D9FF';
          ctx.lineWidth = 1;
          
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();

          // 마우스 근처에서 파티클 밀어내기
          const angle = Math.atan2(particle.y - mouseY, particle.x - mouseX);
          particle.x += Math.cos(angle) * 2;
          particle.y += Math.sin(angle) * 2;
        }
      });
    };

    // 애니메이션 루프
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      
      requestAnimationFrame(animate);
    };

    animate();

    // 클린업
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
}