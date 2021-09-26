import React from "react";
import Rating from "react-rating";
import "./People.css";
const People = (props) => {
  //   console.log(props);
  //   const { people } = props;
  const { id, name, age, country, img, popularity, role, salary } =
    props.people;
  return (
    <div className="people-container">
      <div className="people-body">
        <img src={img} alt="" />
        <div className="people-title">
          <h3>Name: {name}</h3>
          <p>Age: {age}</p>
          <p>Role: {role}</p>
          <p>Country: {country}</p>
          <Rating
            initialRating={popularity}
            readonly
            emptySymbol="far fa-star rating-color"
            fullSymbol="fas fa-star rating-color"
          />
          <h5>Salary: ${salary}</h5>
          <button onClick={() => props.handleHireButton(id)}>
            HIRE ME <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default People;
