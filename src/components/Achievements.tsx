"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Users, Code, Shield, MapPin, Calendar } from "lucide-react";

const achievements = [
  {
    id: 1,
    category: "🎯 Sports Achievements — University & Regional Level",
    type: "Sports Excellence",
    achievements: [
      {
        title: "University Cricket & Hockey Representative", 
        institution: "Goa University",
        period: "2019 – 2024",
        description: "Represented the university in Cricket and Hockey at inter-university tournaments",
        highlights: ["Team Coordination", "Leadership", "Competitive Excellence", "Strategic Planning"]
      },
      {
        title: "Regional Hockey Player",
        institution: "Kendriya Vidyalaya Regional Sports",
        period: "Under-14 & Under-19",
        description: "Played Hockey at regional level during school years, representing KV in Goa regional competitions",
        highlights: ["Regional Competition", "Team Sports", "Athletic Excellence", "Discipline"]
      }
    ],
    icon: Trophy,
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 2,
    category: "🎖 National Cadet Corps (NCC)",
    type: "Leadership & Discipline", 
    achievements: [
      {
        title: "NCC 'A' Certificate",
        institution: "Ministry of Defence, Government of India",
        period: "2018",
        description: "Successfully completed NCC training and qualified the 'A' Certificate examination",
        highlights: ["Military Training", "Leadership Development", "Discipline", "Teamwork", "National Service"]
      }
    ],
    icon: Shield,
    color: "from-green-600 to-emerald-600"
  },
  {
    id: 3,
    category: "💡 Hackathons & Technical Competitions",
    type: "Technical Excellence",
    achievements: [
      {
        title: "Inter-Collegiate Hackathons",
        institution: "Multiple Universities",
        period: "2023 – 2025",
        description: "Participated in multiple inter-collegiate hackathons and coding competitions",
        highlights: ["Problem Solving", "Team Collaboration", "Technical Innovation", "Time Management"]
      },
      {
        title: "Blind Coding Competitions",
        institution: "Various Technical Institutions",
        period: "2023 – 2025",
        description: "Competed in blind coding events emphasizing logic, accuracy, and problem-solving without syntax assistance",
        highlights: ["Logical Thinking", "Accuracy", "Programming Skills", "Mental Agility"]
      },
      {
        title: "C Programming Specialist",
        institution: "Technical Competitions",
        period: "2023 – 2024",
        description: "Participated in C programming specialist competitions and core programming challenges",
        highlights: ["Core Programming", "Algorithm Design", "Code Optimization", "Technical Depth"]
      }
    ],
    icon: Code,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 4,
    category: "🏆 Leadership & Event Organization",
    type: "Leadership Excellence",
    achievements: [
      {
        title: "Technical Event Lead",
        institution: "College Technical Fests",
        period: "2023 – 2025",
        description: "Served as event lead and in-charge for multiple college-level technical events",
        highlights: ["Event Management", "Team Leadership", "Resource Coordination", "Problem Resolution"]
      },
      {
        title: "Core Organizing Team Member",
        institution: "Multi-Institution Technical Fests",
        period: "2024 – 2025", 
        description: "Part of core organizing team for collaborative technical fests involving multiple institutions",
        highlights: ["Strategic Planning", "Inter-institutional Coordination", "Project Management", "Stakeholder Management"]
      }
    ],
    icon: Users,
    color: "from-purple-600 to-pink-600"
  }
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      stiffness: 100
    }
  }
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-200/30 to-transparent rounded-full blur-3xl"
        initial={{ scale: 0, x: 100 }}
        animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: 100 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-transparent rounded-full blur-3xl"
        initial={{ scale: 0, x: -100 }}
        animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: -100 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            🏆 Achievements & Awards
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Recognition in sports, technical competitions, leadership, and national service demonstrating 
            excellence across multiple domains
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {achievements.map((category, categoryIndex) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 relative overflow-hidden"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {category.category}
                    </h3>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${category.color} text-white text-sm font-semibold rounded-full`}>
                      <Medal className="w-3 h-3" />
                      {category.type}
                    </span>
                  </div>
                </div>
                
                {/* Achievements List */}
                <div className="grid gap-6">
                  {category.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      className="group bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border border-slate-200/50 hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ delay: categoryIndex * 0.1 + achievementIndex * 0.1 + 0.5 }}
                      whileHover={{ x: 5, transition: { type: "spring" as const, stiffness: 300 } }}
                    >
                      <div className="grid lg:grid-cols-3 gap-6">
                        {/* Achievement Info */}
                        <div className="lg:col-span-2">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                              {achievement.title}
                            </h4>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{achievement.institution}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{achievement.period}</span>
                            </div>
                          </div>
                          
                          <p className="text-slate-700 leading-relaxed mb-4">
                            {achievement.description}
                          </p>
                        </div>
                        
                        {/* Highlights */}
                        <div className="lg:col-span-1">
                          <div className="flex flex-wrap gap-2">
                            {achievement.highlights.map((highlight, highlightIndex) => (
                              <motion.span
                                key={highlightIndex}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: categoryIndex * 0.1 + achievementIndex * 0.1 + highlightIndex * 0.05 + 0.7 }}
                              >
                                {highlight}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom Accent */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: categoryIndex * 0.1 + 0.8, duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why This Matters */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">🧠 Why This Matters</h3>
            <p className="text-slate-700 leading-relaxed text-lg text-center">
              My long-term involvement in sports and technical activities has helped me develop a balanced mindset — combining analytical thinking with teamwork, patience, and resilience. These qualities strongly influence how I approach software development, problem-solving, and collaboration in professional environments. The discipline from sports, leadership from NCC, and innovation from hackathons create a comprehensive foundation for technical excellence.
            </p>
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {[
            { label: "Sports Years", value: "5+", color: "from-yellow-500 to-orange-500" },
            { label: "Competitions", value: "10+", color: "from-blue-500 to-indigo-500" },
            { label: "Leadership Roles", value: "3+", color: "from-purple-500 to-pink-500" },
            { label: "Certificates", value: "15+", color: "from-green-500 to-teal-500" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                initial={{ y: 20 }}
                animate={isInView ? { y: 0 } : { y: 20 }}
                transition={{ delay: 2.0 + index * 0.1, duration: 0.6 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}