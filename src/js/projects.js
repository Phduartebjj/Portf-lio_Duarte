let projectsList = [];

const Descriptions = [
  {
    project1:
      "Um gerador de conselhos aleátorios com PWA integrado com duas API, uma geradora de conselhos e outra de tradução",
  },
  { project2: "Meu portfólio com three.js e gsap" },
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
      "./src/assets/projects-img/imagem-advice.png",
      "HTML CSS JS",
      Descriptions[0].project1,
      gitUrl[0].project1
    ),
  );
  addProject(
    createProject(
      "Portfolio",
      "duarte",
      "./src/assets/projects-img/imagem-portfólio.PNG",
      "HTML, CSS, JS",
      Descriptions[1].project2,
      gitUrl[1].project2
    ),
  );
}

export { getProjects, portfolioProjects };
