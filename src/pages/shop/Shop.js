import React, { useState, useEffect } from "react";
import "./shop.styles.scss";
import SHOP_DATA from "./shop.data";
import Collection from "../../components/collection/Collection";

const Shop = () => {
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    setShopData(SHOP_DATA);
  }, []);
  return (
    <div className="shop-page">
      {shopData.map((collection) => (
        <div key={collection.id}>
          <Collection {...collection} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
