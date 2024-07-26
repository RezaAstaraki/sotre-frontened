import { ChevronRight, Pyramid } from "lucide-react";
import React from "react";

const MainMenuMobile = () => {
  return (
    <ul>
      <li className="flex  justify-between items-center px-5 h-12 bg-white hover:bg-yellow-400 transition-all duration-300 ease-in-out cursor-pointer animate-in ">
        <div className="flex gap-4">
          <span>
            <Pyramid size={20} />
          </span>
          Pages
        </div>
        <ChevronRight size={15} />
      </li>
    </ul>
  );
};

export default MainMenuMobile;
