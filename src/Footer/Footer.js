import React from "react";
import "./Footer.css";

function Footer() {
  function backToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="backToTop">
        <button onClick={backToTop}>Back To Top</button>
      </div>
      <div className="footer">
        <div className="footer__list">
          <ul>
            <strong>
              <li>Get to Know Us</li>
            </strong>
            <li>Careers</li>
            <li>About Amazon</li>
            <li>Blog</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Tours</li>
          </ul>
        </div>
        <div className="footer__list">
          <ul>
            <strong>
              <li>Make Money with Us</li>
            </strong>
            <li>Sell Products on Amazon</li>
            <li>Sell Apps on Amazon</li>
            <li>Become an Affliate</li>
            <li>Advertise your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
          </ul>
        </div>
        <div className="footer__list">
          <ul>
            <strong>
              <li>Amazon Payment Products</li>
            </strong>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footer__list">
          <ul>
            <strong>
              <li>Let Us Help You</li>
            </strong>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 1996-2020, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
  );
}

export default Footer;
