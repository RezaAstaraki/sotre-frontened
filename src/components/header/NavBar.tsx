"use client";
import React from "react";
import Categories from "./categories/Categories";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  return (
    <nav className=" mx-auto h-[60px] hidden lg:block">
      <div className="w-full h-full relative ">
        <div
          className="w-full h-full flex justify-center items-center "
          style={{ backgroundColor: "#f1c40f" }}
        >
          <div className="max-w-[1216px]  h-full container-x flex ">
            <div className="self-end  category w-[270px] h-[53px] bg-white rounded-t-md mt-[6px] relative">
              <DropdownMenu>
                <DropdownMenuTrigger className="h-full w-full categories-trigger px-5 rounded-t-md">
                  <div className="flex justify-between items-center">
                    Categories
                    <ChevronDown size={15} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  onCloseAutoFocus={(e) => {
                    e.preventDefault();
                    // console.log(e?.currentTarget);
                  }}
                  align="start"
                  side="bottom"
                  sideOffset={-1}
                  // alignOffset={-20}
                  className="rounded-none p-0 border-t-0 border-0"
                  // asChild={true}
                >
                  <Categories className="w-[270px]" />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
