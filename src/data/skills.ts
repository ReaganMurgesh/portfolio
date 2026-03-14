export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "Java", "Dart", "C", "PHP"],
    icon: "💻"
  },
  {
    category: "Data Science & ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "OpenCV", "NLTK", "Jupyter"],
    icon: "🤖"
  },
  {
    category: "Web Development",
    skills: ["React", "Next.js", "Node.js", "Express", "Flask", "Streamlit", "Tailwind CSS", "Bootstrap", "PLpgSQL"],
    icon: "🌐"
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "Git", "GitHub Actions", "Firebase", "MongoDB", "PostgreSQL", "AWS", "Heroku", "Supabase"],
    icon: "☁️"
  },
  {
    category: "Mobile & Tools",
    skills: ["Flutter", "React Native", "Figma", "VS Code", "Linux", "Postman", "XAMPP", "MediaPipe"],
    icon: "📱"
  },
  {
    category: "Specialized Tech",
    skills: ["Computer Vision", "NLP", "Deep Learning", "Real-time Systems", "Hash Tables", "Data Analysis"],
    icon: "⚡"
  }
];
