import { atom } from "recoil";

export const likedProductsState = atom({
  key: "likedProductsState",
  default: [
    {
      id: "",
      img: "",
      category: "",
      price: "",
      title: "",
      qty: "",
    },
  ],
});
