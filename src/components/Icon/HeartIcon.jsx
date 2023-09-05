import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { likedProductsState } from "../../atom/heartAtom";

function HeartIcon({ product, style }) {
  const [likedProducts, setLikedProducts] = useRecoilState(likedProductsState);

  const isLiked = likedProducts.some(likedProduct => likedProduct.id === product.id);

  const toggleLike = () => {
    if (isLiked) {
      setLikedProducts(prevState => prevState.filter(likedProduct => likedProduct.id !== product.id));
    } else {
      setLikedProducts(prevState => [...prevState, product]);
    }
  };

  return isLiked ? (
    <AiFillHeart
      style={{ float: "right", color: "red", ...style }}
      onClick={toggleLike}
    />
  ) : (
    <AiOutlineHeart style={{ float: "right", ...style }} onClick={toggleLike} />
  );
}

export default HeartIcon;
