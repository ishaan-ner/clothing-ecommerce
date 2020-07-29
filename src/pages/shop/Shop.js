import React from "react";
import "./shop.styles.scss";
import { connect } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Category from "../category/Category";

const Shop = ({ shop }) => {
  const match = useRouteMatch();
  return (
    <div className="shop-page">
      <Switch>
        <Route exact path={match.path}>
          <CollectionOverview />
        </Route>
        <Route path={`${match.path}/:category`}>
          <Category />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(mapStateToProps)(Shop);
