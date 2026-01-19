import { Button } from "./ui/button";
import Hawra from "../assets/MyPhoto/Hawra.JPG";

/**
 * Hero Component
 * The main landing section with the user's introduction and photo.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-10 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Left Column: Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">
          Hello <span className="text-[#FF715B]">.</span>
        </h2>

        <div className="space-y-2">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <span className="w-12 h-[2px] bg-[#FF715B]"></span>
            {/* Light mode: dark gray text, Dark mode: light gray text */}
            <p className="text-xl text-slate-600 dark:text-slate-300 font-medium">
              I'm Hawra
            </p>
          </div>
          {/* Light mode: dark text, Dark mode: white text */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
            Software Engineer
          </h1>
        </div>

        <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
          {/* mailto: link opens user's email client with your email pre-filled */}
          <a href="mailto:Hawra-Alaradi@outlook.sa">
            <Button
              size="lg"
              className="rounded-none bg-[#FF715B] hover:bg-[#ff8674]"
            >
              Got a project?
            </Button>
          </a>
          {/* 
            Download Resume Button
            - href points to the PDF in the public folder (files in public/ are served at root "/")
            - download attribute tells browser to download instead of opening in new tab
            - download="filename.pdf" also sets the downloaded file's name
          */}
          <a
            href="/Hawra-Alaradi-Resume.pdf"
            download="Hawra-Alaradi-Resume.pdf"
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-none border-slate-500"
            >
              My resume
            </Button>
          </a>
        </div>
      </div>

      {/* Right Column: Hero Image with distinctive circular background */}
      <div className="flex-1 relative flex justify-center md:justify-end">
        {/* Background Circle Element */}
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
          {/* The orange ring */}
          <div className="absolute inset-0 rounded-full border-[20px] border-[#FF715B]/20 md:border-[#FF715B]/30" />

          {/* Example Placeholder Image - In a real app, import the actual image */}
          {/* We use a colored div + emoji as a placeholder if no image exists */}
          {/* Light mode: light gray bg, Dark mode: dark gray bg */}
          <div className="absolute inset-4 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <img
              src={Hawra}
              alt="Hawra"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Decorative Arrows (SVG mimic) */}
        <div className="absolute top-1/2 -left-4 text-[#FF715B]/20 hidden md:block">
          <svg
            width="60"
            height="100"
            viewBox="0 0 60 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M50 10 L10 50 L50 90" />
          </svg>
        </div>
      </div>
    </section>
  );
}
