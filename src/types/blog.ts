export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: {
    name: string;
    title: string;
    experience: string;
    image: string;
  };
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export interface Author {
  name: string;
  title: string;
  experience: string;
  image: string;
  bio: string;
}