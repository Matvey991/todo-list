import React from "react";
import Form from "./Form/Form";

export const Header = ({ AddNewTodo }) => {
  return (
    <header className="d-flex justify-content-center">
      <Form AddNewTodo={AddNewTodo} />
    </header>
  );
};
