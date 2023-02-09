import React from "react";
import Specialcard from "./Specialcard";
import Specialscard from "./Specialcard";
import greekSalad from "../images/greek-salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemonDessert from "../images/lemon-dessert.jpg";

const Specials = () => {
  return (
    <>
      <div className="specials">
        <div className="title">
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className="card-container">
          <Specialcard
            img={greekSalad}
            name="Greek salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce,peppers,olives and our Chiago style feta cheese,garnished with crunchy garlic and rosemary croutons"
          />
          <Specialcard
            img={bruchetta}
            name="Bruchetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled breadthat has been smeared with garlic and seasoned with salt and olive oil."
          />
          <Specialcard
            img={lemonDessert}
            name="Lemon Dessert"
            price="$5.00"
            description="THis comes straight from grandma's recipe book, every last ingredient has been sourced and is as cuthentic as can be imagined."
          />
        </div>
      </div>
    </>
  );
};

export default Specials;
