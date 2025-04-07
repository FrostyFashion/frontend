import Hero from "../Components/Hero/Hero.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import NewCollections from "../Components/NewCollections/NewCollections";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};

export default Shop;
