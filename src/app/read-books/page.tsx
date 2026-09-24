"use client";

import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ReadBooks = () => {
  const { readBooks, hydrated } = useContext(BooksContext);
  const data = readBooks.map((book) => ({
    নাম: book.bookName,
    পৃষ্ঠা: book.totalPages,
  }));
  const bn = new Intl.NumberFormat("bn-BD");
  const totalPages = readBooks.reduce((sum, book) => sum + book.totalPages, 0);

  return (
    <main className="container-shell py-10 md:py-14">
      <div className="page-hero">
        <p className="eyebrow">পাঠের হিসাব</p>
        <h1 className="mt-2 text-3xl font-black text-[var(--brand-deep)] md:text-4xl">
          পাঠের অগ্রগতি
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          পড়া হিসেবে চিহ্নিত বইগুলোর পৃষ্ঠাসংখ্যা তুলনা করুন এবং নিজের পাঠের
          একটি সহজ চিত্র দেখুন।
        </p>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="stat-card">
          <span>পড়া বই</span>
          <strong>{bn.format(readBooks.length)}টি</strong>
        </div>
        <div className="stat-card">
          <span>মোট পৃষ্ঠা</span>
          <strong>{bn.format(totalPages)} পৃষ্ঠা</strong>
        </div>
      </div>

      <section className="mt-7 rounded-3xl border border-[var(--brand-border)] bg-white p-5 shadow-sm md:p-8">
        {!hydrated ? (
          <div className="empty-state">তথ্য লোড হচ্ছে…</div>
        ) : data.length ? (
          <div className="h-[430px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 10, left: 0, bottom: 65 }}
              >
                <CartesianGrid strokeDasharray="4 4" vertical={false} />
                <XAxis
                  dataKey="নাম"
                  angle={-28}
                  textAnchor="end"
                  interval={0}
                  height={90}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  width={55}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => bn.format(Number(value))}
                />
                <Tooltip
                  formatter={(value) => [`${bn.format(Number(value))} পৃষ্ঠা`, "মোট"]}
                />
                <Bar dataKey="পৃষ্ঠা" fill="#173b57" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="empty-state">
            চার্ট দেখতে আগে অন্তত একটি বই “পড়া হয়েছে” হিসেবে যোগ করুন।
          </div>
        )}
      </section>
    </main>
  );
};

export default ReadBooks;
