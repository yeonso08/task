import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useWish from "../../hooks/useWish";

function HeartIcon({ product, style }) {
  const { isLiked, toggleLike } = useWish(product);

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
