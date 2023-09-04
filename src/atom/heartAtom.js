import { atom } from "recoil";

export const likedProductsState = atom({
  key: "likedProductsState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default empty object
});
