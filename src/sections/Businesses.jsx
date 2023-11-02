import BusinessCard from "../components/BusinessCard";
import styles from "../sections/Businesses.module.css";
import multiStoreImage from "../assets/multistore.svg";
import singleStoreImage from "../assets/singlestore.svg";
import eventsImage from "../assets/events.svg";
const Businesses = () => {
  return (
    <div className={styles.businesses}>
      <h2>The POS system to elevate your business</h2>
      <div>
        <BusinessCard header="Multi-store" image={multiStoreImage} />
        <BusinessCard header="Single store" image={singleStoreImage} />
        <BusinessCard header="Events" image={eventsImage} />
      </div>
    </div>
  );
};

export default Businesses;
