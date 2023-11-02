import "../components/Button.css";
const Button = ({ onClick, variant, children }) => {
  return (
    <button className={variant} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
