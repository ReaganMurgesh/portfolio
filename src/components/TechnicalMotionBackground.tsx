"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingElementProps {
  delay: number;
  size: number;
  color: string;
  x: number;
  y: number;
  shape: 'circle' | 'square' | 'triangle' | 'hexagon';
}

const FloatingElement = ({ delay, size, color, x, y, shape }: FloatingElementProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          y: [y, y - 50, y + 30, y],
          x: [x, x + 20, x - 15, x],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 0.8, 1],
          transition: {
            duration: 8 + Math.random() * 4,
            ease: "linear",
            times: [0, 0.3, 0.7, 1]
          }
        });
      }
    };
    
    setTimeout(animate, delay * 1000);
  }, [controls, delay, x, y]);

  const getShapePath = () => {
    switch (shape) {
      case 'square':
        return `M 0 0 L ${size} 0 L ${size} ${size} L 0 ${size} Z`;
      case 'triangle':
        return `M ${size/2} 0 L ${size} ${size} L 0 ${size} Z`;
      case 'hexagon':
        const h = size;
        const w = size * 0.866; // sqrt(3)/2
        return `M ${w/2} 0 L ${w} ${h/4} L ${w} ${3*h/4} L ${w/2} ${h} L 0 ${3*h/4} L 0 ${h/4} Z`;
      default:
        return '';
    }
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
      style={{ left: x, top: y }}
    >
      {shape === 'circle' ? (
        <div 
          className={`${color} rounded-full opacity-20`}
          style={{ width: size, height: size }}
        />
      ) : (
        <svg width={size} height={size} className="opacity-20">
          <path d={getShapePath()} fill={color.replace('bg-', '').replace('-500', '')} />
        </svg>
      )}
    </motion.div>
  );
};

const CodeParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => {
  const codeSymbols = ['{}', '[]', '()', '<>', '/>', '::'];
  const symbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
  
  return (
    <motion.div
      className="absolute pointer-events-none text-blue-400/20 font-mono text-sm select-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: y + 50 }}
      animate={{
        opacity: [0, 0.6, 0],
        y: [y + 50, y - 100, y - 200],
        x: [x, x + (Math.random() - 0.5) * 100, x + (Math.random() - 0.5) * 150],
        rotate: [0, 360],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 8 + Math.random() * 12
      }}
    >
      {symbol}
    </motion.div>
  );
};

const TechConnections = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
          <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.line
          key={i}
          x1={`${Math.random() * 20}%`}
          y1={`${Math.random() * 30 + 20}%`}
          x2={`${Math.random() * 20 + 80}%`}
          y2={`${Math.random() * 30 + 50}%`}
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 6 + Math.random() * 4
          }}
        />
      ))}
    </svg>
  );
};

export default function TechnicalMotionBackground() {
  const [elements, setElements] = useState<FloatingElementProps[]>([]);
  const [particles, setParticles] = useState<{ delay: number; x: number; y: number }[]>([]);

  useEffect(() => {
    // Generate floating elements
    const newElements: FloatingElementProps[] = Array.from({ length: 12 }, (_, i) => ({
      delay: i * 0.5,
      size: 20 + Math.random() * 40,
      color: ['bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-cyan-500'][Math.floor(Math.random() * 4)],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      shape: (['circle', 'square', 'triangle', 'hexagon'] as const)[Math.floor(Math.random() * 4)]
    }));
    
    // Generate code particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      delay: i * 0.8,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) + 100
    }));

    setElements(newElements);
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Gradient Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
        animate={{
          background: [
            "linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #e0e7ff 100%)",
            "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #dbeafe 100%)",
            "linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #e0e7ff 100%)"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Technical Connections */}
      <TechConnections />
      
      {/* Floating Technical Elements */}
      {elements.map((element, index) => (
        <FloatingElement key={index} {...element} />
      ))}
      
      {/* Code Particles */}
      {particles.map((particle, index) => (
        <CodeParticle key={index} {...particle} />
      ))}
      
      {/* Grid Pattern Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px', '0px 0px']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Radial Glow Effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-blue-200/20 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-indigo-200/20 to-transparent blur-3xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
}