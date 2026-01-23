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
        <div className="text-sm uppercase tracking-widest text-foreground/80 mb-1">
          <span className="text-primary">Contact</span> · Reach out
        </div>
        <p className="text-sm text-foreground/90 max-w-sm">
          Best ways to contact, plus a quick form. Email or LinkedIn are usually fastest.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Contact Info */}
        <div className="card-portfolio">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">Preferred channels</div>
          <h3 className="text-base font-semibold mb-3">Let's collaborate</h3>
          <p className="text-sm text-foreground/95 mb-4">
            Open to full-time and freelance opportunities in ML engineering, NLP, and applied AI development.
          </p>
          
          <div className="space-y-2">
            <a href="mailto:ayushraj84341@gmail.com" className="flex items-center gap-3 px-3 py-2 rounded-full bg-card/90 border border-border/50 text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <span><strong className="text-foreground font-medium">Email:</strong> ayushraj84341@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/ayush-kumar-84431820a" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-full bg-card/90 border border-border/50 text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <Linkedin className="w-4 h-4 text-primary flex-shrink-0" />
              <span><strong className="text-foreground font-medium">LinkedIn:</strong> /in/ayush-kumar</span>
            </a>
            <a href="https://github.com/AyushSenDazzler" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-full bg-card/90 border border-border/50 text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <Github className="w-4 h-4 text-primary flex-shrink-0" />
              <span><strong className="text-foreground font-medium">GitHub:</strong> @ayushsendazzler</span>
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
                className="w-full rounded-xl px-3 py-2 border border-border/60 bg-white text-gray-900 text-sm outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-400"
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
                className="w-full rounded-xl px-3 py-2 border border-border/60 bg-white text-gray-900 text-sm outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-400"
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
                className="w-full rounded-xl px-3 py-2 border border-border/60 bg-white text-gray-900 text-sm outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/50 transition-all resize-y placeholder:text-gray-400"
              />
            </div>
            
            <button type="submit" className="btn-portfolio btn-primary-portfolio">
              Send message
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <p className="text-xs text-foreground/70 mt-3">
              This form is frontend‑only in this template. You can connect it to an email service or backend later.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
