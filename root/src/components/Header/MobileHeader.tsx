import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MobileHeader.module.css";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={`${styles.header} ${styles.mobileHeader}`}>
      <div className={styles.logoContainer}>
        <Image
          src="/assets/images/ImaginAR_light_logo.png"
          alt="Logo"
          width={100}
          height={40}
          className={styles.logo}
        />
      </div>
      <button
        onClick={toggleMenu}
        className={styles.hamburger}
        aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isMenuOpen && (
        <nav className={styles.mobileMenu}>
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
      )}
    </header>
  );
};

export default MobileHeader;
