import React from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRecoilState } from 'recoil';
import { likedProductsState } from '../atom/heartAtom';

function HeartIcon({ productId }) {
    const [likedProducts, setLikedProducts] = useRecoilState(likedProductsState);
    
    const isLiked = likedProducts[productId] || false;

    const toggleLike = () => {
        setLikedProducts(prevState => ({
            ...prevState,
            [productId]: !isLiked
        }));
    };

    return isLiked ? (
        <AiFillHeart style={{ float: "right", color: "red" }} onClick={toggleLike} />
    ) : (
        <AiOutlineHeart style={{ float: "right" }} onClick={toggleLike} />
    );
}

export default HeartIcon;