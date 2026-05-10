/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import profileImage from '../assets/images/regenerated_image_1778399293600.png';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">Profile / 关于我</span>
          <h2 className="font-display text-5xl md:text-7xl font-semibold leading-tight tracking-tighter mb-6">
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
          className="relative aspect-[4/5] overflow-hidden flex items-center justify-center p-6 rounded-[2.5rem]"
        >
          <div className="absolute inset-0 bg-radial-gradient from-gray-100 to-transparent opacity-50 blur-3xl pointer-events-none" />
          <motion.img 
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{ 
              scale: 1.05,
              filter: "brightness(1.05)",
              transition: { duration: 0.4 }
            }}
            src={profileImage}
            alt="Designer Profile" 
            className="w-[400px] h-[500px] object-cover shadow-2xl rounded-[3rem] cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
