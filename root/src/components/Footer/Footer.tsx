// src/components/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <h2 className={styles.quote}>
            "Step into the future: Where reality meets imagination with
            immersive AR/VR experiences."
          </h2>
          <button className={styles.getStartedButton}>Get started</button>
        </div>

        <div className={styles.rightSection}>
          <Image
            src="/assets/images/VRLarge.png"
            alt="VR Headset"
            width={600}
            height={400}
            className={styles.vrImage}
            priority
          />
        </div>
      </div>

      <div className={styles.linksSection}>
        <div className={styles.linkColumn}>
          <h3>Product</h3>
          <ul>
            <li>Landing Page</li>
            <li>Popup Builder</li>
            <li>Web-design</li>
            <li>Content</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3>Use Cases</h3>
          <ul>
            <li>Web-designers</li>
            <li>Marketers</li>
            <li>Small Business</li>
            <li>Website Builder</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3>Resources</h3>
          <ul>
            <li>Academy</li>
            <li>Blog</li>
            <li>Themes</li>
            <li>Hosting</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Teams</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.socialLinks}>
          <p>Follow us</p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Youtube">
              <FaYoutube size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="#" aria-label="Github">
              <FaGithub size={24} />
            </a>
            <a href="#" aria-label="Discord">
              <FaDiscord size={24} />
            </a>
            <a href="#" aria-label="Website">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.signInButton}>Sign In</button>
          <button className={styles.contactButton}>Contact Us</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
