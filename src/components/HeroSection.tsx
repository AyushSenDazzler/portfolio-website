import { ArrowRight, ExternalLink } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-6">
      <div className="grid lg:grid-cols-[1.4fr_1.1fr] gap-8 items-center">
        {/* Left Content */}
        <div>
          <div className="flex flex-wrap gap-2 mb-5">
            <div className="text-xs px-3 py-1.5 rounded-full border border-muted-foreground/50 bg-card/90 text-muted-foreground inline-flex items-center gap-2">
              <span>👋</span>
              <span>Hey, I'm <strong className="text-primary font-medium">Your Name</strong></span>
            </div>
            <div className="text-xs px-3 py-1.5 rounded-full border border-muted-foreground/50 bg-card/90 text-muted-foreground inline-flex items-center gap-2">
              <span>🎓</span>
              <span>B.Tech & GATE (Data Science & AI)</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Building data‑driven<br />
            <span className="hero-headline-gradient">AI & ML systems</span>.
          </h1>

          <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
            Early‑career engineer crafting reliable machine learning pipelines, solid C & Python foundations, and practical models for real‑world data problems. Focused on NLP, transformers, and data engineering workflows.
          </p>

          <div className="flex flex-wrap gap-3 items-center mb-6">
            <button onClick={() => scrollToSection('projects')} className="btn-portfolio btn-primary-portfolio">
              View featured projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="btn-portfolio btn-ghost-portfolio">
              GitHub profile
              <ExternalLink className="w-4 h-4" />
            </a>
            <button onClick={() => scrollToSection('contact')} className="btn-portfolio btn-ghost-portfolio">
              Contact / Availability
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="pl-3 border-l border-muted-foreground/30">
              <strong className="block text-base text-foreground">5+ projects</strong>
              <span>End‑to‑end ML & data pipelines.</span>
            </div>
            <div className="pl-3 border-l border-muted-foreground/30 max-w-[220px]">
              Actively exploring <span className="text-success">transformers, PyTorch, SQL optimizations, and Azure Databricks</span> for scalable ML systems.
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
          <div className="grid md:grid-cols-[1.35fr_1.1fr] gap-4">
            {/* Code side */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">Recent stack</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="pill pill-accent">Python · PyTorch</span>
                <span className="pill">TensorFlow</span>
                <span className="pill">SQL · Window funcs</span>
                <span className="pill">Apache Spark</span>
                <span className="pill">Azure · Databricks</span>
                <span className="pill">C programming</span>
              </div>

              <div className="code-block">
                <div className="flex justify-between items-center mb-2 text-muted-foreground">
                  <span>model.py</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-success" />
                  </div>
                </div>
                <pre className="whitespace-pre-wrap text-foreground">
<span className="code-comment"># scoring candidates by skills & projects</span>
<span className="code-keyword">def</span> <span className="code-func">score_profile</span>(skills, projects):
    ml = {'{'}
    <span className="code-num">'transformers'</span>, <span className="code-num">'pytorch'</span>, <span className="code-num">'sql'</span>
    {'}'}
    score = len(ml & set(skills)) * <span className="code-num">2</span> + len(projects)
    <span className="code-keyword">return</span> score</pre>
              </div>
            </div>

            {/* Mini stats */}
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-card/90 border border-muted-foreground/50 p-3 text-sm">
                <div className="text-muted-foreground text-xs mb-1">Current role & focus</div>
                <div>
                  AI/ML Engineer (Intern‑level)
                  <div className="availability-tag">
                    <span className="availability-dot animate-pulse-glow" />
                    <span>Open to full‑time</span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-1">
                    Interested in ML engineer, data engineer, or applied scientist roles.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-card/90 border border-muted-foreground/50 p-3 text-sm">
                <div className="text-muted-foreground text-xs mb-1">Highlights</div>
                <ul className="pl-4 list-disc text-xs space-y-0.5">
                  <li>Built NLP & tabular ML projects with Git‑first workflows</li>
                  <li>Hands‑on with ETL, feature engineering, and evaluation</li>
                  <li>Comfortable in C, Python, SQL, and basic Spark</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span>Available: <strong className="text-foreground">Remote / Hybrid / On‑site</strong></span>
                <span>Location: <strong className="text-foreground">Your City · India</strong></span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
