import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ label, title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    {label && (
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10"
      >
        {label}
      </motion.span>
    )}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">{title}</h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
