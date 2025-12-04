'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronDown, HelpCircle, DollarSign, Settings, Code, MessageCircle } from 'lucide-react';
import { faqs, FAQ } from '@/data/faqs';

const categoryIcons = {
  general: HelpCircle,
  pricing: DollarSign,
  process: Settings,
  tech: Code,
};

const categoryColors = {
  general: 'text-neon-cyan border-neon-cyan/30',
  pricing: 'text-neon-green border-neon-green/30',
  process: 'text-neon-purple border-neon-purple/30',
  tech: 'text-neon-yellow border-neon-yellow/30',
};

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  const Icon = categoryIcons[faq.category];
  const colorClass = categoryColors[faq.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-neon-cyan/20 rounded-xl overflow-hidden bg-background-secondary/30 hover:border-neon-cyan/40 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left"
      >
        <div className="flex items-center gap-3 flex-1">
          <div className={`p-2 rounded-lg border ${colorClass} bg-background-primary/50`}>
            <Icon className="w-4 h-4" />
          </div>
          <span className="font-medium text-foreground-primary">{faq.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-neon-cyan" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-4">
              <div className="pl-11 text-foreground-secondary leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>(['1']);
  const [filter, setFilter] = useState<'all' | FAQ['category']>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = filter === 'all' ? faqs : faqs.filter(faq => faq.category === filter);

  const categories = [
    { id: 'all', label: '전체', icon: HelpCircle },
    { id: 'general', label: '일반', icon: HelpCircle },
    { id: 'pricing', label: '비용', icon: DollarSign },
    { id: 'process', label: '진행', icon: Settings },
    { id: 'tech', label: '기술', icon: Code },
  ];

  return (
    <section id="faq" className="py-16 relative overflow-hidden">
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
              <span className="gradient-text">FAQ</span>
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              자주 묻는 질문들을 모았습니다. 궁금한 점이 있으시면 언제든 문의해주세요.
            </p>
          </div>

          {/* 카테고리 필터 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8 flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setFilter(cat.id as 'all' | FAQ['category'])}
                  className={`
                    px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300
                    flex items-center gap-2
                    ${filter === cat.id
                      ? 'bg-gradient-neon text-background-primary'
                      : 'bg-background-secondary/50 text-foreground-secondary hover:text-neon-cyan border border-neon-cyan/20'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* FAQ 목록 */}
          <div className="max-w-3xl mx-auto space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <FAQItem
                    faq={faq}
                    isOpen={openItems.includes(faq.id)}
                    onToggle={() => toggleItem(faq.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-background-secondary/50 border border-neon-cyan/20">
              <MessageCircle className="w-5 h-5 text-neon-cyan" />
              <span className="text-foreground-secondary">더 궁금한 점이 있으신가요?</span>
              <a
                href="#contact"
                className="text-neon-cyan font-medium hover:text-neon-purple transition-colors"
              >
                문의하기 →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
