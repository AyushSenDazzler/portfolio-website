import { useState } from "react";
import { ExternalLink, X, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  pills: string[];
  accentPills: number[];
  metric: string;
  links: { label: string; href: string }[];
  details?: {
    overview: string;
    features: string[];
    challenges: string;
    outcome: string;
  };
}

const projects: Project[] = [
  {
    tag: "Credit Risk · XGBoost",
    title: "Credit risk prediction model",
    subtitle: "Production-ready classifier to predict loan defaults using tabular customer data.",
    body: "Developed an end-to-end feature engineering pipeline and credit risk prediction model to enhance loan risk assesment using cashflow data from 40k users.",
    pills: ["Python", "XGBoost", "scikit‑learn", "Pandas", "SHAP", "TabPfn", "TabM"],
    accentPills: [0, 1],
    metric: "ROC‑AUC: 0.90+ on holdout set.",
    links: [{ label: "Company Project", href: "#" }],
    details: {
      overview: "A supervised ML system to accurately predict loan default risk using historical application and repayment data. Focused on tabular ML, data imputation, and domain-driven feature design.",
      features: [
        "Data pipeline for missing value imputation and categorical encoding",
        "Feature engineering using domain-specific rules and customer histories",
        "Hyperparameter optimization for XGBoost (grid/random search)",
        "Comprehensive model validation (cross-validation, ROC analysis, calibration)",
        "Model explainability with SHAP for feature importance and transparency"
      ],
      challenges: "Class imbalance and noisy labels posed prediction challenges. Used stratified sampling, class weighting, and feature selection to improve generalization.",
      outcome: "Deployed a classifier with >0.85 ROC‑AUC and solid business interpretability to support loan approvals and risk management workflows."
    }
  },
  {
    tag: "RAG · Transformers · LLM",
    title: "RAG Based, Question Answering System",
    subtitle: "Built a RAG based, question answering system to answer questions about incident reports.",
    body: "Designed preprocessing pipeline, experimented with BERT‑based architectures, and deployed an inference API. Focused on class imbalance handling and robust evaluation.",
    pills: ["Python", "PyTorch", "Transformers", "scikit‑learn", "FastAPI"],
    accentPills: [0, 1],
    metric: "Macro‑F1: +8–10% over baseline.",
    links: [{ label: "Company Project", href: "#" }],
    details: {
      overview: "A production-ready NLP system designed to automatically categorize customer support tickets into multiple categories with high accuracy, even with severely imbalanced class distributions.",
      features: [
        "Custom data preprocessing pipeline with text cleaning and normalization",
        "Fine-tuned DistilBERT model with class-weighted loss function",
        "Inference API built with FastAPI for real-time predictions",
        "Comprehensive evaluation with confusion matrices and per-class metrics",
        "Docker containerization for easy deployment"
      ],
      challenges: "The main challenge was handling extreme class imbalance (some categories had 50x fewer samples). Solved using a combination of SMOTE oversampling, class weights, and focal loss.",
      outcome: "Achieved 8-10% improvement in macro-F1 score compared to baseline models, with inference latency under 100ms per request."
    }
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="pt-14">
      <div className="mb-5">
        <div className="text-sm uppercase tracking-widest text-foreground/80 mb-1">
          <span className="text-primary">Projects</span> · Selected work
        </div>
        <p className="text-sm text-foreground/90 max-w-sm">
          A few end‑to‑end projects that showcase practical ML, data engineering, and solid coding skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 xl:gap-5">
        {projects.map((project, i) => (
          <article 
            key={i} 
            className="card-portfolio cursor-pointer group"
            onClick={() => setSelectedProject(project)}
          >
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">{project.tag}</div>
            <h3 className="text-base font-semibold mb-1.5 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-xs text-muted-foreground mb-2">{project.subtitle}</p>
            <p className="text-sm text-foreground/95 mb-3">{project.body}</p>
            
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.pills.map((pill, j) => (
                <span key={j} className={project.accentPills.includes(j) ? "pill pill-accent" : "pill"}>
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
              <span dangerouslySetInnerHTML={{ __html: project.metric.replace(/(\+[\d–%]+|~[\d–x]+)/g, '<strong class="text-foreground">$1</strong>') }} />
              <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs">View details</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border/50 backdrop-blur-xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="text-[10px] uppercase tracking-widest text-primary mb-1">
                  {selectedProject.tag}
                </div>
                <DialogTitle className="text-xl font-semibold">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.subtitle}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 mt-4">
                {/* Overview */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Overview</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.details?.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1.5">
                    {selectedProject.details?.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Challenges & Solutions</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.details?.challenges}
                  </p>
                </div>

                {/* Outcome */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Outcome</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.details?.outcome}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.pills.map((pill, j) => (
                      <span key={j} className={selectedProject.accentPills.includes(j) ? "pill pill-accent" : "pill"}>
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                  {selectedProject.links.map((link, k) => (
                    <a 
                      key={k} 
                      href={link.href} 
                      className="link-pill"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
