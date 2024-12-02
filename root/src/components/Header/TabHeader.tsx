import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const TabHeader = () => {
  return (
    <header className={`${styles.header} ${styles.tabHeader}`}>
      <div className={styles.logoContainer}>
        <Image
          src="/assets/images/ImaginAR_light_logo.png"
          alt="Logo"
          width={120}
          height={48}
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
        </ul>
      </nav>
    </header>
  );
};

export default TabHeader;
