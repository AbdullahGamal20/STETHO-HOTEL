import React from "react";
import image1 from "../../assets/about-img-1.jpg";

function AboutCard() {
  return (
    <>
      <div className="aboutCard mtop flex_space">
        <div className="row row1">
          <h4>About Us</h4>
          <h1>
            We <span>Provide Solution</span> to grow your business
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            recusandae exercitationem necessitatibus culpa temporibus accusamus
            recusandae exercitationem necessitatibus culpa temporibus accusamus
            eius, consectetur ducimus rem quod!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            recusandae exercitationem necessitatibus culpa temporibus accusamus
            eius, consectetur ducimus rem quod!
          </p>
          <button className="secondary-btn">
            Explore More <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="row image">
          <img src={image1} alt="Image" />
          <div className="control-btn">
            <button className="prev">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCard;
