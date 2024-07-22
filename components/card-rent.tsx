import Image from "next/image";

import {
  MdOutlineBathtub,
  MdOutlineLocationOn,
  MdOutlineDirectionsCar,
} from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";

import { formatCurrency } from "@/lib/utils";
import { Rent } from "@/types/response";
import { Card } from "./ui/card";

interface CardRentProps {
  data: Rent;
}

export default function CardRent({ data }: CardRentProps) {
  return (
    <Card className="rounded-2xl overflow-hidden bg-white drop-shadow-sm cursor-pointer hover:scale-[1.01] transition-all duration-300">
      <Image
        alt={data.title}
        src={data.image}
        priority
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-[350px] xl:h-[450px] object-cover"
      />
      <div className="px-4 py-2 lg:py-4">
        <h1 className="capitalize font-medium text-2xl lg:text-3xl text-[#4B73FF] mb-2">
          {formatCurrency(data.price)}
        </h1>
        <h1 className="capitalize font font-medium text-base lg:text-lg">
          {data.title}
        </h1>
      </div>
      <div className="border mx-0 lg:mx-4 my-4" />
      <div className="px-4 pb-4 lg:pb-8 text-[12px] md:text-[14px] lg:text-base">
        <p className="capitalize flex items-center gap-x-2 mb-4">
          <MdOutlineLocationOn /> {data.location}
        </p>
        <p className="flex justify-between capitalize">
          <span className="flex items-center gap-x-2">
            <LuBedDouble /> {data.rooms.bed} Bed
          </span>
          <span className="flex items-center gap-x-2">
            <MdOutlineBathtub /> {data.rooms.bath} Bath
          </span>
          <span className="flex items-center gap-x-2">
            <MdOutlineDirectionsCar />
            {data.rooms.parking} Parking
          </span>
        </p>
      </div>
    </Card>
  );
}
