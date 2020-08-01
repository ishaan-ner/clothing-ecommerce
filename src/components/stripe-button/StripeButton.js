import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  //stripe needs its price in cents to process properly
  const publishableKey =
    "pk_test_51HBIxOJFGRkMzJqWFBkgdJNeht1Q06HcX5bEPAxn1fwIrt6tht0XqkiqQOfasXXJ9WGQzEfBmhX9kmDkO8uR4y5S00bOgOnoAn";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E Commerce Store"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      panelLabel="Pay Now"
      token={onToken}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
