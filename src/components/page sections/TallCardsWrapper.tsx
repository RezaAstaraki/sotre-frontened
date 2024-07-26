import React from "react";
import ProductCardStyleOne from "../cards/ProductCardStyleOne";

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

const TallCardsWrapper = () => {
  return (
    <section
      className="w-full max-w-[1216px] md:px-6 px-2 mx-auto"
      style={{ backgroundColor: "lightblue" }}
    >
      <div className="">TallCardsWrapper</div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
        <ProductCardStyleOne datas={datas} />
        <ProductCardStyleOne datas={datas} />
        <ProductCardStyleOne datas={datas} />
        <ProductCardStyleOne datas={datas} />
      </div>
    </section>
  );
};

export default TallCardsWrapper;
