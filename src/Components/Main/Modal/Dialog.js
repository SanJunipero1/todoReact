import React from "react";
import Form from "./Form";

export default function Dialog({ modalOpen, setModalOpen, input, setInput }) {
  console.log(modalOpen);
  return (
    <dialog open={modalOpen}>
      <h2>Add Todo</h2>
      <Form
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        input={input}
        setInput={setInput}
      />
    </dialog>
  );
}
