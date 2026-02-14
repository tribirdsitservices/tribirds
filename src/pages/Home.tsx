import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Play, Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCard from "@/components/shared/AnimatedCard";
import CTABanner from "@/components/shared/CTABanner";
import FloatingElements from "@/components/shared/FloatingElements";
import { SERVICES, TECH_CATEGORIES, ENGAGEMENT_MODELS, CLIENT_LOGOS } from "@/constants";

/* Stagger children animation */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Home = () => (
  <>
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      <FloatingElements />
      
      <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8"
            >
              <Zap size={16} className="animate-pulse" /> 
              <span>Engineering the Future</span>
              <div className="flex -space-x-1 ml-2">
                {/* {[1, 2, 3].map((i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background" />
                ))} */}
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
            >
              We Build{" "}
              <span className="gradient-text">Digital Products</span>{" "}
              That Scale
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              From concept to deployment — premium web, mobile, and cloud solutions 
              crafted by an expert engineering team.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all"
                >
                  Get a Quote <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border-2 border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  <Play size={18} className="text-primary" /> Watch Demo
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 mt-12 pt-8 border-t border-border/50"
            >
              {[
                { value: "100%", label: "Customer Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <motion.div key={stat.label} whileHover={{ y: -3 }}>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-accent/30"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border-2 border-primary/30"
              />
              
              {/* Center content */}
              <div className="absolute inset-24 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/30">
                <div className="text-center text-white">
                  <div className="text-5xl font-bold mb-2">IT</div>
                  <div className="text-sm font-medium opacity-80">Solutions</div>
                </div>
              </div>

              {/* Floating tech badges */}
              {["React", "Node", "Cloud", "AI"].map((tech, i) => (
                <motion.div
                  key={tech}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute glass-card px-4 py-2 text-sm font-medium"
                  style={{
                    top: `${20 + i * 20}%`,
                    [i % 2 === 0 ? "left" : "right"]: "-10%",
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>
    </section>

    {/* Services Preview */}
    <section className="section-padding relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto relative z-10">
        <SectionHeading
          label="What We Do"
          title="Our Services"
          subtitle="End-to-end technology solutions tailored to your business needs."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.slice(0, 3).map((service, i) => (
            <motion.div key={service.title} variants={item}>
              <AnimatedCard icon={service.icon} title={service.title} description={service.description} index={i} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-foreground font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Technologies */}
    <section className="section-padding bg-card/50 relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto relative z-10">
        <SectionHeading
          label="Tech Stack"
          title="Technologies We Use"
          subtitle="Industry-leading tools and frameworks that power our solutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4"
              >
                <cat.icon size={24} className="text-primary" />
              </motion.div>
              <h3 className="font-semibold text-foreground mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.technologies.map((tech, j) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Engagement Models */}
    <section className="section-padding relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto relative z-10">
        <SectionHeading
          label="How We Work"
          title="Engagement Models"
          subtitle="Flexible partnership options to match your project requirements."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model, i) => (
            <AnimatedCard key={model.title} icon={model.icon} title={model.title} description={model.description} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Client Logos */}
    <section className="section-padding bg-card/50 relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeading label="Trusted By" title="Companies That Trust Us" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {CLIENT_LOGOS.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center justify-center h-20 rounded-2xl bg-card border border-border/50 text-muted-foreground font-semibold text-sm cursor-pointer hover:border-primary/30 hover:text-primary transition-all"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonial highlight */}
    <section className="section-padding relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass-card p-10 md:p-14"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-[hsl(var(--star))] fill-[hsl(var(--star))]" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
            "TriBirds delivered an exceptional product that exceeded our expectations. Their technical expertise and professionalism are unmatched."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
            <div className="text-left">
              <div className="font-semibold text-foreground">Anil Chouksay</div>
              <div className="text-sm text-muted-foreground">CEO, TakeOff</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Final CTA */}
    <CTABanner />
  </>
);

export default Home;
