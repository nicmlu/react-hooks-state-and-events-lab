import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);

  const itemClass = cart ? "in-cart" : "";

  function buy() {
    setCart(cart => !cart);
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={buy}>
        {cart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
