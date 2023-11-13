import Image from "@/components/Image";
import React from "react";

const programmingLanguages = {
  title: "Linguages de programação",
  items: [
    { name: "Javascript", logo: "javascript.png" },
    { name: "Typescript", logo: "typescript.png" },
    { name: "Java", logo: "java.png" },
    { name: "Python", logo: "python.png" },
  ],
};

const frameworks = {
  title: "Frameworks",
  items: [
    { name: "Angular", logo: "angular.png" },
    { name: "React", logo: "react.png" },
    { name: "Next Js", logo: "next.png" },
    { name: "Node", logo: "node.png" },
    { name: "SpringBoot", logo: "springboot.png" },
  ],
};


const tools = {
  title: "Outras ferramentas",
  items: [
    { name: "Tailwind Css", logo: "tailwind.png" },
    { name: "React Query", logo: "react-query.png" },
    { name: "Zustand", logo: "zustand.png" },
    { name: "NgRx", logo: "ngrx.png" },
    { name: "Styled Components", logo: "styled-components.png" },
  ],
};

export default function SkillsPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Competências Técnicas
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-7 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            Ferramentas que tenho experiência
          </p>
        </div>
        <div className="container gap-24 pt-12">
          {/* Linguagens de programação */}
          <div className="mb-16 ">
            <h3 className="text-base sm:text-xl md:text-2xl leading-7">{programmingLanguages.title}</h3>
            <div className="flex items-center justify-center flex-wrap gap-x-48 gap-y-24 mt-6">
              <>
                {React.Children.toArray(
                  programmingLanguages.items.map((item) => (
                    <div className="flex flex-col flex-wrap items-center gap-2">
                      <Image
                        src={`/static/images/${item.logo}`}
                        alt="avatar"
                        width={80}
                        height={80}
                        className="h-16 w-auto rounded-full"
                      />
                      <span>{item.name}</span>
                    </div>
                  ))
                )}
              </>
            </div>
          </div>

          {/* Frameworks */}
          <div className="mb-16">
            <h3 className="text-base sm:text-xl md:text-2xl leading-7">{frameworks.title}</h3>
            <div className="flex items-center justify-center flex-wrap gap-x-36 gap-y-24 mt-6">
              <>
                {React.Children.toArray(
                  frameworks.items.map((item) => (
                    <div className="flex flex-col flex-wrap items-center gap-2">
                      <Image
                        src={`/static/images/${item.logo}`}
                        alt="avatar"
                        width={100}
                        height={80}
                        className="h-16 w-auto"
                      />
                      <span>{item.name}</span>
                    </div>
                  ))
                )}
              </>
            </div>
          </div>

           {/* Ferramentas */}
           <div className="mb-16">
            <h3 className="text-base sm:text-xl md:text-2xl leading-7">{tools.title}</h3>
            <div className="flex items-center justify-center flex-wrap gap-x-36 gap-y-24 mt-6">
              <>
                {React.Children.toArray(
                  tools.items.map((item) => (
                    <div className="flex flex-col flex-wrap items-center gap-2">
                      <Image
                        src={`/static/images/${item.logo}`}
                        alt="avatar"
                        width={100}
                        height={80}
                        className="h-16 w-auto"
                      />
                      <span>{item.name}</span>
                    </div>
                  ))
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
