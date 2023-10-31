import React from "react";
import image1 from "../../assets/feature-img-1.jpg";

import AboutCard from "./AboutCard";
import "./about.css";
import HeadTitle from "../HeadTitle/HeadTitle";

function About() {
  return (
    <>
      <HeadTitle />
      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>Features</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              recusandae exercitationem necessitatibus culpa temporibus
              recusandae exercitationem necessitatibus culpa temporibus
              recusandae exercitationem necessitatibus culpa temporibus
              accusamus eius, consectetur ducimus rem quod!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              recusandae exercitationem necessitatibus culpa temporibus
              recusandae exercitationem necessitatibus culpa temporibus
              recusandae exercitationem necessitatibus culpa temporibus
              accusamus eius, consectetur ducimus rem quod!
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
      </section>
    </>
  );
}

export default About;
