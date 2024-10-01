export interface BlogArticle {
  title: string;
  description: string;
  _createdAt: string;
  slug: string;
  imageUrl: string;
}

export interface fullBlog {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  content: any;
}

export interface CategorySchema {
  title: string;
}
