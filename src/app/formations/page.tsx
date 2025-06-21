import { Metadata } from "next";
import FormationClientPage from "./formation-client-page";

export const metadata: Metadata = {
    title: "Formations",
    description: "Découvrez le parcours académique de Adrien NOA ANABA, de l'école primaire à l'obtention de son diplôme d'ingénieur en informatique.",
    keywords: ["Formation", "Adrien NOA ANABA", "Diplôme d'ingénieur", "Master", "Informatique", "Parcours académique"],
};

export default function FormationPage() {
    return <FormationClientPage />;
}
