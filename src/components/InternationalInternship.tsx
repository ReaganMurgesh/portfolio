"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Smartphone, Code, TrendingUp } from "lucide-react";

export default function InternationalInternship() {
  return (
    <section id="internship" className="py-24 bg-slate-900 border-t border-slate-800 text-white relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2 text-orange-500 font-mono text-sm tracking-wider font-semibold">
              <Globe className="w-4 h-4" />
              <span>GLOBAL EXPERIENCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Internship in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Japan</span> 🇯🇵
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right hidden md:block"
          >
            <p className="text-xl font-bold text-white">Asia to Genki Co., Ltd.</p>
            <p className="text-slate-400 text-sm font-mono">Tokyo • Hiroshima • Yamaguchi</p>
          </motion.div>
        </div>

        {/* Bento Grid Layout - "Appealing Design" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Feature Card - Serendipity (Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background Icon Decoration */}
            <div className="absolute -bottom-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12">
              <Smartphone size={180} />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="bg-orange-500/10 w-fit p-3 rounded-xl mb-6 border border-orange-500/20">
                  <Code className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Project Serendipity</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-lg">
                  Co-developed a GPS-based community application using <span className="text-white font-semibold">React Native</span>, ensuring precise geolocation with <span className="text-orange-400 font-mono">MapLibre</span> and <span className="text-orange-400 font-mono">LocationIQ</span> for interactive maps.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {["React Native", "MapLibre", "LocationIQ", "User Location"].map((tag) => (
                  <motion.span 
                    key={tag} 
                    whileHover="hover"
                    initial="initial"
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.1, boxShadow: "0 0 8px rgba(249, 115, 22, 0.5)", borderColor: "rgba(249, 115, 22, 0.5)" }
                    }}
                    className="group relative overflow-hidden px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-full text-xs font-mono text-slate-300 cursor-default transition-colors duration-200"
                  >
                    <span className="relative z-10 font-bold group-hover:text-white transition-colors">{tag}</span>
                    <motion.div
                      variants={{
                        initial: { x: "-100%" },
                        hover: { 
                          x: "100%",
                          transition: { 
                            repeat: Infinity, 
                            duration: 1, 
                            ease: "linear" 
                          }
                        }
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
                    />
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Impact Stats Card (Vertical Gradient) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg shadow-orange-900/20"
          >
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Technical Impact</h3>
              <p className="text-orange-100/90 text-sm leading-relaxed">
                Architected the real-time map interface and optimized component rendering for seamless mobile performance.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-sm font-mono text-orange-200 uppercase tracking-widest mb-1">Methodology</div>
              <div className="text-3xl font-bold">Kaizen</div>
              <div className="text-xs text-orange-200 mt-1">Continuous Improvement</div>
            </div>
          </motion.div>

          {/* Cultural Immersion Card (Full Width) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50 flex flex-col md:flex-row items-center gap-8 group hover:bg-slate-800/50 transition-colors"
          >
            <div className="p-4 bg-blue-500/10 rounded-2xl shrink-0 border border-blue-500/20">
              <MapPin className="w-8 h-8 text-blue-400" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Cultural & Professional Immersion</h3>
              <p className="text-slate-400 leading-relaxed mb-4 max-w-3xl">
                Immersed in the Japanese work ethic <span className="text-slate-200 font-medium">(Kaizen)</span> and community living. Traversed across 6+ cities including Tokyo and Hiroshima, and engaged in sustainable agriculture practices.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Cross-cultural Communication
                </span>
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Adaptability
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
