import Link from "next/link";

export const metadata = { title: "আমাদের সম্পর্কে" };

const AboutPage = () => {
  return (
    <main className="container-shell py-10 md:py-14">
      <section className="page-hero">
        <p className="eyebrow">প্রকাশনী পরিচিতি</p>
        <h1 className="mt-2 text-3xl font-black text-[var(--brand-deep)] md:text-5xl">
          চেতনা প্রকাশনী
        </h1>
        <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
          ইসলামি জ্ঞানের মৌলিক শাখা, ইতিহাস, আত্মশুদ্ধি, নাসিহা এবং প্রয়োজনীয়
          সমকালীন বিষয়ে রচিত ও অনূদিত বই পাঠকের সামনে মানসম্মতভাবে উপস্থাপন করাই
          চেতনা প্রকাশনের প্রকাশ্য পরিচিতিতে গুরুত্ব পাওয়া প্রধান লক্ষ্যগুলোর একটি।
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
        <article className="rounded-3xl border border-[var(--brand-border)] bg-white p-7 shadow-sm md:p-9">
          <p className="eyebrow">আমাদের পাঠদর্শন</p>
          <h2 className="mt-2 text-2xl font-black text-[var(--brand-deep)]">
            জ্ঞান, ঐতিহ্য ও জীবনঘনিষ্ঠ পাঠ
          </h2>
          <div className="mt-5 space-y-4 leading-8 text-slate-600">
            <p>
              প্রকাশকের অনলাইন পরিচিতি অনুযায়ী আকিদা, তাফসির, হাদিস, ফিকহ,
              ইতিহাস, জীবনী, নাসিহা ও অন্যান্য প্রয়োজনীয় জ্ঞানশাখার বই
              আধুনিক পাঠকের কাছে পৌঁছে দেওয়ার ওপর প্রতিষ্ঠানটি গুরুত্ব দেয়।
            </p>
            <p>
              এই ওয়েব প্রকল্পে সেই প্রকাশনা-পরিসরকে বাংলা ভাষায় সহজভাবে সাজানো
              হয়েছে—যাতে বই খোঁজা, বিস্তারিত দেখা, ইচ্ছেতালিকা তৈরি এবং নিজের
              পড়ার অগ্রগতি সংরক্ষণ করা যায়।
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="mini-info">
              <strong>ইতিহাস</strong>
              <span>উপমহাদেশ ও মুসলিম ঐতিহ্য</span>
            </div>
            <div className="mini-info">
              <strong>জীবন</strong>
              <span>আত্মশুদ্ধি ও আত্মউন্নয়ন</span>
            </div>
            <div className="mini-info">
              <strong>চিন্তা</strong>
              <span>আকিদা ও সমকালীন বিষয়</span>
            </div>
          </div>
        </article>

        <aside className="rounded-3xl bg-[var(--brand)] p-7 text-white shadow-xl md:p-9">
          <p className="text-sm font-black text-[var(--accent-light)]">যোগাযোগের ঠিকানা</p>
          <h2 className="mt-3 text-2xl font-black">বাংলাবাজার, ঢাকা</h2>
          <p className="mt-4 leading-8 text-slate-200">
            ইসলামি টাওয়ার<br />
            দোকান নং ২০, ১ম তলা<br />
            বাংলাবাজার, ঢাকা, বাংলাদেশ
          </p>
          <a
            href="https://chetonaprokashon.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 font-black text-[var(--brand)] transition hover:bg-[var(--accent-light)]"
          >
            অফিসিয়াল ওয়েবসাইট ↗
          </a>
          <Link
            href="/books"
            className="mt-3 inline-flex w-full justify-center rounded-xl border border-white/20 px-5 py-3 font-black text-white transition hover:bg-white/10"
          >
            বইসমূহ দেখুন
          </Link>
        </aside>
      </section>

      <p className="mt-6 rounded-2xl bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
        তথ্যনোট: এই ডেমো সাইটের প্রকাশনী পরিচিতি ও ঠিকানা প্রকাশকের অফিসিয়াল
        ওয়েবসাইট এবং অনলাইন বই-বিক্রয় প্ল্যাটফর্মে প্রকাশিত তথ্য থেকে সংক্ষেপে
        সাজানো হয়েছে। মূল্য, সংস্করণ ও বইয়ের অন্যান্য তথ্য সময়ের সঙ্গে পরিবর্তিত
        হতে পারে।
      </p>
    </main>
  );
};

export default AboutPage;
