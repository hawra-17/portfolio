/**
 * Tech Stack Strip
 * A visual list of technologies the developer knows.
 * Uses react-fast-marquee for smooth scrolling animation.
 */
import Marquee from "react-fast-marquee";

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
    // Light mode: light gray bg, Dark mode: dark blue bg
    <div className="w-full bg-slate-100 dark:bg-[#151b2b] py-8 border-y border-slate-200 dark:border-slate-800/50 transition-colors">
      <Marquee speed={70} gradient={false} pauseOnHover={true}>
        {techs.map((tech) => (
          <span
            key={tech}
            className="mx-8 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-default font-bold text-xl md:text-2xl"
          >
            {tech}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
