export interface Picture {
  fileName: string;
  thumbPath: string;
  largePath: string;
  isMain: boolean;
}

export interface PriceInfo {
  productSellerId: number;
  sellerId: number;
  seller: string;
  mainPrice: number;
  offPrice: number;
  offPercent: number;
  isOffer: boolean;
  offerEndDate: string | null;
  offerEndDateFa: string | null;
  inventory: number;
}

export interface Product {
  id: number;
  title: string;
  picture: Picture | null;
  priceInfo: PriceInfo;
}
