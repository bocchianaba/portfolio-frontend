import { IOptions, RecursivePartial } from "@tsparticles/engine";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const particleOptions: RecursivePartial<IOptions> | undefined = {
  // background: {
  //   color: {
  //     value: "#0d47a1"
  //   }
  // },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },
      random: false,
      speed: 6,
      straight: false
    },
    number: {
      density: {
        enable: true
      },
      value: 80
    },
    opacity: {
      value: 1
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
};

const projectList: Project[] = [
  {
    name: "GAV",
    role: "Backend Developer ",
    tasks: ["implementation, test and documentation of Transfer microservice"],
    imgSrc: [""],
    tech: ["Java", "Spring Boot"],
    category: ["Web hook", "Api Restful"],
    purpose: ""
  },
  {
    name: "Agent Financing",
    role: "Team Lead ",
    tasks: [
      "planning",
      "implementation of loan microservice",
      "implementation of launcher microservice",
      "implementation of tfj microservice",
      "implementation of reconciliation microservice",
      "implementation of sms reminder microservice",
      "implementation of back-office",
      "task repartition",
      "testing of the system"
    ],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Java", "Spring Boot", "React"],
    category: ["Web hook", "Api Rest", "Web App"],
    purpose: ""
  },
  {
    name: "Corpokash",
    role: "Backend Developer",
    tasks: ["implementation of loan microservice"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Java", "Spring Boot"],
    category: ["Web hook", "Api Rest"],
    purpose: ""
  },
  {
    name: "Mokekash",
    role: "Backend Developer",
    tasks: ["implementation of subscription microservice"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Java", "Spring Boot"],
    category: ["Web hook", "Api Rest"],
    purpose: ""
  },
  {
    name: "EPSI",
    role: "Maintainer",
    tasks: ["fix bug in the system"],
    imgSrc: [""],
    tech: ["Java", "Spring Boot"],
    category: ["Web hook", "Api Rest"],
    purpose: ""
  },
  {
    name: "Momokash version 2",
    role: "Team Lead ",
    tasks: [
      "planning",
      "implementation of loan microservice",
      "implementation of launcher microservice",
      "implementation of tfj microservice",
      "implementation of reconciliation microservice",
      "implementation of sms reminder microservice",
      "implementation of back-office",
      "task repartition",
      "testing of the system",
      "data migration"
    ],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Java", "Spring Boot", "React"],
    category: ["Web hook", "Api Rest", "Web App"],
    purpose: ""
  },
  {
    name: "Medvault",
    role: "Full Stack Developer",
    tasks: [
      "planning",
      "analysis, conception, implementation of Desktop Application",
      "data migration"
    ],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Java", "Java Fx", "Spring Boot"],
    category: ["Desktop App"],
    purpose: ""
  },
  {
    name: "Competency test",
    role: "Full Stack Developer",
    tasks: ["planning", "analysis, conception, implementation and test"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Odoo", "OWL"],
    category: ["Web App", "Api Rest"],
    purpose: ""
  },
  {
    name: "Program Leadership",
    role: "Frontend Developer and Mobile Developer",
    tasks: ["planning", "analysis, conception, implementation and test"],
    imgSrc: [""],
    tech: ["Angular", "Ionic"],
    category: ["Web Application", "Mobile Application"],
    purpose: ""
  },
  {
    name: "Megatecc",
    role: "Frontend Developer",
    tasks: ["planning", "analysis, conception, implementation and test"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Angular"],
    category: ["Web Application"],
    purpose: ""
  },
  {
    name: "Pricnac",
    role: "Frontend Developer",
    tasks: ["planning", "analysis, conception, implementation and test"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Angular"],
    category: ["Web Application"],
    purpose: ""
  },
  {
    name: "PDVIR",
    role: "Software Engineer",
    tasks: ["planning", "data collection", "conception of BPMN diagrams"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Visual paradigm", "QGIS"],
    category: ["Business requirement"],
    purpose: ""
  }
];

export { particleOptions, projectList };
