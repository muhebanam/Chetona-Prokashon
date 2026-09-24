# চেতনা প্রকাশন (Chetona Prokashon) — সম্পূর্ণ বাংলা Next.js + TypeScript ওয়েব প্রকল্প

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-1ad1a5)](https://daisyui.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Chetona--Prokashon-181717?logo=github)](https://github.com/muhebanam/Chetona-Prokashon.git)

এটি **চেতনা প্রকাশন (চেতনা প্রকাশনী)**-এর সম্পূর্ণ বাংলা Next.js + TypeScript ওয়েবসাইট। এই প্রকল্পে আধুনিক ওয়েব প্রযুক্তি, নান্দনিক ডিজাইন, বাস্তব বইয়ের নির্ভরযোগ্য তথ্য, বাংলা সংখ্যা ও তারিখ বিন্যাস, রেসপনসিভ লেআউট এবং শক্তিশালী পাঠতালিকা ব্যবস্থাপনা নিশ্চিত করা হয়েছে।

---

## 📌 প্রকল্পের প্রধান বৈশিষ্ট্যসমূহ

- **সম্পূর্ণ বাংলা ইন্টারফেস ও ব্র্যান্ডিং:** 
  - চেতনা প্রকাশনের মূল ব্র্যান্ড আইডেন্টিটি ও লোগো মার্ক
  - সম্পূর্ণ বাংলা নেভিগেশন (হোম, বইসমূহ, আমার পাঠতালিকা, পাঠের অগ্রগতি, আমাদের সম্পর্কে)
  - মার্জিত টাইপোগ্রাফি ও রঙ বিন্যাস (`Noto Sans Bengali`, `Hind Siliguri`, কাস্টম ব্র্যান্ড প্যালেট)
- **বাস্তব বইয়ের তথ্য ও প্রচ্ছদ:**
  - চেতনা প্রকাশনের নির্বাচিত বইয়ের প্রচ্ছদ (হাই-রেজোলিউশন রকমারি ইমেজ সাপোর্ট)
  - বইয়ের নাম, লেখক, অনুবাদক, পৃষ্ঠা সংখ্যা, সংস্করণ, বাঁধাই, প্রকাশকাল ও প্রচ্ছদ মূল্য
  - বিষয়ভিত্তিক ট্যাগ এবং সংক্ষিপ্ত পরিচিতি/রিভিউ
- **বই অনুসন্ধান ও বিষয়ভিত্তিক ফিল্টারিং (Search & Filter):**
  - লাইভ সার্চ (বইয়ের নাম, লেখক বা বিষয় অনুসারে)
  - ক্যাটাগরিভিত্তিক ফিল্টার ড্রপডাউন (ইতিহাস ও ঐতিহ্য, আত্মশুদ্ধি, ক্যারিয়ার, ঈমান ও আকিদা ইত্যাদি)
  - সাজানোর সুবিধা (সাম্প্রতিক প্রকাশ, রেটিং বেশি আগে, পৃষ্ঠা বেশি আগে, বাংলা বর্ণানুক্রমিক নাম)
- **বইয়ের বিস্তারিত পৃষ্ঠা (Book Details):**
  - বইয়ের বড় প্রচ্ছদ, পূর্ণ পরিচিতি ও স্পেসিফিকেশন টেবিল
  - রেটিং ও রিভিউ সংখ্যা (বাংলা সংখ্যায় প্রদর্শিত)
  - সরাসরি "পড়া হয়েছে" এবং "ইচ্ছেতালিকায় রাখুন" অ্যাকশন বাটন
- **আমার পাঠতালিকা (Listed Books):**
  - **পড়া বই (Read Books)** এবং **ইচ্ছেতালিকা (Wishlist)** ট্যাব
  - প্রতিটি বইয়ের জন্য ডেডিকেটেড কার্ড ও মেটাডেটা
  - তালিকা থেকে বই অপসারণের (Remove) সুবিধা
  - টোস্ট নোটিফিকেশন (`react-toastify`)
- **ব্রাউজার স্টোরেজ পারসিস্টেন্স:**
  - `localStorage` দিয়ে ইউজারের পাঠতালিকা ও ইচ্ছেতালিকা ব্রাউজারে স্থায়ীভাবে সংরক্ষণ
- **পাঠের অগ্রগতি ও অ্যানালিটিক্স চার্ট (Recharts):**
  - পঠিত মোট বইয়ের সংখ্যা ও মোট পৃষ্ঠার রিয়েল-টাইম পরিসংখ্যান
  - বার চার্টের (Bar Chart) মাধ্যমে প্রতিটি বইয়ের পৃষ্ঠাসংখ্যার তুলনা ও ইন্টারঅ্যাক্টিভ টুলটিপ
- **আমাদের সম্পর্কে (About Us):**
  - চেতনা প্রকাশনের পাঠদর্শন, ইসলামি ঐতিহ্যের গুরুত্ব ও প্রকাশনা পরিচিতি
  - প্রকাশনীর অফিসিয়াল ঠিকানা (বাংলাবাজার, ঢাকা) ও অফিসিয়াল ওয়েবসাইটের লিঙ্ক
- **রেসপনসিভ ও অ্যাক্সেসিবল:**
  - মোবাইল, ট্যাবলেট ও ডেস্কটপ স্ক্রিনে পারফেক্ট লেআউট
  - মোবাইল মেনু বার (Drawer / Hamburger)
  - বাংলা ৪০৪ (Not Found) এবং লোডিং স্টেট

---

## 🛠️ ব্যবহৃত প্রযুক্তিসমূহ

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & [DaisyUI 5](https://daisyui.com/)
- **Visualization:** [Recharts](https://recharts.org/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Font & Formatting:** `Intl.NumberFormat("bn-BD")` (বাংলা সংখ্যা ও মুদ্রা ফরম্যাটিং)

---

## 🚀 লোকাল মেশিনে চালানোর নিয়ম

### ১. ক্লোন করুন
```bash
git clone https://github.com/muhebanam/Chetona-Prokashon.git
cd Chetona-Prokashon
```

### ২. ডিপেন্ডেন্সি ইনস্টল করুন
```bash
npm install
```

### ৩. ডেভেলপমেন্ট সার্ভার চালু করুন
```bash
npm run dev
```

ব্রাউজারে ভিজিট করুন: [http://localhost:3000](http://localhost:3000)

### ৪. প্রোডাকশন বিল্ড তৈরি করুন
```bash
npm run build
npm start
```

---

## 📂 ফোল্ডার স্ট্রাকচার

```text
├── public/
│   ├── booksData.json       # চেতনা প্রকাশনের বইয়ের ডাটা
│   └── images/              # ব্র্যান্ড ও ব্যানার অ্যাসেট
├── src/
│   ├── app/
│   │   ├── about/           # আমাদের সম্পর্কে পৃষ্ঠা
│   │   ├── books/           # বইসমূহ ও [id] বিস্তারিত পৃষ্ঠা
│   │   ├── listed-books/    # আমার পাঠতালিকা (Read / Wishlist)
│   │   ├── read-books/      # পাঠের অগ্রগতি (চার্ট)
│   │   ├── globals.css      # গ্লোবাল স্টাইল ও ডিজাইন সিস্টেম
│   │   ├── layout.tsx       # রুট লেআউট ও প্রোভাইডার
│   │   └── page.tsx         # হোম পেজ
│   ├── components/
│   │   ├── bookDetails/     # বিস্তারিত পৃষ্ঠার কম্পোনেন্টস
│   │   ├── books/           # এক্সপ্লোরার ও ফিল্টার
│   │   ├── homepage/        # ব্যানার ও হাইলাইটস
│   │   └── shared/          # Navbar, Footer, BookCard, ListedBooksCard
│   ├── context/
│   │   └── BooksContext.tsx # গ্লোবাল স্টেট ও LocalStorage
│   ├── lib/
│   │   ├── bengali.ts       # বাংলা সংখ্যা ও ফরম্যাটার
│   │   └── books.ts         # বইয়ের ডাটা হেল্পার
│   └── types/
│       └── books.type.ts    # টাইপস্ক্রিপ্ট টাইপস
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🌐 অনলাইন তথ্যসূত্র ও কৃতজ্ঞতা

- **অফিসিয়াল ওয়েবসাইট:** [chetonaprokashon.com](https://chetonaprokashon.com/)
- **রকমারি প্রকাশক পৃষ্ঠা:** [rokomari.com/book/publisher/10560/chetona-prokashon](https://www.rokomari.com/book/publisher/10560/chetona-prokashon)
- **গিটহাব রিপোজিটরি:** [https://github.com/muhebanam/Chetona-Prokashon.git](https://github.com/muhebanam/Chetona-Prokashon.git)

*তৈরি করেছেন: **Muheb Anam** ([md.muheb@gmail.com](mailto:md.muheb@gmail.com))*
