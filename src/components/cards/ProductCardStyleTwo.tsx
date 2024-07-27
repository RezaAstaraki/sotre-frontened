"use client";

import Rating from "@mui/material/Rating";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import Favorites from "../header/shaoping components/Favorites";
import Refresh from "../header/shaoping components/Refresh";

export default function ProductCardStyleOne({ datas }: { datas: any }) {
  const [quickViewModal, setQuickView] = useState(false);
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
      {/* product-row-card-style-one w-full lg:h-[250px] h-[200px] bg-white group relative overflow-hidden aos-init aos-animate */}
      <div
        className="product-row-card-style-one w-full lg:h-[250px] h-[200px] bg-white group relative overflow-hidden aos-init aos-animate"
        style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2">
          <div
            className="lg:w-1/2 w-1/3 h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-ou"
            // style={{
            //   background: `url(${datas.image}) no-repeat center`,
            //   backgroundSize: "contain",
            // }}
          >
            <Image
              layout="fill"
              objectFit="scale-down"
              // src={`${imgSrc ? imgSrc : "/assets/images/spinner.gif"}`}
              // src={datas.image}
              src="https://file.tavanastore.ir/Api/v1/MediaFiles/GetStream?FileName=06396cdc-f1cf-410f-8435-9d3de42b5b19.jpg&Group=Product&SubDir=Picture&IsPic=True&IsThumb=True"
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
          <div className="flex-1 flex flex-col justify-center h-full">
            {/* Rating */}
            <div className="reviews flex space-x-[1px] mb-3">
              <Rating name="half-rating" readOnly value={3} precision={0.5} />
            </div>

            <Link
              href={{
                pathname: "/single-product",
                query: { slug: datas.slug },
              }}
              passHref
            >
              <p className="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer">
                {datas.title}
              </p>
            </Link>
            <p className="price title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer">
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
                    <span
                      className={`line-through text-gray-500 font-semibold text-[16px] mr-2`}
                    >
                      {datas.price}$
                    </span>

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
                ></span>
              )}
            </p>
            <div className="w-[110px] h-[30px] bg-primary flex items-center justify-center">
              Add To Cart
            </div>
          </div>
        </div>
        <div className="absolute cursor-pointer top-5 -left-10 group-hover:left-4 rounded-sm bg-white hover:bg-primary p-2  transition-all  hover:text-white ease-in-out">
          <Expand />
          {/* top-[13px] */}
        </div>
        <div className="absolute cursor-pointer top-[60px] -left-10 group-hover:left-4  rounded-sm bg-white hover:bg-primary p-2  transition-all  hover:text-white delay-75 ease-in-out">
          <Favorites showCounter={false} />
        </div>

        <div className="absolute cursor-pointer top-[107px] -left-10 group-hover:left-4 rounded-sm bg-white hover:bg-primary p-2  transition-all  hover:text-white delay-150 ease-in-out">
          <Refresh showCounter={false} />
        </div>
      </div>
      <span className="anim bottom border border-primary"></span>
      <span className="anim right  border border-primary"></span>
      <span className="anim top  border border-primary"></span>
      <span className="anim left  border border-primary"></span>
    </div>
  );
}
