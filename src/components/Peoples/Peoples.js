import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import People from "../People/People";
import "./Peoples.css";

const Peoples = () => {
  const [peoples, setPeoples] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setPeoples(data));
  }, []);
  const handleHireButton = (id) => {
    const findDouble = cart.find((people) => people.id === id);
    if (id === findDouble?.id) {
      return handleHireButton;
    } else {
      const findId = peoples.find((people) => people.id === id);
      const newCart = [...cart, findId];
      setCart(newCart);
    }
  };
  return (
    <div className="main-container">
      <div className="people-container">
        {peoples.map((people) => (
          <People
            key={people.id}
            people={people}
            handleHireButton={handleHireButton}
          ></People>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Peoples;
