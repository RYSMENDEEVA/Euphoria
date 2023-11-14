import React from 'react';
import { Link } from 'react-router-dom';
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoTelegram,
} from 'react-icons/bi';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__card">
              <p className="footer__card-title">Need Help</p>
              <ul className="footer__card-links">
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Contact Us
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Track Order
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Returns & Refunds
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    FAQ's
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__card">
              <p className="footer__card-title">Company</p>
              <ul className="footer__card-links">
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    About Us
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    euphoria Blog
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    euphoriastan
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Collaboration
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Media
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__card">
              <p className="footer__card-title">More Info</p>
              <ul className="footer__card-links">
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Term and Conditions
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Privacy Policy
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Shipping Policy
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__card">
              <p className="footer__card-title">Location</p>
              <ul className="footer__card-links">
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    support@euphoria.in
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    Eklingpura Chouraha, Ahmedabad Main Road
                  </a>
                </li>
                <li className="footer__card-link">
                  <a className="footer__card-link" href="">
                    (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__mid">
            <div className="footer__mid-left">
              <div className="footer__mid-left-links">
                <Link className="footer__mid-left-link" to={'/facebook'}>
                  <BiLogoFacebook />
                </Link>
                <Link className="footer__mid-left-link" to={'/instagram'}>
                  <BiLogoInstagram />
                </Link>
                <Link className="footer__mid-left-link" to={'/twitter'}>
                  <BiLogoTwitter />
                </Link>
                <Link className="footer__mid-left-link" to={'/telegram'}>
                  <BiLogoTelegram />
                </Link>
              </div>
            </div>
            <div className="footer__mid-right">
              <p className="footer__mid-right-title">Download The App</p>
              <div className="footer__mid-right-b">
                <div className="footer__mid-right-card">
                  <span className="footer__mid-right-icon">
                    <svg
                      width="31"
                      height="34"
                      viewBox="0 0 31 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.670654 33.3127V0.336426L30.3224 16.3528L0.670654 33.3127Z"
                        fill="#5CA9B3"
                      />
                      <path
                        d="M0.670654 0.336426L21.6515 21.3172L30.3224 16.3528L0.670654 0.336426Z"
                        fill="#C8DB9B"
                      />
                      <path
                        d="M21.4718 11.5679L0.670654 33.3125L30.3224 16.3526L21.4718 11.5679Z"
                        fill="#AC5067"
                      />
                      <path
                        d="M21.6517 21.317L30.3225 16.3526L21.4719 11.5679L16.7996 16.4649L21.6517 21.317Z"
                        fill="#F4A676"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="footer__mid-right-desc">android app on</p>
                    <p className="footer__mid-right-text">Google Play</p>
                  </div>
                </div>
                <div className="footer__mid-right-card">
                  <span>
                    <svg
                      width="22"
                      height="33"
                      viewBox="0 0 22 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9334 0.931152H3.02932C1.72644 0.931152 0.670654 1.9869 0.670654 3.28978V30.2009C0.670654 31.5038 1.72644 32.5596 3.02932 32.5596H18.9334C20.2363 32.5596 21.2921 31.5038 21.2921 30.2009V3.28978C21.2921 2.00937 20.2138 0.931152 18.9334 0.931152Z"
                        fill="white"
                      />
                      <path
                        d="M20.1466 4.72754H1.79395V26.9214H20.1466V4.72754Z"
                        fill="#404040"
                      />
                      <path
                        d="M14.7328 2.34619H7.20758C6.91556 2.34619 6.646 2.59329 6.646 2.90778C6.646 3.22226 6.89309 3.46936 7.20758 3.46936H14.7328C15.0249 3.46936 15.2944 3.22226 15.2944 2.90778C15.2944 2.61575 15.0473 2.34619 14.7328 2.34619Z"
                        fill="#6639A6"
                      />
                      <path
                        d="M9.18457 29.5944C9.18457 28.606 9.99326 27.7749 10.9816 27.7749C11.97 27.7749 12.8012 28.5836 12.8012 29.5944C12.8012 30.5828 11.9925 31.3915 10.9816 31.3915C9.99326 31.4139 9.18457 30.6053 9.18457 29.5944Z"
                        fill="#6639A6"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="footer__mid-right-desc">Available on the</p>
                    <p className="footer__mid-right-text">App Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__bottom-top">
              <p className="footer__bottom-title">Popular Categories</p>
              <span className="footer__bottom-svg">
                <svg
                  width="21"
                  height="11"
                  viewBox="0 0 21 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.814 1.75049L9.30837 9.14195C9.86133 9.68731 10.7578 9.68731 11.3108 9.14195L18.8052 1.75049"
                    stroke="#F6F6F6"
                    strokeWidth="2.88"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <p className="footer__bottom-text">
              Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
