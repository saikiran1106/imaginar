// src/components/ContactUsSection/ContactUsSection.tsx
import React from "react";
import styles from "./ContactUsSection.module.css";

const ContactUsSection = () => {
  return (
    <section className={styles.contactUs}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h2 className={styles.title}>CONTACT Us</h2>
        <div className={styles.arrow}>
          <span>&#8594;</span>
        </div>
        <div className={styles.contactInfo}>
          <p className={styles.chatText}>Chat to us</p>
          <p className={styles.subText}>Our friendly team is here to help.</p>
          <p className={styles.email}>Imaginar@AIAR.com</p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <h3 className={styles.formTitle}>Got Questions? Get in Touch!</h3>
        <p className={styles.formSubtitle}>
          Tell us more about yourself and what you’ve got in mind
        </p>
        <form className={styles.form}>
          {/* Name Field */}
          <label className={styles.label}>
            Your Name
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
            />
          </label>
          {/* Email Field */}
          <label className={styles.label}>
            Email
            <input type="email" placeholder="Email" className={styles.input} />
          </label>
          {/* Message Field */}
          <label className={styles.label}>
            Message...
            <textarea
              placeholder="Message..."
              className={styles.textarea}></textarea>
          </label>
          {/* Radio Buttons */}
          <div className={styles.radioGroup}>
            <p className={styles.radioTitle}>How we can help?</p>
            <div className={styles.radioOptions}>
              <label className={styles.radioLabel}>
                <input type="radio" name="help" defaultChecked /> AR Game
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="help" /> AI Product
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="help" /> AI AR Product
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="help" /> Other
              </label>
            </div>
          </div>
          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
