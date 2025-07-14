import ProfileSection from "@/components/ProfileSection";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import SectionWrapper from "@/components/SectionWrapper"; // 👈 Import this

export default function Home() {
  return (
    <div className="space-y-20 scroll-smooth">
      <SectionWrapper delay={0}>
        <section id="home" className="space-y-12">
          <ProfileSection />
          <Stats />
        </section>
      </SectionWrapper>

      <SectionWrapper delay={0.1}>
        <section id="about">
          <About />
        </section>
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <section id="skills">
          <Skills />
        </section>
      </SectionWrapper>

      <SectionWrapper delay={0.3}>
        <section id="projects">
          <Projects />
        </section>
      </SectionWrapper>

      <SectionWrapper delay={0.4}>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper delay={0.5}>
        <Footer />
      </SectionWrapper>
    </div>
  );
}
