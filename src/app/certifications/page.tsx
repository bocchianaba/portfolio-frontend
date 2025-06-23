import Image from "next/image";
import { Metadata } from "next";
import { Certification } from "@/lib/interface";

export const metadata: Metadata = {
    title: "Certifications",
    description: "Consultez les certifications professionnelles de Adrien NOA ANABA, incluant des certifications Microsoft Azure et autres.",
    keywords: ["Certifications", "Adrien NOA ANABA", "Microsoft Azure", "Azure Fundamentals", "Développement"],
};

const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Juin 2025",
    link: "https://learn.microsoft.com/api/credentials/share/fr-fr/NOAANABAAdrienJeanBocchi-5086/D8FE47FA71A7AC47?sharingId=57CE40E33B9160A0",
    img: "/img/competency-test/az.png"
  },
];

export default function CertificationPage() {
  return (
    <div className="relative flex flex-col items-center justify-center pb-8 min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-500 overflow-hidden">
      <h1 className="page_title mt-32">Mes Certifications</h1>
      <div className="flex flex-wrap justify-center gap-8 mt-10 px-4">
        {certifications.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background/80 dark:bg-background/60 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform border border-primary/30"
          >
            <Image
              src={cert.img}
              alt={cert.title}
              width={140}
              height={140}
              className="mb-4 rounded-lg shadow"
            />
            <div className="text-lg font-bold text-primary text-center mb-1">{cert.title}</div>
            <div className="text-sm text-foreground text-center mb-1">{cert.issuer}</div>
            <div className="text-xs text-muted-foreground mb-2">{cert.date}</div>
            <span className="text-xs text-primary underline">See credential</span>
          </a>
        ))}
      </div>
    </div>
  );
}
