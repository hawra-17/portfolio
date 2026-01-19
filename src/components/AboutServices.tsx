import { Code2, Smartphone, Server } from "lucide-react";

/**
 * About & Services Section
 * Combines the "About me" text with the services offered list.
 */
export function AboutServices() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column: Services List */}
        <div className="space-y-8 relative">
          {/* The vertical orange timeline-like line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-[#FF715B]/30 rounded-full"></div>

          {/* Service Item 1 */}
          <div className="relative flex items-center gap-6 group">
            {/* Dot on the line */}
            <div className="absolute left-0 w-5 h-5 rounded-full bg-[#FF715B] border-4 border-[#0f172a] z-10"></div>

            {/* Icon Box */}
            <div className="ml-8 w-12 h-12 flex items-center justify-center rounded border border-white/10 bg-slate-800/50 group-hover:border-[#FF715B] transition-colors">
              <Code2 className="text-white w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold">Website Development</h3>
          </div>

          {/* Service Item 2 */}
          {/* <div className="relative flex items-center gap-6 group">
            <div className="absolute left-0 w-5 h-5 rounded-full bg-[#FF715B] border-4 border-[#0f172a] z-10"></div>

            <div className="ml-8 w-12 h-12 flex items-center justify-center rounded border border-white/10 bg-slate-800/50 group-hover:border-[#FF715B] transition-colors">
              <Smartphone className="text-white w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold">App Development</h3>
          </div> */}

          {/* Service Item 3 */}
          <div className="relative flex items-center gap-6 group">
            <div className="absolute left-0 w-5 h-5 rounded-full bg-[#FF715B] border-4 border-[#0f172a] z-10"></div>

            <div className="ml-8 w-12 h-12 flex items-center justify-center rounded border border-white/10 bg-slate-800/50 group-hover:border-[#FF715B] transition-colors">
              <Server className="text-white w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold">Website Hosting</h3>
          </div>
        </div>

        {/* Right Column: About Me Text and Stats */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">About me</h2>

          <p className="text-slate-400 leading-relaxed">
            Hawra Alaradi is a software engineer passionate about application
            and web development. I enjoy exploring new technologies and
            frameworks to build practical software solutions that make everyday
            tasks easier.
          </p>

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="space-y-1">
              <h4 className="text-3xl font-bold text-white">
                120 <span className="text-[#FF715B]">+</span>
              </h4>
              <p className="text-sm text-slate-400">Completed Projects</p>
            </div>

            <div className="space-y-1">
              <h4 className="text-3xl font-bold text-white">
                95 <span className="text-[#FF715B]">%</span>
              </h4>
              <p className="text-sm text-slate-400">Client satisfaction</p>
            </div>

            <div className="space-y-1">
              <h4 className="text-3xl font-bold text-white">
                10 <span className="text-[#FF715B]">+</span>
              </h4>
              <p className="text-sm text-slate-400">Years of experience</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
