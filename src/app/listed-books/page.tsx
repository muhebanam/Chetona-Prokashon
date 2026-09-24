"use client";

import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext, useState } from "react";

type SortKey = "rating" | "pages" | "year";
type Tab = "read" | "wishlist";

export default function ListedBooks() {
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

  return (
    <main className="figma-container listed-page">
      <h1 className="listed-title">বইয়ের তালিকা</h1>

      <div className="sort-wrap">
        <label>
          <span className="sr-only">সাজান</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortKey)}>
            <option value="rating">রেটিং অনুযায়ী</option>
            <option value="pages">পৃষ্ঠা অনুযায়ী</option>
            <option value="year">প্রকাশকাল অনুযায়ী</option>
          </select>
        </label>
      </div>

      <div className="list-tabs" role="tablist">
        <button
          type="button"
          className={tab === "read" ? "active" : ""}
          onClick={() => setTab("read")}
        >
          পড়া বই
        </button>
        <button
          type="button"
          className={tab === "wishlist" ? "active" : ""}
          onClick={() => setTab("wishlist")}
        >
          ইচ্ছেতালিকার বই
        </button>
      </div>

      <div className="listed-stack">
        {!hydrated ? (
          <div className="figma-empty">তালিকা লোড হচ্ছে…</div>
        ) : visibleBooks.length ? (
          visibleBooks.map((book) => (
            <ListedBooksCard key={book.bookId} book={book} listType={tab} />
          ))
        ) : (
          <div className="figma-empty">
            {tab === "read"
              ? "এখনও কোনো বই পড়া তালিকায় যোগ করা হয়নি।"
              : "ইচ্ছেতালিকায় এখনো কোনো বই নেই।"}
          </div>
        )}
      </div>
    </main>
  );
}
