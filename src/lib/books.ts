import booksData from "../../public/booksData.json";
import { IBook } from "@/types/books.type";

export const books = booksData as IBook[];

export const getBookById = (id: string | number) =>
  books.find((book) => String(book.bookId) === String(id));
