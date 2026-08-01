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

function isFill(p) {
  return p.textContent.trim() !== ">";
}

function haveAProject(array, projectName) {
  return array.some((e) => e.textContent.includes(projectName));
}

function updateServicesDetails(service) {
  const serviceDescription = document.querySelector(".service-description");
  const serviceIdeal = document.querySelector(".service-ideal");
  const serviceDelivery = document.querySelector(".service-delivery");
  serviceIdeal.replaceChildren();
  serviceDelivery.replaceChildren();
  
  service.delivery.forEach((delivery) => {
    const li = document.createElement("li");
    li.textContent = delivery;
    serviceDelivery.appendChild(li);
  });

  service.ideal.forEach((ideal) => {
    const li = document.createElement("li");
    li.textContent = ideal;
    serviceIdeal.appendChild(li);
  });

  serviceDescription.innerHTML = service.description;
}

export { showProjects, updateProjectDetails, updateServicesDetails };
