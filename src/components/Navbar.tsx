import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navigation Bar Component
 * Displays the logo and navigation links.
 * Responsive: Collapses into a hamburger menu on mobile.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            className="text-slate-300 hover:text-[#FF715B] transition-colors text-sm font-medium"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button - Visible only on mobile (md:hidden) */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 right-6 bg-slate-800 p-6 rounded-lg shadow-xl flex flex-col gap-4 md:hidden border border-slate-700 w-48">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-[#FF715B] transition-colors"
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
