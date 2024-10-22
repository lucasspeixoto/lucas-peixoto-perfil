import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="my-2">
        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
          Sobre mim
        </span>
      </div>
      <div className="container mt-8">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="mt-4 flex flex-col items-center">
            <Image
              src="/static/images/avatar-lucas.png"
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <span className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              Lucas Peixoto Fernandes
            </span>
            <span className="text-xl">
              Desenvolvedor fullstack
            </span>
            <span className="text-xl">
              Santander
            </span>
          </div>
          <div className="prose max-w-none dark:prose-invert xl:col-span-2">
            <p className="mb-4 text-lg">
              Formado em Engenharia Agrícola pela Universidade Estadual de
              Campinas (Unicamp), com mestrado em Modelagem Estrutural de Vigas
              de Madeira Laminada Colada Armada (MLCA).
            </p>
            <p className="mb-4 text-lg">
              O primeiro contato com programação veio em 2015, com a linguagem
              Python. Já em 2020 iniciando a carreira na área de programação,
              foram desenvolvidas diversas rotinas de automatização para
              equipes, com foco em otimização de tempo e redução de mão de obra
              para envio de e-mails, tratamento de dados e RPAs. Durante esta
              experiência como trainee iniciei uma especialização no
              desenvolvimento web, com foco no frontend.
            </p>
            <p className="mb-4 text-lg">
              Atualmente sigo me especializando no desenvolvimento Web com foco
              em Spring Boot, Microserviços e mensageria.
            </p>
            <p className="mb-4 text-lg">
             Além disso, estou conduzingo o projeto de
              <a className="text-red-500 font-semibold hover:underline" target="_blank" href="https://www.youtube.com/channel/UC6LY6Xw5ff_KaHwjHWRA9oA?sub_confirmation=1" > canal</a> no youtube
              e atuando como mentor de desenvolvedores em inicio de carreira.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
