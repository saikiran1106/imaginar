// src/components/AboutSection/AboutSection.tsx
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <h2>About Section</h2>
      <p>
        Articulate the company&apos;s goals and what it aims to achieve with AI
        and AR.
      </p>
      <button>Explore</button>
    </section>
  );
};

export default AboutSection;
