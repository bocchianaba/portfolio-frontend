import { Metadata } from "next";
import ExperienceClientPage from "./experience-client-page";

export const metadata: Metadata = {
    title: "Expériences",
    description: "Découvrez les expériences professionnelles de Adrien NOA ANABA en tant que développeur full-stack, ingénieur logiciel et ses divers rôles dans le développement et la gestion de projets.",
    keywords: ["Expériences professionnelles", "Adrien NOA ANABA", "Développeur Full-Stack", "Ingénieur Logiciel", "Java", "Angular", "Gestion de projet"],
};

export default function ExperiencePage() {
    return <ExperienceClientPage />;
}
