"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, FileText, BookOpen, Brain, Microscope, Users, Calendar, ExternalLink } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "AI-Powered Sign Language Translator",
    type: "National Paper Presentation",
    institution: "Kristu Jayanti (Deemed to be University), Bengaluru",
    event: "Pinnacle 2026 – Viksit Bharat 2047: Neo-Human Intelligence & Next-Generation Technologies",
    date: "11 February 2026",
    achievement: "Certificate of Merit",
    description: "Research paper focused on AI-powered sign language translation, highlighting the role of machine learning in assistive and inclusive technologies",
    skills: ["AI/ML", "Computer Vision", "Assistive Technology", "Research Communication"],
    icon: Brain,
    color: "from-purple-600 to-indigo-600"
  },
  {
    id: 2,
    title: "Enhanced Liver Disease Prediction Using Machine Learning",
    type: "Published Research",
    institution: "World Journal of Pharmaceutical Research (WJPR)",
    event: "Official Publication",
    date: "2025",
    achievement: "Certificate of Publication",
    description: "Research on liver disease prediction using machine learning techniques including data preprocessing, feature selection, model evaluation, and performance analysis",
    skills: ["Machine Learning", "Healthcare AI", "Data Analysis", "Model Evaluation"],
    icon: Microscope,
    color: "from-green-600 to-teal-600"
  }
];

const certifications = [
  {
    category: "Machine Learning & AI",
    courses: [
      "Machine Learning with Python (A–Z) – Udemy",
      "Master in Data Science, Data Analytics & Data Analysis – Udemy"
    ],
    icon: Brain,
    color: "from-blue-600 to-indigo-600"
  },
  {
    category: "Data Analytics & Big Data",
    courses: [
      "Data Analytics, Storage, Mining & Big Data Technologies – Udemy",
      "Big Data Hadoop Course – Udemy",
      "Data Visualization & Data Warehousing (101) – Udemy"
    ],
    icon: FileText,
    color: "from-green-600 to-teal-600"
  },
  {
    category: "Database & Business Analysis",
    courses: [
      "Business & Data Analysis Fundamentals – Udemy",
      "Microsoft SQL Server – From A to Z – Udemy",
      "Excel: Beginner to Expert – Udemy"
    ],
    icon: Award,
    color: "from-orange-500 to-red-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      type: "spring" as const,
      stiffness: 100
    }
  }
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-br from-white to-slate-100 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            📜 Certifications, Publications & Academic Highlights
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Research contributions, academic publications, and professional certifications in data science, 
            machine learning, and software development
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-medium text-sm">
            <Award className="w-4 h-4" />
            8+ listed certifications • plus additional completed certifications
          </div>
        </motion.div>

        {/* Research Publications Section */}
        <motion.div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            🧠 Research Publications
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {publications.map((pub, index) => {
              const Icon = pub.icon;
              
              return (
                <motion.div
                  key={pub.id}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.01,
                    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
                  }}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <motion.div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${pub.color} rounded-2xl`}
                  />
                  
                  <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-start">
                    {/* Icon & Achievement */}
                    <div className="lg:col-span-1">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${pub.color} shadow-lg mb-4 w-fit`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${pub.color} text-white rounded-lg shadow-md mb-4`}>
                        <Award className="w-4 h-4" />
                        <span className="font-semibold text-sm">{pub.achievement}</span>
                      </div>
                      
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{pub.date}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{pub.institution}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      <div className="mb-3">
                        <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                          {pub.title}
                        </h4>
                        <p className="text-lg font-medium text-slate-700 mb-1">{pub.type}</p>
                        <p className="text-sm text-slate-600">{pub.event}</p>
                      </div>
                      
                      <p className="text-slate-700 leading-relaxed mb-6">
                        {pub.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {pub.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.5 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pub.color} rounded-b-2xl`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Professional Certifications Section */}
        <motion.div>
          <motion.h3 
            className="text-3xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            📚 Professional & Technical Certifications
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.03,
                    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
                  }}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-white/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <motion.div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${cert.color} rounded-2xl`}
                  />
                  
                  <div className="relative z-10">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${cert.color} shadow-lg mb-4 w-fit`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                      {cert.category}
                    </h4>
                    
                    <div className="space-y-3">
                      {cert.courses.map((course, courseIndex) => (
                        <motion.div
                          key={courseIndex}
                          className="flex items-start gap-3 group/course"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 + courseIndex * 0.05 + 0.8 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color} mt-2 group-hover/course:scale-125 transition-transform duration-200`} />
                          <span className="text-slate-700 text-sm leading-relaxed group-hover/course:text-slate-900 transition-colors">
                            {course}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} rounded-b-2xl`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: index * 0.1 + 1.0, duration: 0.6 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-white/50 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Continuous Learning & Research Impact</h3>
            <p className="text-slate-700 leading-relaxed">
              These certifications and publications demonstrate my commitment to staying current with emerging 
              technologies and contributing to the academic and professional community. My research work in 
              AI-powered assistive technologies and healthcare machine learning reflects both technical expertise 
              and a focus on creating meaningful, real-world solutions.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              I continue to complete additional certifications beyond the highlighted list to deepen practical expertise in ML engineering, analytics, and software development workflows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}