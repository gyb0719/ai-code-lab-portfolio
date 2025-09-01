'use client';

import { motion } from 'framer-motion';
import { 
  Github, 
  Heart,
  ArrowUp
} from 'lucide-react';
import AILabLogo from '@/components/icons/AILabLogo';
import KakaoIcon from '@/components/icons/KakaoIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'neon-cyan' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/y_bum2/', label: 'Instagram', color: 'gradient' },
  { icon: KakaoIcon, href: 'https://open.kakao.com/o/slJ2PIPh', label: 'KakaoTalk', color: 'yellow' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background-secondary border-t border-neon-cyan/20 overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          {/* 브랜드 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="p-2 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg">
                <AILabLogo size={32} animated={false} />
              </div>
              <h3 className="text-2xl font-bold gradient-text">
                AI 코드 연구소
              </h3>
            </div>
            <p className="text-foreground-secondary mb-4 max-w-md mx-auto">
              혁신적인 기술과 창의적인 솔루션으로 당신의 아이디어를 현실로 만들어드립니다.
            </p>
            
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isKakao = social.label === 'KakaoTalk';
                const isInstagram = social.label === 'Instagram';
                
                const getBorderStyle = () => {
                  if (isKakao) return 'border-yellow-400/30 hover:border-yellow-400 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]';
                  if (isInstagram) return 'border-pink-400/30 hover:border-pink-400 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]';
                  return 'border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]';
                };
                
                const getIconStyle = () => {
                  if (isKakao) return 'text-yellow-400 group-hover:text-yellow-300';
                  if (isInstagram) return 'text-pink-400 group-hover:text-pink-300';
                  return 'text-neon-cyan group-hover:text-neon-purple';
                };
                
                const getTooltipStyle = () => {
                  if (isKakao) return 'bg-yellow-400/90 text-black';
                  if (isInstagram) return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
                  return 'bg-neon-cyan/90 text-background-primary';
                };
                
                const getTooltipText = () => {
                  if (isKakao) return '오픈채팅 참여';
                  if (isInstagram) return '인스타그램 방문';
                  return 'GitHub 보기';
                };
                
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-3 rounded-xl border-2 transition-all group relative overflow-hidden
                      ${getBorderStyle()}
                    `}
                    whileHover={{ scale: 1.1, rotate: isInstagram ? -5 : 5 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    {isInstagram && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          background: [
                            'linear-gradient(135deg, rgba(167,139,250,0.2) 0%, rgba(236,72,153,0.2) 50%, rgba(251,146,60,0.2) 100%)',
                            'linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(251,146,60,0.2) 50%, rgba(167,139,250,0.2) 100%)',
                            'linear-gradient(135deg, rgba(251,146,60,0.2) 0%, rgba(167,139,250,0.2) 50%, rgba(236,72,153,0.2) 100%)',
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    )}
                    <Icon className={`
                      w-6 h-6 transition-all relative z-10
                      ${getIconStyle()}
                      ${isInstagram ? 'group-hover:scale-110' : ''}
                    `} />
                    {/* 툴팁 */}
                    <div className={`
                      absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                      ${getTooltipStyle()}
                    `}>
                      {getTooltipText()}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 하단 섹션 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-neon-cyan/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-3 text-sm">
            <span className="font-medium text-foreground-primary">
              © 2025 <span className="font-bold text-neon-cyan">권용범</span>. All rights reserved.
            </span>
            <span className="hidden md:block text-neon-cyan/50">•</span>
            <span className="flex items-center gap-2 text-foreground-secondary">
              Made with 
              <Heart className="w-4 h-4 text-neon-pink animate-pulse" /> 
              by <span className="font-bold text-neon-purple">AI 코드 연구소</span>
            </span>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5 text-neon-cyan" />
          </motion.button>
        </motion.div>

      </div>
    </footer>
  );
}