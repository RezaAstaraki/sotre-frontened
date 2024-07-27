"use client";
// import axios from "axios";

import Rating from "@mui/material/Rating";

import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";


import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import Favorites from "../header/shaoping components/Favorites";
import Refresh from "../header/shaoping components/Refresh";


export default function ProductCardStyleOne({ datas }: { datas: any }) {
  const [arWishlist, setArWishlist] = useState(null);
  const [quickViewModal, setQuickView] = useState(false);
  const [quickViewData, setQuickViewData] = useState(null);

  useEffect(() => {
    if (quickViewModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [quickViewModal]);

  
  const [offerPrice, setOffer] = useState(null);
  
  return (
    <div className="main-wrapper-card relative">
      <div
        className="product-card-one w-full h-[445px] bg-white relative group overflow-hidden"
        style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="product-card-img w-full h-[300px] -mt-2">
          <div
            className="w-full h-full relative flex justify-center items-center transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
            // style={{
            //   background: `url(${datas.image}) no-repeat center`,
            //   backgroundSize: "contain",
            // }}
          >
            <Image
              layout="fill"
              objectFit="scale-down"
              // src={`${imgSrc ? imgSrc : "/assets/images/spinner.gif"}`}
              src={datas.image}
              alt=""
              // onLoadingComplete={() => loadImg(datas.image)}
              className="w-full h-full object-contain"
            />
            {/* product available progress */}
            {/*{datas.campaingn_product && (*/}
            {/*  <>*/}
            {/*    <div className="px-[30px] absolute left-0 top-3 w-full">*/}
            {/*      <div className="progress-title flex justify-between ">*/}
            {/*        <p className="text-xs text-qblack font-400 leading-6">*/}
            {/*          Prodcuts Available*/}
            {/*        </p>*/}
            {/*        <span className="text-sm text-qblack font-600 leading-6">*/}
            {/*          {datas.cam_product_available}*/}
            {/*        </span>*/}
            {/*      </div>*/}
            {/*      <div className="progress w-full h-[5px] rounded-[22px] bg-primarygray relative overflow-hidden">*/}
            {/*        <div*/}
            {/*          style={{*/}
            {/*            width: `${*/}
            {/*              datas.campaingn_product ? 100 - available : 0*/}
            {/*            }%`,*/}
            {/*          }}*/}
            {/*          className="h-full absolute left-0 top-0 bg-qyellow"*/}
            {/*        ></div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </>*/}
            {/*)}*/}

            {/* product type */}
            {/*{datas.product_type && !datas.campaingn_product && (*/}
            {/*  <div className="product-type absolute right-[14px] top-[17px]">*/}
            {/*    <span*/}
            {/*      className={`text-[9px] font-700 leading-none py-[6px] px-3 uppercase text-white rounded-full tracking-wider ${*/}
            {/*        datas.product_type === "popular"*/}
            {/*          ? "bg-[#19CC40]"*/}
            {/*          : "bg-qyellow"*/}
            {/*      }`}*/}
            {/*    >*/}
            {/*      {datas.product_type}*/}
            {/*    </span>*/}
            {/*  </div>*/}
            {/*)}*/}
          </div>
        </div>
        <div className="product-card-details px-[30px] pb-[30px] relative pt-2">
          {/* add to card button */}
          <div className="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[85px] transition-all duration-300 ease-in-out">
            <button
              // onClick={() => addToCart(datas.id)}
              type="button"
              className="yellow-btn group relative w-full h-full flex shadow  justify-center items-center overflow-hidden"
            >
              <div className="btn-content flex items-center space-x-3 rtl:space-x-reverse relative z-10">
                <ShoppingCart />

                {/* <span>{ServeLangItem()?.Add_To_Cart}</span> */}
              </div>
              <div className="bg-shape w-full h-full absolute  bg-primary"></div>
            </button>
          </div>
          <div className="reviews flex space-x-[1px] mb-3">
            <Rating
              name="half-rating"
              // defaultValue={2.5}
              readOnly
              value={3}
              precision={0.5}
            />
          </div>

          <Link
            href={{ pathname: "/single-product", query: { slug: datas.slug } }}
            passHref
          >
            <p className="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer">
              {datas.title}
            </p>
          </Link>
          <p className="price">
            <span
              suppressHydrationWarning
              className={`main-price  font-600 text-[18px] ${
                offerPrice ? "line-through text-qgray" : "text-qred"
              }`}
            >
              {offerPrice ? (
                <span>{offerPrice}</span>
              ) : (
                <>
                  {/* {isProductInFlashSale && ( */}
                  <span
                    className={`line-through text-gray-500 font-semibold text-[16px] mr-2`}
                  >
                    {/* <CurrencyConvert price={price} /> */}
                    {datas.price}$
                  </span>
                  {/* )} */}
                  {/* <CheckProductIsExistsInFlashSale
                    id={datas.id}
                    price={price}
                  /> */}
                  <span className="text-red-600 text-lg font-semibold text-[18px] ml-2">
                    {datas.offer_price}$
                  </span>
                </>
              )}
            </span>
            {offerPrice && (
              <span
                suppressHydrationWarning
                className="offer-price text-qred font-600 text-[18px] ml-2"
              >
                {/* <CheckProductIsExistsInFlashSale
                  id={datas.id}
                  price={offerPrice}
                /> */}
              </span>
            )}
          </p>
        </div>
        {/* quick-access-btns */}
        <div className="absolute cursor-pointer top-[120px] -right-10 group-hover:right-4 rounded-sm bg-primary-gray hover:bg-primary p-2  transition-all  hover:text-white">
          <Expand />
        </div>
        <div className="absolute cursor-pointer top-[168px] -right-10 group-hover:right-4  rounded-sm bg-primary-gray hover:bg-primary p-2  transition-all  hover:text-white">
          <Favorites showCounter={false} />
        </div>

        <div className="absolute cursor-pointer top-[216px] -right-10 group-hover:right-4 rounded-sm bg-primary-gray hover:bg-primary p-2  transition-all ease-in-out hover:text-white">
          <Refresh showCounter={false} />
        </div>
        {quickViewModal && quickViewData && (
          <div className="quicke-view-wrapper w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center ">
            <div
              onClick={() => setQuickView(!quickViewModal)}
              className="w-full h-full fixed left-0 right-0 bg-black  bg-opacity-25"
            ></div>
            <div
              data-aos="fade-up"
              className=" md:mx-10 xl:mt-[100px] rounded w-full bg-white relative lg:py-[40px] pt-[80px] pb-[40px] sm:px-[38px] px-3 md:mt-12 h-full overflow-y-scroll xl:overflow-hidden  "
              style={{ zIndex: "999" }}
            >
              <div className="w-full h-full overflow-y-scroll overflow-style-none">
                {/* <ProductView
                  images={
                    quickViewData.gellery.length > 0
                      ? quickViewData.gellery
                      : []
                  }
                  product={quickViewData.product}
                /> */}
              </div>
              <button
                onClick={() => setQuickView(!quickViewModal)}
                type="button"
                className="absolute right-3 top-3"
              >
                <span className="text-red-500 w-12 h-12 flex justify-center items-center rounded border border-qred">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
      <span className="anim bottom border border-primary"></span>
      <span className="anim right  border border-primary"></span>
      <span className="anim top  border border-primary"></span>
      <span className="anim left  border border-primary"></span>
    </div>
  );
}
