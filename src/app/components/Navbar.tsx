"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "/marketing", label: "Marketing" },
  { href: "/venture", label: "Venture" },
  { href: "/idea", label: "Submit Idea" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

        {/* Logo */}
<Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="Yennam Media"
    width={180}
    height={60}
    priority
    className="h-12 w-auto md:h-14"
  />
</Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-base text-white md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-200 hover:text-gray-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-3xl text-white transition hover:bg-zinc-800 md:hidden"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-t border-zinc-800" : "max-h-0"
        }`}
      >
        <div className="flex flex-col bg-black">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-white transition hover:bg-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}