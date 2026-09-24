"use client";

import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext, useState } from "react";

type SortKey = "rating" | "pages" | "year";
type Tab = "read" | "wishlist";

const ListedBooks = () => {
  const { readBooks, wishlist, hydrated } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<SortKey>("rating");
  const [tab, setTab] = useState<Tab>("read");

  const sortBooks = (items: IBook[]) =>
    [...items].sort((a, b) => {
      if (sortBy === "pages") return b.totalPages - a.totalPages;
      if (sortBy === "year") return b.yearOfPublishing - a.yearOfPublishing;
      return (b.rating ?? -1) - (a.rating ?? -1);
    });

  const visibleBooks = sortBooks(tab === "read" ? readBooks : wishlist);
  const bn = new Intl.NumberFormat("bn-BD");

  return (
    <main className="container-shell py-10 md:py-14">
      <div className="page-hero">
        <p className="eyebrow">ব্যক্তিগত পাঠতালিকা</p>
        <h1 className="mt-2 text-3xl font-black text-[var(--brand-deep)] md:text-4xl">
          আমার বইয়ের তালিকা
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          পড়া বই এবং ভবিষ্যতে পড়তে চাওয়া বই একই জায়গায় গুছিয়ে রাখুন।
          তথ্য এই ব্রাউজারেই সংরক্ষিত থাকে।
        </p>
      </div>

      <div className="mt-7 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="inline-flex rounded-2xl bg-[var(--surface)] p-1.5">
          <button
            onClick={() => setTab("read")}
            className={`rounded-xl px-4 py-2.5 text-sm font-black ${
              tab === "read"
                ? "bg-white text-[var(--brand)] shadow-sm"
                : "text-slate-500"
            }`}
          >
            পড়া বই ({bn.format(readBooks.length)})
          </button>
          <button
            onClick={() => setTab("wishlist")}
            className={`rounded-xl px-4 py-2.5 text-sm font-black ${
              tab === "wishlist"
                ? "bg-white text-[var(--brand)] shadow-sm"
                : "text-slate-500"
            }`}
          >
            ইচ্ছেতালিকা ({bn.format(wishlist.length)})
          </button>
        </div>

        <label className="flex items-center gap-3 text-sm font-bold text-slate-600">
          সাজান
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortKey)}
            className="field-control min-w-44"
          >
            <option value="rating">রেটিং অনুযায়ী</option>
            <option value="pages">পৃষ্ঠা অনুযায়ী</option>
            <option value="year">প্রকাশকাল অনুযায়ী</option>
          </select>
        </label>
      </div>

      <div className="mt-7 space-y-5">
        {!hydrated ? (
          <div className="empty-state">তালিকা লোড হচ্ছে…</div>
        ) : visibleBooks.length ? (
          visibleBooks.map((book) => (
            <ListedBooksCard key={book.bookId} book={book} listType={tab} />
          ))
        ) : (
          <div className="empty-state">
            {tab === "read"
              ? "এখনও কোনো বই পড়া হিসেবে যোগ করা হয়নি।"
              : "আপনার ইচ্ছেতালিকা এখনো খালি।"}
          </div>
        )}
      </div>
    </main>
  );
};

export default ListedBooks;
