import React from "react";
import "./sign-in.styles.scss";
import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {
  return (
    <div className="sign-in-page">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
