import Image from 'next/image';
import styles from "./JoinUs.module.css";

const JoinUs = () => {
  return (
    <section id="join" className={styles.joinUs}>
      <h2 className={styles.title}>Join Us</h2>

      <div className={styles.content}>
        {/* Left Arrow Icon */}
        <div className={styles.leftIcon}>
          <Image
            src="/assets/images/arrow_left_down.png"
            alt="Arrow"
            width={60} // Specify width
            height={60} // Specify height
            className={styles.arrow}
          />
        </div>

        <div className={styles.textContent}>
          <h3 className={styles.subheading}>Become Part of the Future</h3>
          <p className={styles.description}>
            Encourage visitors to join the innovative journey of{" "}
            <span className={styles.highlight}>Imaginar</span> by showing the
            value and excitement of being part of your team.
          </p>
          <button className={styles.button}>Join Us</button>
        </div>

        {/* VR Headset Icon */}
        <div className={styles.rightIcon}>
          <Image
            src="/assets/images/VRLarge.png"
            alt="VR Headset"
            width={250} // Specify width
            height={250} // Specify height
            className={styles.vrHeadset}
          />
        </div>
      </div>

      {/* Rotating Join Now Icon */}
      <div className={styles.circularIcon}>
        <Image
          src="/assets/images/Join_Now.png"
          alt="Join Now"
          width={120} // Specify width
          height={120} // Specify height
          className={styles.rotatingIcon}
        />
      </div>
    </section>
  );
};

export default JoinUs;
