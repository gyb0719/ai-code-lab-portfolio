'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Globe, Smartphone, Monitor } from 'lucide-react';
import { testimonials, Testimonial } from '@/data/testimonials';

const projectTypeIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
};

function TestimonialCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
  const Icon = projectTypeIcons[testimonial.projectType];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.4 }}
      className={`
        relative p-6 md:p-8 rounded-2xl transition-all duration-300
        ${isActive ? 'card-neon' : 'bg-background-secondary/30 border border-transparent'}
      `}
    >
      {/* 인용 부호 */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-neon-cyan/20" />

      {/* 별점 */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-neon-yellow fill-neon-yellow' : 'text-foreground-secondary'}`}
          />
        ))}
      </div>

      {/* 후기 내용 */}
      <p className="text-foreground-secondary mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* 작성자 정보 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* 아바타 */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
            <span className="text-lg font-bold text-white">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="font-bold text-foreground-primary">{testimonial.name}</h4>
            <p className="text-sm text-foreground-secondary">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>

        {/* 프로젝트 타입 */}
        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-background-primary/50 border border-neon-cyan/20">
          <Icon className="w-4 h-4 text-neon-cyan" />
          <span className="text-xs font-mono text-neon-cyan capitalize">{testimonial.projectType}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // 자동 슬라이드
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 grid-background opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* 섹션 타이틀 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              함께 프로젝트를 진행한 클라이언트들의 소중한 후기입니다
            </p>
          </div>

          {/* 캐러셀 */}
          <div className="relative max-w-3xl mx-auto">
            {/* 메인 카드 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard
                  testimonial={testimonials[currentIndex]}
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>

            {/* 네비게이션 버튼 */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                onClick={handlePrev}
                className="p-3 rounded-full bg-background-secondary border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-neon-cyan" />
              </motion.button>

              {/* 인디케이터 */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${index === currentIndex
                        ? 'w-8 bg-gradient-to-r from-neon-cyan to-neon-purple'
                        : 'bg-foreground-secondary/30 hover:bg-foreground-secondary/50'
                      }
                    `}
                  />
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                className="p-3 rounded-full bg-background-secondary border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-neon-cyan" />
              </motion.button>
            </div>
          </div>

          {/* 통계 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
          >
            {[
              { label: '완료 프로젝트', value: '50+' },
              { label: '만족도', value: '98%' },
              { label: '재의뢰율', value: '85%' },
              { label: '평균 평점', value: '4.9' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-background-secondary/30 border border-neon-cyan/10">
                <div className="text-2xl md:text-3xl font-bold gradient-text font-mono">{stat.value}</div>
                <div className="text-sm text-foreground-secondary mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
