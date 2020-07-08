import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../collection-item/CollectionItem";

const Collection = ({ items, title }) => {
  return (
    <div className="collection-container">
      <div className="title">{title.toUpperCase()}</div>
      <div className="collection">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
