"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function WishListButton({ book }: { book: IBook }) {
  const { addWishlistBook, wishlist, readBooks } = useContext(BooksContext);
  const inWishlist = wishlist.some((item) => item.bookId === book.bookId);
  const alreadyRead = readBooks.some((item) => item.bookId === book.bookId);

  const handleClick = () => {
    const result = addWishlistBook(book);
    result.ok ? toast.success(result.message) : toast.info(result.message);
  };

  return (
    <button type="button" onClick={handleClick} className="detail-wishlist-btn">
      {alreadyRead ? "পড়া হয়েছে" : inWishlist ? "ইচ্ছেতালিকায় আছে ✓" : "ইচ্ছেতালিকা"}
    </button>
  );
}
