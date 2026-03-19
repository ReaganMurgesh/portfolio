"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ReaganMurgesh",
    color: "hover:text-white hover:bg-gray-800",
    description: "17+ Repositories"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/reagan-murgesh/",
    color: "hover:text-white hover:bg-blue-600",
    description: "Professional Network"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:reaganmurgesh@gmail.com",
    color: "hover:text-white hover:bg-emerald-600",
    description: "Get in Touch"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6 }
  }
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-16 bg-slate-900 text-white border-t border-slate-700 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* M.S. Dhoni Quote */}
          <motion.div 
            variants={itemVariants} 
            className="mb-16 border-b border-white/5 pb-12"
          >
            <p className="text-xl md:text-2xl font-mono text-white mb-4 italic">
              "Process is more important than the result."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-8 bg-orange-500" />
              <span className="text-slate-400 text-sm uppercase tracking-widest font-bold">M.S. Dhoni</span>
              <div className="h-0.5 w-8 bg-orange-500" />
            </div>
          </motion.div>

          {/* CTA Text */}
          <motion.div variants={itemVariants} className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              I'm always interested in learning, collaborating, and working on meaningful problems.
              If something here resonates with you, feel free to connect.
            </p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  className={`group relative p-4 rounded-2xl bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 text-slate-400 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                  variants={socialVariants}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icon glow effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  <Icon size={28} className="relative z-10" />
                  
                  {/* Tooltip */}
                  <motion.div 
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                  >
                    {social.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
          
          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mb-8"
          />
          
          {/* Copyright */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm"
          >
            <p>&copy; 2026 Reagan. All rights reserved.</p>
            <motion.button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={16} className="group-hover:animate-bounce" />
              <span>Back to top</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom accent */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-violet-500"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </footer>
  );
}