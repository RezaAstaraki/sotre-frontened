import React from "react";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div className="w-[517px] h-[44px] flex border items-center">
      <div className="w-full h-full flex flex-1 items-center  border-none bg-white  search-com">
        <Input
          type="text"
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Search products..."
          //   value=""
        />
      </div>
      <div className="w-[1px] h-[22px] border"></div>
      <div className="flex-1 flex items-center px-4 relative ">
        <button
          type="button"
          className="w-full text-xs font-500 text-gray-500 flex justify-between items-center capitalize"
        >
          <span className="line-clamp-1">category</span>
          <span>
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="9.18359"
                y="0.90918"
                width="5.78538"
                height="1.28564"
                transform="rotate(135 9.18359 0.90918)"
                fill="#8E8E8E"
              ></rect>
              <rect
                x="5.08984"
                y="5"
                width="5.78538"
                height="1.28564"
                transform="rotate(-135 5.08984 5)"
                fill="#8E8E8E"
              ></rect>
            </svg>
          </span>
        </button>
      </div>
      <button
        className="search-btn w-[93px] h-full text-sm font-600 "
        type="button"
        style={{ backgroundColor: "#f1c40f" }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
