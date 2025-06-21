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
    imgSrc: [
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg"
    ],
    tech: ["Java", "Spring Boot"],
    category: ["Web hook", "Api Restful"],
    purpose: "",
    thirdParty: ["CamCCul", "Gimac", "iTech"]
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
    imgSrc: [
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg"
    ],
    tech: ["Java", "Spring Boot", "React"],
    category: ["Web hook", "Api Rest", "Web App"],
    purpose: "",
    thirdParty: [
      "CamCCul, RainBow, CCC, Renaprov and another bank partners",
      "Mobile Money Cameroon"
    ]
  },
  {
    name: "Corpokash",
    role: "Backend Developer",
    tasks: ["implementation of loan microservice"],
    imgSrc: [
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg"
    ],
    tech: ["Java", "Spring Boot"],
    category: ["Web hook", "Api Rest"],
    purpose: "",
    thirdParty: ["People Finance", "Mobile Money Cameroon"]
  },
  {
    name: "Mokekash",
    role: "Backend Developer",
    tasks: ["implementation of subscription microservice"],
    imgSrc: [
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg"
    ],
    tech: ["Java", "Spring Boot"],
    category: ["Web hook", "Api Rest"],
    purpose: "",
    thirdParty: ["Orange RDC"]
  },
  {
    name: "EPSI",
    role: "Maintainer",
    tasks: ["fix bug in the system"],
    imgSrc: [
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg"
    ],
    tech: ["Java", "Spring Boot"],
    category: ["Web hook", "Api Rest"],
    purpose: "",
    thirdParty: ["Flutterwave", "Santa lucia"]
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
    imgSrc: [
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg"
    ],
    tech: ["Java", "Spring Boot", "React"],
    category: ["Web hook", "Api Rest", "Web App"],
    purpose: "",
    thirdParty: [
      "CamCCul, RainBow, CCC, Renaprov and another bank partners",
      "Mobile Money Cameroon"
    ]
  },
  {
    name: "Medvault",
    role: "Full Stack Developer",
    tasks: [
      "planning",
      "analysis, conception, implementation of Desktop Application",
      "data migration"
    ],
    imgSrc: [
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg"
    ],
    tech: ["Java", "Java Fx", "Spring Boot"],
    category: ["Desktop App"],
    purpose: "",
    thirdParty: []
  },
  {
    name: "Competency test",
    role: "Full Stack Developer",
    tasks: ["planning", "analysis, conception, implementation and test"],
    imgSrc: [
      "/img/competency-test/adding-test.png",
      "/img/competency-test/adding-test-2.png",
      "/img/competency-test/all-test-view.png",
      "/img/competency-test/applicant-management-3.png",
      "/img/competency-test/applicant-manager-detail.png",
      "/img/competency-test/applicant-manager-list.png",
      "/img/competency-test/candidate-result.png",
      "/img/competency-test/candidate-view.png",
      "/img/competency-test/candidate-view-2.png",
      "/img/competency-test/candidate-view-3.png",
      "/img/competency-test/expert-interface.png",
      "/img/competency-test/field-details.png",
      "/img/competency-test/field.png",
      "/img/competency-test/list-user.png",
      "/img/competency-test/login.png",
      "/img/competency-test/question-view.png"
    ],
    tech: ["Odoo", "OWL"],
    category: ["Web App", "Api Rest"],
    purpose: "",
    thirdParty: []
  },
  {
    name: "Program Leadership",
    role: "Frontend Developer and Mobile Developer",
    tasks: ["planning", "analysis, conception, implementation and test"],
    imgSrc: [
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg"
    ],
    tech: ["Angular", "Ionic"],
    category: ["Web Application", "Mobile Application"],
    purpose: "",
    thirdParty: []
  },
  {
    name: "Megatecc",
    role: "Frontend Developer",
    tasks: ["planning", "analysis, conception, implementation and test"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Angular"],
    category: ["Web Application"],
    purpose: "",
    thirdParty: []
  },
  {
    name: "Pricnac",
    role: "Frontend Developer",
    tasks: ["planning", "analysis, conception, implementation and test"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Angular"],
    category: ["Web Application"],
    purpose: "",
    thirdParty: ["PRICNAC", "AUF", "OACPS"]
  },
  {
    name: "PDVIR",
    role: "Software Engineer",
    tasks: ["planning", "data collection", "conception of BPMN diagrams"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Visual paradigm", "QGIS"],
    category: ["Business requirement"],
    purpose: "",
    thirdParty: [
      "DGI",
      "CUY",
      "MINPOSTEL",
      "MINDHUB",
      "ENEO",
      "CAMWATER",
      "FEICOM",
      "CAMTEL"
    ]
  }
];

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
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "VS Code"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
    name: "Spring Boot"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
    name: "Django"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/odoo/odoo-plain.svg",
    name: "Odoo"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    name: "Docker"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    name: "Azure"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
    name: "Angular"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg",
    name: "IntelliJ"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
    name: "Jenkins"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flutterwave_Logo.png",
    name: "Flutterwave"
  }
];

export { particleOptions, projectList };
