import Image from "next/image";

export default function Home() {
  
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sobre mim
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src="/static/images/avatar-lucas.png"
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              Lucas Peixoto
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              Senior Software Developer
            </div>
            <div className="text-gray-500 dark:text-gray-400">IBM</div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
						<p className="mb-4 text-lg">Formado em Engenharia Agrícola pela Universidade Estadual de Campinas (Unicamp), com mestrado em Modelagem Estrutural de Vigas de Madeira Laminada Colada Armada (MLCA).</p>
						<p className="mb-4 text-lg">O primeiro contato com programação veio em 2015, com a linguagem Python. Já em 2020 iniciando a carreira na área de programação, foram desenvolvidas diversas rotinas de automatização para equipes, com foco em otimização de tempo e redução de mão de obra para envio de e-mails, tratamento de dados e RPAs. Durante esta experiência como trainee iniciei uma especialização no desenvolvimento web, com foco no frontEnd.</p>
						<p className="mb-4 text-lg">Atualmente sigo me especializando no desenvolvimento Web com foco em Spring Boot, Quarkus e Next Js.</p>
          </div>
        </div>
      </div>
    </>
  );
}
