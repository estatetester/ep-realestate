import { MENU_ABOUT } from "@/config/mocks/about";

interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <section
      id="about"
      className="w-full bg-[#0D0C1E] text-white px-8 lg:px-20 2xl:px-48 py-28 "
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {MENU_ABOUT.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-x-8"
          >
            <h1 className="font-black text-3xl 2xl:text-6xl">{item.count}</h1>
            <p className="text-neutral-300 w-auto xl:w-[200px]">{item.decs}</p>
          </div>
        ))}
      </div>
      <hr className="my-16 lg:my-24" />
      <div className="w-full flex flex-col lg:flex-row gap-y-4 justify-between px-0 md:px-16 lg:px-0">
        <h1 className="flex-1 font-medium text-3xl xl:text-4xl leading-normal lg:leading-[1.8] xl:leading-normal">
          Where Comfort Meets <br />
          Convenience
        </h1>
        <p className="flex-1 text-[14px] xl:text-base leading-[2] xl:leading-loose text-neutral-300">
          Discover an agency dedicated to providing seamless experiences in
          buying, selling, and renting properties. With a long-standing presence
          in the industry, we specialize in offering properties that blend
          comfort with convenience, ensuring you find the perfect fit for your
          needs.
        </p>
      </div>
    </section>
  );
}
