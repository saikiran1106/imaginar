// src/components/ProductSection/ProductSection.tsx
import styles from "./ProductSection.module.css";

const ProductSection = () => {
  return (
    <section className={styles.productSection}>
      <h2>
        Brief introduction to the upcoming products and what makes them unique.
      </h2>
      <div className={styles.products}>
        <div className={styles.product}>
          <div className={styles.imagePlaceholder}></div>
          <h3>AI Product - Speako</h3>
          <p>Break Language Barriers</p>
          <button>Read More</button>
        </div>
        <div className={styles.product}>
          <div className={styles.imagePlaceholder}></div>
          <h3>AR Game</h3>
          <p>Your Reality, More Engaging</p>
          <button>Read More</button>
        </div>
        <div className={styles.product}>
          <div className={styles.imagePlaceholder}></div>
          <h3>AI + AR Product Teaser</h3>
          <p>Next-Level Innovation</p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
