"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-blue-50 to-transparent rounded-full blur-3xl"
        initial={{ scale: 0, x: 100 }}
        animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: 100 }}
        transition={{ duration: 1.2 }}
      />
      
      <div className="max-w-4xl mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center tracking-tight"
          >
            About
          </motion.h2>
          
          <div className="space-y-8">
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <motion.div 
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed pl-8">
                I love building software that goes beyond experiments and demos — real systems 
                that people actually use, that can scale, and that run reliably in the real world.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <motion.div 
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-violet-500 rounded-full"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed pl-8">
                My work sits at the intersection of data science, machine learning, and application 
                development. I enjoy taking ideas end-to-end — from data and models to mobile apps, 
                web platforms, and backend services — with a strong focus on clean architecture, 
                scalability, and real-world impact.
              </p>
            </motion.div>
          </div>
          
          {/* Key highlights */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: "🔬", title: "Research & Analysis", desc: "Data-driven insights" },
              { icon: "🛠️", title: "End-to-End Development", desc: "From concept to production" },
              { icon: "🚀", title: "Real-World Impact", desc: "Scalable, reliable systems" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}