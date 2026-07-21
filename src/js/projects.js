let projectsList = [];

const Descriptions = [
  {
    project1:
      "PWA Gerador de Conselhos Multi-idioma: Aplicação instalável que gera e traduz conselhos em tempo real (PT/ES) integrando duas APIs. Possui modo claro/escuro, layout responsivo e suporte offline.",
  },
  {
    project2:
      "Portfólio Criativo e Interativo: Meu portfólio pessoal focado em proporcionar uma experiência imersiva. Construído com HTML, CSS e JavaScript puro, ele utiliza Three.js para renderização 3D e GSAP para animações de alta performance.",
  },
];

const gitUrl = [
  {
    project1:
      "https://github.com/Phduartebjj/App-gerador-de-conselhos-interface",
  },
  {
    project2: "https://github.com/Phduartebjj/Portf-lio_Duarte",
  },
];

function getProjects() {
  return projectsList;
}

function createProject(
  nameP,
  extensionP,
  imgUrl,
  stacksP,
  descriptionP,
  gitUrl,
) {
  let project = {
    name: `>${nameP}.${extensionP}/`,
    img: imgUrl,
    stack: stacksP,
    path: `./DUARTE_PROJECTS/${nameP}.${extensionP}/`,
    description: descriptionP,
    git: gitUrl,
  };

  return project;
}

function addProject(project) {
  projectsList.push(project);
}

function portfolioProjects() {
  addProject(
    createProject(
      "Advice",
      "pwa",
      "https://app-gerador-de-conselhos-interface.vercel.app/",
      "HTML, CSS, JS",
      Descriptions[0].project1,
      gitUrl[0].project1,
    ),
  );
  addProject(
    createProject(
      "Portfolio",
      "duarte",
      "https://phduartebjj.github.io/Portf-lio_Duarte/",
      "HTML, CSS, JS",
      Descriptions[1].project2,
      gitUrl[1].project2,
    ),
  );
}

export { getProjects, portfolioProjects };
