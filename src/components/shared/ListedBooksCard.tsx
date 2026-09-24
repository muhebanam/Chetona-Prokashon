"use client";

import { BooksContext } from "@/context/BooksContext";
import { bnNumber, bnRating } from "@/lib/bengali";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function ListedBooksCard({
  book,
  listType,
}: {
  book: IBook;
  listType: "read" | "wishlist";
}) {
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
    <article className="listed-card">
      <div className="listed-cover-panel">
        <Image
          src={book.image}
          alt={`${book.bookName} বইয়ের প্রচ্ছদ`}
          width={170}
          height={220}
          className="listed-cover"
        />
      </div>

      <div className="listed-content">
        <h2>{book.bookName}</h2>
        <p className="listed-by">লেখক: {book.author}</p>

        <div className="listed-tags-line">
          <strong>ট্যাগ</strong>
          {book.tags.map((tag) => <span key={tag}>#{tag}</span>)}
        </div>

        <p className="listed-publish">
          প্রকাশকাল: <strong>{bnNumber(book.yearOfPublishing)}</strong>
        </p>

        <div className="listed-chips">
          <span className="chip chip-blue">{book.category}</span>
          <span className="chip chip-orange">রেটিং: {bnRating(book.rating)}</span>
          <span className="chip chip-green">{bnNumber(book.totalPages)} পৃষ্ঠা</span>
        </div>

        <div className="listed-actions">
          <Link href={`/books/${book.bookId}`} className="view-detail-btn">
            বিস্তারিত দেখুন
          </Link>
          <button type="button" className="remove-list-btn" onClick={remove}>
            সরান
          </button>
        </div>
      </div>
    </article>
  );
}
