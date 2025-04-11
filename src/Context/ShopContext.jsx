import { createContext } from "react";
import allProduct from "../Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { allProduct };

  return (
    <ShopContextProvider value={contextValue}>
      {props.children}
    </ShopContextProvider>
  );
};

export default ShopContextProvider;
