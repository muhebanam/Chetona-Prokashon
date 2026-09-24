import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { bnNumber, bnRating } from "@/lib/bengali";
import { books, getBookById } from "@/lib/books";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return books.map((book) => ({ id: String(book.bookId) }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const book = getBookById(id);
  return { title: book ? book.bookName : "বই পাওয়া যায়নি" };
}

export default async function BookDetailsPage({ params }: Props) {
  const { id } = await params;
  const book = getBookById(id);
  if (!book) notFound();

  return (
    <main className="figma-container detail-page">
      <div className="detail-grid">
        <div className="detail-cover-panel">
          <Image
            src={book.image}
            alt={`${book.bookName} বইয়ের প্রচ্ছদ`}
            width={430}
            height={600}
            className="detail-cover"
            priority
          />
        </div>

        <article className="detail-content">
          <h1>{book.bookName}</h1>
          <p className="detail-author">লেখক: {book.author}</p>

          <div className="detail-rule" />
          <p className="detail-category">{book.category}</p>
          <div className="detail-rule" />

          <p className="detail-review">
            <strong>পর্যালোচনা:</strong> {book.review}
          </p>

          <div className="detail-tags">
            <strong>ট্যাগ</strong>
            {book.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>

          <div className="detail-rule" />

          <dl className="detail-info-list">
            <div><dt>মোট পৃষ্ঠা:</dt><dd>{bnNumber(book.totalPages)}</dd></div>
            <div><dt>প্রকাশক:</dt><dd>{book.publisher}</dd></div>
            <div><dt>প্রকাশকাল:</dt><dd>{bnNumber(book.yearOfPublishing)}</dd></div>
            <div><dt>রেটিং:</dt><dd>{bnRating(book.rating)} ★</dd></div>
          </dl>

          <div className="detail-actions">
            <ReadButton book={book} />
            <WishListButton book={book} />
          </div>
        </article>
      </div>
    </main>
  );
}
