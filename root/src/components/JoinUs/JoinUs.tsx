import styles from "./JoinUs.module.css";

const JoinUs = () => {
  return (
    <section className={styles.joinUs}>
      {/* Section Header */}
      <h2 className={styles.title}>Join Us</h2>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Left Icon */}
        <div className={styles.leftIcon}>
          <span className={styles.arrow}>&rarr;</span>
        </div>

        {/* Centered Text */}
        <div className={styles.textContent}>
          <h3 className={styles.subheading}>Become Part of the Future</h3>
          <p className={styles.description}>
            Encourage visitors to join the innovative journey of{" "}
            <span className={styles.highlight}>Imaginar</span> by showing the
            value and excitement of being part of your team.
          </p>
          <button className={styles.button}>Join Us</button>
        </div>

        {/* Right Icon (VR Headset) */}
        <div className={styles.rightIcon}>
          <img
            src="https://via.placeholder.com/100" // Replace with actual VR headset image
            alt="VR Headset"
            className={styles.vrHeadset}
          />
        </div>
      </div>

      {/* Circular Rotating Icon */}
      <div className={styles.circularIcon}>
        <span>JOIN US • JOIN US • JOIN US</span>
      </div>
    </section>
  );
};

export default JoinUs;
