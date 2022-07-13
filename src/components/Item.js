import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  function addToCart() {
    setCart((inCart) => !inCart)
  }
  const cartClass = inCart ? "in-cart" : ""
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
