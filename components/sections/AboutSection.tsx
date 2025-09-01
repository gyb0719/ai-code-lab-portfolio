'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2,
  Cpu,
  Database,
  Globe
} from 'lucide-react';

const skills = {
  frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Three.js'],
  backend: ['Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis'],
  mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  tools: ['Docker', 'AWS', 'Git', 'Figma', 'Vercel'],
};

const stats = [
  { label: '경력', value: '5+', unit: '년' },
  { label: '완료 프로젝트', value: '200+', unit: '개' },
  { label: '고객 만족도', value: '98', unit: '%' },
  { label: '코드 라인', value: '1M+', unit: '' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-16 bg-background-secondary relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 grid-background opacity-10" />
      
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
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              혁신적인 기술과 창의적인 솔루션으로 비즈니스 가치를 창출합니다
            </p>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* 소개 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan font-mono">
                안녕하세요, AI 코드 연구소입니다
              </h3>
              <div className="space-y-4 text-foreground-secondary">
                <p>
                  다양한 개발 경험을 보유한 풀스택 개발자로, 웹, 모바일, 데스크톱 
                  애플리케이션 개발을 전문으로 합니다. 최신 기술 트렌드를 지속적으로 
                  학습하며, 클라이언트의 비즈니스 목표에 맞는 최적의 솔루션을 제공합니다.
                </p>
                <p>
                  React, Next.js, Node.js 등의 모던 웹 기술부터 Flutter, React Native 같은 
                  크로스 플랫폼 모바일 개발까지 폭넓은 기술 스택을 보유하고 있습니다.
                </p>
                <p>
                  코드 품질과 사용자 경험을 최우선으로 생각하며, 항상 깔끔하고 
                  유지보수가 쉬운 코드를 작성하기 위해 노력합니다.
                </p>
              </div>

              {/* 특징 배지들 */}
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: User, label: '프리랜서' },
                  { icon: GraduationCap, label: '컴퓨터공학' },
                  { icon: Briefcase, label: '풀스택' },
                  { icon: Award, label: '인증' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-background-primary/50 border border-neon-purple/30 rounded-lg hover:border-neon-purple hover:shadow-[0_0_20px_rgba(189,147,249,0.3)] transition-all"
                  >
                    <item.icon className="w-4 h-4 text-neon-purple" />
                    <span className="text-sm font-mono">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 통계 카드 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="card-neon text-center p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-neon-cyan font-mono mb-2">
                    {stat.value}
                    <span className="text-xl text-neon-purple">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-foreground-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 스킬 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center font-mono">
              <span className="gradient-text">Tech Stack</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + categoryIndex * 0.1 }}
                  className="bg-background-primary/50 border border-neon-cyan/20 rounded-lg p-6 hover:border-neon-cyan/50 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {category === 'frontend' && <Globe className="w-5 h-5 text-neon-cyan" />}
                    {category === 'backend' && <Database className="w-5 h-5 text-neon-purple" />}
                    {category === 'mobile' && <Cpu className="w-5 h-5 text-neon-green" />}
                    {category === 'tools' && <Code2 className="w-5 h-5 text-neon-yellow" />}
                    <h4 className="font-mono font-semibold capitalize">{category}</h4>
                  </div>
                  <div className="space-y-2">
                    {items.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + categoryIndex * 0.1 + index * 0.05 }}
                        className="text-sm text-foreground-secondary hover:text-neon-cyan transition-colors font-mono"
                      >
                        {'>'} {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}