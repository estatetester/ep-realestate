import React from "react";

import MenuItem from "./menu-item";
import Auth from "./auth";

import { MENU_ITEMS } from "@/config/menu";

export default function Navbar() {
  return (
    <header className="w-full px-4 lg:px-20 py-4 sticky top-0 z-10 bg-[#F4F7FC] backdrop-blur flex items-center">
      <nav className="w-full flex justify-between items-center">
        <MenuItem items={MENU_ITEMS} />
        <Auth />
      </nav>
    </header>
  );
}
