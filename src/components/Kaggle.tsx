"use client";

import { kaggleProjects } from "@/data/projects";
import { ExternalLink, TrendingUp, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

export default function Kaggle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-transparent rounded-full blur-3xl"
        initial={{ scale: 0, x: -100 }}
        animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Kaggle Competitions
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Data science competitions and machine learning projects on the world's largest data science platform
          </p>
          
          {/* Kaggle Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={cardVariants} className="text-center">
              <div className="text-3xl font-bold text-blue-600">2</div>
              <div className="text-slate-600">Upvotes</div>
            </motion.div>
            <motion.div variants={cardVariants} className="text-center">
              <div className="text-3xl font-bold text-indigo-600">10</div>
              <div className="text-slate-600">Forks</div>
            </motion.div>
            <motion.div variants={cardVariants} className="text-center">
              <div className="text-3xl font-bold text-emerald-600">5+</div>
              <div className="text-slate-600">Projects</div>
            </motion.div>
          </motion.div>
          
          <motion.a
            href="https://www.kaggle.com/reaganmurgesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span>View Kaggle Profile</span>
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
        
        {/* Kaggle Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {kaggleProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'draft' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{project.updated}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>↑ {project.upvotes}</span>
                      <span>💬 {project.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom gradient bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}