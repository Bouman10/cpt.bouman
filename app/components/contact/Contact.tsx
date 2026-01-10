export default function Contact() {
    return (
        <section
           id="contact"
           className="min-h-screen flex items-center"
        >
            <div className="mx-auto max-w-7xl px-6 w-full">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium">
                        Contact
                    </h2>
                </div>

                {/* Contact Content */}
                <div className="max-w-md space-y-6 text-base leading-relaxed opacity-85">
                    <p>
                        if my approach aligns with what you're building, feel free to reach out.
                    </p>

                    <div className="space-y-2">
                        <p>
                            <a
                              href="mailto:abubakarabdulhakeem6053@gmail.com"
                              className="underline"
                             >
                                abubakarabdulhakeem6053@gmail.com
                             </a> 
                        </p>

                        <p>
                            <a
                              href="https://www.linkedin.com/in/abubakar-abdulhakeem"
                              target="blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                                LinkedIn
                            </a>  
                        </p>
                    </div>
                </div>
            </div>
        </section>   
    );
}