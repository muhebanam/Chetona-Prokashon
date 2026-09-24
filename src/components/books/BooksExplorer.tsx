"use client";

import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";
import { useMemo, useState } from "react";

type SortKey = "recent" | "rating" | "pages" | "name";

const BooksExplorer = ({ books }: { books: IBook[] }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("সব বিষয়");
  const [sortBy, setSortBy] = useState<SortKey>("recent");

  const categories = useMemo(
    () => ["সব বিষয়", ...Array.from(new Set(books.map((book) => book.category)))],
    [books],
  );

  const filteredBooks = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("bn-BD");

    const result = books.filter((book) => {
      const matchesCategory = category === "সব বিষয়" || book.category === category;
      const searchable = [
        book.bookName,
        book.author,
        book.category,
        book.publisher,
        ...book.tags,
      ]
        .join(" ")
        .toLocaleLowerCase("bn-BD");

      return matchesCategory && (!normalized || searchable.includes(normalized));
    });

    return [...result].sort((a, b) => {
      if (sortBy === "rating") return (b.rating ?? -1) - (a.rating ?? -1);
      if (sortBy === "pages") return b.totalPages - a.totalPages;
      if (sortBy === "name") return a.bookName.localeCompare(b.bookName, "bn");
      return b.yearOfPublishing - a.yearOfPublishing;
    });
  }, [books, category, query, sortBy]);

  const bn = new Intl.NumberFormat("bn-BD");

  return (
    <>
      <div className="mt-8 grid gap-3 rounded-2xl border border-[var(--brand-border)] bg-white p-4 shadow-sm md:grid-cols-[1fr_240px_210px]">
        <label className="grid gap-1.5">
          <span className="text-xs font-black text-slate-500">বই খুঁজুন</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="বই, লেখক বা বিষয় লিখুন"
            className="field-control"
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs font-black text-slate-500">বিষয়</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="field-control"
          >
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs font-black text-slate-500">সাজানোর ধরন</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortKey)}
            className="field-control"
          >
            <option value="recent">সাম্প্রতিক প্রকাশ আগে</option>
            <option value="rating">রেটিং বেশি আগে</option>
            <option value="pages">পৃষ্ঠা বেশি আগে</option>
            <option value="name">নাম অনুযায়ী</option>
          </select>
        </label>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-slate-500">
          পাওয়া গেছে <span className="text-[var(--brand)]">{bn.format(filteredBooks.length)}</span>টি বই
        </p>
        {(query || category !== "সব বিষয়") && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("সব বিষয়");
            }}
            className="text-sm font-black text-[var(--brand)] hover:underline"
          >
            ফিল্টার মুছুন
          </button>
        )}
      </div>

      {filteredBooks.length ? (
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBooks.map((book) => <BookCard key={book.bookId} book={book} />)}
        </div>
      ) : (
        <div className="empty-state mt-7">
          আপনার খোঁজের সঙ্গে মিলে এমন কোনো বই পাওয়া যায়নি।
        </div>
      )}
    </>
  );
};

export default BooksExplorer;
