// src/components/ContactUsSection/ContactUsSection.tsx
import React from "react";
import styles from "./ContactUsSection.module.css";
import Image from "next/image";

const ContactUsSection = () => {
  return (
    <section id="contact" className={styles.contactUs}>
      <div className={styles.card}>
        <div className={styles.formContainer}>
          <h2>Contact Us.</h2>
          <p className={styles.formTitle}>Got Questions? Get in Touch!</p>
          <p className={styles.formSubtitle}>
            Tell us more about yourself and waht you're got in mind
          </p>

          <form className={styles.form}>
            <div className={styles.nameGroup}>
              <div className={styles.inputWrapper}>
                <label>Name</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className={styles.inputWrapper}>
                <label>Last Name</label>
                <input type="text" placeholder="Last name" />
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div className={styles.inputWrapper}>
              <label>Message</label>
              <textarea placeholder="Enter your message..." />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/VRLady.png"
            alt="VR Experience"
            fill
            className={styles.vrImage}
            priority
          />
          <div className={styles.imageOverlay}>
            <p className={styles.overlayText}>
              "Step into a new reality.
              <br />
              Experience the future, where
              <br />
              innovation meets immersion."
            </p>
          </div>
          <button className={styles.scrollButton}>
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
            <Image
              src="/assets/images/down-arrow-icon.png"
              alt="Down Arrow"
              width={32}
              height={32}
              className={styles.downArrow}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
