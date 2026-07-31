import {
  showProjects,
  updateProjectDetails,
  updateServicesDetails,
} from "./ui.js";
import { getProjects } from "./projects.js";
import { contactMessage } from "./contact.js";
import { findServiceSelected, serviceSelected } from "./service.js";

export function initPortfolio() {
  const servicesOptions = Array.from(
    document.querySelectorAll("[data-service]"),
  );

  servicesOptions.forEach((option, indice) => {
    option.addEventListener("click", () => {
      const service = option.getAttribute("data-service");
      serviceSelected(option, servicesOptions);
      updateServicesDetails(findServiceSelected(service));
    });
  });

  const projectsThree = Array.from(document.querySelectorAll(".project"));
  projectsThree.forEach((branch) => {
    branch.addEventListener("click", () => {
      let projectFind = getProjects().find(
        (p) => p.fullName === branch.textContent,
      );
      if (projectFind) {
        updateProjectDetails(projectFind);
      }
    });
  });

  const btnSendMessage = document.getElementById("btn-send-message");
  btnSendMessage.addEventListener("click", contactMessage);
  showProjects(projectsThree, getProjects());
}
