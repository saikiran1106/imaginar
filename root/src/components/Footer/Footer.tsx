// src/components/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        {/* Left Quote Section */}
        <div className={styles.quoteSection}>
          <blockquote className={styles.quote}>
            "Step into the future: Where reality meets imagination with
            immersive AR/VR experiences."
          </blockquote>
          <button className={styles.getStartedButton}>Get started</button>
        </div>

        {/* Right Image Section */}
        <div className={styles.imageSection}>
          <img
            src="https://via.placeholder.com/400x300" // Replace with AR/VR headset image
            alt="VR Headset"
            className={styles.vrImage}
          />
        </div>
      </div>

      <div className={styles.middleSection}>
        {/* Links Section */}
        <div className={styles.linksContainer}>
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Product</h4>
            <ul className={styles.linkList}>
              <li>Landing Page</li>
              <li>Popup Builder</li>
              <li>Web-design</li>
              <li>Content</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Use Cases</h4>
            <ul className={styles.linkList}>
              <li>Web-designers</li>
              <li>Marketers</li>
              <li>Small Business</li>
              <li>Website Builder</li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li>Academy</li>
              <li>Blog</li>
              <li>Themes</li>
              <li>Hosting</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Teams</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        {/* Social Media Icons */}
        <div className={styles.socialMedia}>
          <p className={styles.socialTitle}>Follow us</p>
          <div className={styles.icons}>
            {/* Replace the placeholders with your actual social media icons */}
            <span className={styles.icon}>🌐</span>
            <span className={styles.icon}>🌟</span>
            <span className={styles.icon}>🌀</span>
            <span className={styles.icon}>⚡</span>
          </div>
        </div>

        {/* Buttons Section */}
        <div className={styles.ctaButtons}>
          <button className={styles.signInButton}>Sign In</button>
          <button className={styles.contactUsButton}>Contact Us</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
