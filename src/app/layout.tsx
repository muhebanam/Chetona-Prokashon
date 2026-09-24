import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import BooksProvider from "@/context/BooksContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "চেতনা প্রকাশনী | পাঠে জাগুক চেতনা",
    template: "%s | চেতনা প্রকাশনী",
  },
  description:
    "চেতনা প্রকাশনীর নির্বাচিত বাংলা বই দেখুন, বইয়ের তথ্য জানুন এবং নিজের পাঠতালিকা গুছিয়ে রাখুন।",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" data-theme="light" className={hindSiliguri.variable}>
      <body className={hindSiliguri.className}>
        <BooksProvider>
          <Navbar />
          <div className="min-h-[72vh]">{children}</div>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={2200}
            hideProgressBar={false}
            theme="light"
          />
        </BooksProvider>
      </body>
    </html>
  );
}
