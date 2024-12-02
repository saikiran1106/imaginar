// src/components/ProductSection/ProductSection.tsx

import styles from "./ProductSection.module.css";

const ProductSection = () => {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.sectionTitle}>
        Brief introduction to the upcoming products and <br /> what makes them
        unique.
      </h2>
      <div className={styles.products}>
        <div className={styles.product}>
          <div className={styles.imagePlaceholder}></div>
          <h3 className={styles.productTitle}>AI Product - Speako</h3>
          <p className={styles.productDescription}>
            Break Language Barriers <br />
            Quick insight into how Speako allows seamless communication across
            languages in real-time.
          </p>
          <button className={styles.readMoreButton}>
            <span>&#8594;</span> {/* Right arrow symbol */}
          </button>
        </div>
        <div className={styles.product}>
          <div className={styles.imagePlaceholder}></div>
          <h3 className={styles.productTitle}>AR Game</h3>
          <p className={styles.productDescription}>
            Your Reality, More Engaging <br />
            Description of the game dynamics and the immersive AR experience.
          </p>
          <button className={styles.readMoreButton}>
            <span>&#8594;</span>
          </button>
        </div>
        <div className={styles.product}>
          <div className={styles.imagePlaceholder}></div>
          <h3 className={styles.productTitle}>AI + AR Product Teaser</h3>
          <p className={styles.productDescription}>
            Next-Level Innovation <br />
            Mention the blend of AI and AR in a forthcoming product without
            revealing too much.
          </p>
          <button className={styles.readMoreButton}>
            <span>&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
