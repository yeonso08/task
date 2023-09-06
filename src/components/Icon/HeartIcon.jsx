import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { likedProductsState } from "../../atom/heartAtom";

function HeartIcon({ product, style }) {
  const [likedProducts, setLikedProducts] = useRecoilState(likedProductsState);

  // 현재 상품이 좋아요 상태인지 확인
  const isLiked = likedProducts.some((p) => p.id === product.id);

  const toggleLike = () => {
    if (isLiked) {
      // 이미 좋아요 상태인 경우 제거
      const updatedProducts = likedProducts.filter((p) => p.id !== product.id);
      setLikedProducts(updatedProducts);
    } else {
      // 좋아요 상태가 아닌 경우 추가
      setLikedProducts([...likedProducts, product]);
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
