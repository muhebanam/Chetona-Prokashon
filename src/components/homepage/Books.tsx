import BookCard from "../shared/BookCard";
import { books } from "@/lib/books";
import Link from "next/link";

const Books = () => {
  return (
    <>
      <section className="container-shell py-16 md:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">নির্বাচিত প্রকাশনা</p>
          <h2 className="section-title">চেতনা প্রকাশনীর উল্লেখযোগ্য বই</h2>
          <p className="section-copy">
            ইতিহাস, আত্মশুদ্ধি, আকিদা, দুআ ও সমকালীন চিন্তার বিভিন্ন বিষয় থেকে
            নির্বাচিত কয়েকটি বই ঘুরে দেখুন।
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.slice(0, 6).map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/books" className="btn-outline">
            সব বই দেখুন <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="container-shell pb-8 md:pb-12">
        <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[var(--surface)] p-7 md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="eyebrow">বিষয়ভিত্তিক পাঠ</p>
              <h2 className="mt-2 text-2xl font-black text-[var(--brand-deep)] md:text-3xl">
                জ্ঞানকে খুঁজুন নিজের প্রয়োজন অনুযায়ী
              </h2>
            </div>
            <div className="feature-card">
              <span className="feature-icon" aria-hidden="true">◈</span>
              <h3>ইতিহাস ও ঐতিহ্য</h3>
              <p>উপমহাদেশ, খেলাফত ও মুসলিম ইতিহাসের নির্বাচিত পাঠ।</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon" aria-hidden="true">✦</span>
              <h3>আত্মশুদ্ধি ও জীবন</h3>
              <p>ব্যক্তিগত উন্নয়ন, নাসিহা, দুআ ও মূল্যবোধভিত্তিক বই।</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Books;
