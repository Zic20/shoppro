import "../sections/Features.css";
const Features = () => {
  return (
    <section id="features">
      <p>What is it made of?</p>
      <h2>
        <span className="text_secondary">Struggling</span> to understand your
        money? <br /> {"There's"} no need for that anymore.
      </h2>
      <p>
        With ShopPro you can focus on growing your business and trust us with
        handling your sales, expenses, inventory and financial reports
      </p>

      <div className="features_section">
        <div className="feature">
          <h4>Sales Tracking</h4>
          <p>
            Tracks every sale made in your stores and helps you understand your
            income.
          </p>
        </div>
        <div className="feature">
          <h4>Expense Tracking</h4>
          <p>Records how and where your money is spent.</p>
        </div>
        <div className="feature">
          <h4>Inventory Management</h4>
          <p>Helps you to effectively manage stores and warehouse inventory.</p>
        </div>
        <div className="feature">
          <h4>Reporting and Analytics</h4>
          <p>Gives you insight of how well your business is doing.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
