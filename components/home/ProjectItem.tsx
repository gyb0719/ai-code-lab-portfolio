'use client';

import { motion } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  summary: string;
  collaborators: string[];
  category: string;
  technologies: string[];
  image: string;
  galleryImages?: string[];
  liveUrl?: string;
}

interface ProjectItemProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

export default function ProjectItem({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
  onClick,
}: ProjectItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-item group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="container-wide flex items-center justify-between">
        {/* 프로젝트 제목 */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight transition-all duration-300 group-hover:translate-x-4">
            {project.title}
          </h2>
        </div>

        {/* 번호 */}
        <div className="hidden md:flex items-center gap-8">
          <span className="text-sm font-mono text-foreground-muted">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* 썸네일 인디케이터 */}
          <div
            className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-500 ${
              isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-50'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
