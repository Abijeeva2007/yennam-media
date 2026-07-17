import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yennam-media.vercel.app",
      priority: 1,
    },
    {
      url: "https://yennam-media.vercel.app/about",
    },
    {
      url: "https://yennam-media.vercel.app/marketing",
    },
    {
      url: "https://yennam-media.vercel.app/venture",
    },
    {
      url: "https://yennam-media.vercel.app/contact",
    },
    {
      url: "https://yennam-media.vercel.app/idea",
    },
  ];
}