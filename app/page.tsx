import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Git",
  "Github",
  "REST APIs",
  "Responsive Design",
  "Figma",
];

const projects = [
  {
    title: "RoleProbe",
    image: "/projects/roleprobe.png",
    description:
      "AI-powered interview preparation platform that helps job seekers practice interviews, improve communication skills and gain confidence through realistic interview simulations and feedback.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
      github: "https://github.com/Bouman10/roleprobe",
      live: "https://roleprobe.vercel.app",
  },
  {
    title: "Movie Recommendation App",
    image: "/projects/movie-app.png",
    description:
      "Built a responsive movie discovery platform integrating the TMDB API, enabling users to search, explore and discover films through an optimized frontend experience.",
    stack: ["React", "TypeScript", "TMDB API", "Tailwind CSS"],
    github: "https://github.com/Bouman10/movie-recommendation-app",
    live: "https://movie-recommendation-app-delta-rosy.vercel.app/",
  },
  {
    title: "Feesah Signature",
    image: "/projects/feesahsignature.png",
    description:
      "Professional business website designed to showcase services, strengthen brand presence and provide a seamless experience across desktop and mobile devices.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Bouman10/feesahsignature",
    live: "https://feesahsignature.vercel.app",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        {/* NAVBAR */}
        <header className="flex items-center justify-between">
          <a href="#" className="text-2xl font-medium tracking-tight">
            cpt.Bouman
          </a>

          <nav className="hidden gap-10 text-sm md:flex">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="/Abubakar-CV.pdf"
            target="_blank"
            className="rounded-lg border border-white/20 px-6 py-3 text-sm"
          >
            Resume
          </a>
        </header>

        {/* HERO */}
        <section className="grid items-center gap-16 py-24 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/60">
              Frontend Developer
            </p>

            <h1 className="text-5xl font-medium leading-tight md:text-7xl">
              Building thoughtful digital experiences.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
              Frontend Developer specializing in React, Next.js and TypeScript.
              I build scalable, performant and user-focused interfaces that
              transform ideas into products.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="rounded-lg border border-white/20 px-6 py-3"
              >
                View Projects
              </a>

              <a
                href="/Abubakar-CV.pdf"
                target="_blank"
                className="rounded-lg border border-white/20 px-6 py-3"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px]">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={500}
              height={650}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24">
          <h2 className="text-4xl font-medium md:text-5xl">About</h2>

          <div className="mt-10 max-w-4xl space-y-6 text-lg leading-9 text-white/75">
            <p>
              I'm Abubakar Abdulhakeem, a frontend developer focused on building
              modern web applications using React, Next.js and TypeScript.
            </p>

            <p>
              I enjoy transforming complex requirements into intuitive user
              experiences while maintaining clean architecture, performance and
              scalability.
            </p>

            <p>
              My current focus is becoming a world-class product engineer by
              combining frontend development, design thinking and strong
              execution.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24">
          <h2 className="text-4xl font-medium md:text-5xl">Skills</h2>

          <div className="mt-12 flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="border border-white/15 px-5 py-3 text-base"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-medium md:text-5xl">
              Featured Projects
            </h2>

           <p className="mt-6 text-lg leading-8 text-white/70">
            A selection of projects demonstrating frontend engineering,
            product thinking and user-focused design.
           </p>
          </div>

           <div className="mt-16 grid gap-8 lg:grid-cols-3">
             {projects.map((project) => (
            <article
               key={project.title}
               className="overflow-hidden rounded-xl border border-white/10 transition hover:border-white/20"
             >
               {/* Screenshot */}
              <a
                 href={project.live}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block"
              >
               <div className="relative aspect-[16/10] w-full overflow-hidden">
                 <Image
                   src={project.image}
                   alt={project.title}
                   fill
                   className="object-cover transition duration-700 hover:scale-105"
                  />
               </div>
              </a>

               {/* Content */}
               <div className="p-8">
                <h3 className="text-2xl font-medium">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-white/70">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-mb border border-white/10 px-3 py-2 text-sm text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 px-4 py-2 text-sm transition hover:border-white/40"
                  >
                    Github
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 px-4 py-2 text-sm transition hover:border-white/40"
                  >
                    Live Demo
                  </a>
                </div>
               </div>
           </article>
          ))}
      </div>
   </section>

        {/* CONTACT */}
        <section id="contact" className="py-24">
          <h2 className="text-4xl font-medium md:text-5xl">
            Contact
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Interested in working together, discussing product development or
            frontend engineering opportunities? Let's connect.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="mailto:abubakarabdulhakeem6053@gmail.com"
              className="text-white/70 transition hover:text-white"
            >
              <FaEnvelope size={24} />
            </a>

            <a
              href="https://github.com/Bouman10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/abubakar-abdulhakeem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-white/70 transition hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-10 text-sm text-white/50">
          © 2026 cpt.Bouman. All rights reserved.
        </footer>
      </div>
    </main>
  );
}