import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={require('../images/footer-logo.png')} alt="" />
        <div className="nav">
        <h4>Doormat Navigation</h4>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Menu</a>
          <a href="/">Reservations</a>
          <a href="/">Order</a>
          <a href="/">Login</a>
        </div>
        <div className="contact">
        <h4>Contact</h4>
          <p>2395 Maldove Way. Chicago Illinois</p>
          <p>629-243-6827</p>
          <p>info@littlelemon.com</p>
        </div>
        <div className="social">
        <h4>Social Media</h4>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
