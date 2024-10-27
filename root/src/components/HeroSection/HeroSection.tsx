// src/components/HeroSection/HeroSection.tsx

import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div style={{ textAlign: "center", marginTop: "150px" }}>
          <h1>
            Transforming Realities
            <br />
            With AI and AR
          </h1>
        </div>

        <div style={{ textAlign: "center",marginTop: "24px" }}>
          <p>Dive into a world where technology meets imagination</p>
        </div>

        <button className={styles.exploreButton}>
          Explore Our Innovations
        </button>

        {/* VR image below the button */}
        <div className={styles.vrImageContainer}>
          <Image
            src="/assets/images/vr-headset.png"
            alt="VR Headset"
            width={350}
            height={350}
            className={styles.vrImage}
          />
        </div>

        {/* Down arrow icon positioned at bottom right */}
        <Image
          src="/assets/images/down-arrow-icon.png"
          alt="Down Arrow"
          width={32}
          height={32}
          className={styles.downArrow}
        />
      </div>
    </section>
  );
};

export default HeroSection;
