import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";

const Directory = ({ directory }) => {
  return (
    <div className="directory-menu">
      {directory.map(({ name, id, img, size, linkURL }) => (
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

const mapStateToProps = (state) => ({
  directory: state.directory,
});

export default connect(mapStateToProps)(Directory);
