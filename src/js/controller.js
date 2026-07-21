import { showProjects, updateProjectDetails } from "./ui.js";
import { getProjects } from "./projects.js";
import { contactMessage } from "./contact.js";

const projectsThree = Array.from(document.querySelectorAll(".project"));
const messageBox = document.getElementById("contact-message");

messageBox.addEventListener("keydown", (e) => {
  contactMessage(e, messageBox);
});

projectsThree.forEach((branch) => {
  branch.addEventListener("click", (e) => {
    let projectFind = getProjects().find((p) => p.fullName === branch.textContent);
    updateProjectDetails(projectFind);
  });
});

export function initPortfolio() {
  showProjects(projectsThree, getProjects());
}
