import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names safely.
 * This is the standard utility function used in Shadcn UI.
 * It combines 'clsx' (for conditional classes) and 'tailwind-merge' (to handle conflicting Tailwind classes).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
