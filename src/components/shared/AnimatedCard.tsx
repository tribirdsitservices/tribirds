import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface AnimatedCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  index?: number;
}

const AnimatedCard = ({ icon: Icon, title, description, children, index = 0 }: AnimatedCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="glass-card p-7 md:p-8 group cursor-pointer"
  >
    {Icon && (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/20 transition-all"
      >
        <Icon size={26} className="text-primary" />
      </motion.div>
    )}
    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    {children}
  </motion.div>
);

export default AnimatedCard;
