import { useRecoilState } from "recoil";
import { likedProductsState, showWishModalState } from "../atom/heartAtom";

function useWish(product) {
  const [likedProducts, setLikedProducts] = useRecoilState(likedProductsState);
  const [showWishModal, setShowWishModal] = useRecoilState(showWishModalState);

  const isLiked = likedProducts.some((p) => p.id === product.id);

  const toggleLike = () => {
    if (isLiked) {
      const updatedProducts = likedProducts.filter((p) => p.id !== product.id);
      setLikedProducts(updatedProducts);
    } else {
      setLikedProducts([...likedProducts, product]);
    }
    setShowWishModal(true);
  };

  return { isLiked, toggleLike };
}

export default useWish;
