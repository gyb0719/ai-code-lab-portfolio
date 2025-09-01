'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Code2,
  Heart,
  Terminal,
  ArrowUp
} from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background-secondary border-t border-neon-cyan/20 overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 브랜드 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-neon-cyan" />
              <h3 className="text-xl font-mono font-bold gradient-text">
                AI 코드 연구소
              </h3>
            </div>
            <p className="text-foreground-secondary mb-4 max-w-md">
              혁신적인 기술과 창의적인 솔루션으로 당신의 아이디어를 현실로 만들어드립니다.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5 text-neon-cyan group-hover:text-neon-purple transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-mono font-semibold text-neon-cyan mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground-secondary hover:text-neon-cyan transition-colors text-sm font-mono"
                  >
                    {'>'} {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-mono font-semibold text-neon-cyan mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground-secondary text-sm">
                <Mail className="w-4 h-4 text-neon-purple" />
                <a 
                  href="mailto:gyb07190@gmail.com" 
                  className="hover:text-neon-cyan transition-colors font-mono"
                >
                  gyb07190@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground-secondary text-sm">
                <Phone className="w-4 h-4 text-neon-purple" />
                <a 
                  href="tel:+821038255659" 
                  className="hover:text-neon-cyan transition-colors font-mono"
                >
                  010-3825-5659
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground-secondary text-sm">
                <MapPin className="w-4 h-4 text-neon-purple" />
                <span className="font-mono">Seoul, Korea</span>
              </div>
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
          <div className="flex items-center gap-2 text-foreground-secondary text-sm font-mono">
            <span>© 2024 권용범. All rights reserved.</span>
            <span className="text-neon-cyan">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-neon-pink animate-pulse" /> by AI 코드 연구소
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

        {/* 터미널 스타일 애니메이션 텍스트 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-block terminal px-4 py-2 rounded text-xs font-mono text-neon-green">
            <span className="opacity-60">$</span> echo "Ready to build something amazing?"
            <span className="terminal-cursor ml-2" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}