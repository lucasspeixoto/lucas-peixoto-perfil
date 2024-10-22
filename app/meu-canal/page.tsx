import Image from "@/components/Image";
import { Link } from "@nextui-org/link";
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

export default function MyChannelPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Descomplicando a prática
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-7 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            Meu canal no youtube
          </p>
        </div>
        <div className="container gap-24 pt-8">
          <div className="mb-16 flex flex-col gap-4">
            <p className="text-base sm:text-xl md:text-xl leading-7">
              O canal Descomplicando a prática é meu novo canal do youtube onde
              pretendo trazer muito conteúdo educativo com tutoriais práticos
              trazendo diversas situações que ocorrem no dia a dia do
              programador e que não tem vasto conteúdo disponível. Sofri muito
              nos meus primeiros anos quando precisei de conteúdos mais
              avançados
            </p>

            <p className="text-base sm:text-xl md:text-xl leading-7">
              Teremos muito conteúdo de Angular, React, Java e Spring Boot.
            </p>
          </div>

          {/* iframe */}
          <div className="flex justify-center flex-col items-center mb-16 my-4 w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/No4Xch9pjo4"
              title="Apresentação canal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <Link
              isExternal
              href="https://www.youtube.com/channel/UC6LY6Xw5ff_KaHwjHWRA9oA?sub_confirmation=1"
              aria-label="Medium"
            >
              <span className="dark:text-red-500 text-red-500 hover:underline leading-8 text-2xl font-semibold my-2">
                Inscreva-se no canal!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
