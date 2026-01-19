/**
 * Tech Stack Strip
 * A visual list of technologies the developer knows.
 */
export function TechStack() {
  const techs = [
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "Javascript",
    "Typescript",
    "Next.js",
    "React",
    "Git",
    "Github",
  ];

  return (
    <div className="w-full bg-[#151b2b] py-8 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-8 text-slate-500 font-bold text-xl md:text-2xl">
        {techs.map((tech) => (
          <span
            key={tech}
            className="hover:text-slate-300 transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
