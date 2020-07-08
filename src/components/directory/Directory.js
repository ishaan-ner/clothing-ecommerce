import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem";

const Directory = () => {
  const sections = [
    {
      name: "hats",
      img: "/images/hats.jpg",
      id: "1",
      linkURL: "hats",
    },
    {
      name: "jackets",
      img: "/images/jackets.jpg",
      id: "2",
      linkURL: "jackets",
    },
    {
      name: "sneakers",
      img: "/images/sneakers.jpg",
      id: "3",
      linkURL: "sneakers",
    },
    {
      name: "womens",
      img: "/images/womens.jpg",
      id: "5",
      size: "large",
      linkURL: "womens",
    },
    {
      name: "mens",
      img: "/images/mens.jpg",
      id: "4",
      size: "large",
      linkURL: "mens",
    },
  ];
  return (
    <div className="directory-menu">
      {sections.map(({ name, id, img, size, linkURL }) => (
        <MenuItem
          title={name}
          key={id}
          img={img}
          size={size}
          linkURL={linkURL}
        />
      ))}
    </div>
  );
};

export default Directory;
