import React from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";

const ContactSection = React.forwardRef<HTMLElement>((_, ref) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = React.useState<null | "success" | "error">(null);
  const [submitting, setSubmitting] = React.useState(false);

  const isFormValid =
    form.name.trim() &&
    form.email.trim() &&
    form.subject.trim() &&
    form.message.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 bg-[#0a0d1d] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-5xl font-bold mb-6">
            Let's start something great together
          </h2>
        </AnimateOnScroll>
        <div className="flex flex-col lg:flex-row mt-16">
          <AnimateOnScroll
            animation="fade-right"
            delay={100}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Binary code background */}
              <div className="absolute -z-10 left-0 bottom-0 text-[#4285f4]/10 text-xs font-mono">
                01100010 01100101 01101011 01101011 01100001 01110010 01101101
                01100101 01110010 01110111 01100001 01101110
              </div>

              {/* Data visualization */}
              <div className="absolute -z-10 right-0 bottom-0 w-[400px] h-[200px]">
                <div className="w-full h-full bg-gradient-to-r from-[#4285f4]/0 via-[#4285f4]/20 to-[#a259ff]/30 blur-xl"></div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll
            animation="fade-left"
            delay={200}
            className="lg:w-1/2"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-300 block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-[#0f1631] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4285f4]"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-300 block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-[#0f1631] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4285f4]"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-gray-300 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-[#0f1631] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4285f4]"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 block">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-[#0f1631] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4285f4]"
                  placeholder="Your message"
                  rows={4}
                ></textarea>
              </div>
              <Button
                className="bg-[#4285f4] hover:bg-[#3b77db] text-white px-8 py-6"
                type="submit"
                disabled={!isFormValid || submitting}
              >
                {submitting ? "Sending..." : "Send"}
              </Button>
              {status === "success" && (
                <div className="text-green-400 text-sm">Message sent!</div>
              )}
              {status === "error" && (
                <div className="text-red-400 text-sm">
                  Failed to send. Please try again.
                </div>
              )}
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
