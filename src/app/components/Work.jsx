import { workData } from "../../../assets/assets";

export default function Work() {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="work">
      <h4 className="text-center mb-2 text-lg font-Ovo"> Mes projets</h4>
      <h2 className="text-center text-5xl font-Ovo"> Mon travail</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12  font-Ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum,
        repudiandae ab porro eum voluptates voluptatem odio atque animi sapiente
        consectetur corporis quis reprehenderit quidem. Dolore ipsam inventore
      </p>

      <div className="grid grid-cols-tester gap-6 my-10">
        {workData.map(({ title, description, bgImage }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black"
          >
            <div
              className="w-full h-64 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
