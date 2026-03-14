export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  status: "live" | "research" | "development" | "private";
  category: "flagship" | "ml" | "web" | "mobile";
  impact?: string;
}

// Flagship Projects - Most Important
export const flagshipProjects: Project[] = [
  {
    id: 1,
    title: "KneeCare - Smart Knee Monitoring",
    description: "Healthcare-focused project for knee condition support and tracking with a practical software-first approach. Designed to improve patient follow-up, structured records, and usability for real-world care workflows.",
    techStack: ["Python", "Machine Learning", "Healthcare", "Data Analysis", "Web App"],
    githubLink: "https://github.com/ReaganMurgesh",
    status: "development",
    category: "flagship",
    impact: "Healthcare-focused solution with patient-centered engineering approach"
  },
  {
    id: 2,
    title: "EduSign ISL Learning Platform",
    description: "Real-time Indian Sign Language learning platform using MediaPipe and Deep Learning. Features hand gesture recognition, interactive lessons, and progress tracking for deaf/mute education.",
    techStack: ["JavaScript", "MediaPipe", "TensorFlow", "Deep Learning", "Real-time Processing"],
    githubLink: "https://github.com/ReaganMurgesh/EduSign-ISL-Learning-Platform",
    status: "live",
    category: "flagship",
    impact: "2 stars • 1 fork • Empowering deaf/mute education with AI"
  },
  {
    id: 4,
    title: "Fitliya E-commerce Platform",
    description: "Complete fitness-focused e-commerce platform offering gym equipment, supplements, apparel, workout videos, and trainer services. Built with full admin panel and user management.",
    techStack: ["PHP", "MySQL", "XAMPP", "HTML/CSS", "JavaScript", "E-commerce"],
    githubLink: "https://github.com/ReaganMurgesh/Fitliya-Ecommerce-Project",
    status: "live",
    category: "flagship",
    impact: "1 star • Full-stack fitness marketplace with admin features"
  }
];

// Machine Learning & Data Science Projects
export const mlProjects: Project[] = [
  {
    id: 5,
    title: "Liver Disease Prediction ML",
    description: "Machine learning-based liver disease prediction using the Indian Liver Patient Dataset (ILPD). Includes comprehensive model comparison, preprocessing, evaluation metrics with published research paper.",
    techStack: ["Python", "Scikit-learn", "Jupyter Notebook", "Data Analysis", "Research"],
    githubLink: "https://github.com/ReaganMurgesh/Liver_Disease_Prediction_ML-Research_Paper-",
    status: "research",
    category: "ml",
    impact: "Published research with high accuracy prediction models"
  },
  {
    id: 6,
    title: "DSA Hash Table Implementation",
    description: "Comprehensive hash table implementation for symbol table management in compilation. Features insertion, lookup, linear probing for collision resolution, and error detection.",
    techStack: ["C", "Data Structures", "Algorithms", "Compiler Design", "Hash Tables"],
    githubLink: "https://github.com/ReaganMurgesh/DSA_PROJECT_USING_A_HASH_TABLE",
    status: "live",
    category: "ml",
    impact: "Efficient symbol table management with collision handling"
  },
  {
    id: 7,
    title: "PlaceTalk Backend",
    description: "Backend service for location-based social platform built with Dart. Features real-time messaging, location services, and social networking capabilities with scalable architecture.",
    techStack: ["Dart", "Backend Development", "Real-time Systems", "Location Services"],
    githubLink: "https://github.com/ReaganMurgesh/placetalk-backend",
    status: "development",
    category: "ml",
    impact: "Scalable backend for location-based social interactions"
  }
];

// Web & Application Projects
export const webProjects: Project[] = [
  {
    id: 8,
    title: "Professional Portfolio",
    description: "Dynamic portfolio website showcasing projects, skills, and professional experience. Built with Next.js, featuring smooth animations, responsive design, and modern UI components.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    githubLink: "https://github.com/ReaganMurgesh/ReaganMurgesh",
    status: "live",
    category: "web",
    impact: "1 star • Professional showcase with 17+ repositories and modern web technologies"
  }
];

// All projects combined
export const projects: Project[] = [...flagshipProjects, ...mlProjects, ...webProjects];

// Kaggle Projects
export const kaggleProjects = [
  {
    title: "Dengue Classifier Using Machine Learning – Model C",
    description: "Advanced dengue prediction model with comprehensive evaluation metrics",
    updated: "8 months ago",
    status: "draft",
    comments: 0,
    upvotes: 1
  },
  {
    title: "IPL 2025 Player Performance Prediction using ML",
    description: "Sports analytics and player performance prediction for cricket",
    updated: "8 months ago",
    status: "draft",
    comments: 0,
    upvotes: 1
  }
];

// Research & Publications
export const research = [
  {
    title: "Machine Learning-based Liver Disease Prediction using ILPD",
    journal: "World Journal of Pharmaceutical Research (WJPR)",
    year: "2025",
    description: "Comprehensive analysis of liver disease prediction models with accuracy, sensitivity, specificity, and ROC curve evaluation.",
    githubLink: "https://github.com/ReaganMurgesh/Liver_Disease_Prediction_ML-Research_Paper-",
    type: "Published Research",
    status: "published"
  },
  {
    title: "EduSign Platform Research Paper (In Progress)",
    journal: "Ongoing Verification",
    year: "2026",
    description: "Research manuscript on the EduSign ISL platform is currently in progress. The work documents real-time sign-language learning workflows, model behavior, and educational impact analysis. Publication submission is planned after verification and final review.",
    githubLink: "https://github.com/ReaganMurgesh/EduSign-ISL-Learning-Platform",
    type: "Research in Progress",
    status: "in-progress"
  }
];