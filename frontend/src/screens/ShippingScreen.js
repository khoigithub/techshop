import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import FormComponents from "../components/FormComponents";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const {
    shippingAddress: { address, city, postalCode, country },
  } = cart;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (address, city, postalCode, country) => {
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <FormComponents
        label1="Address"
        label2="City"
        label3="Postal Code"
        label4="Country"
        button="Continue"
        onSubmit={submitHandler}
        initialState1={address}
        initialState2={city}
        initialState3={postalCode}
        initialState4={country}
      />
    </FormContainer>
  );
};

export default ShippingScreen;
