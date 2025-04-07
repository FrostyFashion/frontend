import "./Items.css";
const Items = ({ image, name, new_price, old_price }) => {
  return (
    <div className="items-container">
      <div className="items">
        <img src={image} alt="product image" />
        <p>{name}</p>
        <div className="items-prices">
          <div className="new-price">${new_price}</div>
          <div className="old-price">${old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
