import Card from "@/components/Card";

const presentationsData = [
  {
    title: "Performance e gestão de estado em aplicações angular",
    description: `Apresentação ao vivo para o AngularSP no youtube. A palestra teve como objetivo a apresentação de técnicas de performance em aplicações com angular e também as vantagens de se utilizar a ferramenta NgRx para gestão de estado, com foco em performance`,
    imgSrc: "/static/images/angular-4.png",
    href: "https://www.youtube.com/watch?v=Z9Ne4Imit28",
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
