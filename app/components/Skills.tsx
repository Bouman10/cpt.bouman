const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js 14 (App Router)", "React Hooks", "Context API"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Responsive Design", "Mobile-First", "Accessibility (WCAG)"],
  },
  {
    category: "Backend & Auth",
    items: ["Supabase", "PostgreSQL", "Row Level Security", "REST APIs", "Server Components"],
  },
  {
    category: "AI Integration",
    items: ["Groq API", "LLM Prompt Engineering", "Streaming AI Responses", "JSON generation"],
  },
  {
    category: "Tooling & DevOps",
    items: ["Git", "GitHub", "Vercel", "npm", "ESLint", "TypeScript Compiler", "CI/CD"],
  },
  {
    category: "Design",
    items: ["Figma", "Design-to-Code", "Component Systems", "Design Tokens"],
  },
  {
    category: "Practices",
    items: ["Agile", "Code Reviews", "Pull Requests", "Performance Optimisation", "SEO"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 border-t border-stone-200 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-400 mb-2">Technical Skills</p>
        <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-10">
          What I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((group) => (
            <div key={group.category}
              className="bg-white border border-stone-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-[0.1em] mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item}
                    className="text-xs font-medium text-stone-700 bg-stone-100 px-2.5 py-1 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}