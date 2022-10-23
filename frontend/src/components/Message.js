import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children, dismissible }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant={variant}
        onClose={() => setShow(false)}
        dismissible={dismissible}
      >
        {children}
      </Alert>
    );
  }
};

Message.defaultProps = {
  variant: "info",
  dismissible: true,
};

export default Message;
