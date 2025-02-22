import React, { useState } from "react";
import Form from "./Form/Form";
import { Modal } from "../Modal/Modal";
import { Drawer } from "../Drawer/Drawer";

export const Header = ({ AddNewTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <header className="d-flex justify-content-center">
      {isMobile ? (
        <>
          <button
            onClick={openHandler}
            type="submit"
            className="btn btn-primary"
          >
            Open Drawer
          </button>
          <Drawer isOpen={isOpen} closeHandler={closeHandler}>
            <Form
              AddNewTodo={AddNewTodo}
              closeHandler={closeHandler}
              width={"100%"}
            />
          </Drawer>
        </>
      ) : (
        <>
          <button
            onClick={openHandler}
            type="submit"
            className="btn btn-primary"
          >
            Open modal
          </button>
          <Modal closeHandler={closeHandler} isOpen={isOpen}>
            <Form
              height={"100%"}
              width={"100%"}
              closeHandler={closeHandler}
              AddNewTodo={AddNewTodo}
            />
          </Modal>
        </>
      )}
    </header>
  );
};
