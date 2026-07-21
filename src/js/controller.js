import { showProjects, updateProjectDetails } from "./ui.js";
import { getProjects, portfolioProjects } from "./projects.js";

const projectsThree = Array.from(document.querySelectorAll(".project"));


export function initPortfolio() {
  portfolioProjects();
  showProjects(projectsThree, getProjects());
  projectsThree.forEach((branch) => {
    branch.addEventListener("click", (e) => {
      let projectFind = getProjects().find((p) => p.name === branch.textContent);
        console.log(projectFind)
      updateProjectDetails(projectFind)

    });
  });
}
