import MatrixBackground from "./components/MatrixBackground";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <MatrixBackground />
      <Hero />
      <section id="about">
        <AboutMe />
      </section>
      {/* Skills ile Matrix arasında blur divider */}
      <div className="w-full h-12 flex items-center justify-center">
        <div className="w-2/3 h-8 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-lg" />
      </div>
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
