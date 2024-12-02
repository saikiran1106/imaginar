"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Track menu visibility

  const toggleMenu = () => setIsOpen((prev) => !prev); // Toggle the menu

  return (
    <div className={styles.hamburgerMenu}>
      {/* Hamburger Icon */}
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu">
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* Fullscreen Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu} // Close menu when clicking outside links
      >
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="#home" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
