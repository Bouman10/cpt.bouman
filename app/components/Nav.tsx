"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const LINKS = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    LINKS.forEach((id) => {
      const el = document.getElementById(id.toLowerCase());
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id.toLowerCase()); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#FAFAF8]/95 backdrop-blur-sm shadow-sm border-b border-stone-200" : "bg-transparent"
    }`}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-mono text-sm font-semibold text-stone-900 tracking-tight">
          cpt.Bouman
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${
                active === l.toLowerCase()
                  ? "text-stone-900"
                  : "text-stone-500 hover:text-stone-900"
              }`}>
              {l}
            </a>
          ))}
          <a href="/Abubakar-CV.pdf" target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold bg-stone-900 text-stone-50 px-4 py-1.5 rounded-lg hover:bg-stone-700 transition-colors">
            Resume ↗
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}
          aria-label="Toggle menu" style={{ touchAction: "manipulation" }}>
          <div className={`w-5 h-0.5 bg-stone-900 transition-all mb-1 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-stone-900 transition-all mb-1 ${open ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-stone-900 transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-stone-200 px-6 pb-4">
          {LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-stone-700 border-b border-stone-100 last:border-0">
              {l}
            </a>
          ))}
          <a href="/Abubakar-CV.pdf" target="_blank" rel="noopener noreferrer"
            className="block mt-3 text-sm font-semibold bg-stone-900 text-stone-50 px-4 py-2 rounded-lg text-center">
            Download Resume ↗
          </a>
        </div>
      )}
    </header>
  );
}