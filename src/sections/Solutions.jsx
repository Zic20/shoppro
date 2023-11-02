import styles from "../sections/Solutions.module.css";
import shop_image_1 from "../assets/shop_1.png";
const Solutions = () => {
  return (
    <div className={styles.solutions}>
      <div className={styles.content}>
        <div className={styles.image_section}>
          <img src={shop_image_1} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.detail}>
            <h3>SALES AND ANALYTICS</h3>
            <p>
              Tracks every sale made in your stores and helps you understand
              your income.
            </p>
          </div>
          <div className={styles.detail}>
            <h3>INVENTORY MANAGEMENT</h3>
            <p>Helps you effectively manage stores and warehouse inventory.</p>
          </div>
          <div className={styles.detail}>
            <h3>EASY WORK</h3>
            <p>
              We do all the hard work and allow you to focus on finding ways to
              grow your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
