// types for props


export interface Article {
  title: string;
  image: string;
  date: string;
  description: string;
  source: string;
  tags: { name: string }[];
}