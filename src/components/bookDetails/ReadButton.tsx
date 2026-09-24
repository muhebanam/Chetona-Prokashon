"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function ReadButton({ book }: { book: IBook }) {
  const { addReadBook, readBooks } = useContext(BooksContext);
  const added = readBooks.some((item) => item.bookId === book.bookId);

  const handleClick = () => {
    const result = addReadBook(book);
    result.ok ? toast.success(result.message) : toast.info(result.message);
  };

  return (
    <button type="button" onClick={handleClick} className="detail-read-btn">
      {added ? "পড়া হয়েছে ✓" : "পড়া হয়েছে"}
    </button>
  );
}
