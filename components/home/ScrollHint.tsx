'use client';

import { motion } from 'framer-motion';

interface ScrollHintProps {
  text?: string;
}

export default function ScrollHint({ text = 'Scroll down' }: ScrollHintProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="scroll-hint"
    >
      <motion.span
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="block"
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
