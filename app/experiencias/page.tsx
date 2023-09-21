import { Link } from "@nextui-org/link";
import React from "react";

const experiences = {
  title: "Experiências",
  subtitle: "Minhas experiências",
  items: [
    {
      key: "1",
      date: "Jun 2022 - Presente",
      job: "Desenvolvedor de software Senior",
      company: "IBM",
      description:
        "Atuação como desenvolvedor web, onde trabalho com Angular, NgRx e microfrontend. Atuo também na gestão técnica dos projetos desenvolvidos e na mentoria de desenvolvedores/estagiários em início de carreira.",
    },
    {
      key: "2",
      date: "Jun 2022 - Ago 2023",
      job: "Desenvolvedor de software",
      company: "IBM",
      description:
        "Atuação como desenvolvedor web, onde trabalho com Angular, NgRx e microfrontend. Atuo também na gestão técnica dos projetos desenvolvidos e na mentoria de desenvolvedores/estagiários em início de carreira.",
    },
    {
      key: "3",
      date: "Jun 2020 - Presente",
      job: "Desenvolvedor Fullstack",
      company: "Freelancer",
      description:
        "Atuação como desenvolvedor fullstack em desenvolvimento de sistemas (desktop/web) para automatização de tarefas.",
    },
    {
      key: "4",
      date: "Nov 2021 - Jun 2022",
      job: "Analista de sistemas PL",
      company: "Stefanini",
      description:
        "Atuação como desenvolvedor frontend (Angular + PrimeNg), (React + Material UI) em projetos para melhoria de processos internos na Stefanini. Participação em diversos processos de estudo e implementação de novas estruturas e arquiteturasde código para aumentar escalabilidade de projetos e qualidade de código. Os projetos são direcionados para as equipes de recrutamento e seleção,departamento pessoal e comercial.",
    },
    {
      key: "5",
      date: "Fev 2021 - Nov 2021",
      job: "Analista de Sistemas Jr",
      company: "Stefanini",
      description:
        "Atuação como desenvolvedor frontend (Angular + PrimeNg) em projetos para melhoria de processos internos na Stefanini. Os projetos eram direcionados para equipes de recrutamento e seleção, departamento pessoal e comercial.",
    },
    {
      key: "6",
      date: "Jan 2020 - Fev 2021",
      job: "Trainee",
      company: "Stefanini",
      description:
        "Desenvolvimento de rotinas para automatização de tarefas das equipes do departamento pessoal da empresa. Essas rotinas envolviam disparos em massa de comunicados via e-mail, geração de relatórios, RPAs entre outros.",
    },
  ],
};

export default function XpsPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            {experiences.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-7 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            {experiences.subtitle}
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <>
                {React.Children.toArray(
                  experiences.items.map((experience) => (
                    <li className="py-12">
                      <>
                        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                          {experience.date}
                          <div className="space-y-5 xl:col-span-3">
                            <div className="space-y-6">
                              <div>
                                <div className="leading-8">
                                  <Link
                                    href={`/blog/ada`}
                                    className="text-gray-900 dark:text-gray-100"
                                  >
                                    <span className="text-2xl font-bold ">
                                      {experience.job}
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-wrap font-bold text-cyan-500 dark:text-cyan-300">
                                  {experience.company}
                                </div>
                              </div>
                              <div className="prose max-w-none text-white-400 dark:text-white-300">
                                {experience.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    </li>
                  ))
                )}
              </>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
