import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS, CONTACT_INFO, CONTACT_INFO_2 } from "@/constants";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="relative bg-foreground text-background overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
    
    <div className="container mx-auto px-4 py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TB</span>
            </div>
            <span className="font-bold text-xl">TriBirds IT Services</span>
          </div>
          <p className="text-background/70 text-sm leading-relaxed max-w-sm mb-6">
            Delivering cutting-edge technology solutions that drive business growth and digital transformation across the globe.
          </p>
          <div className="flex gap-3">
            {["Tw", "Li", "Gh"].map((social) => (
              <motion.div
                key={social}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-sm font-semibold cursor-pointer hover:bg-primary transition-colors"
              >
                {social}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/50">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="group text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-1">
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/50">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <Mail size={14} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-background/50 mb-0.5">Email</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-background/70 hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
                < br></br>
                <a href={`mailto:${CONTACT_INFO_2.email}`} className="text-sm text-background/70 hover:text-primary transition-colors">
                  {CONTACT_INFO_2.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <Phone size={14} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-background/50 mb-0.5">Phone</p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="text-sm text-background/70 hover:text-accent transition-colors">
                  {CONTACT_INFO.phone}
                </a>
                <br></br>
                 <a href={`tel:${CONTACT_INFO_2.phone.replace(/\s/g, "")}`} className="text-sm text-background/70 hover:text-accent transition-colors">
                  {CONTACT_INFO_2.phone}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-background/50">
          © {new Date().getFullYear()} TriBirds IT Services. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-background/50">
          <a href="#" className="hover:text-background transition-colors">Privacy</a>
          <a href="#" className="hover:text-background transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
