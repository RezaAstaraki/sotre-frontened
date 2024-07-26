"use client";
import { CircleXIcon, MenuIcon } from "lucide-react";
import { useMedia } from "react-use";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import Favorites from "./shaoping components/Favorites";
import Refresh from "./shaoping components/Refresh";
import Categories from "./categories/Categories";
import MainMenuMobile from "./MainMenuMobile";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [menuType, setMenuType] = useState<"Categories" | "Main Menu">(
    "Categories"
  );

  const isWide = useMedia("(min-width: 1024px)", false);

  return (
    <>
      <div>
        <Drawer direction="left" open={open && !isWide} onOpenChange={setOpen}>
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent className="w-[280px] rounded-none transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none fixed bg-white  z-50 gap-4">
            <div className="hidden">
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
            </div>
            {/* <DrawerFooter>
              <DrawerClose>X</DrawerClose>
            </DrawerFooter> */}

            <div className="flex justify-between items-center px-3 ">
              <div className="flex flex-row gap-5">
                <Refresh />
                <Favorites />
              </div>
              <div className="cursor-pointer">
                <CircleXIcon
                  fill="red"
                  color="#FFFFFF"
                  size={45}
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div>search</div>
            <div className="w-full mt-5 px-5 flex items-center space-x-3 font-semibold">
              <span
                className={`transition-all cursor-pointer ${
                  menuType !== "Categories" && "text-gray-400 scale-95 "
                }`}
                onClick={() => setMenuType("Categories")}
              >
                Categories
              </span>
              <span className="w-[1px] h-[14px] bg-gray-400"></span>
              <span
                className={`transition-all cursor-pointer ${
                  menuType !== "Main Menu" &&
                  "text-gray-400 scale-95 transition-all"
                }`}
                onClick={() => setMenuType("Main Menu")}
              >
                Main Menu
              </span>
            </div>
            {menuType === "Categories" ? <Categories /> : <MainMenuMobile />}
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Menu;
