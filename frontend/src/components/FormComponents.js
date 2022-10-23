import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormComponents = ({
  label1,
  label2,
  label3,
  label4,
  button,
  onSubmit,
  initialState1,
  initialState2,
  initialState3,
  initialState4,
}) => {
  const [state1, setState1] = useState(initialState1);
  const [state2, setState2] = useState(initialState2);
  const [state3, setState3] = useState(initialState3);
  const [state4, setState4] = useState(initialState4);

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(state1, state2, state3, state4);
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Group controlId={label1}>
        <Form.Label className="py-2">{label1}</Form.Label>
        <Form.Control
          type="text"
          placeholder={`Enter your ${label1}`}
          value={state1}
          required
          onChange={(e) => setState1(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId={label2}>
        <Form.Label className="py-2">{label2}</Form.Label>
        <Form.Control
          type="text"
          placeholder={`Enter your ${label2}`}
          value={state2}
          required
          onChange={(e) => setState2(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId={label3}>
        <Form.Label className="py-2">{label3}</Form.Label>
        <Form.Control
          type={label3 === "Password" ? "password" : "text"}
          placeholder={label3}
          value={state3}
          required
          onChange={(e) => setState3(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId={label4} className="mb-3">
        <Form.Label className="py-2">{label4}</Form.Label>
        <Form.Control
          type={label4 === "Confirm Password" ? "password" : "text"}
          placeholder={label4}
          value={state4}
          required
          onChange={(e) => setState4(e.target.value)}
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        {button}
      </Button>
    </Form>
  );
};

export default FormComponents;
