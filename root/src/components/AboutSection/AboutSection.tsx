import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      {/* Top Left Heading with Line */}
      <div className={styles.header}>
        <h1 className={styles.heading}>About Us</h1>
        <hr className={styles.line} />
      </div>

      <div className={styles.container}>
        {/* Left Side - Image and Vertical Text */}
        <div className={styles.imageWrapper}>
          <img
            src="https://via.placeholder.com/400x220" // Placeholder Image
            alt="Team Placeholder"
            className={styles.image}
          />
          <div className={styles.verticalText}>
            <span>DEVELOPMENT</span>
            <span>DESIGNING</span>
            <span>AR VR</span>
          </div>
        </div>

        {/* Right Side - Mission and Vision */}
        <div className={styles.textBox}>
          <h2 className={styles.title}>Mission And Vision:</h2>
          <p className={styles.description}>
            Articulate the company’s goals and what Imaginar aims to achieve
            with <span className={styles.highlight}>AI</span> and{" "}
            <span className={styles.highlight}>AR</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
