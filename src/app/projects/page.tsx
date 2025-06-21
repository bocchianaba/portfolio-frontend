import { Metadata } from "next";
import ProjectClientPage from "./project-client-page";

export const metadata: Metadata = {
    title: "Projets",
    description: "Explorez les projets réalisés par Adrien NOA ANABA, incluant des applications web, des systèmes backend et des intégrations complexes.",
    keywords: ["Projets", "Adrien NOA ANABA", "Portfolio", "Développement Web", "Full-Stack", "Java", "Angular", "Odoo"],
};

export default function ProjectPage() {
    return <ProjectClientPage />;
}
