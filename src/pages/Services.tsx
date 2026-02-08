import AnimatedCard from "@/components/shared/AnimatedCard";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import FloatingElements from "@/components/shared/FloatingElements";
import { SERVICES } from "@/constants";
import { motion } from "framer-motion";

const Services = () => (
  <>
    <section className="section-padding relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto relative z-10">
        <SectionHeading
          label="Our Expertise"
          title="Services We Offer"
          subtitle="Comprehensive technology services to power your digital transformation journey."
        />
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <AnimatedCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={i}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <CTABanner title="Have a project in mind?" subtitle="Tell us about your requirements and we'll craft the perfect solution." />
  </>
);

export default Services;
