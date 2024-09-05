"use client";
import { BackpackIcon } from "@radix-ui/react-icons";
import { NextPage } from "next";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import ProjectCardItem from "@/components/ui/project-card-item";
import { projectList } from "@/lib/utils";

interface Props {}

const ProjectPage: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center pb-8">
      <h1 className="page_title">My Projects</h1>
      <div className="container container-md mx-20 py-10 flex flex-col gap-4">
        {projectList.map((project: Project, index) => (
          <ProjectCardItem
            key={index}
            name={project.name}
            imgSrc={project.imgSrc}
            tasks={project.tasks}
            tech={project.tech}
            category={project.category}
            purpose={project.purpose}
            role={project.role}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
