import { Button } from "./ui/button";
import { useState } from "react";

/**
 * Contact Form Section
 *
 * This form uses Formspree to send emails directly to your inbox.
 *
 * HOW TO SET UP:
 * 1. Go to https://formspree.io and create a free account
 * 2. Create a new form
 * 3. Copy your form endpoint (e.g., https://formspree.io/f/xxxxxxxx)
 * 4. Replace the action URL below with your endpoint
 */
export function Contact() {
  // State to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/xdaazjqq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Clear the form
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Light mode: light gray bg, Dark mode: very dark blue bg
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-[#0d1221] transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:items-start">
        {/* Left: Heading */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#FF715B]"></span>
            <span className="text-xl text-slate-600 dark:text-slate-300 font-medium">
              Contacts
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Have a project? <br />
            Let's talk!
          </h2>

          {/* Success Message */}
          {isSubmitted && (
            <div className="p-4 bg-green-500/20 border border-green-500 rounded-md text-green-400">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
        </div>

        {/* Right: Form Inputs */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-8 w-full">
          {/* Name Input */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-600 dark:text-slate-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#FF715B] transition-colors"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-600 dark:text-slate-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#FF715B] transition-colors"
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-600 dark:text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#FF715B] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-32 bg-[#FF715B] hover:bg-[#ff8674] text-white rounded-md disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
