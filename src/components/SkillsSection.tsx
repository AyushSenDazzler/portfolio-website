const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", accent: true },
      { name: "C", accent: true },
      { name: "SQL", accent: false },
      { name: "Bash", accent: false }
    ]
  },
  {
    title: "ML / DL",
    skills: [
      { name: "PyTorch", accent: true },
      { name: "TensorFlow", accent: false },
      { name: "scikit‑learn", accent: false },
      { name: "Transformers", accent: false },
      { name: "NLP", accent: false }
    ]
  },
  {
    title: "Data & Engineering",
    skills: [
      { name: "Pandas", accent: true },
      { name: "PySpark", accent: true },
      { name: "Databricks", accent: false },
      { name: "ETL", accent: false },
      { name: "SQL optimization", accent: false }
    ]
  },
  {
    title: "Cloud & Dev",
    skills: [
      { name: "Azure", accent: true },
      { name: "Git & GitHub", accent: false },
      { name: "CI basics", accent: false },
      { name: "Docker (basic)", accent: false }
    ]
  },
  {
    title: "Domains",
    skills: [
      { name: "NLP", accent: true },
      { name: "Recommendation", accent: false },
      { name: "Tabular ML", accent: false },
      { name: "Time‑series (basic)", accent: false }
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
