import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";

export default function XpsPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Experiências
          </h1>
          <p className="text-lg leading-7 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            Minhas experiências
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                Jun 2022 - Presente
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <div className="leading-8">
                        <Link
                          href={`/blog/ada`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          <span className="text-2xl font-bold ">
                            Desenvolvedor de software Senior
                          </span>
                        </Link>
                      </div>
                      <div className="flex flex-wrap font-bold text-pink-500 dark:text-pink-500">
                        IBM
                      </div>
                    </div>
                    <div className="prose max-w-none text-white-400 dark:text-white-300">
                      Atuação como desenvolvedor web, onde trabalho com Angular,
                      NgRx e microfrontend. Atuo também na gestão técnica dos
                      projetos desenvolvidos e na mentoria de
                      desenvolvedores/estagiários em início de carreira.
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </>
  );
}
