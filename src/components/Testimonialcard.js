import React from "react";

const Testimonialcard = ({ rating, name, text }) => {
  return (
    <>
      <div className="testimonial-card">
        <span>{rating}</span>
        <h4>{name}</h4>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Testimonialcard;
