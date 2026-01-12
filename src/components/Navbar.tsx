import { ArrowRight, Github, Linkedin } from "lucide-react";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg border-b border-card/65 nav-gradient">
      <div className="container flex items-center justify-between gap-6 py-3">
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
          <nav className="hidden md:flex items-center gap-2 text-sm">
            <button onClick={() => scrollToSection('hero')} className="chip chip-primary">
              <span>Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => scrollToSection('projects')} className="chip">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="chip">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="chip">Timeline</button>
            <button onClick={() => scrollToSection('contact')} className="chip">
              <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_0_5px_hsl(var(--success-glow))]" />
              <span>Contact</span>
            </button>
          </nav>
          
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
  );
};

export default Navbar;
