'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  Globe,
  Smartphone,
  Monitor,
  Github,
  ExternalLink,
  Wallet,
  CheckCircle,
  ArrowRight,
  Share2,
  Mail
} from 'lucide-react';
import { projects } from '@/data/projects';
import { BentoCard } from '@/components/ui/BentoCard';

const colorSequence = [
  'poison-green',
  'valentino-pink',
  'turquoise',
  'mango',
  'sunshine',
  'electric-blue',
] as const;

const categoryIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
};

const categoryColors = {
  web: 'turquoise',
  mobile: 'valentino-pink',
  desktop: 'poison-green',
} as const;

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground-primary mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/#portfolio" className="text-dopamine-turquoise hover:underline">
            포트폴리오로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const CategoryIcon = categoryIcons[project.category];
  const categoryColor = categoryColors[project.category];
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const mainColor = colorSequence[projectIndex % colorSequence.length];

  // 관련 프로젝트 (같은 카테고리, 현재 프로젝트 제외)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const scrollToContact = () => {
    router.push('/#contact');
  };

  return (
    <main className="min-h-screen bg-background-primary pt-24 pb-20">
      {/* 배경 효과 */}
      <div className="fixed inset-0 grid-background opacity-10 pointer-events-none" />
      <div className={`fixed top-0 right-0 w-[600px] h-[600px] bg-dopamine-${mainColor}/5 rounded-full blur-3xl pointer-events-none`} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 헤더 - 뒤로가기 & 공유 */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between mb-8"
          >
            <Link
              href="/#portfolio"
              className="flex items-center gap-2 text-foreground-secondary hover:text-foreground-primary transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">포트폴리오로 돌아가기</span>
            </Link>

            <button
              className={`p-2 rounded-xl bg-background-secondary/50 border border-white/10 hover:border-dopamine-${mainColor}/50 transition-colors`}
              onClick={() => navigator.clipboard.writeText(window.location.href)}
            >
              <Share2 className="w-5 h-5 text-foreground-secondary" />
            </button>
          </motion.div>

          {/* 메인 Bento Grid */}
          <div className="bento-grid max-w-6xl mx-auto">
            {/* 프로젝트 헤더 카드 (2x2) */}
            <motion.div variants={itemVariants} className="bento-2x2">
              <BentoCard
                size="2x2"
                color={mainColor}
                className="h-full flex flex-col"
              >
                {/* 카테고리 배지 */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-mono bg-dopamine-${categoryColor}/20 text-dopamine-${categoryColor} flex items-center gap-1.5`}>
                    <CategoryIcon className="w-3 h-3" />
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* 프로젝트 아이콘 */}
                <div className={`w-16 h-16 rounded-2xl bg-dopamine-${mainColor}/20 flex items-center justify-center mb-4`}>
                  <span className={`text-3xl font-bold text-dopamine-${mainColor} font-mono`}>
                    {project.title.slice(0, 2)}
                  </span>
                </div>

                {/* 타이틀 */}
                <h1 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-foreground-primary">
                  {project.title}
                </h1>

                {/* 설명 */}
                <p className="text-foreground-secondary text-lg flex-1">
                  {project.description}
                </p>

                {/* 가격 */}
                <div className={`mt-4 pt-4 border-t border-dopamine-${mainColor}/20`}>
                  <div className="flex items-center gap-2">
                    <Wallet className={`w-5 h-5 text-dopamine-${mainColor}`} />
                    <span className={`text-xl font-bold font-mono text-dopamine-${mainColor}`}>
                      {project.completedAt}
                    </span>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* 기술 스택 카드 (2x1) */}
            <motion.div variants={itemVariants} className="bento-2x1">
              <BentoCard
                size="2x1"
                color="turquoise"
                className="h-full"
              >
                <h3 className="text-sm font-mono text-foreground-secondary mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-dopamine-turquoise rounded-full" />
                  기술 스택
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 rounded-xl text-sm font-mono bg-dopamine-${colorSequence[index % colorSequence.length]}/10 text-dopamine-${colorSequence[index % colorSequence.length]} border border-dopamine-${colorSequence[index % colorSequence.length]}/30`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </motion.div>

            {/* 주요 기능 카드들 */}
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bento-1x1"
              >
                <BentoCard
                  size="1x1"
                  color={colorSequence[index % colorSequence.length]}
                  className="h-full flex flex-col"
                >
                  <div className={`w-10 h-10 rounded-xl bg-dopamine-${colorSequence[index % colorSequence.length]}/20 flex items-center justify-center mb-3`}>
                    <CheckCircle className={`w-5 h-5 text-dopamine-${colorSequence[index % colorSequence.length]}`} />
                  </div>
                  <p className="text-sm text-foreground-primary font-medium">
                    {feature}
                  </p>
                </BentoCard>
              </motion.div>
            ))}

            {/* CTA 카드 - 문의하기 (2x1) */}
            <motion.div variants={itemVariants} className="bento-2x1">
              <BentoCard
                size="2x1"
                interactive
                className="h-full bg-gradient-to-br from-dopamine-poison-green to-dopamine-turquoise cursor-pointer"
                onClick={scrollToContact}
              >
                <div className="flex items-center justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold text-background-primary mb-1">
                      이런 프로젝트가 필요하신가요?
                    </h3>
                    <p className="text-background-primary/80 text-sm">
                      지금 바로 문의해주세요
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-8 h-8 text-background-primary" />
                    <ArrowRight className="w-6 h-6 text-background-primary" />
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* 외부 링크 카드들 */}
            {project.liveUrl && (
              <motion.div variants={itemVariants} className="bento-1x1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <BentoCard
                    size="1x1"
                    color="valentino-pink"
                    interactive
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <ExternalLink className="w-8 h-8 text-dopamine-valentino-pink mb-2" />
                    <span className="text-foreground-primary font-medium">Live Demo</span>
                    <span className="text-xs text-foreground-secondary mt-1">웹사이트 방문</span>
                  </BentoCard>
                </a>
              </motion.div>
            )}

            {project.githubUrl && (
              <motion.div variants={itemVariants} className="bento-1x1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <BentoCard
                    size="1x1"
                    color="electric-blue"
                    interactive
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <Github className="w-8 h-8 text-dopamine-electric-blue mb-2" />
                    <span className="text-foreground-primary font-medium">GitHub</span>
                    <span className="text-xs text-foreground-secondary mt-1">소스코드 보기</span>
                  </BentoCard>
                </a>
              </motion.div>
            )}
          </div>

          {/* 관련 프로젝트 섹션 */}
          {relatedProjects.length > 0 && (
            <motion.div variants={itemVariants} className="mt-20 max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold font-mono mb-8 text-foreground-primary">
                관련 프로젝트
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedProjects.map((relatedProject, index) => {
                  const relatedColor = colorSequence[index % colorSequence.length];
                  return (
                    <Link key={relatedProject.id} href={`/portfolio/${relatedProject.id}`}>
                      <BentoCard
                        size="1x1"
                        color={relatedColor}
                        interactive
                        className="h-full"
                      >
                        <div className={`w-10 h-10 rounded-xl bg-dopamine-${relatedColor}/20 flex items-center justify-center mb-3`}>
                          <span className={`text-lg font-bold text-dopamine-${relatedColor} font-mono`}>
                            {relatedProject.title.slice(0, 2)}
                          </span>
                        </div>
                        <h3 className="font-bold text-foreground-primary mb-2">
                          {relatedProject.title}
                        </h3>
                        <p className="text-sm text-foreground-secondary line-clamp-2">
                          {relatedProject.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-dopamine-turquoise text-sm">
                          <span>자세히 보기</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </BentoCard>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
