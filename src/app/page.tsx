import Hero from "@/components/Hero";
import About from "@/components/About";
import InternationalInternship from "@/components/InternationalInternship";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Kaggle from "@/components/Kaggle";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <InternationalInternship />
      <Skills />
      <Projects />
      <Research />
      <Kaggle />
      <Achievements />
      <Certifications />
      <Education />
      <Footer />
    </main>
  );
}
