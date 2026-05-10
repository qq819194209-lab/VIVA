/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'aigc-1',
    title: 'AI时尚模特视觉实验室',
    description: '利用Stable Diffusion生成的高精度时尚模特视觉，为服装品牌提供降本增效的拍摄方案。',
    category: 'aigc',
    subCategory: 'models',
    image: '/src/assets/images/ai_model_project_1778396575925.png',
    tags: ['Stable Diffusion', 'Fashion', 'AI Efficiency']
  },
  {
    id: 'aigc-2',
    title: '超现实产品展示场景',
    description: '通过Midjourney与ControlNet构建的超现实几何场景，模拟高维度视觉空间。',
    category: 'aigc',
    subCategory: 'scenes',
    image: '/src/assets/images/ai_scene_project_1778396599012.png',
    tags: ['Midjourney', '3D Scene', 'Surrealism']
  },
  {
    id: 'domestic-1',
    title: '天猫美妆年度大促视觉',
    description: '为知名美妆品牌设计的双11主KV，融合动态光影与高端质感。',
    category: 'domestic',
    image: '/src/assets/images/domestic_ecommerce_project_1778396531147.png',
    tags: ['E-commerce', 'Retouching', 'Visual Design']
  },
  {
    id: 'crossborder-1',
    title: 'Amazon 环球精品腕表主图',
    description: '针对海外市场审美的极简主义设计，强调产品工艺与品牌故事性。',
    category: 'crossborder',
    image: '/src/assets/images/crossborder_ecommerce_project_1778396553244.png',
    tags: ['Branding', 'Minimalism', 'Product Design']
  },
  {
    id: 'aigc-3',
    title: 'AI智能家居环境模拟',
    description: '基于Lora训练的特定风格家居场景，用于家电产品的合成展示。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://picsum.photos/seed/aigc-scene/800/600',
    tags: ['Training', 'Interior', 'Realism']
  },
  {
    id: 'domestic-2',
    title: '新中式茶饮品牌视觉升级',
    description: '将传统文化元素与现代设计语言结合，打造独特的品牌记忆点。',
    category: 'domestic',
    image: 'https://picsum.photos/seed/tea/800/600',
    tags: ['New Style', 'Branding', 'Packaging']
  },
  {
    id: 'crossborder-2',
    title: 'Shopify 极简生活方式店UI',
    description: '高转化率的电商界面设计，专注用户体验与视觉一致性。',
    category: 'crossborder',
    image: 'https://picsum.photos/seed/shopify/800/600',
    tags: ['UI/UX', 'Conversion', 'Modern']
  }
];

export const CATEGORIES = [
  { id: 'aigc', name: 'AIGC赋能', description: 'AI驱动的创意边界' },
  { id: 'domestic', name: '国内电商', description: '深耕本土市场视觉' },
  { id: 'crossborder', name: '跨境电商', description: '全球化设计的视野' }
];

export const AIGC_SUBCATEGORIES = [
  { id: 'all', name: '全部' },
  { id: 'models', name: 'AI模特' },
  { id: 'scenes', name: 'AI场景' }
];
