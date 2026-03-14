"use client";

import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5
    }
  }
};

const categoryColors = [
  { bg: "from-blue-50 to-indigo-100", border: "border-blue-200", text: "text-blue-700", accent: "bg-blue-500" },
  { bg: "from-emerald-50 to-green-100", border: "border-emerald-200", text: "text-emerald-700", accent: "bg-emerald-500" },
  { bg: "from-violet-50 to-purple-100", border: "border-violet-200", text: "text-violet-700", accent: "bg-violet-500" },
  { bg: "from-orange-50 to-red-100", border: "border-orange-200", text: "text-orange-700", accent: "bg-orange-500" },
  { bg: "from-cyan-50 to-blue-100", border: "border-cyan-200", text: "text-cyan-700", accent: "bg-cyan-500" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-24 bg-slate-800 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div 
        className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-l from-indigo-100 via-purple-50 to-transparent rounded-full blur-3xl"
        initial={{ scale: 0, x: 100 }}
        animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: 100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Skills & Tools
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((skillCategory, categoryIndex) => {
            const colors = categoryColors[categoryIndex % categoryColors.length];
            
            return (
              <motion.div 
                key={categoryIndex}
                variants={categoryVariants}
                whileHover={{ y: -5 }}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${colors.bg} ${colors.border} border backdrop-blur-sm`}
              >
                {/* Category accent */}
                <motion.div 
                  className={`absolute top-0 left-6 w-12 h-1 ${colors.accent} rounded-full`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: categoryIndex * 0.2 + 0.5, duration: 0.8 }}
                />
                
                <motion.h3 
                  className={`font-bold text-lg ${colors.text} mb-6 pt-2 flex items-center gap-2`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: categoryIndex * 0.2 + 0.3 }}
                >
                  <span className="text-xl">{skillCategory.icon}</span>
                  {skillCategory.category}
                </motion.h3>
                
                <motion.div 
                  variants={containerVariants}
                  className="space-y-3"
                >
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        x: 5,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="group bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-white/50"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${colors.text} group-hover:${colors.text.replace('700', '800')} transition-colors`}>
                          {skill}
                        </span>
                        <motion.div 
                          className={`w-2 h-2 ${colors.accent} rounded-full opacity-0 group-hover:opacity-100`}
                          initial={false}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      {/* Skill level indicator */}
                      <motion.div 
                        className={`mt-2 h-1 bg-gray-200 rounded-full overflow-hidden`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div 
                          className={`h-full ${colors.accent} rounded-full`}
                          initial={{ width: "0%" }}
                          whileHover={{ width: `${75 + Math.random() * 25}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}