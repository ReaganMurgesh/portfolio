import Hero from "@/components/Hero";
import InternationalInternship from "@/components/InternationalInternship";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <InternationalInternship />
      <Footer />
    </main>
  );
}
