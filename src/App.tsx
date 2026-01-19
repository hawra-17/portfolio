import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { AboutServices } from "./components/AboutServices";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-[#FF715B] selection:text-white">
      {/* 
         Structure is broken down into semantic components:
         - Navbar: Navigation
         - Hero: First screen
         - TechStack: The list of skills bar
         - AboutServices: "Services" list on left, "About Me" on right
         - Contact: The "Have a project?" form
         - Footer: Copyright and social links
      */}
      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <AboutServices />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
