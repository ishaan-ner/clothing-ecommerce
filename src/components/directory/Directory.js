import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem";

const Directory = () => {
  const sections = [
    {
      name: "hats",
      img: "/images/hats.jpg",
      id: "1",
    },
    {
      name: "jackets",
      img: "/images/jackets.jpg",
      id: "2",
    },
    {
      name: "sneakers",
      img: "/images/sneakers.jpg",
      id: "3",
    },
    {
      name: "womens",
      img: "/images/womens.jpg",
      id: "5",
      size: "large",
    },
    {
      name: "mens",
      img: "/images/mens.jpg",
      id: "4",
      size: "large",
    },
  ];
  return (
    <div className="directory-menu">
      {sections.map(({ name, id, img, size }) => (
        <MenuItem title={name} key={id} img={img} size={size} />
      ))}
    </div>
  );
};

export default Directory;
