import Image from "next/image";
import { assets, workData } from "../../../assets/assets";

export default function Work({ isDarkMode }) {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="work">
      <h4 className="text-center mb-2 text-lg font-Ovo"> Mes projets</h4>
      <h2 className="text-center text-5xl font-Ovo">
        {" "}
        Mes recents realisations
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12  font-Ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum,
        repudiandae ab porro eum voluptates voluptatem odio atque animi sapiente
        consectetur corporis quis reprehenderit quidem. Dolore ipsam inventore
      </p>

      <div className="grid grid-cols-tester gap-5 my-10 dark:text-black">
        {workData.map((projet, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${projet.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h3 className=" font-semibold ">{projet.title}</h3>
                <p className="text-gray-700 text-sm">{projet.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition ">
                <Image src={assets.send_icon} alt={""} className="w-5 " />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-400 rounded-full y-3 py-3 px-10 mx-auto my-20  hover:bg-lighthover duration-500 dark: text-white dark:border-white dark:hover:bg-darkhover"
      >
        En savoir plus{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt=""
          className="w-4"
        />
      </a>
    </div>
  );
}
