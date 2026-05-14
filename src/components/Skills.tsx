"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, ArrowRight, Code2, Terminal, Cpu, Cloud, Layers, Database, Smartphone } from "lucide-react";

// Icons map()
const icons = {
  Languages: <Code2 className="w-6 h-6 text-orange-500" />,
  "Frontend & App Dev": <Smartphone className="w-6 h-6 text-orange-500" />,
  "AI & Data Science": <Cpu className="w-6 h-6 text-orange-500" />,
  "Backend & Cloud": <Cloud className="w-6 h-6 text-orange-500" />
};

const toolkitData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Dart", "C", "SQL", "HTML5 / CSS3"]
  },
  {
    category: "Frontend & App Dev",
    skills: ["Next.js 16", "React", "React Native", "Flutter", "Tailwind CSS", "Framer Motion", "UI/UX Design"]
  },
  {
    category: "AI & Data Science",
    skills: ["TensorFlow", "Scikit-learn", "MediaPipe", "Pandas & NumPy", "XGBoost", "Deep Learning", "Computer Vision"]
  },
  {
    category: "Backend & Cloud",
    skills: ["Node.js", "Supabase", "Firebase", "MySQL", "Git / GitHub", "Vercel", "REST APIs"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10
    }
  }
} as const;

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden font-mono" ref={ref}>
      {/* Background decoration matching other sections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-24 border-b border-orange-500/20 pb-8"
        >
          <div className="flex items-center gap-4">
             <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter flex items-center">
              <span className="text-orange-500 mr-4">//</span> TOOLKIT
            </h2>
          </div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20"
          >
            <Settings className="w-8 h-8 text-orange-500" />
          </motion.div>
        </motion.div>
        
        {/* Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {toolkitData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-6">
                {icons[category.category as keyof typeof icons]}
                <h3 className="text-2xl font-bold text-orange-500 tracking-tight">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-col gap-2 pl-2 border-l border-white/10">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{ x: 10, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                    className="flex items-center gap-4 text-slate-400 group cursor-default p-2 rounded-lg transition-colors duration-200"
                  >
                    <ArrowRight className="w-5 h-5 text-orange-900 group-hover:text-orange-500 transition-colors duration-300" />
                    <span className="text-lg font-medium group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
