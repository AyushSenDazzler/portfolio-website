import { ArrowRight, ExternalLink } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-6 xl:pt-10 2xl:pt-14">
      <div className="grid lg:grid-cols-[1.2fr_1.3fr] xl:grid-cols-[1.2fr_1.2fr] 2xl:grid-cols-[1.3fr_1.2fr] 3xl:grid-cols-[1.4fr_1.2fr] gap-8 xl:gap-10 2xl:gap-14 3xl:gap-20 items-center">
        {/* Left Content */}
        <div>
          <div className="flex flex-wrap gap-2 mb-5">
            <div className="text-xs px-3 py-1.5 rounded-full border border-foreground/30 bg-card/90 text-foreground/90 inline-flex items-center gap-2 animate-fade-in">
              <span>👋</span>
              <span>Hey, I'm <strong className="text-primary font-medium">Ayush Kumar</strong></span>
            </div>
            <div className="text-xs px-3 py-1.5 rounded-full border border-foreground/30 bg-card/90 text-foreground/90 inline-flex items-center gap-2 animate-fade-in [animation-delay:100ms]">
              <span>🎓</span>
              <span>B.S Data Science & Applications |<strong className="text-primary font-medium"> IIT Madras</strong></span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-4 xl:mb-6 animate-fade-in [animation-delay:200ms]">
            Building data‑driven<br />
            <span className="hero-headline-gradient">AI & ML systems</span>.
          </h1>

          <p className="text-foreground/90 max-w-md xl:max-w-lg 2xl:max-w-xl leading-relaxed mb-6 xl:mb-8 xl:text-lg animate-fade-in [animation-delay:300ms]">
            ML engineer building production-ready pipelines and intelligent systems using Python, PyTorch, and transformers. Specialized in NLP, deep learning, and scalable data workflows that solve real business problems.
          </p>

          <div className="flex flex-wrap gap-3 items-center mb-6 animate-fade-in [animation-delay:400ms]">
            <button onClick={() => scrollToSection('projects')} className="btn-portfolio btn-primary-portfolio">
              View featured projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="https://github.com/AyushSenDazzler" target="_blank" rel="noreferrer" className="btn-portfolio btn-ghost-portfolio">
              GitHub profile
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="#" className="btn-portfolio btn-ghost-portfolio">
              Download Resume
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-foreground/85 animate-fade-in [animation-delay:500ms]">
            <div className="pl-3 border-l border-foreground/30">
              <strong className="block text-base text-foreground">5+ projects</strong>
              <span>End‑to‑end ML model pipelines.</span>
            </div>
            <div className="pl-3 border-l border-foreground/30 max-w-[220px]">
              Actively exploring <span className="text-success">Python, PyTorch, & Transformers</span> for scalable ML systems.
            </div>
          </div>
        </div>

        {/* Right Visual Card */}
        <aside 
          className="p-5 rounded-3xl overflow-hidden order-first lg:order-last"
          style={{
            background: "radial-gradient(circle at 0 0, hsl(187 94% 53% / 0.16), hsl(222 47% 5% / 0.96))",
            border: "1px solid hsl(215 20% 55% / 0.4)",
            boxShadow: "0 18px 45px hsl(217 55% 10% / 0.75)"
          }}
        >
          <div className="grid md:grid-cols-[1.2fr_1.3fr] gap-4">
            {/* Code side */}
            <div>
              <p className="text-xs text-foreground/80 mb-2">Recent stack</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="pill pill-accent">Python · PyTorch</span>
                <span className="pill">SQL · Window funcs</span>
                <span className="pill">Apache Spark</span>
                <span className="pill">Azure · Databricks</span>
              </div>

              <div className="code-block">
                <div className="flex justify-between items-center mb-2 text-foreground/80">
                  <span>model.py</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-success" />
                  </div>
                </div>
                <pre className="whitespace-pre-wrap text-foreground font-mono text-xs">
<span className="code-keyword">def</span> <span className="code-func">score_profile</span>(skills, projects):{"\n"}
{"    "}ml = {"{"}<span className="code-num">'transformers'</span>, <span className="code-num">'pytorch'</span>, <span className="code-num">'sql'</span>{"}"}{"\n"}
{"    "}score = len(ml & set(skills)) * <span className="code-num">2</span> + len(projects){"\n"}
{"    "}<span className="code-keyword">return</span> score
                </pre>
              </div>
            </div>

            {/* Mini stats */}
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-card/90 border border-foreground/30 p-3 text-sm">
                <div className="text-foreground/80 text-xs mb-1">Current role & focus</div>
                <div>
                  AI/ML Developer
                  <div className="availability-tag">
                    <span className="availability-dot animate-pulse-glow" />
                    <span>Open to full‑time</span>
                  </div>
                  <p className="text-foreground/80 text-xs mt-1">
                    Interested in ML engineer, data engineer, or applied scientist roles.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-card/90 border border-foreground/30 p-3 text-sm">
                <div className="text-foreground/80 text-xs mb-1">Highlights</div>
                <ul className="pl-4 list-disc text-xs space-y-0.5">
                  <li>Built NLP & tabular ML projects with Git‑first workflows</li>
                  <li>Hands‑on with ETL, feature engineering, and evaluation</li>
                  <li>Comfortable in Python, SQL, PyTorch, and PySpark</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                <span>Available: <strong className="text-foreground">Remote / Hybrid / On‑site</strong></span>
                <span>Location: <strong className="text-foreground">Hyderabad · India</strong></span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
