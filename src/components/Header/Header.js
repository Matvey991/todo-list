import React, { useState } from "react";
import Form from "./Form/Form";

export const Header = ({ AddNewTodo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <header className="d-flex justify-content-center">
      <Form AddNewTodo={AddNewTodo} closeHandler={closeHandler} />
    </header>
  );
};
