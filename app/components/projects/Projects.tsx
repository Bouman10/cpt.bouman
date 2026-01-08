export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-7xl px-6 w-full">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium">
            Projects
          </h2>
          <p className="mt-2 max-w-md opacity-70">
            Selected work focused on structure, clarity, and real-world usability.
          </p>
        </div>

        {/* Project list (wire) */}
        <div className="space-y-10">
          <div className="border-b pb-6">
            <h3 className="text-xl">Project One</h3>
            <p className="opacity-70 mt-2 max-w-md">
              Short description of the problem solved and your role.
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-xl">Project Two</h3>
            <p className="opacity-70 mt-2 max-w-md">
              Another focused, outcome-driven description.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}