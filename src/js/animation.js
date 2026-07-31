//Quando apertar no [1], o [2] vai sumir o texto mostrando só o número e vai ir para a lateral dele.
// Se apertar o [2], o [1] vai ser movido e o [2] vai entrar que ele estava.

export function animationServiceGo(
  dataServiceClicked,
  indiceClicked,
  dataService,
) {
  if (indiceClicked === 0) {
    gsap.to(`[data-service="${dataService}"]`, {
      x: 160,
      y: -20,
    });
    gsap.to(`[data-service="${dataServiceClicked}"]`, {
      x: 0,
    });
  }

  if (indiceClicked === 1) {
    gsap.to(`[data-service="${dataService}"]`, {
      x: 160,
    });
    gsap.to(`[data-service="${dataServiceClicked}"]`, {
      x: 0,
      y: -19,
    });
  }
}
