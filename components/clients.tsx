"use client";

import React from "react";

import { MENU_CUSTOMER } from "@/config/mocks/customer";
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import GradualSpacing from "@/components/ui/gradual-spacing";

const Clients = () => {
  return (
    <section
      id="testimonials"
      className="w-full mb-16 flex flex-col items-center justify-center dark:text-light pt-6 lg:pt-12 text-black px-4 md:px-8"
    >
      <GradualSpacing
        className="font-display text-center text-3xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8 mb:mb-16"
        text="Kind words from satisfied clients"
      />
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={MENU_CUSTOMER}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
