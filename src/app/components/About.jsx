import Image from "next/image";
import { assets, infoList, toolsData } from "../../../assets/assets";

export default function About({ isDarkMode }) {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction ...</h4>

      <h2 className="text-center text-5xl font-Ovo"> A Propos de moi ...</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-3xl font-Ovo">
            Je suis un développeur web et mobile passionné, spécialisé dans la
            création d'applications innovantes et performantes. Mon expertise
            couvre une large gamme de technologies, me permettant de concevoir
            des solutions sur mesure pour répondre aux besoins spécifiques de
            mes clients. Je suis également un spécialiste en informatique, avec
            une solide expérience dans la gestion des systèmes informatiques et
            la résolution de problèmes techniques complexes.
          </p>

          <ul className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white ">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Les technos que j'utilise
          </h4>

          <ul className="flex flex-row gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt={tool} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
