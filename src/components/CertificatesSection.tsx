import { useState } from "react";
import { BadgeCheck, ExternalLink, Calendar, Eye } from "lucide-react";
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
  driveFileId?: string;
}

// Helper to generate Google Drive embed URL
const getDrivePreviewUrl = (fileId: string) => 
  `https://drive.google.com/file/d/${fileId}/preview`;

const certificates: Certificate[] = [
  {
    title: "Smart India Hackathon 2023",
    issuer: "Government of India",
    date: "December 2023",
    credentialId: "None",
    verifyUrl: "#",
    skills: ["Python", "Software Engineering", "SBOM"],
    driveFileId: "1hyUikfrdXHhCqNX5mtDdADzKSkFhws8z"
  },
  {
    title: "WorldQuant International Quant Championship",
    issuer: "WorldQuant Brain",
    date: "December 2024",
    credentialId: "None",
    verifyUrl: "#",
    skills: ["Python", "Finance", "Statistics"],
    driveFileId: "1yBEGfJXueTFRQWTSOM4VNWho1PAdRksx"
  },
  {
    title: "Python OOPS",
    issuer: "NextWave",
    date: "April 2024",
    credentialId: "BOYGLNGRPN",
    verifyUrl: "#",
    skills: ["Python", "OOPs"],
    driveFileId: "1SwYBoNtUiX70NCBQBdamzl6Tk5fofo7F"
  },
  
  {
    title: "Databricks Associate",
    issuer: "Databricks",
    date: "February 2026",
    credentialId: "None",
    verifyUrl: "#",
    skills: ["Databricks", "Spark", "Python"],
    driveFileId: ""
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
        <p className="text-sm text-foreground/90 max-w-sm xl:max-w-md 2xl:max-w-lg">
          Professional certifications and courses completed to strengthen core skills.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 xl:gap-5 2xl:gap-6">
        {certificates.map((cert, i) => (
          <div 
            key={i} 
            className="card-portfolio group cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <BadgeCheck className="w-5 h-5 text-primary" />
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
                    <BadgeCheck className="w-5 h-5 text-primary" />
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
                {selectedCert.driveFileId && selectedCert.driveFileId !== "YOUR_DRIVE_FILE_ID_1" && 
                 selectedCert.driveFileId !== "YOUR_DRIVE_FILE_ID_2" && 
                 selectedCert.driveFileId !== "YOUR_DRIVE_FILE_ID_3" && 
                 selectedCert.driveFileId !== "YOUR_DRIVE_FILE_ID_4" ? (
                  <iframe
                    src={getDrivePreviewUrl(selectedCert.driveFileId)}
                    className="w-full h-[70vh] rounded-lg border border-border/30"
                    title={`${selectedCert.title} Certificate`}
                    allow="autoplay"
                    sandbox="allow-scripts allow-same-origin"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-[50vh] text-foreground/60">
                    <BadgeCheck className="w-16 h-16 mb-4 text-primary/30" />
                    <p className="text-sm">Certificate preview not available</p>
                    <p className="text-xs text-foreground/40 mt-1 text-center max-w-md">
                      To display the certificate, add your Google Drive file ID.<br />
                      Get it from the share link: drive.google.com/file/d/<strong>FILE_ID</strong>/view
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
