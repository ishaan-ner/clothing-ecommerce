import React from "react";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import "./category.styles.scss";

const Category = ({ shop }) => {
  const { category } = useParams();
  const currentCategory = shop.filter((item) => item.routeName === category)[0];
  const { title, items } = currentCategory;
  return (
    <div className="category">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  shop: state.shop,
});

export default connect(mapStatetoProps)(Category);
