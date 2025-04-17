import "./SingleDisplay.css";
import breadcrum from "../../Assets/breadcrum_arrow.png";
const BreadCrum = (props) => {
  const product = props;
  return (
    <div className="breadcrum">
      HOME <img src={breadcrum} alt="arrow" /> SHOP
      <img src={breadcrum} alt="arrow" /> {product.category}
      <img src={breadcrum} alt="arrow" /> {product.name}
    </div>
  );
};

export default BreadCrum;
