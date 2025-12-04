'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Terminal
} from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-16 bg-background-secondary relative overflow-hidden">
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
              <span className="gradient-text">Contact Me</span>
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              프로젝트에 대해 상담하고 싶으신가요? 언제든지 연락주세요!
            </p>
          </div>

          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 font-mono text-neon-cyan text-center">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-background-primary rounded-lg border border-neon-cyan/30">
                  <Mail className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <p className="font-mono text-sm text-foreground-secondary mb-1">Email</p>
                  <a
                    href="mailto:gyb07190@gmail.com"
                    className="text-lg hover:text-neon-cyan transition-colors"
                  >
                    gyb07190@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-background-primary rounded-lg border border-neon-purple/30">
                  <Phone className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <p className="font-mono text-sm text-foreground-secondary mb-1">Phone</p>
                  <a
                    href="tel:+821038255659"
                    className="text-lg hover:text-neon-purple transition-colors"
                  >
                    010-3825-5659
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-background-primary rounded-lg border border-neon-green/30">
                  <MapPin className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <p className="font-mono text-sm text-foreground-secondary mb-1">Location</p>
                  <p className="text-lg">Seoul, South Korea</p>
                </div>
              </motion.div>
            </div>

            {/* 추가 정보 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-background-primary/50 rounded-lg border border-neon-cyan/20"
            >
              <h4 className="font-mono font-semibold mb-3 text-neon-cyan">
                <Terminal className="inline-block w-4 h-4 mr-2" />
                Quick Response
              </h4>
              <ul className="space-y-2 text-sm text-foreground-secondary font-mono">
                <li>{'>'} 평균 응답 시간: 2시간 이내</li>
                <li>{'>'} 무료 상담 가능</li>
                <li>{'>'} 24/7 이메일 응대</li>
                <li>{'>'} 프로젝트 견적 즉시 제공</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
