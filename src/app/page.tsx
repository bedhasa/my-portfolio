import ProfileSection from "@/components/ProfileSection";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="space-y-20 scroll-smooth">
      <section id="home" className="space-y-12">
        <ProfileSection />
        <Stats />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
       <Testimonials />
      <Footer />
    </div>
  );
}
