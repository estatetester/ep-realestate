import Link from "next/link";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";

export default function Tagline() {
  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-0 lg:justify-between">
      <Link href="/" aria-label="home">
        <Image
          src="/ep-realestate.jpg"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-14 h-14 lg:w-20 lg:h-20"
        />
      </Link>
      <h1 className="text-base xl:text-lg">
        Investing In Your Future <br /> One Home At A Time
      </h1>
      <div className="border rounded-xl overflow-hidden flex items-center justify-between p-1 gap-4">
        <Input placeholder="Enter your email" className="w-auto text-black" />
        <Button
          aria-label="subscribe"
          className="h-auto rounded-lg font-medium px-4 py-2 xl:px-6 bg-[#4B73FF]"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
