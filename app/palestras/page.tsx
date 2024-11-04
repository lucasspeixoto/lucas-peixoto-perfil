import Card from "@/components/Card";

const presentationsData = [
  {
    title: "Performance e gestão de estado em aplicações angular",
    description: `Apresentação ao vivo para o AngularSP no youtube. A palestra teve como objetivo a apresentação de técnicas de performance em aplicações com angular e também as vantagens de se utilizar a ferramenta NgRx para gestão de estado, com foco em performance`,
    imgSrc: "/static/images/angular-4.png",
    href: "https://www.youtube.com/watch?v=Z9Ne4Imit28",
  },
  {
    title: "Server Side rendering (SSR) no Angular",
    description: `Como o angular SSR e as novas features que surgiram na versão 17 temos a possibilidade de utilizar renderização via servidor para nos trazer inúmeros ganhos entre eles a performance ao exibir o conteúdo inicial de nossos aplicativos, melhor Search engine optimization (SEO) e melhor experiência de usuário. Nesta apresentação vamos entender a fundo como isso funciona por baixo dos panos e como podemos utilizar em nossos aplicativos angular.`,
    imgSrc: "/static/images/angular-5.png",
    href: "https://www.youtube.com/watch?v=gyfU9jcPeW8",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
          Palestras
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-7 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
          Apresentações ao vivo
        </p>
      </div>
      <div className="container mt-8">
        <div className="-m-4 flex flex-wrap">
          <>
            {presentationsData.map((project) => (
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
