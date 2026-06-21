"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
        <Link
          href="/"
          className="text-white text-2xl font-semibold"
        >
          Yennam Media
        </Link>

        <div className="flex gap-8 text-white text-lg">
          <Link href="/marketing">Marketing</Link>
          <Link href="/venture">Venture</Link>
          <Link href="/idea">Submit Idea</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}