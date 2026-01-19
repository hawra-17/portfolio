import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

/**
 * Theme Context
 *
 * This file creates a "global state" for the theme (dark/light mode).
 *
 * WHY WE NEED THIS:
 * - The theme needs to be accessible from ANY component (Navbar, Hero, Footer, etc.)
 * - React's Context API lets us share data without passing props through every level
 *
 * HOW IT WORKS:
 * 1. ThemeProvider wraps the entire app (in App.tsx)
 * 2. Any component can call useTheme() to get/set the current theme
 * 3. Theme is saved to localStorage so it persists when user refreshes the page
 */

// Define the possible theme values
type Theme = "dark" | "light";

// Define what the context will provide to components
interface ThemeContextType {
  theme: Theme; // Current theme ("dark" or "light")
  toggleTheme: () => void; // Function to switch between themes
}

// Create the context with undefined as default (will be set by Provider)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider Component
 *
 * This wraps your app and provides theme state to all child components.
 * It also handles:
 * - Loading saved theme from localStorage on first load
 * - Saving theme to localStorage when it changes
 * - Adding/removing CSS class on the <html> element for styling
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize theme state
  // We use a function to check localStorage only once on mount
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if there's a saved theme in localStorage
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) {
        return savedTheme;
      }
    }
    // Default to dark mode (matches your current design)
    return "dark";
  });

  // Effect: Update the DOM and localStorage when theme changes
  useEffect(() => {
    // Get the root <html> element
    const root = document.documentElement;

    // Remove both classes first, then add the current one
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Save to localStorage so theme persists after refresh
    localStorage.setItem("theme", theme);
  }, [theme]); // This runs whenever 'theme' changes

  // Function to toggle between dark and light
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Provide the theme and toggle function to all children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme Hook
 *
 * Custom hook that components use to access the theme.
 *
 * USAGE:
 * const { theme, toggleTheme } = useTheme();
 *
 * - theme: "dark" or "light"
 * - toggleTheme: call this to switch modes
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  // Safety check: make sure useTheme is used inside ThemeProvider
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
