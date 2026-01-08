export default function Projects() {
    return (
        <section id="projects"
        className="min-h-screen flex items-center">
            <div className="mx-auto max-w-7xl px-6 w-full">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium">
                        Projects
                    </h2>
                    <p className="mt-2 max-w-md opacity-70">
                        Selected work focused on structure, clarity, and real-world usability.
                    </p>
                </div>

                {/* Project Card */}
                <div className="border-b pb-12">
                    <h3 className="text-xl md:text-2xl font-medium">
                        Movie Recommendation App
                    </h3>

                    <p className="mt-2 teext-sm opacity-60">
                        ALX ProDev Front-End Project
                    </p>

                    <p className="mt-4 max-w-lg leading-relaxed opacity-80">
                       A production-style front-end application focused on building an
                       API-driven interface with clear data flow and reusable components. 
                    </p>

                    {/* System Highlights */}
                    <ul className="mt-6 space-y-2 text-sm opacity-75">
                      <li>• Structured API integration with loading and error handling</li>
                      <li>• Dynamic routing designed for scalable content pages</li>
                      <li>• Local persistence used intentionally for user personalization</li>  
                    </ul>

                    {/* Actions */}
                    <div className="mt-6 flex gap-6 text-sm">
                         <a
                           href="https://movie-recommendation-app-delta-rosy.vercel.app/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="underline"
                         >
                           View Live
                         </a>

                         <a
                            href="https://github.com/Bouman10/movie-recommendation-app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-70 hover:opacity-100 transition"
                          >
                            View Code
                         </a>
                    </div>
                </div>
            </div>
        </section>
    );
}