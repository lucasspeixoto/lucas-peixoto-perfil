import Card from "@/components/card";

const projectsData = [
  {
    title: "Fluxo de dados via rota no Angular",
    description: `Breve apresentação das possibilidades de trafegar informações via rota
    no angular`,
    imgSrc: "/static/images/angular-1.png",
    href: "https://medium.com/@lspeixotodev/fluxo-de-dados-via-rota-no-angular-58631d598ce5",
  },
  {
    title: "Criando um CRUD com Angular: Observables + Signals",
    description: `Implementação prática em formato de artigo de um sistema com crud completo
    utilizando a nova feature da versão 16 do angular, os Signals.`,
    imgSrc: "/static/images/angular-2.png",
    href: "https://medium.com/@lspeixotodev/criando-um-crud-com-angular-observables-signals-75008ff4671c",
  },
  {
    title: "Controle de Erros customizados no Angular com Control Container",
    description: `Apresentação de Funcionalidade Control Container do Angular e um exemplo prático de como utiliza-la
    para gerencimento de erros em formulários reativos`,
    imgSrc: "/static/images/angular-3.png",
    href: "https://medium.com/@lspeixotodev/otimiza%C3%A7%C3%A3o-das-valida%C3%A7%C3%B5es-de-formul%C3%A1rios-no-angular-com-control-container-cc49b73305d3",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Artigos
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-7 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            Lista de artigos escritos para a comunidade Angular
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <>
              {projectsData.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imgSrc={project.imgSrc}
                  href={project.href}
                />
              ))}
            </>
          </div>
        </div>
      </div>
    </>
  );
}
