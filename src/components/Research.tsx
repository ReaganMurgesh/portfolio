"use client";

import { research } from "@/data/projects";
import { ExternalLink, Award, BookOpen, Calendar } from "lucide-react";
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

const cardVariants = {
  hidden: { opacity: 0, x: -50, rotateY: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8
    }
  }
};

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="research" className="py-24 bg-slate-800 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-l from-emerald-50 to-transparent rounded-full blur-3xl"
        initial={{ scale: 0, x: 100 }}
        animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: 100 }}
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
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Research & Publications
            </h2>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Published work plus ongoing paper development, including the EduSign platform manuscript under verification.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {research.map((paper, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-emerald-100 relative"
            >
              {/* Status badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className={`flex items-center gap-2 px-4 py-2 text-white rounded-full shadow-lg ${
                  paper.status === "in-progress"
                    ? "bg-gradient-to-r from-amber-500 to-orange-500"
                    : "bg-gradient-to-r from-emerald-500 to-green-500"
                }`}>
                  <Award size={16} />
                  <span className="text-sm font-medium">
                    {paper.status === "in-progress" ? "In Progress" : "Published"}
                  </span>
                </div>
              </div>
              
              {/* Gradient overlay */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br from-emerald-400 to-green-400 rounded-2xl"
                initial={false}
              />
              
              <div className="p-8 relative z-10">
                <div className="grid lg:grid-cols-4 gap-6 items-start">
                  {/* Main content */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-8 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full" />
                      <span className={`font-medium text-sm ${paper.status === "in-progress" ? "text-amber-600" : "text-emerald-600"}`}>
                        {paper.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                      {paper.title}
                    </h3>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {paper.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{paper.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen size={14} />
                        <span>{paper.journal}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action button */}
                  <div className="lg:col-span-1 flex lg:justify-end">
                    <motion.a
                      href={paper.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                        paper.status === "in-progress"
                          ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                          : "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{paper.status === "in-progress" ? "View Platform" : "View Research"}</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <motion.div 
                className="h-1 w-full bg-gradient-to-r from-emerald-400 to-green-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.2 + 0.7, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}