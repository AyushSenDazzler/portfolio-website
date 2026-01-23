import { useState } from "react";
import { Award, ExternalLink, Calendar, X, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  skills: string[];
  mediaUrl?: string; // URL to PDF or image
  mediaType?: "pdf" | "image"; // Type of media
}

const certificates: Certificate[] = [
  {
    title: "Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "XXXXXXXX",
    verifyUrl: "#",
    skills: ["Azure ML", "Python", "Data Science"],
    mediaUrl: "/certificates/azure-ds.pdf", // Replace with actual path
    mediaType: "pdf"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford / DeepLearning.AI)",
    date: "2024",
    credentialId: "XXXXXXXX",
    verifyUrl: "#",
    skills: ["Supervised Learning", "Neural Networks", "ML Strategy"],
    mediaUrl: "/certificates/ml-specialization.png", // Replace with actual path
    mediaType: "image"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera (DeepLearning.AI)",
    date: "2023",
    credentialId: "XXXXXXXX",
    verifyUrl: "#",
    skills: ["CNNs", "RNNs", "Transformers", "TensorFlow"],
    mediaUrl: "/certificates/dl-specialization.png", // Replace with actual path
    mediaType: "image"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "XXXXXXXX",
    verifyUrl: "#",
    skills: ["AWS", "Cloud Computing", "S3", "EC2"],
    mediaUrl: "/certificates/aws-cloud.pdf", // Replace with actual path
    mediaType: "pdf"
  }
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="pt-14">
      <div className="mb-5">
        <div className="text-sm uppercase tracking-widest text-foreground/80 mb-1">
          <span className="text-primary">Certificates</span> · Credentials
        </div>
        <p className="text-sm text-foreground/90 max-w-sm">
          Professional certifications and courses completed to strengthen core skills.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {certificates.map((cert, i) => (
          <div 
            key={i} 
            className="card-portfolio group cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5" />
                <span className="text-xs">View</span>
              </div>
            </div>

            <h3 className="text-sm font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            
            <p className="text-xs text-foreground/80 mb-2">
              {cert.issuer}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-foreground/70 mb-3">
              <Calendar className="w-3 h-3" />
              <span>{cert.date}</span>
              {cert.credentialId && (
                <>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="text-muted-foreground">ID: {cert.credentialId}</span>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill, j) => (
                <span key={j} className="pill text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certificate View Modal */}
      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-card border-border/50 backdrop-blur-xl p-0">
          {selectedCert && (
            <>
              <DialogHeader className="p-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <DialogTitle className="text-lg font-semibold">
                      {selectedCert.title}
                    </DialogTitle>
                    <p className="text-sm text-foreground/80">
                      {selectedCert.issuer} · {selectedCert.date}
                    </p>
                  </div>
                </div>
                {selectedCert.verifyUrl && selectedCert.verifyUrl !== "#" && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-12 top-4 p-2 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    aria-label="Verify certificate"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                )}
              </DialogHeader>

              <div className="flex-1 overflow-auto p-4 bg-background/50" style={{ maxHeight: "calc(90vh - 100px)" }}>
                {selectedCert.mediaUrl ? (
                  selectedCert.mediaType === "pdf" ? (
                    <iframe
                      src={selectedCert.mediaUrl}
                      className="w-full h-[70vh] rounded-lg border border-border/30"
                      title={`${selectedCert.title} Certificate`}
                    />
                  ) : (
                    <div className="flex items-center justify-center">
                      <img
                        src={selectedCert.mediaUrl}
                        alt={`${selectedCert.title} Certificate`}
                        className="max-w-full max-h-[70vh] rounded-lg border border-border/30 object-contain"
                      />
                    </div>
                  )
                ) : (
                  <div className="flex flex-col items-center justify-center h-[50vh] text-foreground/60">
                    <Award className="w-16 h-16 mb-4 text-primary/30" />
                    <p className="text-sm">Certificate media not available</p>
                    <p className="text-xs text-foreground/40 mt-1">
                      Add the certificate file path to display it here
                    </p>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-border/50 flex flex-wrap gap-2">
                {selectedCert.skills.map((skill, j) => (
                  <span key={j} className="pill text-xs">
                    {skill}
                  </span>
                ))}
                {selectedCert.credentialId && (
                  <span className="pill text-xs ml-auto">
                    ID: {selectedCert.credentialId}
                  </span>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
