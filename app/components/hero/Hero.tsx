import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — Text */}
          <div className="space-y-6">
            <p className="text-sm opacity-70">
              Abubakar Abdulhakeem
            </p>

            <h1 className="text-4xl md:text-6xl font-medium">
              Front-End ProDev.
            </h1>

            <p className="max-w-md text-base leading-relaxed opacity-80">
              I’m a passionate front-end developer focused on building high-performance,
              accessible, and visually minimal interfaces. I work with Next.js, React,
              TypeScript, and TailwindCSS to deliver clean, maintainable systems.
            </p>

            <div className="flex gap-6 pt-4">
              <a href="#projects" className="underline">
                View Projects
              </a>
              <a href="#contact" className="opacity-70">
                Get in touch
              </a>

              <a
                href="/Abubakar-Abdulhakeem-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT — Brand photo */}
          <div className="flex justify-end">
            <div className="relative w-[260px] h-[360px]">
              <Image
                src="/bouman.jpg"
                alt="cpt. Bouman"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}