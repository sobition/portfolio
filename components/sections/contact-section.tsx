import React from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { Mail, MapPin } from "lucide-react";

const ContactSection = React.forwardRef<HTMLElement>((_, ref) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = React.useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const fallbackEmail = "sobition@gmail.com";

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
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          data?.fallbackEmail
            ? `The form is unavailable right now. Email me directly at ${data.fallbackEmail}.`
            : "Failed to send. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        `The form is unavailable right now. Email me directly at ${fallbackEmail}.`
      );
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
          <h2 className="text-5xl font-bold mb-4">
            Open to product engineering conversations
          </h2>
          <p className="max-w-2xl text-gray-300">
            Especially relevant for fintech, AI-first, and product teams that
            need someone who can move across frontend, backend-adjacent
            systems, and delivery constraints.
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-12 mt-16 items-start">
          <AnimateOnScroll
            animation="fade-right"
            delay={100}
            className="lg:w-5/12"
          >
            <div className="relative bg-[#0f1631] rounded-2xl p-8 overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(66,133,244,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(162,89,255,0.14),transparent_38%)]" />
              <div className="relative space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#25b6d2]">
                    Contact
                  </p>
                  <h3 className="text-3xl font-semibold mt-3">
                    Prefer a direct route?
                  </h3>
                  <p className="text-gray-300 mt-3 leading-relaxed">
                    If you prefer direct contact, use email or LinkedIn. Both
                    are always available.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${fallbackEmail}`}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#4285f4]/40 hover:bg-white/10 transition-colors"
                  >
                    <div className="rounded-lg bg-[#4285f4]/15 p-3 text-[#4285f4]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <div className="text-gray-300">{fallbackEmail}</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="rounded-lg bg-[#a259ff]/15 p-3 text-[#a259ff]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Location</div>
                      <div className="text-gray-300">Haarlem, The Netherlands</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="https://linkedin.com/in/sobhan-aminnejad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-3 text-gray-200 hover:border-[#4285f4]/40 hover:text-white transition-colors"
                  >
                    <LinkedinIcon name="linkedin" size={20} />
                    LinkedIn
                  </Link>
                  <Link
                    href="https://github.com/sobition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-3 text-gray-200 hover:border-[#4285f4]/40 hover:text-white transition-colors"
                  >
                    <GithubIcon name="github" size={20} />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll
            animation="fade-left"
            delay={200}
            className="lg:w-7/12 w-full"
          >
            <form
              className="space-y-6 rounded-2xl border border-white/5 bg-[#0f1631] p-8"
              onSubmit={handleSubmit}
            >
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
                  {errorMessage}
                  <a
                    href={`mailto:${fallbackEmail}`}
                    className="ml-1 underline underline-offset-4"
                  >
                    Email directly
                  </a>
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
