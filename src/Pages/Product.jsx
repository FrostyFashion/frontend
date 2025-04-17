import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router";
import SingleDisplay from "../Components/SingleDisplay/SingleDisplay";

const Product = () => {
  const all_product = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <SingleDisplay product={product} />
      <h1>hello world this is the isngle@product.onion</h1>
    </div>
  );
};

export default Product;
