import type { Metadata } from "next";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Abubakar Abdulhakeem — Front-End Engineer | React · Next.js · TypeScript",
  description:
    "Front-End Engineer specializing in React, Next.js, TypeScript and Tailwind CSS. " +
    "Available for remote junior and mid-level roles. " +
    "Built Mastery Engine — a full-stack AI SaaS with Supabase, Groq LLM, and 20+ real users.",
  keywords: [
    "Front-End Engineer", "React Developer", "Next.js Developer", "TypeScript Developer",
    "JavaScript Developer", "Tailwind CSS", "Supabase", "AI Integration", "SaaS Developer",
    "Remote Frontend Developer", "Junior Frontend Engineer", "Web Developer Nigeria",
    "Abubakar Abdulhakeem", "Bouman", "UI Engineer", "Full Stack", "Vercel", "REST API"
  ],
  openGraph: {
    title: "Abubakar Abdulhakeem — Front-End Engineer",
    description:
      "React · Next.js · TypeScript. Built and shipped a full-stack AI SaaS from zero. Open to remote roles.",
    url: "https://cpt-bouman.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakar Abdulhakeem — Front-End Engineer",
    description: "React · Next.js · TypeScript. Open to remote junior / mid-level roles.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1917]">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="border-t border-stone-200 py-5 text-center text-xs text-stone-400">
        © 2026 Abubakar Abdulhakeem · Built with Next.js, TypeScript & Tailwind CSS · Deployed on Vercel
      </footer>
    </main>
  );
}