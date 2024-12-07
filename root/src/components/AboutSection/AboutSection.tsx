import styles from "./AboutSection.module.css";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Where Innovation Meets Reality</h1>

        <p className={styles.description}>
          "Step into the future with Imaginar. We're merging AI and AR to create
          solutions that redefine possibilities and enhance everyday life. Ready
          to see what's next?"
        </p>

        <button className={styles.exploreButton}>Explore our journey</button>

        <div className={styles.scrollIndicator}>
          <Image
            src="/assets/images/down-arrow-icon.png"
            alt="Down Arrow"
            width={32}
            height={32}
            className={styles.downArrow}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
