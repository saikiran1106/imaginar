// src/components/ProductSection/ProductSection.tsx

import styles from "./ProductSection.module.css";
import Image from "next/image";

const ProductSection = () => {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.sectionTitle}>
        Brief introduction to the upcoming products and what makes them unique.
      </h2>
      <div className={styles.products}>
        <div className={styles.product}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/Speako.webp"
              alt="AI Product Speako"
              width={400}
              height={300}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productContent}>
            <h3 className={styles.productTitle}>AI Product - Speako:</h3>
            <p className={styles.productDescription}>
              Break Language Barriers
              <br />
              Quick insight into how Speako allows seamless communication across
              languages in real-time.
            </p>
            <button className={styles.readMoreButton}>
              <Image
                src="/assets/images/arrow-right.png"
                alt="Down Arrow"
                width={24}
                height={24}
                className={styles.downArrow}
              />
            </button>
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/AR_Game.webp"
              alt="AR Game"
              width={400}
              height={300}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productContent}>
            <h3 className={styles.productTitle}>AR Game:</h3>
            <p className={styles.productDescription}>
              Your Reality, More Engaging
              <br />
              Description of the game dynamics and the immersive AR experience.
            </p>
            <button className={styles.readMoreButton}>
              <Image
                src="/assets/images/arrow-right.png"
                alt="Down Arrow"
                width={24}
                height={24}
                className={styles.downArrow}
              />
            </button>
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/AI+AR.webp"
              alt="AI + AR Product Teaser"
              width={400}
              height={300}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productContent}>
            <h3 className={styles.productTitle}>AI + AR Product Teaser:</h3>
            <p className={styles.productDescription}>
              Next-Level Innovation
              <br />
              Mention the blend of AI and AR in a forthcoming product without
              revealing too much.
            </p>
            <button className={styles.readMoreButton}>
              <Image
                src="/assets/images/arrow-right.png"
                alt="Down Arrow"
                width={24}
                height={24}
                className={styles.downArrow}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
