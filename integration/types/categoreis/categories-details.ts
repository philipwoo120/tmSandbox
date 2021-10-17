export interface CategoriesDetails {
  CategoryId: number;
  Name: string;
  Path: string;
  CanListAuctions: boolean;
  CanListClassifieds: boolean;
  CanRelist: boolean;
  LegalNotice: string;
  DefaultDuration: number;
  AllowedDurations: number[];
  Fees: Fees;
  FreePhotoCount: number;
  MaximumPhotoCount: number;
  IsFreeToRelist: boolean;
  Promotions: Promotions[];
  EmbeddedContentOptions: any[];
  MaximumTitleLength: number;
  AreaOfBusiness: number;
  DefaultRelistDuration: number;
  CanUseCounterOffers: boolean;
}

interface Fees {
  Bundle: number;
  EndDate: number;
  Feature: number;
  Gallery: number;
  Listing: number;
  Reserve: number;
  Subtitle: number;
  TenDays: number;
  ListingFeeTiers: ListingFeeTiers[];
  SecondCategory: number;
}

interface ListingFeeTiers {
  MinimumTierPrice: number;
  FixedFee: number;
}

interface Promotions {
  Id: number;
  Name: string;
  Description: string;
  Price: number;
  OriginalPrice?: number;
  Recommended?: boolean;
  MinimumPhotoCount: number;
}
