import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeadset, FaShieldAlt, FaShippingFast } from 'react-icons/fa';
import { SiNvidia, SiIntel, SiAmd } from 'react-icons/si';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="msi-footer">
      {/* Top Section - Support & Services */}
      <div className="footer-top">
        <div className="footer-support">
          <div className="support-item">
            <FaHeadset className="support-icon" />
            <div>
              <h4>Customer Support</h4>
              <p>24/7 dedicated gaming support</p>
            </div>
          </div>
          <div className="support-item">
            <FaShieldAlt className="support-icon" />
            <div>
              <h4>Warranty</h4>
              <p>5-year limited warranty</p>
            </div>
          </div>
          <div className="support-item">
            <FaShippingFast className="support-icon" />
            <div>
              <h4>Fast Shipping</h4>
              <p>Free delivery on all orders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Main Links */}
      <div className="footer-middle">
        <div className="footer-column">
          <h5>Products</h5>
          <ul>
            <li><a href="/gaming-laptops">Gaming Laptops</a></li>
            <li><a href="/desktops">Desktops</a></li>
            <li><a href="/monitors">Monitors</a></li>
            <li><a href="/components">Components</a></li>
            <li><a href="/peripherals">Peripherals</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Support</h5>
          <ul>
            <li><a href="/drivers">Drivers & Downloads</a></li>
            <li><a href="/warranty">Warranty</a></li>
            <li><a href="/returns">Returns & RMA</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Company</h5>
          <ul>
          <Link to="/about" className="nav-link"> About us</Link>
            <li><a href="/news">News</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/investors">Investors</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Community</h5>
          <ul>
            <li><a href="/forum">Forums</a></li>
            <li><a href="/esports">Esports</a></li>
            <li><a href="/streamers">Streamers</a></li>
            <li><a href="/blog">Gaming Blog</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h5>Stay Updated</h5>
          <p>Subscribe for gaming news and exclusive deals</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
          <div className="partner-logos">
            <SiNvidia className="partner-icon" />
            <SiIntel className="partner-icon" />
            <SiAmd className="partner-icon" />
          </div>
        </div>
      </div>

      {/* Bottom Section - Legal & Social */}
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        <div className="footer-legal">
          <p>© 2023 FTG Gaming. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;