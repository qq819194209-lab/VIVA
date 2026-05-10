/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-exclusion"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-end">
        <div className="flex flex-col">
          <span className="font-display font-extrabold text-2xl tracking-tighter text-white">DESIGNER</span>
          <span className="font-display font-light text-xs tracking-[0.2em] text-white opacity-60">PORTFOLIO</span>
        </div>
        <div className="flex gap-8 text-[10px] tracking-[0.3em] font-medium text-white uppercase">
          <a href="#about" className="hover:opacity-100 opacity-60 transition-opacity">Profile</a>
          <a href="#work" className="hover:opacity-100 opacity-60 transition-opacity">Work</a>
          <a href="#contact" className="hover:opacity-100 opacity-60 transition-opacity">Communicate</a>
        </div>
      </div>
    </motion.nav>
  );
}
