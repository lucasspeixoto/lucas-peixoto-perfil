import Card from "@/components/Card";

const projectsData = [
  {
    title:
      "Responsividade: Estratégias Eficientes para Detectar Larguras de Janela em Aplicações React",
    description: `Apresentação de um Hook customizado e performático para determinação se certa largura de janela foi atingida.`,
    imgSrc: "/static/images/next-2.png",
    href: "https://medium.com/@lspeixotodev/responsividade-estrat%C3%A9gias-eficientes-para-detectar-larguras-de-janela-em-aplica%C3%A7%C3%B5es-react-1a59cddf9dd3",
  },
  {
    title:
      "Testes unitários com Next JS, React Hook Form, Jest e Testing Library",
    description: `Apresentação de exemplos práticos de testes unitários para formulários 
    em React com uso de react-hook-form, zod, jest e react testing library.`,
    imgSrc: "/static/images/next-1.png",
    href: "https://medium.com/@lspeixotodev/testes-unit%C3%A1rios-com-next-js-react-hook-form-jest-e-testing-library-a8081afa8103",
  },
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

export default function PresentationsPage() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
          Artigos
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-7 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
          Artigos escritos para a comunidade
        </p>
      </div>
      <div className="container mt-8">
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
    </>
  );
}
