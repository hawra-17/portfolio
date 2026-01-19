import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/**
 * Navigation Bar Component
 * Displays the logo, navigation links, and theme toggle button.
 * Responsive: Collapses into a hamburger menu on mobile.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Get theme state and toggle function from our ThemeContext
  // theme: current mode ("dark" or "light")
  // toggleTheme: function to switch between modes
  const { theme, toggleTheme } = useTheme();

  // Navigation items list for easy management
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contact" },
  ];

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex items-center justify-between relative z-50">
      {/* Logo Section */}
      <div className="text-2xl font-bold tracking-tight">Hawra Alaradi</div>

      {/* Desktop Navigation - Hidden on mobile (hidden md:flex) */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-slate-600 dark:text-slate-300 hover:text-[#FF715B] transition-colors text-sm font-medium"
          >
            {item.name}
          </a>
        ))}

        {/* 
          Theme Toggle Button (Desktop)
          
          HOW IT WORKS:
          - Shows Sun icon when in dark mode (clicking will switch to light)
          - Shows Moon icon when in light mode (clicking will switch to dark)
          - onClick calls toggleTheme() from our context to switch modes
        */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          aria-label="Toggle theme"
        >
          {/* Conditional rendering: show Sun in dark mode, Moon in light mode */}
          {theme === "dark" ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile: Theme Toggle + Menu Button */}
      <div className="flex items-center gap-4 md:hidden">
        {/* Theme Toggle Button (Mobile) */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-slate-700" />
          )}
        </button>

        {/* Hamburger Menu Button */}
        <button
          className="text-slate-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 right-6 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl flex flex-col gap-4 md:hidden border border-slate-200 dark:border-slate-700 w-48">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-600 dark:text-slate-300 hover:text-[#FF715B] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
