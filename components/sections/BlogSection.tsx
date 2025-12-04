'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { blogPosts, BlogPost } from '@/data/blogPosts';

const categoryColors: Record<string, string> = {
  'React': 'from-cyan-400 to-blue-500',
  'Mobile': 'from-purple-400 to-pink-500',
  'CSS': 'from-pink-400 to-red-500',
  'TypeScript': 'from-blue-400 to-indigo-500',
  'Desktop': 'from-green-400 to-cyan-500',
  '커리어': 'from-yellow-400 to-orange-500',
};

function BlogCard({ post, index, featured = false }: { post: BlogPost; index: number; featured?: boolean }) {
  const gradient = categoryColors[post.category] || 'from-neon-cyan to-neon-purple';

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`
        group relative overflow-hidden rounded-2xl bg-background-secondary/30 border border-neon-cyan/20
        hover:border-neon-cyan/50 transition-all duration-300
        ${featured ? 'md:col-span-2' : ''}
      `}
    >
      {/* 상단 그라디언트 바 */}
      <div className={`h-1 bg-gradient-to-r ${gradient}`} />

      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        {/* Featured 배지 */}
        {post.featured && (
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neon-yellow/10 border border-neon-yellow/30 text-neon-yellow text-xs font-mono mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Featured</span>
          </div>
        )}

        {/* 카테고리 */}
        <div className="mb-3">
          <span className={`
            inline-block px-3 py-1 rounded-lg text-xs font-mono
            bg-gradient-to-r ${gradient} text-white
          `}>
            {post.category}
          </span>
        </div>

        {/* 제목 */}
        <h3 className={`
          font-bold mb-3 group-hover:text-neon-cyan transition-colors
          ${featured ? 'text-xl md:text-2xl' : 'text-lg'}
        `}>
          {post.title}
        </h3>

        {/* 요약 */}
        <p className={`
          text-foreground-secondary mb-4 leading-relaxed
          ${featured ? 'text-base' : 'text-sm line-clamp-2'}
        `}>
          {post.summary}
        </p>

        {/* 메타 정보 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-foreground-secondary">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{new Date(post.date).toLocaleDateString('ko-KR')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* 읽기 버튼 */}
          <motion.button
            className="flex items-center gap-1 text-neon-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ x: 5 }}
          >
            <span>읽기</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* 호버 효과 */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.article>
  );
}

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // 처음 4개만 표시 (2개는 featured)
  const displayPosts = blogPosts.slice(0, 4);
  const featuredPosts = displayPosts.filter(p => p.featured);
  const regularPosts = displayPosts.filter(p => !p.featured);

  return (
    <section id="blog" className="py-16 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 grid-background opacity-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-neon-purple/10 rounded-full blur-3xl" />

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
              <span className="gradient-text">Blog & Insights</span>
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              개발 경험과 기술 인사이트를 공유합니다
            </p>
          </div>

          {/* 블로그 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Featured 포스트들 */}
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} featured />
            ))}

            {/* 일반 포스트들 */}
            {regularPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index + featuredPosts.length} />
            ))}
          </div>

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
              <span>모든 글 보기</span>
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
