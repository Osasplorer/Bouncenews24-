export type Category = 'International' | 'Sports' | 'Tech' | 'Economics' | 'Entertainment';

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: Category;
  author: string;
  date: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export const CATEGORIES: Category[] = [
  'International',
  'Sports',
  'Tech',
  'Economics',
  'Entertainment'
];
