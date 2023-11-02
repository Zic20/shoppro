import styles from "../components/Navbar.module.css";
import Button from "./Button";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="logo">
        <h2>ShopPro</h2>
      </div>

      <ul>
        <li>
          <a>SOLUTION</a>
        </li>
        <li>
          <a>BUSINESS TYPES</a>
        </li>
        <li>
          <a>FEATURES</a>
        </li>
        <li>
          <a>PRICING</a>
        </li>
      </ul>

      <Button variant="primary">SIGN IN</Button>
    </div>
  );
};

export default Navbar;
