import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="container-shell pt-7 md:pt-10">
      <div className="hero-panel overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-300/40">
        <div className="grid items-center gap-10 px-6 py-10 md:grid-cols-[1.05fr_.95fr] md:px-12 md:py-14 lg:px-16 lg:py-16">
          <div className="order-2 text-center md:order-1 md:text-left">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[var(--accent-light)]">
              চেতনা প্রকাশনী • বাংলা বইয়ের নির্বাচিত সংগ্রহ
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.16] text-white md:text-5xl lg:text-6xl">
              পাঠে জাগুক চেতনা,
              <span className="mt-2 block text-[var(--accent-light)]">
                জ্ঞানে নির্মিত হোক আগামী
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-200 md:mx-0 md:text-lg">
              ইসলামি জ্ঞান, ইতিহাস, আত্মশুদ্ধি, দুআ, ক্যারিয়ার ও সমকালীন
              চিন্তার বই—এক জায়গায় দেখুন, জানুন এবং নিজের পাঠতালিকায় গুছিয়ে রাখুন।
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link href="/books" className="btn-primary">
                বইসমূহ দেখুন <span aria-hidden="true">→</span>
              </Link>
              <Link href="/about" className="btn-secondary-dark">
                প্রকাশনী সম্পর্কে
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-left">
              <div className="hero-stat">
                <strong>বাংলা</strong>
                <span>সম্পূর্ণ ইন্টারফেস</span>
              </div>
              <div className="hero-stat">
                <strong>নির্বাচিত</strong>
                <span>বাস্তব বইয়ের তথ্য</span>
              </div>
              <div className="hero-stat">
                <strong>সহজ</strong>
                <span>পাঠতালিকা ব্যবস্থাপনা</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-7 rounded-full bg-[rgba(207,164,92,.18)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/8 p-3 shadow-2xl">
                <Image
                  src="/images/brand/hero-books.jpg"
                  alt="বইয়ের নান্দনিক সংগ্রহ"
                  width={700}
                  height={520}
                  priority
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[rgba(255,255,255,.94)] px-5 py-4 text-left shadow-xl">
                <p className="text-xs font-bold text-slate-500">আজকের পাঠ</p>
                <p className="mt-1 font-black text-[var(--brand)]">একটি বই, একটি নতুন দিগন্ত</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
