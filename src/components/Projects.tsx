'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, Project } from '@/data/projects';
import { ExternalLink, Github, X, ChevronRight, Code } from 'lucide-react';
import { useInView } from 'framer-motion';

// --- Project Card Component ---
const ProjectCard = ({ project, onClick }: { project: Project; onClick: (p: Project) => void }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      onClick={() => onClick(project)}
      className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 cursor-pointer hover:border-orange-500/50 hover:bg-slate-800/80 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
          {project.title}
        </h3>
        {project.status === "private" ? (
          <span className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-400">Private</span>
        ) : (
          <span className={`text-xs px-2 py-1 rounded-full ${project.status === "live" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}>
            {project.status === "live" ? "Live" : project.status}
          </span>
        )}
      </div>

      <p className="text-slate-400 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <motion.span 
              key={tech} 
              whileHover={{ scale: 1.1, backgroundColor: "rgba(249, 115, 22, 0.1)", borderColor: "rgba(249, 115, 22, 0.5)" }}
              className="text-xs text-slate-400 bg-slate-900/50 px-2 py-1 rounded border border-slate-700 cursor-default transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs text-slate-500 px-2 py-1">+{project.techStack.length - 3}</span>
          )}
        </div>
        
        {project.impact && (
          <div className="text-xs text-orange-400/80 mb-2 font-medium">
             ✨ {project.impact}
          </div>
        )}

        <div className="flex items-center text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
          View Details <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

// --- Modal Component ---
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 px-4">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        layoutId={`project-${project.id}`}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 md:p-8">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors z-20"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>

          <h2 className="text-3xl font-bold text-white mb-2 pr-8">{project.title}</h2>
          
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === "live" || project.status === "published" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
            }`}>
              {project.status === "published" ? "Research Published" : project.status.toUpperCase()}
            </span>
            {project.category === "flagship" && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                Featured
              </span>
            )}
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" /> Tech Stack From Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <motion.span 
                  key={tech} 
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(249, 115, 22, 0.15)",
                    boxShadow: "0 0 10px rgba(249, 115, 22, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700 shadow-sm cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all font-medium"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-all font-medium shadow-lg shadow-orange-900/20"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("flagship");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const tabs = [
    { id: "flagship", label: "🔥 Featured" },
    { id: "web-app", label: "💻 Web & Apps" },
    { id: "ml-research", label: "🧪 ML & Research" },
    { id: "dsa-core", label: "⚙️ Core & Open Source" },
  ];

  const filteredProjects = projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-slate-900 relative" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A curated selection of my technical projects, research publications, and open-source contributions.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
