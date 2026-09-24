import { books } from "@/lib/books";
import BookCard from "../shared/BookCard";

export default function Books() {
  return (
    <section id="books" className="figma-container books-section">
      <h2 className="figma-section-title">বইসমূহ</h2>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
}
