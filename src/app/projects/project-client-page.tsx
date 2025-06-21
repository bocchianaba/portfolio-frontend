"use client";
import ProjectCardItem from "@/components/ui/project-card-item";
import { projectList } from "@/lib/utils";
import { Project } from "@/lib/interface";

export default function ProjectClientPage() {
    return (
        <div className="relative flex flex-col items-center justify-center pb-8 min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-500 overflow-hidden">
        <h1 className="page_title mt-32">My Projects</h1>
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
              thirdParty={project.thirdParty}
            />
          ))}
        </div>
      </div>
    )
} 