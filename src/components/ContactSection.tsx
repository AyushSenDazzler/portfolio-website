import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for reaching out!",
      description: "Please hook this form to a backend or email service to receive messages.",
    });
  };

  return (
    <section id="contact" className="pt-14">
      <div className="mb-5">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
          <span className="text-primary">Contact</span> · Reach out
        </div>
        <p className="text-sm text-muted-foreground/70 max-w-sm">
          Best ways to contact, plus a quick form. Email or LinkedIn are usually fastest.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Contact Info */}
        <div className="card-portfolio">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">Preferred channels</div>
          <h3 className="text-base font-semibold mb-3">Let's collaborate</h3>
          <p className="text-sm text-foreground/85 mb-4">
            Open to internships, full‑time roles, and freelance project work in ML engineering, data engineering, and applied ML.
          </p>
          
          <div className="space-y-2">
            <a href="mailto:your.email@example.com" className="flex items-center gap-3 px-3 py-2 rounded-full bg-card/90 border border-border/50 text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <span><strong className="text-foreground font-medium">Email:</strong> your.email@example.com</span>
            </a>
            <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-full bg-card/90 border border-border/50 text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <Linkedin className="w-4 h-4 text-primary flex-shrink-0" />
              <span><strong className="text-foreground font-medium">LinkedIn:</strong> /in/your-link</span>
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-full bg-card/90 border border-border/50 text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <Github className="w-4 h-4 text-primary flex-shrink-0" />
              <span><strong className="text-foreground font-medium">GitHub:</strong> @your-username</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card-portfolio">
          <form onSubmit={handleSubmit}>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">Quick message</div>
            <h3 className="text-base font-semibold mb-3">Share a role or idea</h3>
            
            <div className="mb-3">
              <label htmlFor="name" className="block text-xs text-muted-foreground mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="w-full rounded-xl px-3 py-2 border border-border/60 bg-card/98 text-foreground text-sm outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="block text-xs text-muted-foreground mb-1">Work email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@company.com"
                required
                className="w-full rounded-xl px-3 py-2 border border-border/60 bg-card/98 text-foreground text-sm outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-xs text-muted-foreground mb-1">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me briefly about the role, project, or collaboration."
                rows={4}
                className="w-full rounded-xl px-3 py-2 border border-border/60 bg-card/98 text-foreground text-sm outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/50 transition-all resize-y placeholder:text-muted-foreground/50"
              />
            </div>
            
            <button type="submit" className="btn-portfolio btn-primary-portfolio">
              Send message
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <p className="text-xs text-muted-foreground/60 mt-3">
              This form is frontend‑only in this template. You can connect it to an email service or backend later.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
