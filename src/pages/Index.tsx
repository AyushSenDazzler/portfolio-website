import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - 76,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollToSection={scrollToSection} />
      
      <main className="container pb-14">
        <HeroSection scrollToSection={scrollToSection} />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
