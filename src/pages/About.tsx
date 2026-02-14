import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Rocket, HeartHandshake, Users } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import FloatingElements from "@/components/shared/FloatingElements";

const WHY_US = [
  { icon: ShieldCheck, title: "Proven Expertise", desc: "Years of experience delivering enterprise-grade solutions across industries." },
  { icon: Rocket, title: "Agile Delivery", desc: "Iterative development with continuous feedback loops for faster time-to-market." },
  { icon: HeartHandshake, title: "Client-Centric", desc: "Your success is our success. We're partners, not vendors." },
];

const TEAM_STATS = [
  // { value: "100%", label: "Client Satisfaction" },
  // { value: "24/7", label: "Support Available" },
];

const About = () => (
  <>
    {/* Intro */}
    <section className="section-padding relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeading label="Who We Are" title="About TriBirds IT Services" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg leading-relaxed text-center mb-12"
        >
          TriBirds IT Services is a forward-thinking technology company specializing in web, mobile, 
          cloud, and blockchain solutions. We partner with startups and enterprises alike to build 
          digital products that drive real business outcomes.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {TEAM_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-card/50 relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-card p-8"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6"
            >
              <Target size={28} className="text-primary" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with innovative technology solutions that accelerate growth, 
              enhance efficiency, and create lasting competitive advantages in the digital landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-card p-8"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6"
            >
              <Eye size={28} className="text-accent" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted technology partner for businesses worldwide, known for 
              excellence, innovation, and measurable impact in every project we deliver.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto relative z-10">
        <SectionHeading label="Our Edge" title="Why Choose Us" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-5"
              >
                <item.icon size={30} className="text-primary" />
              </motion.div>
              <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team teaser
    <section className="section-padding bg-card/50 relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeading label="Our People" title="Meet the Team" subtitle="A passionate team of engineers, designers, and strategists." />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex -space-x-4">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, zIndex: 10 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background flex items-center justify-center text-white font-semibold shadow-lg"
              >
                <Users size={20} />
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="w-16 h-16 rounded-full bg-secondary border-4 border-background flex items-center justify-center text-foreground font-semibold shadow-lg"
            >
              +6
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section> */}

    <CTABanner title="Let's work together" subtitle="Ready to start your next project? We'd love to hear from you." />
  </>
);

export default About;
