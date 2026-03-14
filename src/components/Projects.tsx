"use client";

import { flagshipProjects, mlProjects, webProjects } from "@/data/projects";
import { ExternalLink, Lock, Zap, Brain, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

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
  hidden: { opacity: 0, y: 50, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8
    }
  }
};

const categories = [
  { id: "flagship", label: "Flagship Projects", icon: Zap, projects: flagshipProjects, color: "blue" },
  { id: "ml", label: "ML & Data Science", icon: Brain, projects: mlProjects, color: "emerald" },
  { id: "web", label: "Web & Application Portfolio", icon: Globe, projects: webProjects, color: "violet" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "live": return "bg-green-100 text-green-700";
    case "development": return "bg-blue-100 text-blue-700";
    case "research": return "bg-purple-100 text-purple-700";
    case "private": return "bg-gray-100 text-gray-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

const getCategoryColor = (color: string) => {
  const colors = {
    blue: {
      gradient: "from-blue-500 to-indigo-500",
      bg: "from-blue-50 to-indigo-50",
      border: "border-blue-200",
      text: "text-blue-600",
      hover: "hover:border-blue-300"
    },
    emerald: {
      gradient: "from-emerald-500 to-green-500",
      bg: "from-emerald-50 to-green-50",
      border: "border-emerald-200",
      text: "text-emerald-600",
      hover: "hover:border-emerald-300"
    },
    violet: {
      gradient: "from-violet-500 to-purple-500",
      bg: "from-violet-50 to-purple-50",
      border: "border-violet-200",
      text: "text-violet-600",
      hover: "hover:border-violet-300"
    }
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("flagship");

  const currentCategory = categories.find(cat => cat.id === activeCategory);
  const colors = getCategoryColor(currentCategory?.color || "blue");

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-violet-100 to-transparent rounded-full blur-3xl"
        initial={{ scale: 0, x: -100 }}
        animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Flagship builds first (KneeCare, EduSign, Fitliya), with portfolio and research-aligned engineering work organized clearly.
          </p>
        </motion.div>
        
        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            const catColors = getCategoryColor(category.color);
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border-2 ${
                  isActive 
                    ? `bg-gradient-to-r ${catColors.gradient} text-white border-transparent shadow-lg` 
                    : `bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-500`
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                <span>{category.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  isActive ? "bg-white/20" : "bg-slate-700 text-slate-200"
                }`}>
                  {category.projects.length}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentCategory?.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${colors.border} ${colors.hover} relative`}
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status === 'private' && <Lock size={12} className="inline mr-1" />}
                  {project.status}
                </span>
              </div>
              
              {/* Card glow effect */}
              <motion.div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${colors.gradient} rounded-2xl`}
                initial={false}
              />
              
              <div className="p-6 relative z-10">
                <motion.h3 
                  className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors pr-8"
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-slate-700 mb-6 leading-relaxed text-sm line-clamp-4"
                >
                  {project.description}
                </motion.p>
                
                {/* Impact/Stats */}
                {project.impact && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 font-medium">
                      🎯 {project.impact}
                    </p>
                  </div>
                )}
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${colors.gradient} text-white`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 + 0.5 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Action button */}
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colors.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-sm`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>
              
              {/* Bottom accent line */}
              <motion.div 
                className={`h-1 w-full bg-gradient-to-r ${colors.gradient}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* View All Projects CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/ReaganMurgesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold rounded-2xl hover:from-slate-700 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All {flagshipProjects.length + mlProjects.length + webProjects.length}+ Projects</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}