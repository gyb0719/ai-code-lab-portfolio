'use client';

import { useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Terminal,
  CheckCircle,
  XCircle,
  Loader2,
  User,
  MessageSquare,
  Briefcase,
  DollarSign
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: ''
};

const projectTypes = [
  { value: 'web', label: 'Web Application' },
  { value: 'mobile', label: 'Mobile App' },
  { value: 'desktop', label: 'Desktop Software' },
  { value: 'all', label: 'Full Package' },
];

const budgetRanges = [
  { value: 'small', label: '< 500만원' },
  { value: 'medium', label: '500만원 - 2000만원' },
  { value: 'large', label: '2000만원 - 5000만원' },
  { value: 'enterprise', label: '5000만원 이상' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const formRef = useRef<HTMLFormElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다';
    }
    
    if (!formData.projectType) {
      newErrors.projectType = '프로젝트 유형을 선택해주세요';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요';
    } else if (formData.message.length < 10) {
      newErrors.message = '메시지는 최소 10자 이상 입력해주세요';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS 설정 (실제 사용시 환경변수로 관리)
    const SERVICE_ID = 'service_id';
    const TEMPLATE_ID = 'template_id';
    const PUBLIC_KEY = 'public_key';

    try {
      // 실제로는 EmailJS를 통해 전송
      // await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);
      
      // 데모를 위한 임시 딜레이
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData(initialFormData);
      
      // 3초 후 상태 초기화
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 입력시 에러 제거
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-background-secondary relative overflow-hidden">
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
                <span className="opacity-60">$</span> contact --request
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="gradient-text">Contact Me</span>
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              프로젝트에 대해 상담하고 싶으신가요? 언제든지 연락주세요!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* 연락처 정보 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 font-mono text-neon-cyan">
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

            {/* 문의 폼 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* 이름 */}
                <div>
                  <label className="block text-sm font-mono mb-2 text-foreground-secondary">
                    <User className="inline-block w-4 h-4 mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 bg-background-primary border rounded-lg
                      font-mono text-sm transition-all duration-300
                      ${errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-neon-cyan/30 hover:border-neon-cyan/50 focus:border-neon-cyan'
                      }
                      focus:outline-none focus:ring-2 focus:ring-neon-cyan/20
                    `}
                    placeholder="권용범"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* 이메일 */}
                <div>
                  <label className="block text-sm font-mono mb-2 text-foreground-secondary">
                    <Mail className="inline-block w-4 h-4 mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 bg-background-primary border rounded-lg
                      font-mono text-sm transition-all duration-300
                      ${errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-neon-cyan/30 hover:border-neon-cyan/50 focus:border-neon-cyan'
                      }
                      focus:outline-none focus:ring-2 focus:ring-neon-cyan/20
                    `}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* 프로젝트 유형 & 예산 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono mb-2 text-foreground-secondary">
                      <Briefcase className="inline-block w-4 h-4 mr-2" />
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3 bg-background-primary border rounded-lg
                        font-mono text-sm transition-all duration-300
                        ${errors.projectType 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-neon-cyan/30 hover:border-neon-cyan/50 focus:border-neon-cyan'
                        }
                        focus:outline-none focus:ring-2 focus:ring-neon-cyan/20
                      `}
                    >
                      <option value="">선택하세요</option>
                      {projectTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-xs text-red-500 font-mono">{errors.projectType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-mono mb-2 text-foreground-secondary">
                      <DollarSign className="inline-block w-4 h-4 mr-2" />
                      Budget (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="
                        w-full px-4 py-3 bg-background-primary border rounded-lg
                        border-neon-cyan/30 hover:border-neon-cyan/50 focus:border-neon-cyan
                        font-mono text-sm transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-neon-cyan/20
                      "
                    >
                      <option value="">선택하세요</option>
                      {budgetRanges.map(range => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 메시지 */}
                <div>
                  <label className="block text-sm font-mono mb-2 text-foreground-secondary">
                    <MessageSquare className="inline-block w-4 h-4 mr-2" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`
                      w-full px-4 py-3 bg-background-primary border rounded-lg
                      font-mono text-sm transition-all duration-300 resize-none
                      ${errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-neon-cyan/30 hover:border-neon-cyan/50 focus:border-neon-cyan'
                      }
                      focus:outline-none focus:ring-2 focus:ring-neon-cyan/20
                    `}
                    placeholder="프로젝트에 대해 자세히 설명해주세요..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* 제출 버튼 */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gradient flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>전송 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>메시지 전송</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* 상태 메시지 */}
              <AnimatePresence>
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`
                      mt-4 p-4 rounded-lg flex items-center gap-2 font-mono text-sm
                      ${submitStatus === 'success' 
                        ? 'bg-neon-green/10 border border-neon-green/30 text-neon-green' 
                        : 'bg-red-500/10 border border-red-500/30 text-red-500'
                      }
                    `}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>메시지가 성공적으로 전송되었습니다!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5" />
                        <span>전송 중 오류가 발생했습니다. 다시 시도해주세요.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}