import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import "./Footer.css";
import { Product, Solution } from "../NavBar/index";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_box">
        <div className="footer_box_social">
          <p>Hello, My name is Jinyoung Bae.</p>

          <div className="footer_social">
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className="footer_box_Product">
          <h3>Products</h3>
          <Product />
        </div>

        <div className="footer_box_help">
          <h3>Solutions</h3>
          <Solution />
        </div>

        <div className="subscribe">
          <h3>Subscribe</h3>

          <div className="subscribe_box">
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className="subscribe_box_send" />
          </div>
          <div className="subscribe_box_info"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
