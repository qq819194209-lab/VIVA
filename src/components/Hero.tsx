/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Blobs from Theme */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-blue rounded-full filter blur-[120px] opacity-30 -mr-24 -mt-24 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-peach rounded-full filter blur-[120px] opacity-30 -ml-32 -mb-32 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[12px] tracking-[0.4em] font-bold text-gray-400 mb-6 uppercase">Portfolio & Showcase / Vol. 24</div>
            <h1 className="font-display text-[12vw] md:text-[8vw] font-extrabold leading-[0.8] tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-black via-black to-gray-400 uppercase italic">
              Design<br />Studio
            </h1>
            <div className="w-24 h-1.5 bg-black mb-8" />
          </motion.div>
        </div>

        <div className="flex-1 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-xl md:text-2xl font-medium leading-tight text-gray-800">
              致力于将AI技术与商业美学深度融合，专注国内及跨境电商视觉体系构建。
            </p>
            <p className="text-gray-500 font-serif italic text-lg opacity-80">
              Visual Designer exploring the boundaries of AIGC & E-commerce.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-gray-300">Display Index / 01</span>
        <div className="w-[1px] h-12 bg-gray-200" />
      </motion.div>
    </section>
  );
}
