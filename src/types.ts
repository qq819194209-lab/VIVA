/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Category = 'aigc' | 'domestic' | 'crossborder';
export type AIGCSubCategory = 'models' | 'scenes';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  subCategory?: AIGCSubCategory;
  image: string;
  tags: string[];
}
