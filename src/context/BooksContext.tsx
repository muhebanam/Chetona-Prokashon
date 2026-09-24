"use client";

import { IBook } from "@/types/books.type";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface ActionResult {
  ok: boolean;
  message: string;
}

interface IBooksContext {
  readBooks: IBook[];
  wishlist: IBook[];
  hydrated: boolean;
  addReadBook: (book: IBook) => ActionResult;
  addWishlistBook: (book: IBook) => ActionResult;
  removeReadBook: (bookId: number) => void;
  removeWishlistBook: (bookId: number) => void;
}

export const BooksContext = createContext<IBooksContext>({
  readBooks: [],
  wishlist: [],
  hydrated: false,
  addReadBook: () => ({ ok: false, message: "" }),
  addWishlistBook: () => ({ ok: false, message: "" }),
  removeReadBook: () => undefined,
  removeWishlistBook: () => undefined,
});

const READ_KEY = "chetona-prokashoni-read-books";
const WISHLIST_KEY = "chetona-prokashoni-wishlist";
const LEGACY_READ_KEY = "book-vibe-read-books";
const LEGACY_WISHLIST_KEY = "book-vibe-wishlist";

const safeParse = (value: string | null): IBook[] => {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const currentRead = localStorage.getItem(READ_KEY);
    const currentWishlist = localStorage.getItem(WISHLIST_KEY);

    setReadBooks(
      safeParse(currentRead ?? localStorage.getItem(LEGACY_READ_KEY)),
    );
    setWishlist(
      safeParse(currentWishlist ?? localStorage.getItem(LEGACY_WISHLIST_KEY)),
    );
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(READ_KEY, JSON.stringify(readBooks));
  }, [readBooks, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const addReadBook = (book: IBook): ActionResult => {
    if (readBooks.some((item) => item.bookId === book.bookId)) {
      return { ok: false, message: "এই বইটি ইতোমধ্যে পড়া তালিকায় আছে।" };
    }

    setReadBooks((prev) => [...prev, book]);
    setWishlist((prev) => prev.filter((item) => item.bookId !== book.bookId));
    return { ok: true, message: `“${book.bookName}” পড়া তালিকায় যোগ হয়েছে।` };
  };

  const addWishlistBook = (book: IBook): ActionResult => {
    if (readBooks.some((item) => item.bookId === book.bookId)) {
      return { ok: false, message: "পড়া হয়ে যাওয়া বই ইচ্ছেতালিকায় যোগ করা যাবে না।" };
    }

    if (wishlist.some((item) => item.bookId === book.bookId)) {
      return { ok: false, message: "এই বইটি ইতোমধ্যে ইচ্ছেতালিকায় আছে।" };
    }

    setWishlist((prev) => [...prev, book]);
    return { ok: true, message: `“${book.bookName}” ইচ্ছেতালিকায় যোগ হয়েছে।` };
  };

  const removeReadBook = (bookId: number) => {
    setReadBooks((prev) => prev.filter((book) => book.bookId !== bookId));
  };

  const removeWishlistBook = (bookId: number) => {
    setWishlist((prev) => prev.filter((book) => book.bookId !== bookId));
  };

  return (
    <BooksContext.Provider
      value={{
        readBooks,
        wishlist,
        hydrated,
        addReadBook,
        addWishlistBook,
        removeReadBook,
        removeWishlistBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
