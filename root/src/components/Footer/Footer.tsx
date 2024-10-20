// src/components/Footer/Footer.tsx
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p>Contact: info@mysite.com</p>
        <p>Location: 500 Terry Francois Street, San Francisco</p>
        <div className={styles.social}>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>
      </div>
      <p>© 2035 by Business Name</p>
    </footer>
  );
};

export default Footer;
