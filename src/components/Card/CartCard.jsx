import { React, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function CartCard() {
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);
  return (
    <>
      {basketItems.map((item) => (
        <Card>
          <Card.Img src={item.image} />
        </Card>
      ))}
    </>
  );
}

export default CartCard;
