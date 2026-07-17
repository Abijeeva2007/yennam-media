import "./globals.css";
import Navbar from "./components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yennam-media.vercel.app"),

  title: {
    default: "Yennam Media",
    template: "%s | Yennam Media",
  },

  description:
    "Yennam Media helps brands grow through digital marketing, branding, web solutions, and innovative ventures.",

  keywords: [
    "Yennam Media",
    "Digital Marketing",
    "Branding",
    "Website Development",
    "Startup",
    "Marketing Agency",
  ],

  openGraph: {
    title: "Yennam Media",
    description:
      "Helping brands grow through digital marketing, branding and innovation.",
    url: "https://yennam-media.vercel.app",
    siteName: "Yennam Media",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yennam Media",
    description:
      "Helping brands grow through digital marketing, branding and innovation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
  <body className="bg-black text-white">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Yennam Media",
          url: "https://yennam-media.vercel.app",
          logo: "https://yennam-media.vercel.app/favicon.ico",
          description:
            "Yennam Media is a digital marketing and branding company helping businesses grow through creative marketing, web development, and innovative ventures.",
        }),
      }}
    />

    <Navbar />
    {children}
  </body>
</html>
  );
}