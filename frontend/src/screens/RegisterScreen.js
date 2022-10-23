import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";
import FormComponents from "../components/FormComponents";

const RegisterScreen = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  // const [visible, setVisible] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userReducer = useSelector((state) => state.userReducer);
  const { loadingRegister, errorRegister, user } = userReducer;

  const redirect = new URLSearchParams(location.search).get("redirect")
    ? new URLSearchParams(location.search).get("redirect")
    : "/";

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, user, redirect]);

  //set timer for error message
  // useEffect(() => {
  //   if (!error) {
  //     return;
  //   }
  //   setVisible(true);
  //   const timer = setTimeout(() => {
  //     setVisible(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [error]);

  const submitHandler = (name, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant="danger">{message}</Message>}
      {errorRegister && <Message variant="danger">{errorRegister}</Message>}
      {loadingRegister && <Loader />}
      <FormComponents
        label1="Name"
        label2="Email"
        label3="Password"
        label4="Confirm Password"
        button="Register"
        onSubmit={submitHandler}
        initialState1=""
        initialState2=""
        initialState3=""
        initialState4=""
      />
      <Row className="py-3">
        <Col>
          Already has an account?{" "}
          <Link to={redirect ? `/login/?redirect=/${redirect}` : "/login"}>
            Log In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
