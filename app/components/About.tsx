export default function About() {
  return (
    <section id="about" className="py-16 px-6 border-t border-stone-200">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-400 mb-3">About</p>
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight leading-snug mb-5">
            Front-End Engineer.<br />
            <span className="text-stone-400 font-normal">Product thinker.</span>
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed mb-4">
            I'm a Front-End Engineer based in Lagos, Nigeria, specialising in React, Next.js,
            and TypeScript. I translate product requirements and Figma designs into scalable,
            accessible, production-ready user interfaces.
          </p>
          <p className="text-sm text-stone-500 leading-relaxed mb-4">
            Currently a Front-End Engineer at Qred, building real marketplace features in a
            live React + TypeScript codebase. Outside of work, I design and ship my own
            products — most recently Mastery Engine, a full-stack AI SaaS now in the hands
            of real users.
          </p>
          <p className="text-sm text-stone-500 leading-relaxed">
            I'm actively seeking a remote junior or mid-level Front-End role with a team
            that cares about code quality, user experience, and shipping things that matter.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-[0.1em] mb-1">Current role</p>
            <p className="text-sm font-semibold text-stone-900">Front-End Engineer @ Qred</p>
            <p className="text-xs text-stone-500">React · TypeScript · Tailwind CSS · Jan 2026 – Present</p>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-[0.1em] mb-1">Latest project shipped</p>
            <a href="https://mastery-engine-ten.vercel.app" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-stone-900 hover:underline">
              Mastery Engine ↗
            </a>
            <p className="text-xs text-stone-500">Full-stack AI SaaS · Next.js · Supabase · Groq LLM · Real users</p>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-[0.1em] mb-1">Availability</p>
            <p className="text-sm font-semibold text-green-700">✓ Open to remote roles worldwide</p>
            <p className="text-xs text-stone-500">Junior or mid-level · Full-time or contract</p>
          </div>
        </div>
      </div>
    </section>
  );
}