import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { fontSans } from "@/app/ui/font";
import ClientLayout from "./client-layout"; // Import the new client component

export const metadata: Metadata = {
  title: {
    template: "%s | Adrien NOA ANABA",
    default: "Adrien NOA ANABA - Portfolio",
  },
  description: "Portfolio de Adrien NOA ANABA, développeur full-stack spécialisé en Java/Angular et passionné par les nouvelles technologies. Découvrez mes projets, compétences et expériences.",
  keywords: ["Développeur Full-Stack", "Java", "Angular", "Spring Boot", "Odoo", "Next.js", "Portfolio", "Adrien NOA ANABA"],
  authors: [{ name: "Adrien NOA ANABA" }],
  creator: "Adrien NOA ANABA",
  openGraph: {
    title: "Adrien NOA ANABA - Portfolio",
    description: "Découvrez le portfolio d'un développeur full-stack passionné.",
    type: "website",
    locale: "fr_FR",
    // TODO: Add a URL and a specific image for Open Graph
  },
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={fontSans.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
