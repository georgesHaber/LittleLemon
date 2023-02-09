import React from "react";

const Bottom = () => {
  return (
    <>
      <div className="bottom">
        <div>
          <div className="history">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Little Lemon opened in 1995 by two italian brothers, Adrian and
              Mario. Despite the city's diversity, the two brothers recognize,
              the lack of Mediterranean cuisine in Chiago, and were inspired to
              bring the flavors of their hometown in Italy to the people of
              Chiago. The twp brothers continue to oversee the Little Lemon
              restaurant, nearly thirty years later.
            </p>
          </div>
          <div className="img">
            <img src={require('../images/Mario-and-Adrian-A.jpg')} alt="Food" />
            <img className="img2" src={require('../images/Mario-and-Adrian-B.jpg')} alt="Food" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
