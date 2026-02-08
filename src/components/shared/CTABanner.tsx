import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

const CTABanner = ({
  title = "Ready to build something amazing?",
  subtitle = "Let's turn your vision into reality with cutting-edge technology.",
}: CTABannerProps) => (
  <section className="section-padding relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto"
    >
      <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center bg-gradient-to-br from-primary via-primary to-accent">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], x: [-20, 20, -20] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full"
          />
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-10 left-1/4 w-4 h-4 bg-white/30 rounded-full"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 right-1/3 w-3 h-3 bg-white/20 rounded-full"
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6"
          >
            <Sparkles size={14} /> Let's Talk
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">{title}</h2>
          <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">{subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary font-semibold shadow-xl hover:shadow-2xl transition-shadow"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default CTABanner;
