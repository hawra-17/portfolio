import { Github, Linkedin, Mail } from "lucide-react";

/**
 * Footer Component
 * Simple centered footer with social links.
 */
export function Footer() {
  return (
    // Light mode: slate bg, Dark mode: very dark bg
    <footer className="py-12 bg-slate-100 dark:bg-[#0b101b] text-center space-y-6 transition-colors">
      <h3 className="text-2xl font-bold">Hawra Alaradi </h3>
      <p className="text-slate-500 dark:text-slate-500 text-sm">
        Designed with love, all right reserved for Hawra Alaradi.
      </p>

      <div className="flex justify-center gap-6 pt-2">
        {/* mailto: link opens user's email client */}
        <a
          href="mailto:Hawra-Alaradi@outlook.sa"
          className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-[#FF715B] hover:text-white transition-all"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://github.com/hawra-17"
          className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-[#FF715B] hover:text-white transition-all"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/hawra-alaradi-136ab11b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-[#FF715B] hover:text-white transition-all"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
