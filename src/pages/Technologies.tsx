import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import FloatingElements from "@/components/shared/FloatingElements";
import { TECH_CATEGORIES } from "@/constants";

const Technologies = () => (
  <>
    <section className="section-padding relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto relative z-10">
        <SectionHeading
          label="Our Stack"
          title="Technologies We Master"
          subtitle="We leverage the best tools in the industry to deliver exceptional results."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center"
                >
                  <cat.icon size={28} className="text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-foreground">{cat.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {cat.technologies.map((tech, j) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-secondary/70 text-sm text-foreground font-medium group-hover:bg-secondary transition-colors"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
  </>
);

export default Technologies;
