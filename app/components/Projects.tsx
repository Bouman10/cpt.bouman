const PROJECTS = [
  {
    featured: true,
    name: "Mastery Engine",
    tagline: "AI-Powered Structured Learning SaaS",
    description:
      "Full-stack SaaS product designed, engineered and shipped solo — from concept to production with real users. A 3-phase AI learning system (Learn 20% / Build 60% / Refine 20%) that generates personalised curricula, project challenges, and cycle feedback for any skill.",
    bullets: [
      "Next.js 14 App Router + TypeScript + Tailwind CSS v4 — full server/client architecture with protected middleware",
      "Supabase for auth (email + Google OAuth), PostgreSQL with Row Level Security, real-time session management",
      "Groq LLM API integration (llama-3.3-70b-versatile) with structured JSON generation and streaming chat responses",
      "AI build coach with streaming responses, mastery score tracking, cycle history persisted in Supabase",
      "Deployed to Vercel with OAuth callback routes, environment config, and edge middleware",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Groq API", "LLM", "Vercel", "PostgreSQL", "OAuth"],
    live: "https://mastery-engine-ten.vercel.app",
    github: "https://github.com/Bouman10/mastery-engine",
    status: "Live · Real users",
  },
  {
    featured: false,
    name: "RoleProbe",
    tagline: "AI-Powered Interview Preparation Platform",
    description:
      "Interview preparation platform helping job seekers practise realistic interview simulations, receive AI feedback on communication skills, and build confidence before real interviews.",
    bullets: [
      "Built with Next.js, TypeScript and Tailwind CSS with AI-generated question sets and feedback",
      "Responsive UI with smooth transitions and accessible component design",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    live: "https://roleprobe.vercel.app",
    github: "https://github.com/Bouman10/roleprobe",
    status: "Live",
  },
  {
    featured: false,
    name: "Movie Discovery Engine",
    tagline: "Production-Scale Next.js Application",
    description:
      "Highly responsive movie discovery platform integrating the TMDb REST API with dynamic routing, error boundaries, skeleton loading states, and client-side preference caching.",
    bullets: [
      "Next.js dynamic routing (/movie/[id]) with async data fetching and robust error handling",
      "Browser storage pipeline to cache user preferences and reduce redundant network requests",
    ],
    tags: ["React", "TypeScript", "Next.js", "TMDb API", "Tailwind CSS"],
    live: "https://movie-recommendation-app-delta-rosy.vercel.app/",
    github: "https://github.com/Bouman10/movie-recommendation-app",
    status: "Live",
  },
  {
    featured: false,
    name: "Feesah Signature",
    tagline: "Professional Business Website",
    description:
      "Production business website built to strengthen brand presence and deliver a seamless experience across all devices. Translated Figma designs into a pixel-accurate, responsive interface.",
    bullets: [
      "Next.js + TypeScript + Tailwind CSS with mobile-first responsive design",
      "Figma-to-code implementation maintaining brand consistency and accessibility",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "Responsive Design"],
    live: "https://feesahsignature.vercel.app",
    github: "https://github.com/Bouman10/feesahsignature",
    status: "Live",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 border-t border-stone-200 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-400 mb-2">Projects</p>
        <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-3">
          Things I've built
        </h2>
        <p className="text-sm text-stone-500 mb-10 max-w-xl">
          From production SaaS to client websites — real code, real users, real shipping.
        </p>

        {/* Featured project */}
        {PROJECTS.filter((p) => p.featured).map((p) => (
          <div key={p.name}
            className="bg-white border-2 border-stone-900 rounded-2xl p-6 mb-6 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.14em] bg-stone-900 text-stone-50 px-2.5 py-1 rounded-full">
              Featured
            </div>

            <p className="text-xs font-semibold text-stone-400 uppercase tracking-[0.1em] mb-1">{p.tagline}</p>
            <h3 className="text-xl font-bold text-stone-900 mb-1">{p.name}</h3>
            <p className="text-xs text-green-700 font-semibold mb-3">{p.status}</p>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">{p.description}</p>

            <ul className="space-y-1.5 mb-5">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                  <span className="text-stone-400 flex-shrink-0 mt-0.5">◦</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-medium text-stone-700 bg-stone-100 px-2.5 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold bg-stone-900 text-stone-50 px-4 py-2 rounded-lg hover:bg-stone-700 transition-colors"
                style={{ touchAction: "manipulation" }}>
                Live Demo ↗
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium border border-stone-300 text-stone-700 px-4 py-2 rounded-lg hover:border-stone-900 transition-colors"
                style={{ touchAction: "manipulation" }}>
                GitHub ↗
              </a>
            </div>
          </div>
        ))}

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.filter((p) => !p.featured).map((p) => (
            <div key={p.name}
              className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col">
              <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-[0.1em] mb-1">{p.tagline}</p>
              <h3 className="text-base font-bold text-stone-900 mb-2">{p.name}</h3>
              <p className="text-xs text-stone-500 leading-relaxed mb-3 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {p.tags.slice(0, 4).map((t) => (
                  <span key={t} className="text-[10px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-semibold text-stone-900 border border-stone-200 px-3 py-1.5 rounded-lg hover:border-stone-900 transition-colors"
                  style={{ touchAction: "manipulation" }}>
                  Live ↗
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-medium text-stone-600 border border-stone-200 px-3 py-1.5 rounded-lg hover:border-stone-900 transition-colors"
                  style={{ touchAction: "manipulation" }}>
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}