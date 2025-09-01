'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Github, 
  ExternalLink,
  Calendar,
  Code2,
  Sparkles
} from 'lucide-react';
import { projects } from '@/data/projects';
import { Project } from '@/lib/types';

const tabs = [
  { id: 'web', label: 'Web', icon: Globe },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'desktop', label: 'Desktop', icon: Monitor },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="card-neon h-full flex flex-col">
        {/* 이미지 영역 */}
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-background-primary">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 className="w-16 h-16 text-neon-cyan/30" />
          </div>
          
          {/* 호버시 오버레이 */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/80 to-transparent flex items-end justify-center pb-4"
              >
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background-secondary rounded-lg hover:bg-neon-cyan/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-neon-cyan" />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background-secondary rounded-lg hover:bg-neon-purple/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5 text-neon-purple" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 font-mono text-neon-cyan group-hover:text-neon-purple transition-colors">
            {project.title}
          </h3>
          
          <p className="text-sm text-foreground-secondary mb-4 flex-1">
            {project.description}
          </p>

          {/* 기술 스택 태그 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-background-primary/50 border border-neon-cyan/20 rounded font-mono text-neon-cyan"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs text-foreground-secondary font-mono">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* 메타 정보 */}
          <div className="flex items-center justify-between text-xs text-foreground-secondary">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{project.completedAt}</span>
            </div>
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-neon-yellow" />
              <span>Featured</span>
            </div>
          </div>
        </div>

        {/* 글리치 효과 (호버시) */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-neon-cyan/5 animate-pulse" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile' | 'desktop'>('web');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-block terminal px-4 py-2 rounded-lg mb-4"
            >
              <span className="text-neon-green text-sm font-mono">
                <span className="opacity-60">$</span> ls projects/
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              다양한 플랫폼에서 구현한 프로젝트들을 확인해보세요
            </p>
          </div>

          {/* 탭 네비게이션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-background-secondary/50 backdrop-blur-sm rounded-lg p-1 border border-neon-cyan/20">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`
                      px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300
                      flex items-center gap-2
                      ${activeTab === tab.id 
                        ? 'bg-gradient-neon text-background-primary' 
                        : 'text-foreground-secondary hover:text-neon-cyan'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* 프로젝트 그리드 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'web' ? -50 : activeTab === 'mobile' ? 0 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'web' ? 50 : activeTab === 'mobile' ? 0 : -50 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* 더보기 버튼 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              className="btn-neon group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>모든 프로젝트 보기</span>
              <ExternalLink className="inline-block ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}