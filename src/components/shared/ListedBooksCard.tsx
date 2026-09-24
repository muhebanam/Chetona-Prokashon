"use client";

import { BooksContext } from "@/context/BooksContext";
import { bnNumber, bnRating } from "@/lib/bengali";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";

const ListedBooksCard = ({
  book,
  listType,
}: {
  book: IBook;
  listType: "read" | "wishlist";
}) => {
  const { removeReadBook, removeWishlistBook } = useContext(BooksContext);

  const remove = () => {
    if (listType === "read") {
      removeReadBook(book.bookId);
      toast.info(`“${book.bookName}” পড়া তালিকা থেকে সরানো হয়েছে।`);
    } else {
      removeWishlistBook(book.bookId);
      toast.info(`“${book.bookName}” ইচ্ছেতালিকা থেকে সরানো হয়েছে।`);
    }
  };

  return (
    <article className="grid gap-5 rounded-3xl border border-[var(--brand-border)] bg-white p-5 shadow-sm md:grid-cols-[180px_1fr] md:p-6">
      <div className="flex min-h-56 items-center justify-center rounded-2xl bg-[var(--surface)] p-5">
        <Image
          src={book.image}
          alt={`${book.bookName} বইয়ের প্রচ্ছদ`}
          width={220}
          height={300}
          className="max-h-56 w-auto object-contain shadow-lg"
        />
      </div>

      <div>
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span key={tag} className="tag-chip">#{tag}</span>
          ))}
        </div>

        <h2 className="mt-3 text-2xl font-black text-[var(--brand-deep)] md:text-3xl">
          {book.bookName}
        </h2>
        <p className="mt-2 text-slate-500">
          লেখক: <span className="font-bold text-slate-700">{book.author}</span>
        </p>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
          <span>প্রকাশক: {book.publisher}</span>
          <span>প্রকাশকাল: {bnNumber(book.yearOfPublishing)}</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700">
            {book.category}
          </span>
          <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
            {book.rating === null ? "রেটিং নেই" : `★ ${bnRating(book.rating)}`}
          </span>
          <span className="rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
            {bnNumber(book.totalPages)} পৃষ্ঠা
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/books/${book.bookId}`}
            className="inline-flex rounded-xl bg-[var(--brand)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--brand-deep)]"
          >
            বিস্তারিত দেখুন →
          </Link>
          <button
            type="button"
            onClick={remove}
            className="inline-flex rounded-xl border border-rose-200 bg-rose-50 px-5 py-2.5 text-sm font-bold text-rose-700 transition hover:bg-rose-100"
          >
            তালিকা থেকে সরান
          </button>
        </div>
      </div>
    </article>
  );
};

export default ListedBooksCard;
