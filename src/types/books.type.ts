export interface IBook {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number | null;
  ratingCount?: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
  edition?: string;
  binding?: string;
  price?: number;
  translator?: string;
  sourceUrl?: string;
}
