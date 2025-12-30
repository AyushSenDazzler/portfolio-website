import { ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="pt-14">
      <div className="mb-5">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
          <span className="text-primary">Timeline</span> · Experience
        </div>
        <p className="text-sm text-muted-foreground/70 max-w-sm">
          A quick snapshot of education, internship, and current focus, with availability highlighted.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Experience Card */}
        <div className="card-portfolio">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">Experience</div>
          <h3 className="text-base font-semibold mb-3">Internships & roles</h3>
          
          <div className="relative pl-5 mt-2">
            <div className="timeline-line" />
            
            <div className="relative mb-5 pl-3">
              <div className="timeline-bullet" />
              <div className="text-sm font-medium">AI/ML Engineer Intern</div>
              <div className="text-xs text-muted-foreground mb-1">Company Name · MM YYYY – MM YYYY · Location</div>
              <div className="text-xs text-foreground/85">
                Worked on model training, evaluation, and basic data pipelines. Contributed to internal notebooks and helped debug production issues with the team.
              </div>
            </div>

            <div className="relative mb-5 pl-3">
              <div className="timeline-bullet" />
              <div className="text-sm font-medium">Academic & personal projects</div>
              <div className="text-xs text-muted-foreground mb-1">Ongoing</div>
              <div className="text-xs text-foreground/85">
                Built multiple end‑to‑end projects across NLP, tabular ML, and data engineering to prepare for technical interviews and real‑world tasks.
              </div>
            </div>

            <div className="relative pl-3">
              <div className="timeline-bullet" />
              <div className="text-sm font-medium">Open to opportunities</div>
              <div className="text-xs text-muted-foreground mb-1">Actively looking · Remote / On‑site</div>
              <div className="text-xs text-foreground/85">
                Seeking roles where it is possible to work closely with data scientists, ML engineers, or platform teams and ship production‑grade ML features.
              </div>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="card-portfolio">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">Education</div>
          <h3 className="text-base font-semibold mb-3">Academic background</h3>
          
          <p className="text-sm text-foreground/85 mb-3">
            Briefly describe degree, university, and key subjects: algorithms, data structures, probability, linear algebra, ML, and database systems.
          </p>
          
          <ul className="pl-4 list-disc text-sm text-foreground/85 space-y-1 mb-4">
            <li>B.Tech / B.E. in Computer Science / related field (Year)</li>
            <li>GATE (Data Science & AI) preparation with focus on core CS & ML</li>
            <li>Self‑driven courses on transformers, NLP, and data engineering</li>
          </ul>
          
          <p className="text-sm text-foreground/85 mb-4">
            Download resume for detailed coursework, GPA, and recent achievements.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <a href="#" className="link-pill">
              <span>Download resume (PDF)</span>
            </a>
            <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noreferrer" className="link-pill">
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
