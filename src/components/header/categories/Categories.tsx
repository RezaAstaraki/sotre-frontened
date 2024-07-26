import { ChevronRight, Pyramid } from "lucide-react";
import React from "react";

const Categories = ({ className }: { className?: string }) => {
  return (
    <ul className={className}>
      <li className="flex justify-between items-center px-5 h-12 bg-white hover:bg-yellow-400 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="flex gap-4">
          <span>
            <Pyramid size={20} />
          </span>
          Electronics
        </div>
        <ChevronRight size={15} />
      </li>
      <li className="flex justify-between items-center px-5 h-12 bg-white hover:bg-yellow-400 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="flex gap-4">
          <span>
            <Pyramid size={20} />
          </span>
          Game
        </div>
        <ChevronRight size={15} />
      </li>
      <li className="flex justify-between items-center px-5 h-12 bg-white hover:bg-yellow-400 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="flex gap-4">
          <span>
            <Pyramid size={20} />
          </span>
          Babies & Toys
        </div>
        <ChevronRight size={15} />
      </li>
      <li className="flex justify-between items-center px-5 h-12 bg-white hover:bg-yellow-400 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="flex gap-4">
          <span>
            <Pyramid size={20} />
          </span>
          Mobile
        </div>
        <ChevronRight size={15} />
      </li>
      <li className="flex justify-between items-center px-5 h-12 bg-white hover:bg-yellow-400 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="flex gap-4">
          <span>
            <Pyramid size={20} />
          </span>
          Lifestyle
        </div>
        <ChevronRight size={15} />
      </li>
    </ul>
  );
};

export default Categories;
