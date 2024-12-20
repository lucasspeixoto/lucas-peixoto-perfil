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
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
          Competências Técnicas
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-7 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
          Ferramentas que tenho experiência
        </p>
      </div>
      <div className="container mt-8">
        {/* Linguagens de programação */}
        <div className="mb-16">
          <h3 className="text-base sm:text-xl md:text-2xl leading-7">
            {programmingLanguages.title}
          </h3>
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-4 mt-6">
            <>
              {React.Children.toArray(
                programmingLanguages.items.map((item) => (
                  <div className="flex w-28 flex-col flex-wrap scale-90 hover:scale-100 items-center gap-0 hover:cursor-pointer">
                    <Image
                      src={`/static/images/${item.logo}`}
                      alt="avatar"
                      width={80}
                      height={80}
                      className="h-16 w-auto rounded-full"
                    />
                    <span className="font-semibold hover:font-bold select-none">
                      {item.name}
                    </span>
                  </div>
                ))
              )}
            </>
          </div>
        </div>

        {/* Frameworks */}
        <div className="mb-16">
          <h3 className="text-base sm:text-xl md:text-2xl leading-7">
            {frameworks.title}
          </h3>
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-4 mt-6">
            <>
              {React.Children.toArray(
                frameworks.items.map((item) => (
                  <div className="flex w-28 flex-col flex-wrap scale-90 hover:scale-100 items-center gap-0 hover:cursor-pointer">
                    <Image
                      src={`/static/images/${item.logo}`}
                      alt="avatar"
                      width={100}
                      height={80}
                      className="h-16 w-auto"
                    />
                    <span className="font-semibold hover:font-bold select-none">
                      {item.name}
                    </span>
                  </div>
                ))
              )}
            </>
          </div>
        </div>

        {/* Ferramentas */}
        <div className="mb-16">
          <h3 className="text-base sm:text-xl md:text-2xl leading-7">
            {tools.title}
          </h3>
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-4 mt-6">
            <>
              {React.Children.toArray(
                tools.items.map((item) => (
                  <div className="flex w-28 flex-col flex-wrap scale-90 hover:scale-100 items-center gap-0 hover:cursor-pointer">
                    <Image
                      src={`/static/images/${item.logo}`}
                      alt="avatar"
                      width={100}
                      height={80}
                      className="h-16 w-auto"
                    />
                    <span className="font-semibold hover:font-bold select-none">
                      {item.name}
                    </span>
                  </div>
                ))
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
}
