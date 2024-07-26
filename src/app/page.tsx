import ProductCardStyleOne from "@/components/cards/ProductCardStyleOne";
import TallCardsWrapper from "@/components/page sections/TallCardsWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="w-full flex-1  pt-[30px] pb-[60px]"
      style={{ backgroundColor: "#e3d8bd45" }}
    >
      {/* lg:p-24 mt-[60px]*/}
      <TallCardsWrapper />
    </main>
  );
}
