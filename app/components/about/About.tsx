export default function About() {
    return (
        <section
           id="about"
           className="min-h-screen flex items-center"
        >
           <div className="mx-auto max-w-7xl px-6 w-full">

            {/* Section Header */}
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-medium">
                    About
                </h2>
            </div>

            {/* About Content */}
            <div className="max-w-xl space-y-6 text-base leading-relaxed opacity-85">
                <p>
                  I approach front-end development as a system design problem.
                  Before writing code, I focus on understanding structure, data flow,
                  and how decisions move through an interface.
                </p>

                 <p>
                   My work prioritizes clarity — clean component boundaries, predictable
                   state, and layouts that guide users without friction. I value
                   simplicity not as minimalism, but as control.
                 </p>

                 <p>
                    Teams I work with get someone who thinks beyond screens — connecting
                    APIs logically, anticipating scale, and building interfaces that feel
                    calm, intentional, and easy to use.
                 </p> 
            </div>

           </div>
        </section>
    );
}