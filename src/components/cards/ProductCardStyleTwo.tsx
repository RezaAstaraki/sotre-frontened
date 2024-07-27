"use client";
// import axios from "axios";

import Rating from "@mui/material/Rating";

import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import apiRequest from "../../../../utils/apiRequest";
// import auth from "../../../../utils/auth";
// import settings from "../../../../utils/settings";
// import { fetchCart } from "../../../store/Cart";
// import { fetchCompareProducts } from "../../../store/compareProduct";
// import { fetchWishlist } from "../../../store/wishlistData";
// import CheckProductIsExistsInFlashSale from "../../Shared/CheckProductIsExistsInFlashSale";
// import ProductView from "../../SingleProductPage/ProductView";
// import Compair from "../icons/Compair";
// import QuickViewIco from "../icons/QuickViewIco";
// import Star from "../icons/Star";
// import ThinLove from "../icons/ThinLove";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import Favorites from "../header/shaoping components/Favorites";
import Refresh from "../header/shaoping components/Refresh";
// import ServeLangItem from "../ServeLangItem";
// import LoginContext from "../../Contexts/LoginContext";
// import CurrencyConvert from "../../Shared/CurrencyConvert";

// const Redirect = () => {
//   return (
//     <div className="flex space-x-2 items-center">
//       <span className="text-sm text-gray-500">
//         {ServeLangItem()?.Item_added}
//       </span>
//       <Link href="/cart">
//         <span className="text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer">
//           {ServeLangItem()?.Go_To_Cart}
//         </span>
//       </Link>
//     </div>
//   );
// };

export default function ProductCardStyleTwo({ datas }: { datas: any }) {
  //   const router = useRouter();
  //   const dispatch = useDispatch();
  //   const { wishlistData } = useSelector((state) => state.wishlistData);
  //   const wishlist = wishlistData && wishlistData.wishlists;
  //   const wishlisted =
  //     wishlist && wishlist.data.find((id) => id.product.id === datas.id);
  //   const { websiteSetup } = useSelector((state) => state.websiteSetup);
  //   const [isProductInFlashSale, setData] = useState(null);
  //   const loginPopupBoard = useContext(LoginContext);
  //   useEffect(() => {
  //     if (websiteSetup) {
  //       const getId = websiteSetup.payload.flashSaleProducts.find(
  //         (item) => parseInt(item.product_id) === parseInt(datas.id)
  //       );
  //       if (getId) {
  //         setData(true);
  //       } else {
  //         setData(false);
  //       }
  //     }
  //   }, [websiteSetup]);
  const [arWishlist, setArWishlist] = useState(null);
  const [quickViewModal, setQuickView] = useState(false);
  const [quickViewData, setQuickViewData] = useState(null);
  // const quickViewHandler = (slug) => {
  //   setQuickView(!quickViewModal);
  //   if (!quickViewData) {
  //     axios
  //       .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/product/${slug}`)
  //       .then((res) => {
  //         setQuickViewData(res.data ? res.data : null);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };
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

  // useEffect(() => {
  //   if (wishlisted) {
  //     setArWishlist(true);
  //   } else {
  //     setArWishlist(false);
  //   }
  // }, [wishlisted]);
  // const available =
  //   (datas.cam_product_sale /
  //     (datas.cam_product_available + datas.cam_product_sale)) *
  //   100;

  // const addToWishlist = (id) => {
  //   if (auth()) {
  //     setArWishlist(true);
  //     apiRequest.addToWishlist({ id: id, token: auth().access_token });
  //     dispatch(fetchWishlist());
  //   } else {
  //     loginPopupBoard.handlerPopup(true);
  //   }
  // };
  // const removeToWishlist = (id) => {
  //   if (auth()) {
  //     setArWishlist(false);
  //     apiRequest.removeToWishlist({ id: id, token: auth().access_token });
  //     dispatch(fetchWishlist());
  //   } else {
  //     loginPopupBoard.handlerPopup(true);
  //   }
  // };
  // cart
  // const varients = datas && datas.variants.length > 0 && datas.variants;
  // const [getFirstVarients, setFirstVarients] = useState(
  //   varients && varients.map((v) => v.active_variant_items[0])
  // );
  // const [price, setPrice] = useState(null);
  const [offerPrice, setOffer] = useState(null);
  // const addToCart = (id) => {
  //   const data = {
  //     id: id,
  //     token: auth() && auth().access_token,
  //     quantity: 1,
  //     variants:
  //       getFirstVarients &&
  //       getFirstVarients.length > 0 &&
  //       getFirstVarients.map((v) =>
  //         v ? parseInt(v.product_variant_id) : null
  //       ),
  //     variantItems:
  //       getFirstVarients &&
  //       getFirstVarients.length > 0 &&
  //       getFirstVarients.map((v) => (v ? v.id : null)),
  //   };
  //   if (auth()) {
  //     if (varients) {
  //       const variantQuery = data.variants.map((value, index) => {
  //         return value ? `variants[]=${value}` : `variants[]=-1`;
  //       });

  //       const variantString = variantQuery.map((value) => value + "&").join("");

  //       const itemsQuery = data.variantItems.map((value, index) => {
  //         return value ? `items[]=${value}` : `items[]=-1`;
  //       });
  //       const itemQueryStr = itemsQuery.map((value) => value + "&").join("");
  //       const uri = `token=${data.token}&product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`;
  //       apiRequest
  //         .addToCard(uri)
  //         .then((res) =>
  //           toast.success(<Redirect />, {
  //             autoClose: 5000,
  //           })
  //         )
  //         .catch((err) => {
  //           console.log(err);
  //           toast.error(
  //             err.response &&
  //               err.response.data.message &&
  //               err.response.data.message
  //           );
  //         });
  //       dispatch(fetchCart());
  //     } else {
  //       const uri = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
  //       apiRequest
  //         .addToCard(uri)
  //         .then((res) =>
  //           toast.success(<Redirect />, {
  //             autoClose: 5000,
  //           })
  //         )
  //         .catch((err) => {
  //           console.log(err);
  //           toast.error(
  //             err.response &&
  //               err.response.data.message &&
  //               err.response.data.message
  //           );
  //         });
  //       dispatch(fetchCart());
  //     }
  //   } else {
  //     localStorage.setItem(
  //       "data-hold",
  //       JSON.stringify({ type: "add-to-cart", ...data })
  //     );
  //     loginPopupBoard.handlerPopup(true);
  //   }
  // };

  // useEffect(() => {
  //   if (varients) {
  //     const prices = varients.map((v) =>
  //       v.active_variant_items.length > 0 && v.active_variant_items[0].price
  //         ? v.active_variant_items[0].price
  //         : 0
  //     );

  //     if (datas.offer_price) {
  //       const sumOfferPrice = parseFloat(
  //         prices.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) +
  //           parseFloat(datas.offer_price)
  //       );
  //       setPrice(datas.price);
  //       setOffer(sumOfferPrice);
  //     } else {
  //       const sumPrice = parseFloat(
  //         prices.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) +
  //           parseFloat(datas.price)
  //       );
  //       setPrice(sumPrice);
  //     }
  //   } else {
  //     setPrice(datas && datas.price);
  //     setOffer(datas && datas.offer_price);
  //   }
  // }, [datas, varients]);

  /*compare product feature
   * add product for compare method
   * @params (id,token)
   * request method is (apiRequest)
   * */
  // const productCompare = (id) => {
  //   if (auth()) {
  //     apiRequest
  //       .addProductForCompare(id, auth().access_token)
  //       .then((res) => {
  //         toast.success(res.data && res.data.notification);
  //         dispatch(fetchCompareProducts());
  //       })
  //       .catch((err) => {
  //         toast.error(err.response && err.response.data.notification);
  //         console.log(err);
  //       });
  //   } else {
  //     loginPopupBoard.handlerPopup(true);
  //   }
  // };
  // const { currency_icon } = settings();
  const [imgSrc, setImgSrc] = useState(null);
  // const loadImg = (value) => {
  //   // const time = 3000;
  //   // setTimeout(() => {
  //   //   setImgSrc(value);
  //   // }, time);
  //   setImgSrc(value);
  // };
  return (
    <div className="main-wrapper-card relative">
      <div
        className="product-row-card-style-one w-full lg:h-[250px] h-[200px] bg-white group relative overflow-hidden aos-init aos-animate"
        style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2">
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
