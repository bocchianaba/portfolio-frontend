import { IOptions, RecursivePartial } from "@tsparticles/engine";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project, Stack } from "./interface";

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
    role: "Développeur Backend",
    tasks: ["implémentation, test et documentation du microservice de transfert"],
    imgSrc: [
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg"
    ],
    tech: ["Java", "Spring Boot"],
    category: ["Web hook", "API RESTful"],
    purpose: "",
    thirdParty: ["CamCCul", "Gimac", "iTech"]
  },
  {
    name: "Agent Financing",
    role: "Chef d'équipe",
    tasks: [
      "planification",
      "implémentation du microservice de prêt",
      "implémentation du microservice de lancement",
      "implémentation du microservice TFJ",
      "implémentation du microservice de réconciliation",
      "implémentation du microservice de rappel SMS",
      "implémentation du back-office",
      "répartition des tâches",
      "tests du système"
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
    category: ["Web hook", "API REST", "Application Web"],
    purpose: "",
    thirdParty: [
      "CamCCul, RainBow, CCC, Renaprov et autres partenaires bancaires",
      "Mobile Money Cameroun"
    ]
  },
  {
    name: "Corpokash",
    role: "Développeur Backend",
    tasks: ["implémentation du microservice de prêt"],
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
    category: ["Web hook", "API REST"],
    purpose: "",
    thirdParty: ["People Finance", "Mobile Money Cameroun"]
  },
  {
    name: "Mokekash",
    role: "Développeur Backend",
    tasks: ["implémentation du microservice d'abonnement"],
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
    category: ["Web hook", "API REST"],
    purpose: "",
    thirdParty: ["Orange RDC"]
  },
  {
    name: "EPSI",
    role: "Mainteneur",
    tasks: ["correction de bugs dans le système"],
    imgSrc: [
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg",
      "/vercel.svg"
    ],
    tech: ["Java", "Spring Boot"],
    category: ["Web hook", "API REST"],
    purpose: "",
    thirdParty: ["Flutterwave", "Santa lucia"]
  },
  {
    name: "Momokash version 2",
    role: "Chef d'équipe",
    tasks: [
      "planification",
      "implémentation du microservice de prêt",
      "implémentation du microservice de lancement",
      "implémentation du microservice TFJ",
      "implémentation du microservice de réconciliation",
      "implémentation du microservice de rappel SMS",
      "implémentation du back-office",
      "répartition des tâches",
      "tests du système",
      "migration de données"
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
    category: ["Web hook", "API REST", "Application Web"],
    purpose: "",
    thirdParty: [
      "CamCCul, RainBow, CCC, Renaprov et autres partenaires bancaires",
      "Mobile Money Cameroun"
    ]
  },
  {
    name: "Medvault",
    role: "Développeur Full Stack",
    tasks: [
      "planification",
      "analyse, conception, implémentation de l'Application Desktop",
      "migration de données"
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
    category: ["Application Desktop"],
    purpose: "",
    thirdParty: []
  },
  {
    name: "Test de Compétence",
    role: "Développeur Full Stack",
    tasks: ["planification", "analyse, conception, implémentation et tests"],
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
    category: ["Application Web", "API REST"],
    purpose: "",
    thirdParty: []
  },
  {
    name: "Program Leadership",
    role: "Développeur Frontend et Mobile",
    tasks: ["planification", "analyse, conception, implémentation et tests"],
    imgSrc: [
      "/img/pl/1.png",
      "/img/pl/2.png",
      "/img/pl/3.png",
      "/img/pl/4.png",
      "/img/pl/5.png",
      "/img/pl/6.png",
      "/img/pl/7.png"
    ],
    tech: ["Angular", "Ionic"],
    category: ["Application Web", "Application Mobile"],
    purpose: "",
    thirdParty: []
  },
  {
    name: "Megatecc",
    role: "Développeur Frontend",
    tasks: ["planification", "analyse, conception, implémentation et tests"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Angular"],
    category: ["Application Web"],
    purpose: "",
    thirdParty: []
  },
  {
    name: "Pricnac",
    role: "Développeur Frontend",
    tasks: ["planification", "analyse, conception, implémentation et tests"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Angular"],
    category: ["Application Web"],
    purpose: "",
    thirdParty: ["PRICNAC", "AUF", "OACPS"]
  },
  {
    name: "PDVIR",
    role: "Ingénieur Logiciel",
    tasks: ["planification", "collecte de données", "conception de diagrammes BPMN"],
    imgSrc: ["/vercel.svg", "/vercel.svg", "/vercel.svg"],
    tech: ["Visual paradigm", "QGIS"],
    category: ["Exigences métier"],
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

export const stackList: Stack[] = [
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
