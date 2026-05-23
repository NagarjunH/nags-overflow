export type Blog = {
  id?: number;

  title: string;

  description: string;

  slug: string;

  category: string;

  readTime: string;

  author: string;

  publishedAt: string;

  tags?: string[];

  content?: string;
};