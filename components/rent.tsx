import CardRent from "@/components/card-rent";
import { MENU_RENT } from "@/config/mocks/rent";
import { Button } from "./ui/button";

interface RentProps {}

export default function Rent({}: RentProps) {
  return (
    <section
      id="rent"
      className="w-full min-h-screen bg-[#F4F7FC] px-4 md:px-16 2xl:px-48 py-24 flex flex-col items-center gap-y-16 "
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="font-medium text-3xl md:text-4xl xl:text-5xl text-center mb-10">
          Our Popular Property
        </h1>
        <p className="text-[12px] md:text-[14px] xl:text-lg text-center lg:w-[760px] text-neutral-600">
          Choose an agency with a proven track record of excellence in buying,
          selling, and renting properties. Our long-standing industry experience
          ensures you receive top-notch service and access to the most
          sought-after properties.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
        {MENU_RENT.map((item, index) => (
          <CardRent key={index} data={item} />
        ))}
      </div>
      <Button
        aria-label="explore-property"
        className="h-auto px-8 py-3 font-medium text-base rounded-2xl bg-black text-white"
      >
        Explore All Property
      </Button>
    </section>
  );
}
