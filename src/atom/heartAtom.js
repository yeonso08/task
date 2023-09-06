import { atom } from "recoil";

export const likedProductsState = atom({
  key: "likedProductsState",
  default: [],
});

export const showWishModalState = atom({
  key: "showWishModalState",
  default: false,
});
