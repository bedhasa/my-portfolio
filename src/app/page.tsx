import ProfileSection from "@/components/ProfileSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
  return (
    <div className="space-y-12 scroll-smooth md:space-y-16">
      <SectionWrapper delay={0}>
        <section id="home">
          <ProfileSection />
        </section>
      </SectionWrapper>

      <section id="journey">
        <About />
      </section>

      <SectionWrapper delay={0.2}>
        <section id="services">
          <Skills />
        </section>
      </SectionWrapper>

      <SectionWrapper delay={0.3}>
        <section id="projects">
          <Projects />
        </section>
      </SectionWrapper>

      <SectionWrapper delay={0.4}>
        <section id="contact">
          <Testimonials />
        </section>
      </SectionWrapper>

      <SectionWrapper delay={0.5}>
        <section id="blog" aria-label="Blog foundation">
          <Footer />
        </section>
      </SectionWrapper>
    </div>
  );
}
