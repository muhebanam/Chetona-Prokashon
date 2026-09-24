import BooksExplorer from "@/components/books/BooksExplorer";
import { books } from "@/lib/books";

export const metadata = { title: "বইসমূহ" };

const BooksPage = () => {
  return (
    <main className="container-shell py-10 md:py-14">
      <div className="page-hero">
        <p className="eyebrow">চেতনা প্রকাশনী</p>
        <h1 className="mt-2 text-3xl font-black text-[var(--brand-deep)] md:text-5xl">
          বাংলা বইয়ের সংগ্রহ
        </h1>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          বিষয়, লেখক বা বইয়ের নাম দিয়ে খুঁজুন। প্রতিটি বইয়ের সংক্ষিপ্ত পরিচিতি,
          প্রকাশনা তথ্য ও পাঠতালিকার সুবিধা এক জায়গায় পাবেন।
        </p>
      </div>

      <BooksExplorer books={books} />
    </main>
  );
};

export default BooksPage;
