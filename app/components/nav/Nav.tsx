"use client";

import { useEffect, useState } from "react";

const sections = ["home", "projects", "about", "contact"];

export default function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-start justify-between">
        {/* Logo */}
        <a href="#home" className="text-sm font-medium">
          cpt.Bouman
        </a>

        {/* Vertical Nav */}
        <ul className="flex flex-col gap-3 text-right">
          {sections.slice(1).map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-sm transition-opacity ${
                  active === section ? "opacity-100 underline" : "opacity-50"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}