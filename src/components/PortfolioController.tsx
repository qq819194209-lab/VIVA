/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, CATEGORIES, AIGC_SUBCATEGORIES } from '../constants';
import { Category, AIGCSubCategory } from '../types';
import { ArrowRight } from 'lucide-react';

export default function PortfolioController() {
  const [activeCategory, setActiveCategory] = useState<Category>('aigc');
  const [activeSubCategory, setActiveSubCategory] = useState<AIGCSubCategory>('models');

  const filteredProjects = PROJECTS.filter(p => {
    if (p.category !== activeCategory) return false;
    if (activeCategory === 'aigc' && p.subCategory !== activeSubCategory) return false;
    return true;
  });

  return (
    <section id="work" className="py-32 bg-bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section 3: Enlarged Directory with Color Blocks */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-display font-extrabold tracking-tighter uppercase">Directory / 作品索引</h2>
            <div className="text-[10px] text-gray-400 font-mono tracking-[0.5em] mb-1">02 — SELECTIVE GALLERY</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as Category);
                  if (cat.id === 'aigc') {
                    setActiveSubCategory('models');
                  }
                }}
                className={`group relative p-10 text-left transition-all duration-500 rounded-xl overflow-hidden ${
                  activeCategory === cat.id 
                    ? 'bg-black text-white shadow-2xl scale-[1.02] z-10' 
                    : 'bg-white text-gray-400 hover:bg-gray-50'
                }`}
              >
                {/* Background Decor */}
                <span className={`absolute -right-4 -bottom-4 text-8xl font-display font-black opacity-[0.03] select-none pointer-events-none transition-transform duration-700 ${
                  activeCategory === cat.id ? 'translate-y-0 opacity-[0.07]' : 'translate-y-10'
                }`}>
                  {cat.id.charAt(0).toUpperCase()}
                </span>

                <span className={`text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block transition-colors ${
                  activeCategory === cat.id ? 'text-white/40' : 'text-gray-300 group-hover:text-gray-500'
                }`}>
                  {cat.id}
                </span>
                
                <h3 className="font-display text-4xl font-bold mb-3 tracking-tighter">
                  {cat.name}
                </h3>
                
                <p className={`text-sm font-medium leading-relaxed max-w-[200px] transition-colors ${
                  activeCategory === cat.id ? 'text-white/60' : 'text-gray-400 opacity-0 group-hover:opacity-100'
                }`}>
                  {cat.description}
                </p>

                {activeCategory === cat.id && (
                  <motion.div 
                    layoutId="selectionDot"
                    className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse"
                  />
                )}
              </button>
            ))}
          </div>

          {/* AIGC Sub-navigation with pill buttons */}
          <AnimatePresence>
            {activeCategory === 'aigc' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="mt-12 flex items-center gap-6"
              >
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Focus:</span>
                <div className="flex gap-2">
                  {AIGC_SUBCATEGORIES.map(sub => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubCategory(sub.id as any)}
                      className={`px-8 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-tight transition-all border ${
                        activeSubCategory === sub.id 
                          ? 'bg-black text-white border-black shadow-lg shadow-black/10' 
                          : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Section 4: Vertical Project Gallery (3x3 Grid) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                className="group cursor-pointer"
              >
                {/* Vertical Aspect Ratio 3/4 */}
                <div className="relative aspect-[3/4] bg-white rounded-2xl overflow-hidden mb-6 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex justify-between items-start px-2">
                  <div className="max-w-[80%]">
                    <h4 className="font-display text-xl font-bold tracking-tighter mb-1.5 group-hover:text-black transition-colors leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-[11px] uppercase tracking-[0.2em] font-medium">
                      {project.category === 'aigc' ? `${project.category} / ${project.subCategory}` : project.category}
                    </p>
                  </div>
                  <div className="pt-1">
                    <ArrowRight size={18} className="text-gray-200 group-hover:text-black transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-40 text-center rounded-3xl border-2 border-dashed border-gray-100 bg-white/50">
            <p className="text-gray-400 font-serif italic text-2xl tracking-tight">作品整理中，敬请期待...</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-300 mt-4">In Production / Coming Soon</p>
          </div>
        )}
      </div>
    </section>
  );
}
