/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-50 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-end">
        <div className="flex flex-col">
          <span className="font-display font-extrabold text-2xl tracking-tighter text-black">DESIGNER</span>
          <span className="font-display font-light text-xs tracking-[0.2em] text-black opacity-30">PORTFOLIO</span>
        </div>
        <div className="flex gap-8 text-[10px] tracking-[0.3em] font-bold text-black uppercase">
          <a href="#about" className="hover:opacity-100 opacity-40 transition-opacity">Profile</a>
          <a href="#work" className="hover:opacity-100 opacity-40 transition-opacity">Work</a>
          <a href="#contact" className="hover:opacity-100 opacity-40 transition-opacity">Communicate</a>
        </div>
      </div>
    </motion.nav>
  );
}
