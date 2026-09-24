import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[var(--brand-deep)] text-slate-200">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.25fr_.8fr_1fr]">
        <div>
          <h2 className="text-2xl font-black text-white">চেতনা প্রকাশনী</h2>
          <p className="mt-4 max-w-md leading-7 text-slate-300">
            ইসলামি জ্ঞান, ইতিহাস, আত্মশুদ্ধি ও সমকালীন চিন্তার নির্বাচিত বইকে
            পাঠকের কাছে পরিচ্ছন্ন ও সহজ পাঠ-অভিজ্ঞতায় উপস্থাপনের একটি বাংলা
            ডিজিটাল ক্যাটালগ।
          </p>
        </div>

        <div>
          <h3 className="font-black text-white">দ্রুত লিংক</h3>
          <div className="mt-4 grid gap-2.5 text-sm">
            <Link href="/books" className="footer-link">বইসমূহ</Link>
            <Link href="/listed-books" className="footer-link">আমার পাঠতালিকা</Link>
            <Link href="/read-books" className="footer-link">পাঠের অগ্রগতি</Link>
            <Link href="/about" className="footer-link">আমাদের সম্পর্কে</Link>
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">যোগাযোগ</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            ইসলামি টাওয়ার, দোকান নং ২০, ১ম তলা,<br />
            বাংলাবাজার, ঢাকা, বাংলাদেশ
          </p>
          <a
            href="https://chetonaprokashon.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex font-bold text-[var(--accent-light)] transition hover:text-white"
          >
            অফিসিয়াল ওয়েবসাইট ↗
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © ২০২৬ চেতনা প্রকাশনী — পাঠে জাগুক চেতনা।
      </div>
    </footer>
  );
};

export default Footer;
