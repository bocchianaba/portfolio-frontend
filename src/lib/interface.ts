export interface Project {
  name: string;
  imgSrc: string[];
  tasks: string[];
  tech: string[];
  category: string[];
  purpose: string;
  role: string;
  thirdParty: string[];
}

export interface Stack {
  img: string;
  name: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
  img: string;
}
