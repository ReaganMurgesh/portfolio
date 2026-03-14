"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BeyondCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = [
    "Cricket", "taught", "me", "patience,", "discipline,", "and", "respect", "for", "the", "long", "game.",
    "I", "bring", "the", "same", "mindset", "to", "building", "software", "—", "steady", "progress,",
    "thoughtful", "decisions,", "and", "consistency", "over", "quick", "wins."
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Cricket ball floating animation */}
      <motion.div 
        className="absolute top-20 right-20 w-4 h-4 bg-red-400 rounded-full shadow-lg"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, -5, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* Quote marks */}
        <motion.div 
          className="text-6xl md:text-8xl text-slate-700 font-serif mb-8"
          initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.5, rotateY: 90 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          “
        </motion.div>
        
        {/* Animated quote text */}
        <motion.div className="max-w-4xl mx-auto">
          <div className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2 md:mr-3"
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: -90 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.1,
                  color: "#60a5fa",
                  transition: { duration: 0.2 }
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Closing quote */}
        <motion.div 
          className="text-6xl md:text-8xl text-slate-700 font-serif mt-8 flex justify-end max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.5, rotateY: -90 }}
          transition={{ duration: 1, delay: 3, ease: "easeOut" }}
        >
          ”
        </motion.div>
        
        {/* Attribution */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mb-4" />
          <p className="text-slate-500 italic text-sm tracking-wide">Philosophy</p>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute bottom-10 left-10 w-2 h-2 bg-emerald-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-16 right-32 w-1 h-1 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  );
}