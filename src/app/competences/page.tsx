import { stackList } from "@/lib/utils";
import { Metadata, NextPage } from "next";

import Image from "next/image";

export const metadata: Metadata = {
    title: "Compétences",
    description: "Découvrez les compétences techniques de Adrien NOA ANABA. Maîtrise de technologies front-end et back-end, bases de données, et outils de développement.",
    keywords: ["Compétences", "Adrien NOA ANABA", "Développeur", "Java", "Angular", "Spring Boot", "Odoo", "Docker", "Azure", "Next.js", "React", "TypeScript"],
};

interface Props {}

const CompetencePage: NextPage<Props> = ({}) => {
  return (
    <div className="relative flex flex-col items-center justify-center pb-8 min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-500 overflow-hidden">
      <h1 className="page_title mt-32">Mes Compétences</h1>
      <div className="mx-20 px-20 flex flex-col gap-4">
        <p className="mx-20 px-20">
          Bonjour ! Je m'appelle Adrien Jean Bocchi NOA ANABA. Je suis originaire du
          Cameroun. Au cours de mon parcours, j'ai acquis une expérience précieuse à travers
          divers postes d'ingénieurs logiciels et développeurs, ce qui a grandement amélioré mon éthique de travail,
          mes compétences en communication et mon adaptabilité.
        </p>
        <p className="mx-20 px-20">
          Mon voyage dans le monde de la technologie a commencé par une passion forte
          pour la résolution de problèmes, ce qui m'a conduit à poursuivre le programme
          de Technologie des Systèmes Informatiques. Malgré ses défis, je suis resté déterminé et
          j'ai forgé des amitiés durables qui m'ont soutenu tout au long de ce programme exigeant.
          Tout au long de mes études à l'École Nationale Supérieure de Yaoundé,
          j'ai eu l'opportunité de participer à des projets fascinants.
        </p>
        <p className="mx-20 px-20">
          Notamment, j'ai contribué au développement d'applications et de projets qui
          ont reçu la reconnaissance de mes collègues, instructeurs et clients
          de même. Travailler en collaboration au sein d'une équipe vers un objectif
          partagé a été une expérience incroyablement enrichissante et unique pour
          moi. Je suis impatient de continuer à explorer des projets passionnants à l'avenir,
          avec un intérêt particulier pour le développement web et le développement
          mobile multiplateforme. Je suis devenu confiant dans l'utilisation des technologies
          suivantes :
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-8 w-full max-w-4xl mx-auto">
          {stackList.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Image src={stack.img} width={50} height={50} alt={stack.name} className="mb-2" />
              <p className="text-white text-center font-semibold text-base">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetencePage;
