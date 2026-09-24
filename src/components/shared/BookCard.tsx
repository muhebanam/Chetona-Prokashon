import { bnNumber, bnRating } from "@/lib/bengali";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }: { book: IBook }) {
  return (
    <Link href={`/books/${book.bookId}`} className="book-card">
      <div className="book-cover-box">
        <Image
          src={book.image}
          alt={`${book.bookName} বইয়ের প্রচ্ছদ`}
          width={280}
          height={360}
          className="book-cover"
        />
      </div>

      <div className="book-tags">
        {book.tags.slice(0, 2).map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <h3>{book.bookName}</h3>
      <p className="book-author">লেখক: {book.author}</p>

      <div className="book-card-meta">
        <span>{book.category}</span>
        <span>★ {bnRating(book.rating)}</span>
      </div>

      <div className="book-card-meta bottom">
        <span>{bnNumber(book.totalPages)} পৃষ্ঠা</span>
        <span>{bnNumber(book.yearOfPublishing)}</span>
      </div>
    </Link>
  );
}
