import React from "react";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <main>
      <div className="hero">
        <div className="title">
          <h1>Little Lemon</h1>
          <h3 className="mb-1">Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes serverd with a modern twist
          </p>
          <Link to='reservation'>

          <button>Reserve a table</button>
          </Link>
        </div>
        <img
          src={require("../images/restauranfood.jpg")}
          alt="Restaurant Food"
        />
      </div>
      <Specials/>
      <Testimonials/>
      <Bottom/>
    </main>
  );
};

export default Main;
