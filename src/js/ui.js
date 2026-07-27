import { isFill, haveAProject } from "./validation.js";

function showProjects(projectsThree, projectsList) {
  projectsList.forEach((project) => {
    if (haveAProject(projectsThree, project.name)) {
      return;
    }

    const freeSlot = projectsThree.find((branch) => !isFill(branch));

    if (freeSlot) {
      freeSlot.textContent = project.fullName;
    }
  });
}

function updateProjectDetails(project) {
  const projectInfos = document.querySelector(".project-info");
  const paragraphsInfos = projectInfos.querySelectorAll("li");
  const projectImg = document.getElementById("project-photo");
  const projectDescription = document.getElementById("project-description");
  const projectGit = document.getElementById("project-git");

  projectImg.src = project.img;
  projectGit.href = project.git;
  projectDescription.textContent = project.description;
  paragraphsInfos[0].textContent = `>PATH: ${project.path}`;
  paragraphsInfos[1].textContent = `>STACK: ${project.stack}`;
}

export { showProjects, updateProjectDetails };
