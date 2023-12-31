import React from "react";
import Cards from "./Cards";
import "./mostPopular.css";

function MostPopular() {
  return (
    <>
      <section className="popular top">
        <div className="full_container">
          <div className="heading">
            <h1>Most Popular Hotels</h1>
            <div className="line"></div>
          </div>

          <div className="content ">
            <Cards />
          </div>
        </div>
      </section>
    </>
  );
}

export default MostPopular;
