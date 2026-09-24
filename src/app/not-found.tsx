import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell grid min-h-[65vh] place-items-center py-16 text-center">
      <div>
        <p className="text-7xl font-black text-[var(--accent-dark)]">৪০৪</p>
        <h1 className="mt-4 text-3xl font-black text-[var(--brand-deep)]">
          পৃষ্ঠা পাওয়া যায়নি
        </h1>
        <p className="mt-3 text-slate-500">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরানো হয়েছে অথবা ঠিকানাটি সঠিক নয়।
        </p>
        <Link href="/" className="btn-primary mt-7">হোমে ফিরুন</Link>
      </div>
    </main>
  );
}
