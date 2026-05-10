/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from './types';

export const PROJECTS: Project[] = [
  // AIGC Category (12 items)
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
    id: 'aigc-3',
    title: 'AI智能家居环境模拟',
    description: '基于Lora训练的特定风格家居场景，用于家电产品的合成展示。',
    category: 'aigc',
    subCategory: 'scenes',
    image: '/src/assets/images/regenerated_image_1778400001507.png',
    tags: ['Training', 'Interior', 'Realism']
  },
  {
    id: 'aigc-4',
    title: '赛博朋克风人像生成',
    description: '融合未来主义与街头风格，利用AI复现复杂的霓虹质感。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1633177317976-3f9bc8abc938?q=80&w=800&auto=format&fit=crop',
    tags: ['Cyberpunk', 'Character Design', 'AIGC']
  },
  {
    id: 'aigc-5',
    title: '自然主义光影场景',
    description: '模拟清晨自然光，为美妆品牌打造清新治愈风格的展示空间。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee62?q=80&w=800&auto=format&fit=crop',
    tags: ['Lighting', 'Natural', 'Soft Focus']
  },
  {
    id: 'aigc-6',
    title: '虚拟人像风格化定制',
    description: '针对特定IP的3D渲染风格AI生成，实现从草图到成品的高速转化。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9603?q=80&w=800&auto=format&fit=crop',
    tags: ['3D Style', 'Stylization', 'Character']
  },
  {
    id: 'aigc-7',
    title: '科幻建筑概念视觉',
    description: '利用AI探索未来建筑的形态可能性，应用于品牌宏大叙事。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    tags: ['Architecture', 'Sci-fi', 'Conceptual']
  },
  {
    id: 'aigc-8',
    title: '复古胶片感人物视觉',
    description: '训练专用微调模型，复刻90年代港风摄影质感。',
    category: 'aigc',
    subCategory: 'models',
    image: '/src/assets/images/regenerated_image_1778404574703.png',
    tags: ['Vintage', 'Film', 'Photography']
  },
  {
    id: 'aigc-9',
    title: '工业金属质感场景',
    description: '硬核工业风格设计，为科技电子产品提供冷峻的背景方案。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    tags: ['Industrial', 'Metallic', 'Tech']
  },
  {
    id: 'aigc-10',
    title: '极简主义抽象构图',
    description: '基于色块与线条的AI设计，适用于高端香氛及极简品牌。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
    tags: ['Minimalist', 'Abstract', 'Aesthetics']
  },
  {
    id: 'aigc-11',
    title: 'AI定制潮流服饰穿搭',
    description: '针对Z世代受众的潮酷风格生成，探索数字时尚新玩法。',
    category: 'aigc',
    subCategory: 'models',
    image: '/src/assets/images/regenerated_image_1778404578592.png',
    tags: ['Streetwear', 'Fashion', 'Youth']
  },
  {
    id: 'aigc-12',
    title: '极光幻影视觉实验室',
    description: '利用复杂Prompt构建的变幻莫测的极光视觉感，极具震撼力。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=800&auto=format&fit=crop',
    tags: ['Aurora', 'Mystic', 'Visuals']
  },
  {
    id: 'aigc-13',
    title: 'AI数字孪生穿戴展示',
    description: '基于3D扫描与AI渲染的数字化服饰穿戴效果，支持实时交互感。',
    category: 'aigc',
    subCategory: 'models',
    image: '/src/assets/images/regenerated_image_1778404582403.png',
    tags: ['Digital Twin', 'Tech', 'Rending']
  },
  {
    id: 'aigc-14',
    title: '未来城市街道景观',
    description: '利用Gen-2合成的流动城市街景，为户外运动品牌提供外景方案。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop',
    tags: ['Streetview', 'Outdoor', 'AI Video']
  },
  {
    id: 'aigc-15',
    title: '波普艺术风AI人像',
    description: '复刻安迪沃霍尔风格的色彩溢出感，极具视觉冲击力的平面素材。',
    category: 'aigc',
    subCategory: 'models',
    image: '/src/assets/images/regenerated_image_1778404562904.png',
    tags: ['Pop Art', 'Color', 'Graphic']
  },
  {
    id: 'aigc-16',
    title: '水下梦幻光影场景',
    description: '模拟深海光影折射，为高端珠宝品牌营造神秘灵动的展示氛围。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    tags: ['Underwater', 'Dreamy', 'Jewelry']
  },
  {
    id: 'aigc-17',
    title: 'AI时尚大片人像',
    description: '追求极致皮肤纹理与顶级面孔比例的AI人像实验室成果。',
    category: 'aigc',
    subCategory: 'models',
    image: '/src/assets/images/regenerated_image_1778404566827.png',
    tags: ['High-end', 'Portrait', 'Texture']
  },
  {
    id: 'aigc-18',
    title: '唯美科幻虚拟模特',
    description: '融合数字艺术与科幻元素的模特展示，极具未来主义色彩。',
    category: 'aigc',
    subCategory: 'models',
    image: '/src/assets/images/regenerated_image_1778404570868.png',
    tags: ['Sci-fi', 'Virtual', 'Art']
  },
  {
    id: 'aigc-19',
    title: '高端珠宝配饰模特',
    description: '针对细节光影深度优化的AI模型，完美呈现珠宝光泽。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce33eb?q=80&w=800&auto=format&fit=crop',
    tags: ['Jewelry', 'Lighting', 'Premium']
  },
  {
    id: 'aigc-20',
    title: '欧式贵族气质人像',
    description: '训练特定风格模型，表现古典油画般的优雅感。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    tags: ['Classic', 'Elegant', 'Oil Paint']
  },
  {
    id: 'aigc-21',
    title: '动漫二次元风格化身',
    description: '基于主流动漫风格的AI转换，实现纸片人与现实的奇妙融合。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=800&auto=format&fit=crop',
    tags: ['Anime', '2D Style', 'Creative']
  },
  {
    id: 'aigc-22',
    title: '户外运动机能风模特',
    description: '捕捉高强度运动中的神态，体现机能服装的实用美学。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    tags: ['Outdoor', 'Sporty', 'Functional']
  },
  {
    id: 'aigc-23',
    title: '中式旗袍古典韵味人像',
    description: '融合江南水乡意境与现代审美的旗袍视觉表现。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=800&auto=format&fit=crop',
    tags: ['Traditional', 'Cultural', 'Grace']
  },
  {
    id: 'aigc-24',
    title: '朋克机械姬视觉实验室',
    description: '利用AI探索人体与机械的结合美学，硬核视觉推荐。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    tags: ['Mecha', 'Punk', 'Experimental']
  },
  {
    id: 'aigc-25',
    title: '艺术绘画风肖像生成',
    description: '模拟莫奈、梵高等名家笔触的现代肖像设计。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop',
    tags: ['Impressionism', 'Artistic', 'Portrait']
  },
  {
    id: 'aigc-26',
    title: '复古像素画质感人物',
    description: '将现代肖像转化为极具年代感的像素艺术风格。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    tags: ['Pixel Art', 'Retro', 'Game Style']
  },
  {
    id: 'aigc-27',
    title: '超写实数字人类展示',
    description: '探索AI在数字人类领域的最前沿渲染，真假难辨。',
    category: 'aigc',
    subCategory: 'models',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    tags: ['Hyper-realism', 'Digital Human', 'Tech']
  },
  {
    id: 'aigc-28',
    title: '废弃工厂末世美学',
    description: '利用AI构建的荒废工业场景，充满叙事感。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop',
    tags: ['Ruins', 'Industrial', 'Post-apocalyptic']
  },
  {
    id: 'aigc-29',
    title: '梦幻糖果色乐园',
    description: '高饱和色彩构建的童话感场景，适配母婴及萌宠。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
    tags: ['Candy Color', 'Fantasy', 'Playful']
  },
  {
    id: 'aigc-30',
    title: '禅意简约东方园林',
    description: '清幽宁静的枯山水意境，为传统茶道品牌加持。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
    tags: ['Zen', 'Garden', 'Oriental']
  },
  {
    id: 'aigc-31',
    title: '深宇宙星云展示台',
    description: '宏大的星际背景，赋予电子产品无限的探索空间。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1462331940026-bc951433604f?q=80&w=800&auto=format&fit=crop',
    tags: ['Galaxy', 'Cosmic', 'Tech']
  },
  {
    id: 'aigc-32',
    title: '蒸汽朋克飞艇内部',
    description: '复杂的机械结构与复古质感，构建极致的蒸汽氛围。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    tags: ['Steampunk', 'Mechanical', 'Atmosphere']
  },
  {
    id: 'aigc-33',
    title: '热带雨林秘境探险',
    description: '繁茂的植被与丁达尔效应，营造极具野性的展示场景。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop',
    tags: ['Jungle', 'Nature', 'Wild']
  },
  {
    id: 'aigc-34',
    title: '冰川极境纯净空间',
    description: '极致清爽的蓝白调性，传达纯净、轻盈的品牌特质。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?q=80&w=800&auto=format&fit=crop',
    tags: ['Glacier', 'Ice', 'Minimalist']
  },
  {
    id: 'aigc-35',
    title: '莫兰迪色系静物场景',
    description: '高级灰度的温润色调，营造居家及美妆的奢享感。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
    tags: ['Morandi', 'Soft', 'Home']
  },
  {
    id: 'aigc-36',
    title: '赛博多厅电影院',
    description: '充满数码感的沉浸式放映空间，为流媒体服务设计。',
    category: 'aigc',
    subCategory: 'scenes',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop',
    tags: ['Cinema', 'Digital', 'Immersive']
  },

  // Domestic E-commerce (12 items)
  {
    id: 'domestic-1',
    title: '天猫美妆年度大促视觉',
    description: '为知名美妆品牌设计的双11主KV，融合动态光影与高端质感。',
    category: 'domestic',
    image: '/src/assets/images/domestic_ecommerce_project_1778396531147.png',
    tags: ['E-commerce', 'Retouching', 'Visual Design']
  },
  {
    id: 'domestic-2',
    title: '新中式茶饮品牌视觉升级',
    description: '将传统文化元素与现代设计语言结合，打造独特的品牌记忆点。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1544787210-2211d247317e?q=80&w=800&auto=format&fit=crop',
    tags: ['New Style', 'Branding', 'Packaging']
  },
  {
    id: 'domestic-3',
    title: '运动潮牌详情页精修',
    description: '强调动态爆发力与材质细节的运动装备视觉呈现。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1511499767350-a1590fdb2e17?q=80&w=800&auto=format&fit=crop',
    tags: ['Sports', 'Retouching', 'Detail']
  },
  {
    id: 'domestic-4',
    title: '京东生鲜节视觉海报',
    description: '传达新鲜感与自然有机氛围的插画式视觉表现。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1610832958506-ee563e3c5d7d?q=80&w=800&auto=format&fit=crop',
    tags: ['Fresh', 'Organic', 'Illustration']
  },
  {
    id: 'domestic-5',
    title: '苏宁易购家电焕新周',
    description: '硬朗的科技化设计风格，突出家电产品的智能与高效。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1558227108-83a15ddbbb15?q=80&w=800&auto=format&fit=crop',
    tags: ['Appliance', 'Smart', 'Grid Design']
  },
  {
    id: 'domestic-6',
    title: '抖音直播间视觉装修',
    description: '高饱和度、强冲击力的弹幕视觉与背景设计，提升转化。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    tags: ['Live Stream', 'Visual Design', 'Pop']
  },
  {
    id: 'domestic-7',
    title: '宠物品牌温暖系视觉',
    description: '以治愈色系为主，营造宠主与宠物的温馨互动场景。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop',
    tags: ['Pet Care', 'Warm', 'Branding']
  },
  {
    id: 'domestic-8',
    title: '得物潮物榜单视觉',
    description: '黑金质感的奖牌系统设计，体现潮流权威性。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    tags: ['Street Style', 'Luxury', 'UI Design']
  },
  {
    id: 'domestic-9',
    title: '小红书种草长图设计',
    description: '适配移动端阅读习惯的碎片化、故事性排版。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=800&auto=format&fit=crop',
    tags: ['Social Content', 'Graphic', 'Mobile']
  },
  {
    id: 'domestic-10',
    title: '母婴品牌纯净视觉',
    description: '极简纯白风格，强调产品的安全性与亲肤感。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1515488102188-028f804cc20e?q=80&w=800&auto=format&fit=crop',
    tags: ['Baby Care', 'Clean', 'Safety']
  },
  {
    id: 'domestic-11',
    title: '国潮服饰联名KV',
    description: '融合书法元素与现代平面设计的国货自强视觉。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop',
    tags: ['China Style', 'Crossover', 'Art']
  },
  {
    id: 'domestic-12',
    title: '食品品牌色欲系摄影',
    description: '高对比度的食物特写，激发用户味蕾冲动。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?q=80&w=800&auto=format&fit=crop',
    tags: ['Food', 'Macro', 'Sensation']
  },
  {
    id: 'domestic-13',
    title: '唯品会大牌清仓视觉',
    description: '强调价值感与紧迫感的大图排版，提升点击与转化。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    tags: ['Campaign', 'Sale', 'Graphic']
  },
  {
    id: 'domestic-14',
    title: '网易严选极简家居海报',
    description: '性冷淡风格的排版与用色，传递高品质生活理念。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop',
    tags: ['Home', 'Minimalism', 'Lifestyle']
  },
  {
    id: 'domestic-15',
    title: '平安银行金融UI视觉',
    description: '严谨且富有科技感的理财板块视觉设计，建立信任感。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['Finance', 'UI', 'Trust']
  },
  {
    id: 'domestic-16',
    title: '五粮液国潮礼盒视觉',
    description: '大气磅礴的红色系设计，融合烫金工艺感的数字表现。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    tags: ['Luxury', 'China Style', 'Gift']
  },
  {
    id: 'domestic-17',
    title: '拼多多百亿补贴大图',
    description: '强调价格锚点与高冲击力的电商海报，追求极致点击率。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1607083229094-fb6724fabcb7?q=80&w=800&auto=format&fit=crop',
    tags: ['Bargain', 'Retail', 'Poster']
  },
  {
    id: 'domestic-18',
    title: '美团优选社区团购视觉',
    description: '接地气且色彩明快的设计风格，针对下沉市场用户偏好优化。',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
    tags: ['Community', 'Fresh', 'Local']
  },

  // Crossborder E-commerce (12 items)
  {
    id: 'crossborder-1',
    title: 'Amazon 环球精品腕表主图',
    description: '针对海外市场审美的极简主义设计，强调产品工艺与品牌故事性。',
    category: 'crossborder',
    image: '/src/assets/images/crossborder_ecommerce_project_1778396553244.png',
    tags: ['Branding', 'Minimalism', 'Product Design']
  },
  {
    id: 'crossborder-2',
    title: 'Shopify 极简生活方式店UI',
    description: '高转化率的电商界面设计，专注用户体验与视觉一致性。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1534452285072-8bb1ef045a57?q=80&w=800&auto=format&fit=crop',
    tags: ['UI/UX', 'Conversion', 'Modern']
  },
  {
    id: 'crossborder-3',
    title: 'AliExpress 全球仓视觉体系',
    description: '现代物流感十足的视觉语言，体现速度与保障。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=800&auto=format&fit=crop',
    tags: ['Logistics', 'Global', 'Corporate']
  },
  {
    id: 'crossborder-4',
    title: 'Tiktok Shop 海外流行单品',
    description: '适配竖屏消费的动感、快节奏视觉排版方案。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    tags: ['E-commerce', 'Social', 'Short Video']
  },
  {
    id: 'crossborder-5',
    title: 'Shein 季节性流行趋势图屏',
    description: '海量单品的快速排版逻辑，保持视觉平衡与冲击。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1445205174273-59396b299912?q=80&w=800&auto=format&fit=crop',
    tags: ['Fast Fashion', 'Grid', 'Trendy']
  },
  {
    id: 'crossborder-6',
    title: 'Walmart 全秋大赏视觉',
    description: '符合北美主流商超审美的亲民、明亮风设计。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop',
    tags: ['Retail', 'Visual Sales', 'Bright']
  },
  {
    id: 'crossborder-7',
    title: 'Lazada 东南亚大促主视觉',
    description: '高饱和色彩应用，契合热带地区的火热促销氛围。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop',
    tags: ['Regional', 'Vibrant', 'Festival']
  },
  {
    id: 'crossborder-8',
    title: 'Temu 低价极致视觉实验',
    description: '低成本、高效率的数字化设计模版与视觉方案。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop',
    tags: ['Efficiency', 'Logic', 'Commercial']
  },
  {
    id: 'crossborder-9',
    title: 'Etsy 文艺复古手工视觉',
    description: '极具质感的手法排版，强调“匠心”与“温度”。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1454165833267-034f3696f9ff?q=80&w=800&auto=format&fit=crop',
    tags: ['Handmade', 'Texture', 'Cozy']
  },
  {
    id: 'crossborder-10',
    title: 'Shopee 生活百货视觉升级',
    description: '标准化、系统化的产品视觉重塑，提升全店一致性。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop',
    tags: ['Systematic', 'Daily', 'Clean']
  },
  {
    id: 'crossborder-11',
    title: 'eBay 收藏品交易板块视觉',
    description: '严谨、权威的证书风格视觉，专为高价值藏品打造。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f816b1a238?q=80&w=800&auto=format&fit=crop',
    tags: ['Collectibles', 'Trust', 'Premium']
  },
  {
    id: 'crossborder-12',
    title: 'Global Sources B2B视觉',
    description: '专业、稳重且国际化的商务视觉语言。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    tags: ['B2B', 'Professional', 'Global']
  },
  {
    id: 'crossborder-13',
    title: 'Mercado Libre 仓储宣传',
    description: '针对拉美市场的明亮视觉，强调覆盖效率感。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    tags: ['Efficiency', 'Warehouse', 'Latin America']
  },
  {
    id: 'crossborder-14',
    title: 'Rakuten 乐天季节促销KV',
    description: '融合日系精致感与大促氛围的视觉体系。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1526170315870-efeca63c5d53?q=80&w=800&auto=format&fit=crop',
    tags: ['Japan Style', 'Sale', 'Premium']
  },
  {
    id: 'crossborder-15',
    title: 'Allegro 波兰电商UI优化',
    description: '针对东欧受众阅读偏好的界面视觉重构。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
    tags: ['Europe', 'UI/UX', 'Conversion']
  },
  {
    id: 'crossborder-16',
    title: 'Target 假日营销全案视觉',
    description: '红点品牌精神的极致化表达，充满节日欢愉。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=800&auto=format&fit=crop',
    tags: ['Holiday', 'Red', 'Campaign']
  },
  {
    id: 'crossborder-17',
    title: 'Wallapop 欧洲二手交易',
    description: '体现可持续消费与社区信任感的界面视觉方案。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1520110328904-8975de984570?q=80&w=800&auto=format&fit=crop',
    tags: ['Sustainability', 'Europe', 'Platform']
  },
  {
    id: 'crossborder-18',
    title: 'Noon 中东电商门户',
    description: '适配本地排版习惯（由右至左阅读感预留）的区域性视觉体系。',
    category: 'crossborder',
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=800&auto=format&fit=crop',
    tags: ['Middle East', 'Localization', 'Golden']
  }
];

export const CATEGORIES = [
  { id: 'aigc', name: 'AIGC赋能', description: 'AI驱动的创意边界' },
  { id: 'domestic', name: '国内电商', description: '深耕本土市场视觉' },
  { id: 'crossborder', name: '跨境电商', description: '全球化设计的视野' }
];

export const AIGC_SUBCATEGORIES = [
  { id: 'models', name: 'AI模特' },
  { id: 'scenes', name: 'AI场景' }
];
