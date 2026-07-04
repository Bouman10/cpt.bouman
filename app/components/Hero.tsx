export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="max-w-3xl">
        {/* Open to work badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
          Open to remote — Junior / Mid-Level Front-End roles
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-[1.08] tracking-tight mb-5">
          Abubakar<br />Abdulhakeem
        </h1>

        <p className="text-xl md:text-2xl font-medium text-stone-500 mb-4 leading-snug">
          Front-End Engineer — React · Next.js · TypeScript
        </p>

        <p className="text-base text-stone-500 leading-relaxed max-w-xl mb-8">
          I build production-ready web applications with clean architecture and thoughtful UX.
          Recently designed, engineered and shipped{" "}
          <a href="https://mastery-engine-ten.vercel.app" target="_blank" rel="noopener noreferrer"
            className="text-stone-900 font-semibold underline underline-offset-2 hover:text-stone-600 transition-colors">
            Mastery Engine
          </a>
          {" "}— a full-stack AI SaaS with real users — solo, from zero to production.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#projects"
            className="bg-stone-900 text-stone-50 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-stone-700 transition-colors"
            style={{ touchAction: "manipulation" }}>
            View Projects
          </a>
          <a href="#contact"
            className="border border-stone-300 text-stone-700 font-semibold text-sm px-5 py-2.5 rounded-lg hover:border-stone-900 transition-colors"
            style={{ touchAction: "manipulation" }}>
            Get in Touch
          </a>
          <a href="/Abubakar-CV.pdf" target="_blank" rel="noopener noreferrer"
            className="border border-stone-300 text-stone-700 font-medium text-sm px-5 py-2.5 rounded-lg hover:border-stone-900 transition-colors"
            style={{ touchAction: "manipulation" }}>
            Download CV ↗
          </a>
        </div>
      </div>
    </section>
  );
}