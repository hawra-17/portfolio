import { Button } from "./ui/button";

/**
 * Contact Form Section
 * A simple dark-themed contact form.
 */
export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-[#0d1221]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:items-start">
        {/* Left: Heading */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#FF715B]"></span>
            <span className="text-xl text-slate-300 font-medium">Contacts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Have a project? <br />
            Let's talk!
          </h2>
          <div className="pt-8">
            <Button
              size="lg"
              className="w-32 bg-[#FF715B] hover:bg-[#ff8674] text-white rounded-md"
            >
              Submit
            </Button>
            {/* Note: In a real form, this button would be inside the form or hooked to state. 
                Visual matching placing it here based on some layouts, but typically it goes under the inputs.
                Looking at the design image, the button is actually on the left under the text! 
            */}
          </div>
        </div>

        {/* Right: Form Inputs */}
        <div className="flex-1 space-y-8 w-full">
          {/* Name Input */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-[#FF715B] transition-colors"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-[#FF715B] transition-colors"
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-[#FF715B] transition-colors resize-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
