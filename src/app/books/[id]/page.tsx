import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { bnNumber, bnPrice, bnRating } from "@/lib/bengali";
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

const BookDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const book = getBookById(id);
  if (!book) notFound();

  const details = [
    ["মোট পৃষ্ঠা", `${bnNumber(book.totalPages)} পৃষ্ঠা`],
    ["প্রকাশকাল", bnNumber(book.yearOfPublishing)],
    ["বাইন্ডিং", book.binding ?? "তথ্য নেই"],
    ["প্রচ্ছদ মূল্য", bnPrice(book.price)],
    ["প্রকাশক", book.publisher],
    ["সংস্করণ", book.edition ?? "তথ্য নেই"],
  ];

  return (
    <main className="container-shell py-9 md:py-14">
      <article className="grid overflow-hidden rounded-[2rem] border border-[var(--brand-border)] bg-white shadow-xl shadow-slate-200/50 lg:grid-cols-[.82fr_1.18fr]">
        <div className="flex min-h-[470px] items-center justify-center bg-[var(--surface)] p-8 md:p-12">
          <Image
            src={book.image}
            alt={`${book.bookName} বইয়ের প্রচ্ছদ`}
            width={520}
            height={720}
            className="max-h-[640px] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            priority
          />
        </div>

        <div className="p-6 md:p-10 lg:p-12">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[var(--brand)] px-3 py-1 text-xs font-bold text-white">
              {book.category}
            </span>
            {book.tags.map((tag) => (
              <span key={tag} className="tag-chip">#{tag}</span>
            ))}
          </div>

          <h1 className="mt-5 text-3xl font-black leading-tight text-[var(--brand-deep)] md:text-5xl">
            {book.bookName}
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            লেখক: <span className="font-bold text-slate-800">{book.author}</span>
          </p>
          {book.translator && (
            <p className="mt-1 text-sm text-slate-500">
              অনুবাদ: <span className="font-bold text-slate-700">{book.translator}</span>
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-lg text-[var(--accent-dark)]" aria-hidden="true">★★★★★</span>
            <span className="font-black text-slate-800">{bnRating(book.rating)}</span>
            {book.rating !== null && book.ratingCount ? (
              <span className="text-sm text-slate-400">
                ({bnNumber(book.ratingCount)}টি রেটিং)
              </span>
            ) : null}
          </div>

          <div className="mt-7 border-t border-slate-100 pt-7">
            <h2 className="text-lg font-black text-[var(--brand-deep)]">বইটির সংক্ষিপ্ত পরিচিতি</h2>
            <p className="mt-3 leading-8 text-slate-600">{book.review}</p>
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-3 rounded-2xl bg-[var(--surface)] p-5 sm:grid-cols-3">
            {details.map(([label, value]) => (
              <div key={label} className="rounded-xl bg-white/75 p-3">
                <dt className="text-xs font-bold text-slate-400">{label}</dt>
                <dd className="mt-1 font-black text-slate-800">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-3 text-xs leading-5 text-slate-400">
            নোট: মূল্য, পৃষ্ঠা ও সংস্করণের তথ্য সময় বা সংস্করণভেদে পরিবর্তিত হতে পারে।
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ReadButton book={book} />
            <WishListButton book={book} />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            {book.sourceUrl && (
              <a
                href={book.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="font-black text-[var(--brand)] hover:underline"
              >
                অনলাইন তথ্যসূত্র ↗
              </a>
            )}
            <a
              href="https://chetonaprokashon.com/"
              target="_blank"
              rel="noreferrer"
              className="font-black text-[var(--brand)] hover:underline"
            >
              প্রকাশকের ওয়েবসাইট ↗
            </a>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BookDetailsPage;
