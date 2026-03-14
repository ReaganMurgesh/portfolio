"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Users, Heart, Laptop, Sprout, Quote } from "lucide-react";

export default function InternationalInternship() {
  return (
    <section id="internship" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-500/20 flex items-center gap-2">
              <Globe className="w-4 h-4" /> Global Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            International Internship <span className="text-red-500">in Japan</span> <span className="text-2xl align-top">🇯🇵</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A transformative journey combining technical innovation with cultural immersion at Asia to Genki Co., Ltd.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Project Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Project Serendipity</h3>
                  <p className="text-blue-400 font-medium">GPS-Based Community Application</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Co-developed "Serendipity" with teammate Sanay Krishna. This GPS-based application allows users to create location pins for local activities, cultural events, and community interactions. Specifically designed to help people discover and participate in nearby events.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">React Native</span>
                <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">Geolocation API</span>
                <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">Community Tech</span>
              </div>
            </motion.div>

            {/* Cultural & Learning Journey */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30"
              >
                <Sprout className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Sustainable Living</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  At Kusunoki Farm in Yamaguchi, we explored sustainable practices—harvesting mushrooms, preparing firewood, and maintaining plantations—while testing our application in rural environments.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30"
              >
                <Heart className="w-8 h-8 text-red-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Peace & Perspective</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A powerful visit to the Hiroshima Peace Memorial Park reinforced the lesson that technology must always serve humanity and contribute to peace.
                </p>
              </motion.div>
            </div>

            {/* Wisdom Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl border-l-4 border-yellow-500 relative"
            >
              <Quote className="absolute top-4 right-4 text-slate-700 w-12 h-12 opacity-50" />
              <p className="text-lg md:text-xl text-slate-200 italic mb-4 relative z-10">
                "Stay curious. Stay broad-minded. Always understand the people you are building for, and never let work become your only life. Time stops for no one."
              </p>
              <div className="text-yellow-500 font-medium">— Mr. Akio Daigoshi, Retired IT Professional (Ozu)</div>
            </motion.div>

          </div>

          {/* Sidebar Info Column */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50"
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" /> Locations Visited
              </h4>
              <ul className="space-y-3">
                {['Matsuyama', 'Ozu', 'Hiroshima', 'Yamaguchi', 'Amakusa'].map((loc) => (
                  <li key={loc} className="flex items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> {loc}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50"
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" /> Acknowledgements
              </h4>
              <div className="space-y-4 text-sm text-slate-400">
                <p>
                  <strong className="text-slate-200 block mb-1">Mentors:</strong>
                  Prof. Yashavantha Dongre, Prof. Dr. Bharath Setturu, Prof. Hariprasad M
                </p>
                <p>
                  <strong className="text-slate-200 block mb-1">Special Thanks:</strong>
                  Kunpei-san, Natsu-san, Mr. Akio Daigoshi, Eriko-san, and the entire team in Japan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
