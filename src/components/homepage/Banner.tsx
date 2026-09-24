import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/assets/hero_img.jpg";

export default function Banner() {
  return (
    <section className="figma-container hero-wrap">
      <div className="hero-card">
        <div className="hero-copy">
          <h1>
            বই দিয়ে সমৃদ্ধ করুন
            <br />
            আপনার <span>জ্ঞানের ভুবন</span>
          </h1>
          <p>
            চেতনা প্রকাশনীর নির্বাচিত বই থেকে খুঁজে নিন আপনার পরবর্তী পাঠ।
            ইতিহাস, ইসলামি জ্ঞান, আত্মশুদ্ধি ও সমকালীন চিন্তার বই এক জায়গায়।
          </p>
          <Link href="#books" className="hero-cta">
            বইয়ের তালিকা দেখুন
          </Link>
        </div>
        <div className="hero-visual">
          <Image
            src={bannerImg}
            alt="বইয়ের সংগ্রহ"
            priority
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
