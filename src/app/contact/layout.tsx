import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Yennam Media for marketing and branding solutions.",
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}