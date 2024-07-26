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
    <section className="w-full bg-red-400">
      TallCardsWrapper
      {/* <ProductCardStyleOne datas={datas} /> */}
    </section>
  );
};

export default TallCardsWrapper;
