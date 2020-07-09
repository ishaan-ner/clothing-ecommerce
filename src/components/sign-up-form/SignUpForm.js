import React, { useState } from "react";
import "./sign-up-form.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const SignUpForm = () => {
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = ({ name, value }) => {
    const tempForm = { ...form };
    tempForm[name] = value;
    setForm(tempForm);
  };

  return (
    <div className="sign-up-container">
      <h2 className="title">I don't have an account</h2>
      <p>Sign up with your email and password.</p>
      <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name="displayName"
          value={form.displayName}
          type="text"
          label="Display Name"
          handleChange={handleChange}
        />
        <FormInput
          name="email"
          value={form.email}
          type="email"
          label="Email"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          value={form.password}
          type="password"
          label="Password"
          handleChange={handleChange}
        />
        <FormInput
          name="confirmPassword"
          value={form.confirmPassword}
          type="password"
          label="Confirm Password"
          handleChange={handleChange}
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUpForm;
