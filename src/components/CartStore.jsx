import React, {  useState } from "react";

export default function CartStore({ items }) {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const addToCarts = (items) => {
    setCart((prevCart) => [...prevCart, items]);
    setCartItemCount((prevCount) => prevCount + 1);
    localStorage.setItem("carts", JSON.stringify(cart));
    localStorage.setItem("cartItemCount", cartItemCount + 1);
  };
  console.log(items);
  return <button onClick={() => addToCarts(items)}>Add To Cart</button>;
}
