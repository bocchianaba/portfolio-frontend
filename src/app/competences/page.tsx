import { stackList } from "@/lib/utils";
import { NextPage } from "next";

import Image from "next/image";

interface Props {}

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
