import heroImage from "../assets/hero-image.jpg";
import Button from "../components/Button";
import styles from "../sections/Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <h1>
          <span className="text_primary">MASTER</span> YOUR SALES, & <br></br>{" "}
          <span className="text_secondary">ELEVATE</span> YOUR BUSINESS{" "}
          <br></br> DIME BY DIME
        </h1>

        <div className="cta_buttons">
          <Button variant="primary">GET STARTED FOR FREE</Button>
          <Button variant="secondary">GET IN TOUCH WITH US</Button>
        </div>
      </div>
      <div className={styles.image_section}>
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
