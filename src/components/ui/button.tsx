import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * Button Component (Shadcn-style, simplified)
 *
 * This is a reusable button with multiple visual variants.
 * We removed the dependencies on @radix-ui/react-slot and class-variance-authority
 * to keep it simple and working without extra packages.
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    // Base styles for all buttons
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF715B] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    // Variant styles matching the orange/dark theme in the image
    const variants = {
      primary: "bg-[#FF715B] text-white hover:bg-[#FF715B]/90 shadow-md",
      outline:
        "border border-slate-600 bg-transparent hover:bg-slate-800 text-white",
      ghost: "hover:bg-slate-800 text-slate-300 hover:text-white",
      link: "text-[#FF715B] underline-offset-4 hover:underline",
    };

    // Size variants
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    // Combine all classes using our cn() utility
    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
