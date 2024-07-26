import { Heart, Mail, RefreshCcw, Smartphone, UserRound } from "lucide-react";
import React from "react";
import Search from "./Search";
import NavBar from "./NavBar";
import Menu from "./Menu";
import ShoppingCart from "./shaoping components/ShaponigCart";
import Favorites from "./shaoping components/Favorites";
import Refresh from "./shaoping components/Refresh";

const Header = () => {
  return (
    <header className={`w-full bg-white`}>
      <div className="h-10 border-b">
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full text-xs">
            <div>
              AccountOrder Currency
              <span>Account</span> <span>Track</span>{" "}
              <span>Order Currency</span>
            </div>
            <div className=" items-center gap-4 hidden lg:flex">
              <div className="flex gap-2">
                <Smartphone size={15} />
                <span>+88 01682 825 123</span>
              </div>
              <div className="flex gap-2">
                <Mail size={15} />
                <span>abdur.rohman2003@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1216px] flex justify-center items-center mx-auto md:px-6 px-2 w-full">
        <div className="w-full  h-[60px]  flex justify-between items-center  lg:h-[86px] ">
          <div>
            <div className="block lg:hidden">
              <Menu />
            </div>
            <div className="hidden lg:block">logo</div>
          </div>
          <div>
            <div className="block lg:hidden">logo</div>
            <div className="hidden  lg:block">
              <Search />
            </div>
          </div>
          <div>
            <div className="block lg:hidden ">
              <ShoppingCart />
            </div>
            <div className="hidden lg:flex gap-5">
              <Refresh />
              <Favorites />
              <ShoppingCart />
              <div className="cart relative cursor-pointer">
                <UserRound />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
