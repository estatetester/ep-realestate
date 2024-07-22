import { MENU_ITEMS_HEADLINE } from "@/config/menu";
import { Button } from "./ui/button";
import { BookModal } from "./book-modal";
import WordPullUp from "./magicui/word-pull-up";

export default function Headline() {
  return (
    <section
      id="home"
      className="w-full h-auto bg-[#F4F7FC] px-4 lg:px-20 pt-8 pb-20"
    >
      <div className="h-[500px] md:h-[720px] rounded-2xl flex flex-col justify-center gap-y-4 md:gap-y-8 items-center relative image-headline">
        <WordPullUp
          className="text-3xl sm:text-3xl md:text-6xl font-bold tracking-[-0.02em] text-black dark:text-white md:leading-[5rem]"
          words="Investing In Your Future One Home At A Time"
        />
        <p className="text-center text-sm md:text-lg w-[260px] md:w-[360px] lg:w-[520px]">
          We&apos;ll help you find the key to your dream home. Experience the
          joy of homeownership with us. Let us simplify your home buying journey
          and make it a memorable experience.
        </p>

        <BookModal />

        <div className="hidden lg:block absolute w-full -bottom-10 px-14 2xl:px-28">
          <div className="flex justify-between bg-white rounded-xl px-12 py-6">
            {MENU_ITEMS_HEADLINE.map((item, index) => (
              <div key={index} className="w-full flex justify-around">
                <div>
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="font-light text-sm">{item.subtitle}</p>
                </div>
                <div
                  className={
                    index === MENU_ITEMS_HEADLINE.length - 1
                      ? "border-none"
                      : "border"
                  }
                />
              </div>
            ))}
            <Button
              aria-label="search-property"
              className="h-auto bg-[#4C73FF] rounded-xl px-10 py-3 text-white font-medium text-base"
            >
              Search Property
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
