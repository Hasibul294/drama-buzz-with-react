import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import People from "../People/People";
import "./Peoples.css";

const Peoples = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setPeoples(data));
  }, []);
  return (
    <div className="main-container">
      <div className="people-container">
        {peoples.map((people) => (
          <People key={people.id} people={people}></People>
        ))}
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Peoples;
