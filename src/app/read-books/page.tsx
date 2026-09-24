"use client";

import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = ["#173b57", "#caa25e", "#2a628f", "#d9822b", "#0e283b", "#4a7c59"];

export default function ReadBooks() {
  const { readBooks, hydrated } = useContext(BooksContext);
  const bn = new Intl.NumberFormat("bn-BD");
  const data = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <main className="figma-container chart-page">
      <h1 className="chart-title">পাঠের অগ্রগতি</h1>
      <section className="chart-card">
        {!hydrated ? (
          <div className="figma-empty">তথ্য লোড হচ্ছে…</div>
        ) : data.length ? (
          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 24, left: 0, bottom: 55 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8e8e8" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                  interval={0}
                  angle={-18}
                  textAnchor="end"
                  height={75}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                  width={52}
                  tickFormatter={(v) => bn.format(Number(v))}
                />
                <Tooltip formatter={(v) => [`${bn.format(Number(v))} পৃষ্ঠা`, "পৃষ্ঠা"]} />
                <Bar dataKey="pages" radius={[22, 22, 0, 0]} maxBarSize={64}>
                  {data.map((_, index) => (
                    <Cell key={index} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="figma-empty">
            চার্ট দেখতে আগে অন্তত একটি বই “পড়া হয়েছে” হিসেবে যোগ করুন।
          </div>
        )}
      </section>
    </main>
  );
}
