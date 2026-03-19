// Project Data Source

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  status: "live" | "research" | "development" | "private" | "published";
  category: "flagship" | "web-app" | "ml-research" | "dsa-core";
  impact?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  // --- FLAGSHIP ---
  {
    id: "kneecare",
    title: "KneeCare - Smart Knee Monitoring",
    description: "AI-Powered Rehabilitation Monitoring System for knee condition support and tracking.",
    longDescription: "A healthcare-focused project designed to improve patient follow-up. It uses sensor data and ML algorithms to track knee rehabilitation progress, offering structured records for doctors and patients. This is a private research initiative aiming to solve real-world physiotherapy monitoring challenges.",
    techStack: ["Python", "Machine Learning", "Dart", "Healthcare AI", "Data Analysis"],
    githubLink: "", // Private
    status: "private",
    category: "flagship",
    impact: "AI-Powered Rehabilitation System",
    featured: true
  },
  {
    id: "serendipity",
    title: "Serendipity",
    description: "GPS-based community application connecting users with local activities and cultural events.",
    longDescription: "Co-developed during the internship in Japan. Serendipity helps users discover local gems through location pins. It features real-time geolocation, community event creation, and interactive maps to foster local exploration.",
    techStack: ["React Native", "TypeScript", "Geolocation API", "Google Maps"],
    githubLink: "https://github.com/SanayKrishna/Serendipity",
    status: "live",
    category: "flagship",
    impact: "Collaborative Application (Japan Internship)",
    featured: true
  },
  {
    id: "aqaura",
    title: "AqAura",
    description: "India's first algae-based face wash brand website. Ocean science meets eco-luxury skincare.",
    longDescription: "A premium brand website for AqAura. The project focuses on esthetics, fluid animations, and a clean UI to represent the 'Ocean science meets eco-luxury' brand identity.",
    techStack: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    githubLink: "https://github.com/ReaganMurgesh/Aqaura",
    status: "live",
    category: "flagship",
    impact: "Premium Brand Launch Platform",
    featured: true
  },
  {
    id: "edusign",
    title: "EduSign ISL Platform",
    description: "Real-time Indian Sign Language learning platform using MediaPipe and Deep Learning.",
    longDescription: "An accessible education platform that uses computer vision to teach Indian Sign Language. It provides real-time feedback on hand gestures, making learning interactive and effective for the deaf/mute community and learners.",
    techStack: ["JavaScript", "MediaPipe", "TensorFlow", "Deep Learning", "React"],
    githubLink: "https://github.com/ReaganMurgesh/EduSign-ISL-Learning-Platform",
    status: "live",
    category: "flagship",
    impact: "AI for Accessibility (2 Stars, 1 Fork)",
    featured: true
  },
  {
    id: "fitliya",
    title: "Fitliya E-commerce",
    description: "Complete fitness-focused marketplace with admin panel, user management, and product catalog.",
    longDescription: "A full-stack e-commerce solution tailored for fitness enthusiasts. Features include product listing (gym equipment, supplements), trainer booking, workout video access, and a comprehensive admin dashboard for inventory management.",
    techStack: ["PHP", "MySQL", "XAMPP", "HTML/CSS", "JavaScript"],
    githubLink: "https://github.com/ReaganMurgesh/Fitliya-Ecommerce-Project",
    status: "live",
    category: "flagship",
    impact: "Full-Stack E-commerce Solution",
    featured: true
  },

  // --- WEB & APPS ---
  {
    id: "placetalk",
    title: "PlaceTalk Backend",
    description: "Scalable backend service for a location-based social platform.",
    longDescription: "Built with Dart, this backend powers specific location-based features, handling request routing, data persistence, and API endpoints for the PlaceTalk application ecosystem.",
    techStack: ["Dart", "Backend Engineering", "API Design"],
    githubLink: "https://github.com/ReaganMurgesh/placetalk-backend",
    status: "development",
    category: "web-app"
  },
  {
    id: "haldirams",
    title: "Haldiram's Campaign",
    description: "Premium Product Launch & Marketing Campaign Website for 'Nuts & Bites'.",
    longDescription: "A promotional website designed for the Haldiram's Nuts & Bites product line. Focused on high-quality visuals and responsive layout to drive marketing campaign engagement.",
    techStack: ["HTML", "CSS", "Responsive Design", "Marketing Tech"],
    githubLink: "https://github.com/ReaganMurgesh/haldirams-nuts-and-bites",
    status: "live",
    category: "web-app"
  },
  {
    id: "edubloom",
    title: "EduBloom",
    description: "Comprehensive learninig platform with Supabase integration for student tracking.",
    longDescription: "An educational management system that helps track student performance and learning goals. Integrated with Supabase for reliable real-time database capabilities and user authentication.",
    techStack: ["PLpgSQL", "Supabase", "React", "Database Design"],
    githubLink: "https://github.com/ReaganMurgesh/EduBloom",
    status: "live",
    category: "web-app"
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "The modern, dark-themed portfolio you are viewing right now.",
    longDescription: "Built with Next.js 16 and Tailwind CSS. Features advanced Framer Motion animations, component-based architecture, and a highly responsive design.",
    techStack: ["TypeScript", "Next.js 16", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/ReaganMurgesh/portfolio",
    status: "live",
    category: "web-app",
    impact: "Modern Personal Brand Identity"
  },

  // --- ML & RESEARCH ---
  {
    id: "liver-disease",
    title: "Liver Disease ML Research",
    description: "Published research on liver disease prediction using ILPD dataset with model comparison.",
    longDescription: "A rigorous study comparing various ML algorithms (Logistic Regression, SVM, Random Forest) on the Indian Liver Patient Dataset. Includes detailed preprocessing, feature selection, and ROC curve analysis. Published in WJPR.",
    techStack: ["Python", "Scikit-Learn", "Research Methodology", "Pandas"],
    githubLink: "https://github.com/ReaganMurgesh/Liver_Disease_Prediction_ML-Research_Paper-",
    status: "published",
    category: "ml-research",
    impact: "Published Research Paper"
  },
  {
    id: "wheat-seed",
    title: "Wheat Seed Clustering",
    description: "Unsupervised analysis of wheat seed varieties using PCA and K-Means/Agglomerative clustering.",
    techStack: ["Python", "Unsupervised Learning", "PCA", "Clustering"],
    githubLink: "https://github.com/ReaganMurgesh/Wheat-Seed-Clustering",
    status: "research",
    category: "ml-research"
  },
  {
    id: "crop-rec",
    title: "Crop Recommendation",
    description: "Unsupervised crop recommendation system using PCA and K-Means clustering.",
    techStack: ["Python", "K-Means", "Agricultural Analytics"],
    githubLink: "https://github.com/ReaganMurgesh/Crop-Recommendation-Unsupervised",
    status: "research",
    category: "ml-research"
  },
  {
    id: "water-potability",
    title: "Water Potability",
    description: "Supervised classification models to predict safe drinking water indicators.",
    techStack: ["Python", "Classification Algorithms", "Data Science"],
    githubLink: "https://github.com/ReaganMurgesh/Water-Potability-Prediction",
    status: "research",
    category: "ml-research"
  },
  {
    id: "dengue-pred",
    title: "Dengue Prediction",
    description: "Disease prediction using ensemble classification models for public health analysis.",
    techStack: ["Python", "Ensemble Models", "Healthcare AI"],
    githubLink: "https://github.com/ReaganMurgesh/Dengue-Disease-Prediction",
    status: "research",
    category: "ml-research"
  },
  {
    id: "air-quality",
    title: "Air Quality (WRI)",
    description: "Prediction of the World Risk Index (WRI) using XGBoost and Random Forest regressions.",
    techStack: ["Python", "XGBoost", "Random Forest", "Regression"],
    githubLink: "https://github.com/ReaganMurgesh/Air-Quality-Prediction",
    status: "research",
    category: "ml-research"
  },
  {
    id: "crop-yield",
    title: "Crop Yield Prediction",
    description: "Regression analysis for agricultural yield utilizing Gradient Boosting technologies.",
    techStack: ["Python", "Gradient Boosting", "Predictive Analytics"],
    githubLink: "https://github.com/ReaganMurgesh/Crop-Yield-Prediction",
    status: "research",
    category: "ml-research"
  },
  {
    id: "heart-disease",
    title: "Heart Disease Prediction",
    description: "Enhanced heart disease prediction using robust ensemble classification techniques.",
    techStack: ["Python", "Ensemble Methods", "Cardiology Data"],
    githubLink: "https://github.com/ReaganMurgesh/Enhanced-Heart-Disease-Prediction",
    status: "research",
    category: "ml-research"
  },

  // --- CORE / DSA ---
  {
    id: "dsa-hash",
    title: "DSA Hash Table",
    description: "C implementation of a hash table for symbol table management in compiler design.",
    longDescription: "A core computer science project implementing collision resolution strategies (Linear Probing), error detection, and efficient lookup mechanisms for compiler symbol tables.",
    techStack: ["C", "Algorithms", "Data Structures", "Compiler Design"],
    githubLink: "https://github.com/ReaganMurgesh/DSA_PROJECT_USING_A_HASH_TABLE",
    status: "live",
    category: "dsa-core"
  }
];

// --- Research Data ---
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
    description: "Research manuscript on the EduSign ISL platform is currently in progress. The work documents real-time sign-language learning workflows, model behavior, and educational impact analysis.",
    githubLink: "https://github.com/ReaganMurgesh/EduSign-ISL-Learning-Platform",
    type: "Research in Progress",
    status: "in-progress"
  },
  {
    title: "Wheat Seed Clustering Analysis",
    journal: "Data Science Research", 
    year: "2025",
    description: "Unsupervised analysis of wheat seed varieties using PCA and clustering algorithms (K-Means & Agglomerative).",
    githubLink: "https://github.com/ReaganMurgesh/Wheat-Seed-Clustering",
    type: "Unsupervised Learning",
    status: "completed"
  }
];

// --- Kaggle Data ---
export const kaggleProjects = [
  {
    title: "Dengue Classifier Using Machine Learning",
    description: "Advanced dengue prediction model with comprehensive evaluation metrics (Model C).",
    updated: "8 months ago",
    status: "completed",
    comments: 0,
    upvotes: 1,
    link: "https://www.kaggle.com/reaganmurgesh" 
  },
  {
    title: "IPL 2025 Player Performance Prediction",
    description: "Sports analytics and player performance prediction for cricket using ML techniques.",
    updated: "8 months ago",
    status: "completed",
    comments: 0,
    upvotes: 1,
    link: "https://www.kaggle.com/reaganmurgesh"
  }
];
