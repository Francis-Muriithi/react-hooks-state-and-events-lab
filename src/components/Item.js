import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false);

  function handleCart(){
    setCart(cart => !cart);
  }
  const cartStatus = cart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className= " ">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cartStatus}</button>
    </li>
  );
}

export default Item;
