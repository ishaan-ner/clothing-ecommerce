import React from "react";
import { connect } from "react-redux";
import Collection from "../collection/Collection";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ shop }) => {
  return (
    <div className="collection-overview">
      {shop.map((collection) => (
        <div key={collection.id}>
          <Collection {...collection} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(mapStateToProps)(CollectionOverview);
