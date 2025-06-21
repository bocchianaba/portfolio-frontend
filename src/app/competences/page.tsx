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
      <h1 className="page_title px-20 mt-32">Mes Compétences</h1>
      <div className="mx-20 px-20 flex flex-col gap-4">
        <p className="mx-20 px-20">
          Hello! My name is Adrien Jean Bocchi NOA ANABA. I am originally from
          Cameroon. During my time here, I gained valuable experience through
          various entry-level positions, which greatly enhanced my work ethic,
          communication skills, and adaptability.
        </p>
        <p className="mx-20 px-20">
          My journey into the world of technology began with a strong passion
          for problem-solving, which led me to pursue the Computer Systems
          Technology program. Despite its challenges, I remained determined and
          forged lasting friendships that supported me throughout this demanding
          program. Throughout my studies at National Advanced School of Yaounde,
          I had the opportunity to engage in fascinating projects.
        </p>
        <p className="mx-20 px-20">
          Notably, I contributed to the development of App, projects that
          garnered recognition from my colleagues, instructors, and clients
          alike. Working collaboratively within a team towards a shared
          objective has been an incredibly rewarding and unique experience for
          me. I am eager to continue exploring exciting projects in the future,
          with a particular interest in web development and cross-platform
          mobile development. I have become confident using the following
          technologies :
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
