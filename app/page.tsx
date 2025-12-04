'use client';

import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import BlogSection from '@/components/sections/BlogSection';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}