/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioController from './components/PortfolioController';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>

        <PortfolioController />
      </main>

      <footer className="bg-white border-t border-gray-100 py-24 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="flex flex-col max-w-sm">
            <span className="font-display font-extrabold text-4xl mb-6 tracking-tighter uppercase text-black">JIAHE DESIGN STUDIO.</span>
            <p className="text-gray-400 text-sm leading-relaxed font-medium capitalize tracking-tight">
              AIGC 驱动的创意边界 / 国内及跨境电商视觉体系构建
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[10px] tracking-[0.4em] font-bold uppercase text-gray-500">
            <div className="flex flex-col gap-5">
              <span className="text-black/20">Connect</span>
              <a href="#" className="hover:text-black transition-colors">Behance</a>
              <a href="#" className="hover:text-black transition-colors">Dribbble</a>
              <a href="#" className="hover:text-black transition-colors">Instagram</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-black/20">Status</span>
              <span className="text-black">Available for Projects</span>
              <span className="text-black">Shanghai / Remote</span>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-black/20">Legal</span>
              <span>© 2024 DESIGN STUDIO</span>
              <span className="text-[9px] lowercase tracking-normal">Display index / Vol. 24</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

