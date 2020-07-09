import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = (props) => {
  const { title, img, size, linkURL, match, history } = props;
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkURL}`)}
    >
      <div
        className="background-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
