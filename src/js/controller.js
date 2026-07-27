import { showProjects, updateProjectDetails } from "./ui.js";
import { getProjects } from "./projects.js";
import { contactMessage } from "./contact.js";

export function initPortfolio() {
  const projectsThree = Array.from(document.querySelectorAll(".project"));
  const btnSendMessage = document.getElementById("btn-send-message");
  btnSendMessage.addEventListener("click", contactMessage);
  projectsThree.forEach((branch) => {
    branch.addEventListener("click", (e) => {
      let projectFind = getProjects().find(
        (p) => p.fullName === branch.textContent,
      );
      if (projectFind) {
        updateProjectDetails(projectFind);
      }
    });
  });

  showProjects(projectsThree, getProjects());
}
