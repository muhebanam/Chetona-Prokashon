"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { addReadBook, readBooks } = useContext(BooksContext);
  const alreadyRead = readBooks.some((item) => item.bookId === book.bookId);

  const handleClick = () => {
    const result = addReadBook(book);
    result.ok ? toast.success(result.message) : toast.info(result.message);
  };

  return (
    <button
      onClick={handleClick}
      className="btn-outline flex-1"
      aria-pressed={alreadyRead}
    >
      {alreadyRead ? "পড়া তালিকায় আছে ✓" : "পড়া হয়েছে"}
    </button>
  );
};

export default ReadButton;
