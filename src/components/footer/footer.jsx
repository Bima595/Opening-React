import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../footer/footer.css';
import '../footer/main.css'
import logo from '../assets/Images/logo-ilab.png';
import fb from '../assets/Images/logo-facebook.png';
import twt from '../assets/Images/logo-twitter.png';
import ig from '../assets/Images/logo-instagram.png'

const Footer = () => {
  return (
    <footer className="footer-area footer-one">
      <div className="footer-widget">
        <div className="container-lg">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-sm-12">
              <div className="f-about">
                <div className="footer-logo">
                  {/* Updated href attribute */}
                  <a href="/">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <p className="text">
                  Copyright © 2023 Bon Bon Kyunnnn
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Services</h6>
                <ul>
                  <li><a href="/email-marketing">Email Marketing</a></li>
                  <li><a href="/campaigns">Campaigns</a></li>
                  <li><a href="/branding">Branding</a></li>
                  <li><a href="/offline">Offline</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">About</h6>
                <ul>
                  <li><a href="/">Our Story</a></li>
                  <li><a href="/">Benefits</a></li>
                  <li><a href="/">Team</a></li>
                  <li><a href="/">Careers</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-contact">
                <h6 className="footer-title">Follow Us</h6>
                <ul>
                  <li>
                    {/* Updated href attribute */}
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <img src={fb} alt=""/> Facebook
                    </a>
                  </li>
                  <li>
                    {/* Updated href attribute */}
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <img src={twt} alt=""/> Twitter
                    </a>
                  </li>
                  <li>
                    {/* Updated href attribute */}
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <img src={ig} alt=""/> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
