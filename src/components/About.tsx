/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">Profile / 关于我</span>
          <h2 className="font-display text-5xl md:text-7xl font-semibold leading-tight tracking-tighter mb-8">
            用AI赋能设计，<br />打造极致电商视觉。
          </h2>
          <p className="text-gray-500 leading-relaxed text-lg max-w-md">
            深耕电商领域多年，擅长利用Stable Diffusion与Midjourney等前沿AIGC工具重塑生产流程，
            为国内及跨境品牌提供具备竞争力的视觉解决方案。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] overflow-hidden flex items-center justify-center p-12 rounded-[2.5rem]"
        >
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
            alt="Designer Profile" 
            className="w-full h-full object-cover shadow-2xl rounded-[3rem]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
