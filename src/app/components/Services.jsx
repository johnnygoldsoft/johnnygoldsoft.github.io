import Image from "next/image";
import { assets, serviceData } from "../../../assets/assets";

export default function Services() {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="services">
      <h4 className="text-center mb-2 text-lg font-Ovo"> Ce que j'offre </h4>
      <h2 className="text-center text-5xl font-Ovo"> Mes services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12  font-Ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum,
        repudiandae ab porro eum voluptates voluptatem odio atque animi sapiente
        consectetur corporis quis reprehenderit quidem. Dolore ipsam inventore
      </p>

      <div className="grid grid-cols-tester gap-6 my-10">
        {serviceData.map(({ icon, title, description, linke }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="my-4 text-lg text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{description}</p>
            <a
              href={linke}
              className="flex items-center gap-2 text-sm mt-5 dark:text-white/80"
            >
              En savoir plus de{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
