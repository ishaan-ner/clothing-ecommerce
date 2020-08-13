import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../collection-item/CollectionItem";
import { Link, useLocation } from "react-router-dom";

const Collection = ({ items, title, routeName }) => {
  const location = useLocation();
  return (
    <div className="collection-container">
      <Link to={`${location.pathname}/${routeName}`}>
        <div className="title">{title.toUpperCase()}</div>
      </Link>

      <div className="collection">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
