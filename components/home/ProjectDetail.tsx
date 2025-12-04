'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './ProjectItem';

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetail({ project, isOpen, onClose }: ProjectDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const container = containerRef.current;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = Math.round((scrollTop / scrollHeight) * 100);
      setScrollProgress(progress);

      // 맨 위로 스크롤하면 닫기
      if (scrollTop <= 0) {
        onClose();
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isOpen, onClose]);

  // ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="project-detail"
        >
          {/* 히어로 이미지 */}
          <div className="relative w-full h-screen">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          </div>

          {/* 프로젝트 정보 */}
          <div className="container-wide py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              {/* 왼쪽: 브레드크럼 */}
              <div className="md:col-span-2">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 text-foreground-secondary hover:text-foreground-primary transition-colors"
                >
                  <span className="text-sm">index</span>
                </button>
                <span className="text-foreground-muted mx-2">/</span>
                <span className="text-sm">{project.title}</span>
              </div>

              {/* 오른쪽: 내용 */}
              <div className="md:col-span-10">
                {/* Summary */}
                <div className="mb-12">
                  <span className="text-sm font-mono text-foreground-muted mb-4 block">S</span>
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
                    {project.summary}
                  </p>
                </div>

                {/* Collaborators / Technologies */}
                <div className="mb-12">
                  <span className="text-sm font-mono text-foreground-muted mb-4 block">C</span>
                  <p className="text-foreground-secondary">
                    {project.collaborators.length > 0
                      ? project.collaborators.join(', ')
                      : project.technologies.join(', ')}
                  </p>
                </div>

                {/* Visit Site */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Visit site
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* 갤러리 이미지 */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="pb-24">
              {project.galleryImages.map((image, index) => (
                <div key={index} className="w-full mb-4">
                  <img
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          )}

          {/* 스크롤 힌트 */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-foreground-muted text-sm font-mono">
            Scroll up to close
          </div>

          {/* 스크롤 진행률 */}
          <div className="fixed bottom-8 left-8 text-foreground-muted text-sm font-mono">
            {String(scrollProgress).padStart(2, '0')}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
