import BusinessCard from "../components/BusinessCard";
import styles from "../sections/Businesses.module.css";
import basicImage from "../assets/basic.svg";
import premiumImage from "../assets/premium.svg";
import enterpriseImage from "../assets/enterprise.svg";
import Button from "../components/Button";
const Pricing = () => {
  return (
    <div className={styles.businesses}>
      <p>What it will cost</p>
      <h2>The POS system to elevate your business</h2>
      <div>
        <BusinessCard header="BASIC" image={basicImage}>
          <p>
            For those who are just starting <br />1 Store
          </p>
        </BusinessCard>
        <BusinessCard header="PREMIUM" image={premiumImage}>
          <p>
            For the big boys. Those who have a lot on their plate. <br />
            Up to 3 Stores.
          </p>
        </BusinessCard>
        <BusinessCard header="ENTERPRISE" image={enterpriseImage}>
          <p>For those on the top with special needs.</p>
          <u>Contact Us</u>
        </BusinessCard>
      </div>
      <div style={{ display: "block", textAlign: "center" }}>
        <Button variant="primary">GET STARTED FOR FREE</Button>
        <p>
          <u>30 Days free trial</u>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
