import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, MapPin } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import FloatingElements from "@/components/shared/FloatingElements";
import { CONTACT_INFO, SERVICE_OPTIONS } from "@/constants";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...form,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setForm(initialForm);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <FloatingElements />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading
          label="Get In Touch"
          title="Contact Us"
          subtitle="Have a project in mind? We'd love to hear about it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="font-semibold text-lg mb-6">Contact Details</h3>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Mail className="text-primary" />
                  <a href={`mailto:${CONTACT_INFO.email}`}>
                    {CONTACT_INFO.email}
                  </a>
                </li>

                <li className="flex gap-4">
                  <Phone className="text-accent" />
                  <a href={`tel:${CONTACT_INFO.phone}`}>
                    {CONTACT_INFO.phone}
                  </a>
                </li>

                <li className="flex gap-4">
                  <MapPin />
                  Remote-First, Global Reach
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            {success ? (
              <div className="glass-card p-12 text-center">
                <CheckCircle2 size={64} className="mx-auto text-accent mb-6" />
                <h3 className="text-2xl font-semibold mb-3">Thank you!</h3>
                <p>Your message has been sent successfully.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="glass-card p-8 space-y-5"
              >
                {/* Netlify hidden inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className={inputClass}
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={inputClass}
                  />

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Service Required *</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project *"
                  required
                  rows={5}
                  className={inputClass + " resize-none"}
                />

                {error && <p className="text-destructive text-sm">{error}</p>}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
