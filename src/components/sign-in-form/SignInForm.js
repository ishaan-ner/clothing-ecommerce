import React, { useState } from "react";
import "./sign-in-form.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignInForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setForm({ email: "", password: "" });
    } catch (error) {
      console.log("Error:", error.message);
    }
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
