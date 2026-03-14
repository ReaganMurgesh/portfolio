"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, Calendar, MapPin, BookOpen, Award } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Chanakya University, Bengaluru",
    duration: "October 2024 – December 2026",
    status: "Current",
    description: "Core focus on data structures, software engineering, and applied computing",
    highlights: [
      "Advanced Data Structures & Algorithms",
      "Software Engineering Principles", 
      "Applied Computing & Research",
      "Technical Projects & Innovation",
      "Intercollegiate Events Participation"
    ],
    icon: GraduationCap,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Don Bosco College, Panjim",
    duration: "2021 – 2023",
    status: "Completed",
    description: "Foundation in computer software, programming, and database systems",
    highlights: [
      "Computer Software Fundamentals",
      "Programming Languages & Logic",
      "Database Management Systems",
      "SQL Server Administration",
      "Application Development Concepts"
    ],
    icon: BookOpen,
    color: "from-green-600 to-teal-600"
  },
  {
    id: 3,
    degree: "Higher Secondary Education (XII - CBSE)",
    institution: "Kendriya Vidyalaya No. 2, Vasco, Goa",
    duration: "2021 – 2022",
    status: "Completed",
    description: "Pre-university education with focus on science and mathematics",
    highlights: [
      "Science & Mathematics Foundation",
      "Academic Excellence",
      "Extracurricular Activities",
      "Leadership Development"
    ],
    icon: School,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    degree: "Secondary Education (X - CBSE)",
    institution: "Kendriya Vidyalaya No. 2, Vasco, Goa",
    duration: "2019 – 2021",
    status: "Completed",
    description: "Strong foundation in core subjects and holistic development",
    highlights: [
      "Academic Foundation",
      "Sports Participation",
      "NCC Activities",
      "Character Building"
    ],
    icon: School,
    color: "from-purple-500 to-pink-500"
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
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      stiffness: 100
    }
  }
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-200/30 to-transparent rounded-full blur-3xl"
        initial={{ scale: 0, x: 100 }}
        animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: 100 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            🎓 Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic journey building strong foundations in computer science, software engineering, and applied computing
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {education.map((edu, index) => {
            const Icon = edu.icon;
            
            return (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { type: "spring" as const, stiffness: 300, damping: 20 }
                }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${edu.color} rounded-2xl`}
                  initial={false}
                />
                
                <div className="relative z-10 grid lg:grid-cols-4 gap-8 items-start">
                  {/* Icon & Status */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${edu.color} shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        edu.status === 'Current' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{edu.duration}</span>
                    </div>
                    
                    <div className="flex items-start gap-2 text-slate-600">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{edu.institution}</span>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-slate-700 leading-relaxed mb-6">
                      {edu.description}
                    </p>
                    
                    <div className="grid grid-cols-1 gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          className="flex items-center gap-3 group/highlight"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 + highlightIndex * 0.05 + 0.5 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} group-hover/highlight:scale-125 transition-transform duration-200`} />
                          <span className="text-slate-700 text-sm font-medium group-hover/highlight:text-slate-900 transition-colors">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="lg:col-span-1 flex lg:justify-end">
                    <motion.div 
                      className={`inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r ${edu.color} text-white rounded-xl shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring" as const, stiffness: 300 }}
                    >
                      <Award className="w-5 h-5" />
                      <span className="font-semibold text-sm">Excellence</span>
                    </motion.div>
                  </div>
                </div>
                
                {/* Bottom Accent */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color} rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Educational Philosophy */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Educational Philosophy</h3>
            <p className="text-slate-700 leading-relaxed">
              My educational journey reflects a commitment to continuous learning and practical application. 
              From foundational computer science concepts to advanced software engineering principles, 
              each stage has built upon the previous, creating a comprehensive understanding of technology 
              and its real-world applications. Active involvement in research, projects, and technical 
              events has enhanced my theoretical knowledge with hands-on experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}