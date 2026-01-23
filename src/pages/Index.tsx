import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";

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
    <div className="min-h-screen flex flex-col relative">
      <StarfieldBackground />
      <Navbar scrollToSection={scrollToSection} />
      
      <main className="container pb-14 relative z-10">
        <HeroSection scrollToSection={scrollToSection} />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
