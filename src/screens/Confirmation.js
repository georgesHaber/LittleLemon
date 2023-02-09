import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { firstName, lastName, date, time, guests, occasion, seating } =
    useLocation().state;
  const navigate = useNavigate();
  return (
    <div className="reservation-container">
      <div className="reservation">
        <div className="information">
          <h1>Confirm Your Order</h1>
          <p>
            Name : {firstName} {lastName}
          </p>
          <p>Date: {date} </p>
          <p>Time : {time} </p>
          <p>Guests : {guests} </p>
          <p>Occasion : {occasion ? occasion : "None"} </p>
          <p>Seating : {seating} </p>
          <button
            onClick={() => {
              alert("Booking Successful");
              navigate("/");
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
