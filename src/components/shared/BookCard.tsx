import { bnNumber, bnPrice, bnRating } from "@/lib/bengali";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: IBook }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--brand-border)] bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/70">
      <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[var(--surface)] p-7">
        <Image
          src={book.image}
          alt={`${book.bookName} বইয়ের প্রচ্ছদ`}
          width={360}
          height={480}
          className="h-full w-auto max-w-full rounded-md object-contain shadow-xl transition duration-500 group-hover:scale-[1.035]"
        />
        <span className="absolute left-4 top-4 max-w-[78%] rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[var(--brand)] shadow-sm">
          {book.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          {book.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-chip">
              #{tag}
            </span>
          ))}
        </div>

        <h3 className="mt-4 line-clamp-2 text-xl font-black leading-snug text-[var(--brand-deep)]">
          {book.bookName}
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          লেখক: <span className="font-bold text-slate-700">{book.author}</span>
        </p>

        <div className="mt-5 flex items-center justify-between border-y border-slate-100 py-3 text-sm">
          <span className="text-slate-500">{bnNumber(book.totalPages)} পৃষ্ঠা</span>
          <span className="font-bold text-[var(--accent-dark)]">
            {book.rating === null ? "রেটিং নেই" : `★ ${bnRating(book.rating)}`}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-slate-500">প্রচ্ছদ মূল্য</span>
          <span className="font-black text-[var(--brand)]">{bnPrice(book.price)}</span>
        </div>

        <Link
          href={`/books/${book.bookId}`}
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-4 py-3 font-bold text-white transition hover:bg-[var(--brand-deep)]"
        >
          বিস্তারিত দেখুন <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
