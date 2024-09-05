import { NextPage } from "next";

import Image from "next/image";

interface Props {}

export const stackList = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    name: "HTML"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    name: "CSS"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "ReactJS"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    name: "NextJs"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    name: "Typescript"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    name: "Git"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "React Native"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    name: "NodeJS"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
    name: "Firebase"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    name: "MongoDB"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    name: "Python"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
    name: "Flask"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    name: "C"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    name: "Java"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    name: "MySQL"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    name: "Material UI"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    name: "Figma"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
    name: "TailwindCSS"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "VS Code"
  }
];

const CompetencePage: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center pb-8">
      <h1 className="page_title px-20">About Me</h1>
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
        <div className="mx-20 px-20 flex flex-wrap justify-around">
          {stackList.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col flex-10 justify-center items-center  w-1/10 mx-10"
            >
              <Image src={stack.img} width={"50"} height={"50"} alt={""} />
              <p className="my-2">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetencePage;
