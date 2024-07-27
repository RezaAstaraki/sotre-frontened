import React from "react";
import ProductCardStyleOne from "../cards/ProductCardStyleOne";
import ProductCardStyleTwo from "../cards/ProductCardStyleTwo";

import { Product } from "@/Types";

const datas = {
  id: 2,
  title: "FANTECH OCTANE Headset",
  
  slug: "fantech-octane-headset",
  image:
    "https://mamunuiux.com/shopo/uploads/custom-images/fantech-octane-headset-2022-09-26-12-53-57-7709.png",
  price: 88,
  offer_price: 66,
  campaingn_product: null,
  review: 0,
  variants: [],
};

const ShortCardsWrapper = () => {
  return (
    <section
      className="w-full max-w-[1216px] md:px-6 px-2 mx-auto section-wrapper  top-selling-product md:mb-[60px] mb-[30px]"
      style={{ backgroundColor: "lightblue" }}
    >
      <div className="">ShortCardsWrapper</div>
      <div className="section-content w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 ">
        <ProductCardStyleTwo datas={datas} />
        <ProductCardStyleTwo datas={datas} />
        <ProductCardStyleTwo datas={datas} />
        <ProductCardStyleTwo datas={datas} />
    
      </div>
    </section>
  );
};

export default ShortCardsWrapper;
