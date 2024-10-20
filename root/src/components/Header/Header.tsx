// src/components/Header/Header.tsx
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Business Name</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#join">Join Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
