import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

/**
 * Projects Section Component
 *
 * NOW FETCHES DATA FROM SUPABASE!
 *
 * How it works:
 * 1. Component mounts → useEffect runs
 * 2. fetchProjects() calls Supabase API
 * 3. Data is stored in state → component re-renders with projects
 *
 * The layout alternates: odd projects have text on left, image on right.
 * Even projects have image on left, text on right.
 */

// Define the structure matching your Supabase table columns
// Note: Supabase uses snake_case, so we match that here
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

// Projects are now fetched from Supabase instead of being hardcoded!

export function Projects() {
  // State to store projects fetched from Supabase
  const [projects, setProjects] = useState<Project[]>([]);

  // State to track loading status (shows spinner while fetching)
  const [loading, setLoading] = useState(true);

  // State to store any error messages
  const [error, setError] = useState<string | null>(null);

  /**
   * useEffect runs when the component first mounts
   * It fetches projects from Supabase and updates the state
   */
  useEffect(() => {
    async function fetchProjects() {
      try {
        // Query Supabase: SELECT * FROM Projects ORDER BY id
        const { data, error } = await supabase
          .from("Projects") // Table name in Supabase (case-sensitive!)
          .select("*") // Select all columns
          .order("id", { ascending: true }); // Order by id

        // If Supabase returns an error, throw it
        if (error) {
          throw error;
        }

        // If successful, update state with the fetched projects
        setProjects(data || []);
      } catch (err: any) {
        // If something goes wrong, store the error message
        // Show actual error for debugging
        console.error("Error fetching projects:", err);
        setError(`Failed to load projects: ${err?.message || "Unknown error"}`);
      } finally {
        // Whether success or error, stop showing the loading spinner
        setLoading(false);
      }
    }

    fetchProjects();
  }, []); // Empty array = only run once when component mounts

  // Show loading spinner while fetching
  if (loading) {
    return (
      <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#FF715B]" />
          <p className="mt-4 text-slate-500">Loading projects...</p>
        </div>
      </section>
    );
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </section>
    );
  }

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
        {/* Project Title - adapts to light/dark mode */}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        {/* Technology Tags - border and text adapt to theme */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-sm rounded-full border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-[#FF715B] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>

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
            className="inline-flex items-center gap-2 text-slate-900 dark:text-white hover:text-[#FF715B] transition-colors font-medium"
          >
            View project <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Image Side - border adapts to theme */}
      <div className="flex-1 w-full">
        <div className="relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-800/30 group">
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
