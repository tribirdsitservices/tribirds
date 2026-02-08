import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import FloatingElements from "@/components/shared/FloatingElements";
import { ENGAGEMENT_MODELS } from "@/constants";

const EngagementModels = () => (
  <>
    <section className="section-padding relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto relative z-10">
        <SectionHeading
          label="Partnership Options"
          title="Engagement Models"
          subtitle="Choose the collaboration model that best fits your project needs and organizational goals."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 flex flex-col group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6"
              >
                <model.icon size={28} className="text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{model.title}</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">{model.description}</p>
              <ul className="space-y-3 mt-auto">
                {model.features.map((f, j) => (
                  <motion.li 
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-accent" />
                    </div>
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
  </>
);

export default EngagementModels;
