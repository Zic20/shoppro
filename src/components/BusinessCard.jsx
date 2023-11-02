import "../components/BusinessCard.css";
const BusinessCard = ({ image, header, children }) => {
  return (
    <div className="businessCard">
      <img src={image} alt="image" />
      <h3>{header}</h3>
      {children}
    </div>
  );
};

export default BusinessCard;
