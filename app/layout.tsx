import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cpt-bouman.vercel.app"),

  title: {
    default: "Abubakar Abdulhakeem | Frontend Developer",
    template: "%s | Abubakar Abdulhakeem",
  },

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript and modern web applications. Building performant, scalable and user-focused digital experiences.",

    keywords: [
      "Abubakar Abdulhakeem",
      "Bouman",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "JavaScript Developer",
      "Web Developer",
      "Portfolio",
      "UI Developer",
      "Frontend Engineer",
    ],

    authors: [
      {
        name: "Abubakar Abdulhakeem",
      },
    ],

    creator: "Abubakar Abdulhakeem",

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: "Abubakar Abdulhakeem | Frontend Developer",
      description:
        "Frontend Developer specializing in React, Next.js and ˇTypeScript.",
        url: "https://cpt-bouman.vercel.app",
        siteName: "Abubakar Abdulhakeem Portfolio",
        locale: "en_US",
        type: "website",

        images: [
          {
            url: "/profile.jpg",
            width: 1200,
            height: 630,
            alt: "Abubakar Abdulhakeem Portfolio",
          },
        ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Abubakar Abdulhakeem | Frontend Developer",
      description:
        "Frontend Developer specializing in React, Next.js and TypeScript.",
        images: ["/profile.jpg"],
    },

    alternates: {
      canonical: "https://cpt-bouman.vercel.app",
    },
};

export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}