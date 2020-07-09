import React, { useState } from "react";
import "./sign-in-form.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const SignInForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ email: "", password: "" });
  };

  const handleChange = ({ name, value }) => {
    const tempForm = { ...form };
    tempForm[name] = value;
    setForm(tempForm);
  };

  return (
    <div className="sign-in-container">
      <h2 className="title">I already have an account</h2>
      <p>Sign in with your email and password.</p>
      <form className="sign-in-form" onSubmit={handleSubmit}>
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
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignInForm;
