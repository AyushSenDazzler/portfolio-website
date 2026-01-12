const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", accent: true },
      { name: "SQL", accent: false },
      { name: "Bash", accent: false }
    ]
  },
  {
    title: "ML / DL",
    skills: [
      { name: "PyTorch", accent: true },
      { name: "scikit‑learn", accent: false },
      { name: "Transformers", accent: false },
      { name: "NLP", accent: false }
    ]
  },
  {
    title: "Data Manupulation & EDA",
    skills: [
      { name: "Pandas", accent: true },
      { name: "Numpy", accent: true },
      { name: "Seaborn", accent: false },
      { name: "PySpark", accent: true },
      { name: "Polars", accent: false }
    ]
  },
  {
    title: "Cloud & Dev",
    skills: [
      { name: "AWS", accent: true },
      { name: "Azure", accent: true },
      { name: "Git & GitHub", accent: false },
      { name: "CI/CD", accent: false },
      { name: "Docker", accent: false }
    ]
  },
  {
    title: "Domains",
    skills: [
      { name: "NLP", accent: true },
      { name: "Recommendation", accent: false },
      { name: "Tabular ML", accent: false },
      { name: "Credit-Risk", accent: true },
      { name: "Time‑series", accent: false }
    ]
  },
  {
    title: "Learning & Certifications",
    skills: [
      { name: "GATE DS & AI Prep", accent: true },
      { name: "Online ML courses", accent: false },
      { name: "Azure / cloud learning", accent: false }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="pt-14">
      <div className="mb-5">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
          <span className="text-primary">Skills</span> · Tech stack
        </div>
        <p className="text-sm text-muted-foreground/70 max-w-sm">
          Tools and languages used across projects, interviews, and self‑driven learning.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => (
          <div key={i} className="card-portfolio">
            <div className="text-sm font-medium mb-2">{group.title}</div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill, j) => (
                <span key={j} className={skill.accent ? "pill pill-accent" : "pill"}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
