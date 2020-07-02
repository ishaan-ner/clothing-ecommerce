import React from "react";
import "./menu-item.styles.scss";

const MenuItem = (props) => {
  const { title, img, size } = props;
  return (
    <div className={`${size} menu-item`}>
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

export default MenuItem;
