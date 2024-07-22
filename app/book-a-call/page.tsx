"use client"

import { InlineWidget } from "react-calendly";
import GradualSpacing from "@/components/ui/gradual-spacing";

const BookACallPage = async () => {
  return (
    <main className="flex items-center justify-center dark:text-light lg:pt-12 w-full h-full z-0 bg-light dark:bg-dark px-8 sm:px-12 lg:px-24 xl:px-32">
      <div className="py-16 inline-block w-full">
      <GradualSpacing
        className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8 mb:mb-16 "
        text="Book a meeting"
      />

      <InlineWidget url="https://calendly.com/azacdev/book-your-tech-chat" />
      </div>
    </main>
  );
};

export default BookACallPage;
