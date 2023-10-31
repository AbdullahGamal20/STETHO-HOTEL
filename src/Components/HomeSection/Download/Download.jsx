import React from "react";
import Image from "../../../assets/appstore-button.png";
import Image2 from "../../../assets/google-play-button.png";
import Image3 from "../../../assets/app-image-1.png";
import "./download.css";

function Download() {
  return (
    <>
      <section className="download top">
        <div className="container flex_space">
          <div className="row">
            <div className="work_header">
              <h3>Download Our App</h3>
              <h1>Wow! Get This Template App For Your Mobile</h1>
            </div>
            <ul>
              <li>&#10003; Get Paperless Confirmation </li>
              <li>&#10003; Get Paperless Confirmation </li>
              <li>&#10003; Get Paperless Confirmation </li>
              <li>&#10003; Get Paperless Confirmation </li>
              <li>&#10003; Get Paperless Confirmation </li>
              <li>&#10003; Get Paperless Confirmation </li>
              <li>&#10003; Get Paperless Confirmation </li>
              <li>&#10003; Get Paperless Confirmation </li>
              <li>&#10003; Get Paperless Confirmation </li>
              <li>&#10003; Get Paperless Confirmation </li>
            </ul>
            <div className="img flex">
              <img src={Image} alt="Image" />
              <img src={Image2} alt="Image" />
            </div>
          </div>
          <div className="row row2">
            <img src={Image3} alt="Image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
