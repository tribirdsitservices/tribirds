import { motion } from "framer-motion";

/* Animated floating orbs and shapes for backgrounds */
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large gradient orbs */}
    <div 
      className="floating-orb orb-blue w-[500px] h-[500px] -top-40 -right-40 animate-float-slow"
    />
    <div 
      className="floating-orb orb-teal w-[400px] h-[400px] top-1/3 -left-32 animate-float-medium"
      style={{ animationDelay: "-5s" }}
    />
    <div 
      className="floating-orb orb-purple w-[350px] h-[350px] bottom-20 right-1/4 animate-float-slow"
      style={{ animationDelay: "-10s" }}
    />
    <div 
      className="floating-orb orb-blue w-[250px] h-[250px] bottom-40 left-1/3 animate-float-fast"
      style={{ animationDelay: "-3s" }}
    />

    {/* Smaller floating shapes */}
    <motion.div
      className="absolute w-4 h-4 rounded-full bg-primary/30 top-[20%] left-[15%]"
      animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-accent/40 top-[60%] right-[20%]"
      animate={{ y: [10, -15, 10], scale: [1, 1.2, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="absolute w-6 h-6 rounded-lg bg-primary/20 top-[40%] right-[10%] rotate-45"
      animate={{ rotate: [45, 90, 45], y: [-20, 20, -20] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-5 h-5 rounded-full bg-accent/30 bottom-[30%] left-[10%]"
      animate={{ y: [-15, 15, -15], x: [10, -10, 10] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    <motion.div
      className="absolute w-8 h-2 rounded-full bg-primary/15 top-[75%] left-[60%]"
      animate={{ scaleX: [1, 1.5, 1], x: [-20, 20, -20] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Floating rings */}
    <motion.div
      className="absolute w-16 h-16 rounded-full border-2 border-primary/10 top-[25%] right-[30%]"
      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute w-12 h-12 rounded-full border border-accent/15 bottom-[40%] right-[15%]"
      animate={{ scale: [1.1, 0.9, 1.1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Grid pattern overlay */}
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(217 91% 55%) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
  </div>
);

export default FloatingElements;
