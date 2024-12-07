// src/components/Header/Header.tsx

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import HamburgerMenu from "./HamburgerMenu";
import { scrollToSection } from "@/utils/scrollUtils";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [scrollState, setScrollState] = useState("top"); // 'top', 'scrolling', or 'returning'

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY === 0) {
        // At the top
        setScrollState("top");
      } else if (scrollY > 20) {
        // Scrolling down
        setScrollState("scrolling");
      } else {
        // Returning to top (but not quite there)
        setScrollState("returning");
      }
    };

    // Initial checks
    handleResize();
    handleScroll();

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (isDesktop) {
      scrollToSection(sectionId.replace("#", ""));
    }
  };

  const getHeaderClassName = () => {
    switch (scrollState) {
      case "scrolling":
        return `${styles.header} ${styles.headerScrolled}`;
      case "top":
        return `${styles.header} ${styles.headerAtTop}`;
      case "returning":
        return `${styles.header} ${styles.headerScrolled}`;
      default:
        return styles.header;
    }
  };

  return (
    <header className={getHeaderClassName()}>
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
            <Link href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#products"
              onClick={(e) => handleNavClick(e, "products")}>
              Products
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="#join" onClick={(e) => handleNavClick(e, "join")}>
              Join
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </Link>
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

      <HamburgerMenu />
    </header>
  );
};

export default Header;
