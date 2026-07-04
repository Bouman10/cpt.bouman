const JOBS = [
  {
    role: "Front-End Engineer",
    company: "Qred",
    period: "Jan 2026 – Present",
    location: "Lagos, Nigeria",
    bullets: [
      "Built and shipped production-ready marketplace features in a live React + TypeScript codebase, directly improving product discovery and conversion.",
      "Redesigned the Featured Accessories section from Figma specifications, maintaining full consistency with the existing component library and design system.",
      "Engineered category, brand, and price filtering using React state management and REST API integration, reducing user search friction across the marketplace.",
      "Improved mobile user experience by identifying usability issues and implementing responsive CSS and touch-optimised interactions.",
      "Maintained reusable, scalable React components with TypeScript and Tailwind CSS, upholding code quality standards across the shared codebase.",
      "Collaborated through structured Git workflows — feature branches, pull requests, code reviews — delivering features on sprint deadlines.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "Git", "Figma"],
  },
  {
    role: "Software Engineer (Apprentice)",
    company: "ALX ProDev Front-End Program",
    period: "2025",
    location: "Remote",
    bullets: [
      "Developed production-style web applications using React, TypeScript, and Next.js dynamic routing architectures across multiple team projects.",
      "Managed version control and continuous deployment pipelines using Git, GitHub, and Vercel, maintaining clean commit histories and agile sprint velocities.",
      "Conducted peer code reviews focused on component maintainability, structural clarity, and long-term codebase scalability.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Git", "Vercel", "Agile"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 border-t border-stone-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-400 mb-2">Experience</p>
        <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-10">
          Where I've worked
        </h2>

        <div className="space-y-8">
          {JOBS.map((job, i) => (
            <div key={i} className="grid md:grid-cols-[220px_1fr] gap-4">
              {/* Left: meta */}
              <div className="pt-0.5">
                <p className="text-sm font-semibold text-stone-900">{job.company}</p>
                <p className="text-xs text-stone-500 mt-0.5">{job.period}</p>
                <p className="text-xs text-stone-400">{job.location}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {job.tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: content */}
              <div className="border border-stone-200 rounded-xl p-5 bg-white">
                <p className="text-base font-semibold text-stone-900 mb-3">{job.role}</p>
                <ul className="space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-stone-600 leading-relaxed">
                      <span className="text-stone-400 mt-0.5 flex-shrink-0">◦</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}