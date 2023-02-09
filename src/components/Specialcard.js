import React from "react";

const Specialcard = ({img,name,price,description}) => {
  return (
    <>
      <div className="special-card">
        <img src={img} alt="Specials" />
        <div className="detail">

        <div className="name">
        <h3>{name}</h3>
        <p>{price} </p>
        </div>
        <p className="description"> {description} </p>
        <p style={{fontWeight: "bold"}}>Order a Delivery</p>
        </div>
      </div>
    </>
  );
};

export default Specialcard;
