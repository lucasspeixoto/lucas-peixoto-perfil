import { Link } from "@nextui-org/link";

export default function MyChannelPage() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
          Descomplicando a prática
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-7 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
          Meu canal no youtube
        </p>
      </div>
      <div className="container mt-8">
        <div className="flex flex-col gap-4">
          <p className="text-base sm:text-xl md:text-xl leading-7">
            O canal{" "}
            <a
              href="https://www.youtube.com/channel/UC6LY6Xw5ff_KaHwjHWRA9oA?sub_confirmation=1"
              target="_blank"
              className="font-bold hover:underline"
            >
              Descomplicando a prática
            </a>{" "}
            é meu novo canal do youtube onde pretendo trazer muito conteúdo
            educativo com tutoriais práticos trazendo diversas situações que
            ocorrem no dia a dia do programador e que não tem vasto conteúdo
            disponível. Sofri muito nos meus primeiros anos quando precisei de
            conteúdos mais avançados.
          </p>

          <p className="text-base sm:text-xl md:text-xl leading-7">
            Teremos muito conteúdo de Angular, React, Java e Spring Boot.
          </p>
        </div>

        {/* iframe */}
        <div className="flex justify-center flex-col items-center my-4 w-full">
          <section className="flex w-[90%] sm:w-[70%] md:w-[50%]">
            <iframe
              width="100%"
              height="280"
              src="https://www.youtube.com/embed/No4Xch9pjo4"
              title="Apresentação canal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </section>
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
    </>
  );
}
