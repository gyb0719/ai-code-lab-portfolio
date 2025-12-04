'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface HoverImageProps {
  image: string;
  isVisible: boolean;
  mousePosition: { x: number; y: number };
}

export default function HoverImage({ image, isVisible, mousePosition }: HoverImageProps) {
  return (
    <AnimatePresence>
      {isVisible && image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 125,
          }}
        >
          <div className="w-[400px] h-[250px] overflow-hidden shadow-2xl">
            <img
              src={image}
              alt="Project preview"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
