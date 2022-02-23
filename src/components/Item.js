import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("");

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className="add"
        onClick={() => {
          {
            if (inCart === "") {
              setInCart((inCart) => "in-cart");
            } else {
              setInCart((inCart) => "");
            }
          }
        }}
      >
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
