import React from "react";
import Testimonialcard from "./Testimonialcard";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial">
        <h1>Testimonials</h1>
        <div className="testimonial-container">
          <Testimonialcard
            rating="⭐⭐⭐⭐⭐"
            name="John"
            text="This is the best Mediterranean food I have ever had!"
          />
          <Testimonialcard
            rating="⭐⭐⭐⭐"
            name="Micheal"
            text="My Shiba inu,Mugi,really loved the cozy vibes and delicious food here."
          />
          <Testimonialcard
            rating="⭐⭐⭐⭐"
            name="Jimmy"
            text="I have had some great Mediterranean food before, but none of thembeats Little Lemon in flavor and texture."
          />
          <Testimonialcard
            rating="⭐⭐⭐"
            name="Alice"
            text="Great food , welcomming staff,cozy atmosphere. A great place to treat your kids to"
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
