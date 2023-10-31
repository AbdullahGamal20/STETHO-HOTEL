import React from "react";
import "./footer.css";
import image1 from "../../assets/logo.png";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src={image1} alt="logo" />
        </div>

        <div className="copy">
          <i class="fa-solid fa-copyright"></i>opyrights for <span>STETHO</span>
        </div>

        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
