import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ name, value, label, type, handleChange, required }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        onChange={(e) => handleChange(e.target)}
        name={name}
        value={value}
        required={required}
      />
      {label ? (
        <label
          className={`form-input-label ${value ? "shrink" : ""}`}
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
