'use client';

import { useState } from 'react';
import ProjectItem, { Project } from './ProjectItem';
import HoverImage from '../ui/HoverImage';

interface ProjectListProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

export default function ProjectList({ projects, onProjectSelect }: ProjectListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className="min-h-screen pt-32 pb-24"
      onMouseMove={handleMouseMove}
    >
      <div className="border-t border-border">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={index}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
            onClick={() => onProjectSelect(project)}
          />
        ))}
      </div>

      {/* 호버 이미지 */}
      <HoverImage
        image={hoveredIndex !== null ? projects[hoveredIndex].image : ''}
        isVisible={hoveredIndex !== null}
        mousePosition={mousePosition}
      />
    </section>
  );
}
