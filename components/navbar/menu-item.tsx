"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlignRight } from "react-icons/ai";

import { MenuItems } from "@/types/menu";
import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { X } from "lucide-react";
import Socials from "../socials";

interface MenuItemProps {
  items: MenuItems[];
}

export default function MenuItem({ items }: MenuItemProps) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 2xl:gap-x-16 lg:items-center">
      <div className="flex justify-between items-center transition-colors">
        <Link
          href="/"
          aria-label="home"
          className="text-2xl lg:text-4xl font-bold"
        >
          <Image
            src="/ep-realestate.png"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-14 h-14 lg:w-18 lg:h-18"
          />
        </Link>
        <button
          aria-label="btn-navbar"
          className="block lg:hidden"
          onClick={() => handleToggle()}
        >
          {!toggleMenu ? (
            <AiOutlineAlignRight className="h-8 w-8" />
          ) : (
            <X className="h-8 w-8" />
          )}
        </button>
      </div>
      {toggleMenu && (
        <>
          <div className="flex lg:hidden flex-col gap-y-6 tracking-wide ml-2 transition-colors">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => handleToggle()}
                className="text-sm lg:text-lg capitalize font-medium text-neutral-600"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link
            href={"/contact"}
            aria-label="contact"
            onClick={() => handleToggle()}
            className="inline-flex lg:hidden h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact
          </Link>
          <div className="block lg:hidden w-full">
            <Socials />
          </div>
        </>
      )}
      <div className="hidden lg:flex gap-x-12 tracking-wide">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="capitalize font-medium text-neutral-600"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
