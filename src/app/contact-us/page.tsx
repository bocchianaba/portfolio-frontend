import { Metadata } from "next";
import ContactClientPage from "./contact-client-page";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contactez Adrien NOA ANABA pour toute proposition de projet, collaboration ou question. Remplissez le formulaire pour envoyer un message directement.",
    keywords: ["Contact", "Adrien NOA ANABA", "Email", "Développeur", "Collaboration", "Projet"],
};

export default function ContactUsPage() {
    return <ContactClientPage />;
}
