export class Project {
  constructor({ name, extension, img, stack, description, git }) {
    this.name = name;
    this.extension = extension;

    this.fullName = `>${name}.${extension}/`;

    this.path = `./DUARTE_PROJECTS/${name}.${extension}/`;

    this.img = img;
    this.stack = stack;
    this.description = description;
    this.git = git;
  }
}

const projectsData = {
  project1: {
    stack: "HTML, CSS e JS",
    img: "https://app-gerador-de-conselhos-interface.vercel.app/",
    description:
      "PWA Gerador de Conselhos Multi-idioma: Aplicação instalável que gera e traduz conselhos em tempo real (PT/ES) integrando duas APIs. Possui modo claro/escuro, layout responsivo e suporte offline.",

    git: "https://github.com/Phduartebjj/App-gerador-de-conselhos-interface",
  },
  project2: {
    stack: "HTML, CSS e JS",
    img: "https://phduartebjj.github.io/Portf-lio_Duarte/",
    description:
      "Portfólio Criativo e Interativo: Meu portfólio pessoal focado em proporcionar uma experiência imersiva. Construído com HTML, CSS e JavaScript puro, ele utiliza Three.js para renderização 3D e GSAP para animações de alta performance.",
    git: "https://github.com/Phduartebjj/Portf-lio_Duarte",
  },
};

const projects = [
  new Project({
    name: "Advice",
    extension: "pwa",
    ...projectsData.project1,
  }),
  new Project({
    name: "portfolio",
    extension: "duarte",
    ...projectsData.project2,
  }),
];

export function getProjects() {
  return projects;
}
