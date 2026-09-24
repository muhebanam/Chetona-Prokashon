"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { addWishlistBook, wishlist, readBooks } = useContext(BooksContext);
  const inWishlist = wishlist.some((item) => item.bookId === book.bookId);
  const alreadyRead = readBooks.some((item) => item.bookId === book.bookId);

  const handleClick = () => {
    const result = addWishlistBook(book);
    result.ok ? toast.success(result.message) : toast.info(result.message);
  };

  return (
    <button
      onClick={handleClick}
      className="btn-primary flex-1"
      aria-pressed={inWishlist}
    >
      {alreadyRead
        ? "বইটি পড়া হয়েছে"
        : inWishlist
          ? "ইচ্ছেতালিকায় আছে ✓"
          : "ইচ্ছেতালিকায় রাখুন"}
    </button>
  );
};

export default WishListButton;
