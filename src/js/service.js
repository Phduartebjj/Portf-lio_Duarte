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
};

const servicesData = [
    landingPage = {
        description: "Transforme visitantes em clientes com páginas rápidas, visualmente marcantes e criadas para destacar seu negócio.",
        ideal: "Ideal para: \n> Produtos\n> Campanhas\n> Serviços",
        delivery:"Entrega:\n✔ Design responsivo\n✔ Performance\n✔ Animações\n✔ Integrações",
        img: "",
        link: "" 
    },
    siteInstitucional = {
        description: "Sites institucionais criados para apresentar sua empresa, fortalecer sua marca e facilitar o contato com novos clientes.",
        ideal: "Ideal para: \n> Clínicas\n> Restaurantes\n> Empresas locais\n> Profissionais autônomos",
        delivery:"Entrega:\n✔ Estrutura profissional\n✔ SEO básico\n✔ Responsividade\n✔ Integração com contato",
        img: "",
        link: "" 
    }
]

const services = [
    new Service({
        nameService = "Landing Page",
        ...servicesData.landingPage,
    }),
    new Service({
        nameService = "Site institucional",
        ...servicesData.siteInstitucional
    })
]
console.log(services[0])

export function getServices(){
    return services
}