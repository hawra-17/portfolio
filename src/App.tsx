import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { AboutServices } from "./components/AboutServices";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

/**
 * Main App Component
 *
 * THEME SYSTEM EXPLANATION:
 *
 * 1. ThemeProvider wraps everything - it manages dark/light state globally
 *
 * 2. The main div uses Tailwind's dark mode classes:
 *    - "bg-white" = light mode background
 *    - "dark:bg-[#0f172a]" = dark mode background
 *
 * 3. How Tailwind dark mode works:
 *    - When <html> has class="dark", all "dark:xxx" classes are applied
 *    - When <html> has class="light", the regular classes are applied
 *    - Our ThemeContext adds/removes "dark" class on <html>
 */
function App() {
  return (
    // ThemeProvider MUST wrap everything that needs theme access
    <ThemeProvider>
      {/* 
        Main container with theme-aware colors:
        - Light mode: white background, dark text
        - Dark mode: dark slate background, light text
        
        The "dark:" prefix means "apply this class when in dark mode"
      */}
      <div className="min-h-screen bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#FF715B] selection:text-white transition-colors duration-300">
        {/* 
           Structure is broken down into semantic components:
           - Navbar: Navigation + Theme Toggle
           - Hero: First screen
           - TechStack: The list of skills bar
           - AboutServices: "Services" list on left, "About Me" on right
           - Projects: Portfolio showcase with alternating layout
           - Contact: The "Have a project?" form
           - Footer: Copyright and social links
        */}
        <Navbar />

        <main>
          <Hero />
          <TechStack />
          <AboutServices />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
