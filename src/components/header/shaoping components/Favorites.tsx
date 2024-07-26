import { Heart } from "lucide-react";
import React from "react";

const Favorites = () => {
  return (
    <div className="cart relative cursor-pointer">
      <Heart />
      <span className="w-[18px] h-[18px] rounded-full bg-yellow-400 absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
        0
      </span>
    </div>
  );
};

export default Favorites;
