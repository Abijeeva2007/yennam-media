"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-zinc-800 bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl md:text-3xl font-bold"
        >
          Yennam Media
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white text-lg">
          <Link href="/marketing">Marketing</Link>
          <Link href="/venture">Venture</Link>
          <Link href="/idea">Submit Idea</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-3xl md:hidden"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800 flex flex-col">

          <Link
            href="/marketing"
            className="px-6 py-4 border-b border-zinc-800"
            onClick={() => setOpen(false)}
          >
            Marketing
          </Link>

          <Link
            href="/venture"
            className="px-6 py-4 border-b border-zinc-800"
            onClick={() => setOpen(false)}
          >
            Venture
          </Link>

          <Link
            href="/idea"
            className="px-6 py-4 border-b border-zinc-800"
            onClick={() => setOpen(false)}
          >
            Submit Idea
          </Link>

          <Link
            href="/about"
            className="px-6 py-4 border-b border-zinc-800"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="px-6 py-4"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}