import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Zakat from "../assets/projectsImage/Zakat.png";
import Alnas from "../assets/projectsImage/AlNas.png";

/**
 * Projects Section Component
 *
 * Displays a grid of project cards, each containing:
 * - Project title
 * - Technology tags (HTML, CSS, Javascript, etc.)
 * - Project description
 * - Links to GitHub and live demo
 * - Screenshot/preview image
 *
 * The layout alternates: odd projects have text on left, image on right.
 * Even projects have image on left, text on right.
 */

// Define the structure of a project for type safety
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

// Array of projects - easy to add/remove/modify
const projects: Project[] = [
  {
    id: 1,
    title: "Zakat Calculator",
    description:
      "I have developed a user-friendly web application that facilitates the calculation of zakat for individuals. The application is constructed utilizing",
    tags: ["React js", "Tailwind CSS", "Javascript", "hosted on GitHub Pages."],
    githubUrl: "https://github.com/hawra-17/Zakat-calc",
    liveUrl: "https://hawra-17.github.io/Zakat-calc/",
    image: Zakat,
  },
  {
    id: 2,
    title: "To do List",
    description:
      "I have developed a user-friendly web application designed to assist individuals in organizing their schedules. The application serves as a straightforward to-do list and was constructed using",
    tags: ["HTML", "Tailwind CSS", "Javascript"],
    githubUrl: "https://github.com/hawra-17/To-do",
    liveUrl: "#",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop", // Movie themed image
  },
  {
    id: 3,
    title: "Al Nas AI Chatbot",
    description:
      "I have developed a user-friendly web application for Al Nas Hospital, which belongs to ADES Company. The web application provides an AI-powered assistant that helps users interact, ask questions, and receive intelligent responses through a simple and modern interface, with a focus on accessibility and smooth user experience",
    tags: [
      "Next.js,",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "AI API integration",
    ],
    githubUrl: "https://github.com/hawra-17/AlNas-AI",
    liveUrl: "https://al-nas-ai.vercel.app/",
    image: Alnas,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FF715B]">
          Projects
        </h2>
        {/* Decorative vertical line under title */}
        <div className="w-[2px] h-16 bg-[#FF715B] mx-auto mt-6"></div>
      </div>

      {/* Projects List */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isReversed={index % 2 !== 0} // Alternate layout direction
          />
        ))}
      </div>
    </section>
  );
}

/**
 * Individual Project Card Component
 *
 * @param project - The project data to display
 * @param isReversed - If true, image appears on left; if false, image on right
 */
function ProjectCard({
  project,
  isReversed,
}: {
  project: Project;
  isReversed: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-8 items-center ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Text Content Side */}
      <div className="flex-1 space-y-6">
        {/* Project Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {project.title}
        </h3>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-sm rounded-full border border-slate-600 text-slate-300 hover:border-[#FF715B] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <p className="text-slate-400 leading-relaxed">{project.description}</p>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-2">
          {/* Wrap button in <a> tag to make it clickable */}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#FF715B] hover:bg-[#ff8674] text-white"
            >
              View Github
            </Button>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-[#FF715B] transition-colors font-medium"
          >
            View project <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full">
        <div className="relative rounded-lg overflow-hidden border border-slate-700/50 bg-slate-800/30 group">
          {/* Project Screenshot */}
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-64 md:h-80 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          {/* Subtle gradient overlay for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
