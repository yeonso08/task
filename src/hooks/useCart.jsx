const useCart = () => {
  const addToCart = (item) => {
    // 카트 정보를 불러옵니다
    const existingCart = JSON.parse(localStorage.getItem('basket') || '[]');
    // 중복있는지 검사
    const existingItemIndex = existingCart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex !== -1) {
      // 만약 카트에 상품이 있으면 수량만 더합니다
      existingCart[existingItemIndex].quantity += item.quantity;
    } else {
      // 카트에 상품이 없으면 상품을 더 합니다.
      const { __typename, ...newItem } = item;
      existingCart.push(newItem);
    }
    
    localStorage.setItem('basket', JSON.stringify(existingCart));
    alert("추가 됐습니다.")
  };

  const removeFromCart = (itemId) => {
    const existingCart = JSON.parse(localStorage.getItem('basket') || '[]');
    const updatedCart = existingCart.filter(item => item.id !== itemId);
    localStorage.setItem('basket', JSON.stringify(updatedCart));
    alert("Item was removed.");
  }

  return {
    addToCart,
    removeFromCart,
  };
};

export default useCart;
