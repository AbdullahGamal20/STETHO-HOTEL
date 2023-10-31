import React from "react";
import Tdata from "./TData";
import TCard from "./TCard";
function AllTestimonials() {
  return (
    <>
      <section className="Testimonial mtop">
        <div className="container grid1">
          {Tdata.map((value, index) => {
            return <TCard key={index} {...value} />;
          })}
        </div>
      </section>
    </>
  );
}

export default AllTestimonials;
