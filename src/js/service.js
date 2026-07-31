import { animationServiceGo } from "./animation.js";

export class Service {
  constructor({
    nameService,
    description,
    ideal,
    serviceDelivery,
    imgSrc,
    serviceLink,
  }) {
    this.name = nameService;
    this.description = description;
    this.ideal = ideal;
    this.delivery = serviceDelivery;
    this.img = imgSrc;
    this.link = serviceLink;
  }
}

const servicesData = {
  landingPage: {
    description:
      "Transforme visitantes em clientes com páginas rápidas, visualmente marcantes e criadas para destacar seu negócio.",
    ideal: `Ideal para: <br>> Produtos<br>> Campanhas<br>> Serviços`,
    serviceDelivery: `Entrega:<br>✔ Design responsivo<br>✔ Performance<br>✔ Animações<br>✔ Integrações`,
    imgSrc: "",
    serviceLink: "",
  },
  webBusiness: {
    description:
      "Sites institucionais criados para apresentar sua empresa, fortalecer sua marca e facilitar o contato com novos clientes.",
    ideal: `Ideal para: <br>> Clínicas<br>> Restaurantes<br>> Empresas locais<br>> Profissionais autônomos`,
    serviceDelivery: `Entrega:<br>✔ Estrutura profissional<br>✔ SEO básico<br>✔ Responsividade<br>✔ Integração com contato`,
    imgSrc: "",
    serviceLink: "",
  },
};

const services = [
  new Service({
    nameService: "landingPage",
    ...servicesData.landingPage,
    animation: false,
  }),
  new Service({
    nameService: "webBusiness",
    ...servicesData.webBusiness,
    animation: false,
  }),
];

export function findServiceSelected(service) {
  return services.find((s) => s.name === service);
}

export function serviceSelected(serviceClicked, services) {
  const dataServiceClicked = serviceClicked.getAttribute("data-service");
  const indiceServiceClicked = services.indexOf(serviceClicked);
  services.forEach((service, index) => {
    const dataService = service.getAttribute("data-service");

    if (dataServiceClicked !== service.getAttribute("data-service")) {
      service.classList.remove("selected");
      serviceClicked.classList.add("selected");
      animationServiceGo(dataServiceClicked, indiceServiceClicked, dataService);
    }
  });
}

export function getServices() {
  return services;
}
