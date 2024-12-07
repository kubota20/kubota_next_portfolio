export interface Category {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  iframeSrc: string;
  link: string;
  imageUrl: string;
  category: Category;
  release: boolean;
  createdAt: string;
}

export interface Blog {
  id: string;
  title: string;
  summary: string;
  link: string;
  imageUrl: string;
  category: Category;
  release: boolean;
  createdAt: string;
}
