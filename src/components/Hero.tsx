"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Download, Mail } from "lucide-react";

const stats = [
  { number: "17+", label: "Projects" },
  { number: "2+", label: "Research Papers" },
  { number: "8+", label: "Certifications" },
  { number: "3+", label: "Years Experience" }
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/ReaganMurgesh",
    label: "GitHub",
    color: "hover:text-slate-300"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/reagan-murgesh",
    label: "LinkedIn", 
    color: "hover:text-blue-400"
  },
  {
    icon: Mail,
    href: "mailto:reaganmurgesh@gmail.com",
    label: "Email",
    color: "hover:text-orange-400"
  }
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-slate-900 relative overflow-hidden pt-20">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/10 rotate-45 rounded-lg blur-sm" />
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-blue-500/10 rotate-12 rounded-lg blur-sm" />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-orange-500/5 rotate-45 rounded-lg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Greeting */}
            <motion.p 
              className="text-slate-400 text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi I am
            </motion.p>

            {/* Name */}
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Reagan Murgesh
            </motion.h1>

            {/* Title/Role */}
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Software Engineer & Data Scientist
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-slate-300 text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Building intelligent solutions that bridge data science, machine learning, and real-world impact.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-slate-800 text-slate-400 transition-all duration-300 ${social.color} hover:bg-slate-700 hover:scale-110`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Let’s Collaborate
              </motion.a>
              
              <motion.a
                href="/Reagan_Murgesh_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-600 text-slate-300 font-semibold rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Professional Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Background Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-3xl scale-110"
                animate={{ 
                  scale: [1.1, 1.2, 1.1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />

              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-orange-400/40"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image Container */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl"
                initial={{ scale: 0.8, rotateY: 15 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ scale: 1.02, rotateY: -5 }}
              >
                <Image
                  src="/REAGANP.png"
                  alt="Reagan Murgesh - Software Engineer & Data Scientist"
                  fill
                  className="object-cover object-center"
                  priority
                />
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2 group-hover:text-orange-400 transition-colors duration-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-400 font-medium text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}