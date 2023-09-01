const useCart = () => {
  const addToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem('basket') || '[]');
    const existingItem = existingCart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      alert('이미 담긴 상품입니다');
      return;
    }
    const { __typename, ...newItem } = item;
    const updatedCart = [...existingCart, newItem];
    localStorage.setItem('basket', JSON.stringify(updatedCart));
  };

  return {
    addToCart,
  };
};

export default useCart;
