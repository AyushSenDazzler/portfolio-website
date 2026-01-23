import { useState } from "react";
import { ArrowRight, Github, Linkedin, Menu, X } from "lucide-react";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-lg border-b border-card/65 nav-gradient">
        <div className="container flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-[40%] border border-muted-foreground/70"
              style={{
                background: "radial-gradient(circle at 30% 10%, hsl(187 94% 53%), hsl(222 47% 11%), hsl(222 47% 3%))",
                boxShadow: "0 0 0 1px hsl(222 47% 11% / 0.9), 0 0 25px hsl(187 94% 53% / 0.28)"
              }}
            />
            <div>
              <div className="text-sm font-semibold tracking-widest uppercase">Ayush Kumar</div>
              <div className="text-xs text-muted-foreground">AI & ML Engineer</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 text-sm">
              <button onClick={() => scrollToSection('hero')} className="chip chip-primary">
                <span>Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => scrollToSection('projects')} className="chip">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="chip">Skills</button>
              <button onClick={() => scrollToSection('certificates')} className="chip">Certificates</button>
              <button onClick={() => scrollToSection('experience')} className="chip">Timeline</button>
              <button onClick={() => scrollToSection('contact')} className="chip">
                <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_0_5px_hsl(var(--success-glow))]" />
                <span>Contact</span>
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/AyushSenDazzler" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Drawer */}
        <div 
          className={`absolute top-0 right-0 h-full w-72 max-w-[80vw] bg-card border-l border-border/50 shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <span className="text-sm font-semibold text-muted-foreground">Navigation</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-col gap-1 p-4">
              <button 
                onClick={() => handleNavClick('hero')} 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium bg-primary/10 border border-primary/30 text-primary transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                Portfolio
              </button>
              <button 
                onClick={() => handleNavClick('projects')} 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavClick('skills')} 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => handleNavClick('certificates')} 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
              >
                Certificates
              </button>
              <button 
                onClick={() => handleNavClick('experience')} 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
              >
                Timeline
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_0_4px_hsl(var(--success-glow))]" />
                Contact
              </button>
            </nav>
            
            {/* Social Links in Drawer */}
            <div className="mt-auto p-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-3">Connect with me</p>
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/AyushSenDazzler" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
