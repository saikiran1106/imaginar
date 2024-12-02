// src/components/Header/Header.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const DesktopHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/assets/images/ImaginAR_light_logo.png"
          alt="Logo"
          width={138}
          height={54}
          className={styles.logo}
        />
      </div>

      <nav className={styles.navContainer}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#products">Products</Link>
          </li>
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#join">Join</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <button className={styles.getStarted}>
        Get Started
        <Image
          src="/assets/images/arrow-icon.png"
          alt="Arrow"
          width={26}
          height={26}
          className={styles.arrowIcon}
        />
      </button>
    </header>
  );
};

export default DesktopHeader;
