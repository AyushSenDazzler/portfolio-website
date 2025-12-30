import { ExternalLink } from "lucide-react";

const projects = [
  {
    tag: "NLP · Transformers",
    title: "Context‑aware text classifier",
    subtitle: "Fine‑tuned transformer model to classify support tickets with imbalanced data.",
    body: "Designed preprocessing pipeline, experimented with BERT‑based architectures, and deployed an inference API. Focused on class imbalance handling and robust evaluation.",
    pills: ["Python", "PyTorch", "Transformers", "scikit‑learn", "FastAPI"],
    accentPills: [0, 1],
    metric: "Macro‑F1: +8–10% over baseline.",
    links: [{ label: "GitHub", href: "#" }, { label: "Demo / Notebook", href: "#" }]
  },
  {
    tag: "Data engineering · Spark",
    title: "Batch pipeline on Azure",
    subtitle: "Analytics pipeline processing event data into curated tables for dashboards.",
    body: "Built PySpark jobs for cleaning, aggregations, and feature computation. Scheduled jobs in Databricks and optimized queries with partitioning and caching.",
    pills: ["PySpark", "Azure Databricks", "SQL", "Delta / Parquet"],
    accentPills: [0],
    metric: "~2–3x faster query times vs naive approach.",
    links: [{ label: "GitHub", href: "#" }]
  },
  {
    tag: "ML fundamentals · C & Python",
    title: "From‑scratch ML toolkit",
    subtitle: "Educational repo implementing ML algorithms to solidify math and code foundations.",
    body: "Implemented linear/logistic regression, k‑NN, and decision trees from scratch in C/Python to learn memory management, numerics, and algorithmic trade‑offs.",
    pills: ["C", "Python", "Data structures", "Unit tests"],
    accentPills: [0, 1],
    metric: "Focus: clarity, tests, and performance.",
    links: [{ label: "GitHub", href: "#" }]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-14">
      <div className="mb-5">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
          <span className="text-primary">Projects</span> · Selected work
        </div>
        <p className="text-sm text-muted-foreground/70 max-w-sm">
          A few end‑to‑end projects that showcase practical ML, data engineering, and solid coding skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <article key={i} className="card-portfolio">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">{project.tag}</div>
            <h3 className="text-base font-semibold mb-1.5">{project.title}</h3>
            <p className="text-xs text-muted-foreground mb-2">{project.subtitle}</p>
            <p className="text-sm text-foreground/85 mb-3">{project.body}</p>
            
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.pills.map((pill, j) => (
                <span key={j} className={project.accentPills.includes(j) ? "pill pill-accent" : "pill"}>
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
              <span dangerouslySetInnerHTML={{ __html: project.metric.replace(/(\+[\d–%]+|~[\d–x]+)/g, '<strong class="text-foreground">$1</strong>') }} />
              <div className="flex flex-wrap gap-2">
                {project.links.map((link, k) => (
                  <a key={k} href={link.href} className="link-pill">
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
