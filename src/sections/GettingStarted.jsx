import "../sections/GettingStarted.css";
import Button from "../components/Button";
const GettingStarted = () => {
  return (
    <div id="gettingStarted">
      <h3>
        Get started with ShopPro POS <br />
        Elevate your business with each click
      </h3>

      <div className="content">
        <div className="card">
          <div className="step">
            <h1>1</h1>
          </div>
          <div className="header">
            <h1>Create a free account</h1>
          </div>
          <p>
            Create a free account and make a step toward elevating your
            business.
          </p>
        </div>
        <div className="card">
          <div className="step">
            <h1>2</h1>
          </div>
          <div className="header">
            <h1>Set up your business</h1>
          </div>
          <p>
            Set up your business details and start to track your sales, and
            expenses.
          </p>
        </div>
      </div>
      <div className="cta_buttons">
        <Button variant="primary">GET STARTED FOR FREE</Button>
        <Button variant="secondary">GET IN TOUCH WITH US</Button>
      </div>
    </div>
  );
};

export default GettingStarted;
