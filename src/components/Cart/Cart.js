import React from "react";
import Details from "../Details/Details";

const Cart = (props) => {
  let totalCost = 0;
  for (const cost of props.cart) {
    totalCost = totalCost + cost.salary;
  }
  return (
    <div>
      <h1>--Cart Detail--</h1>
      <h3>Total People: {props.cart.length}</h3>
      <h3>Total Cost: ${totalCost}</h3>
      {props.cart.map((cart) => (
        <Details key={cart.id} cart={cart.name}></Details>
      ))}
    </div>
  );
};

export default Cart;
