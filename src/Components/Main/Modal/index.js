import React, { useRef } from "react";
import Form from "./Form";

export default function Modal() {
  const modal = useRef(null);

  function toggleModal() {
    modal.current.showModal();
  }
  return (
    <>
      <div className="modal-container">
        <dialog ref={modal}>
          <h2>Add Todo</h2>
          <Form />
        </dialog>
      </div>

      <div className="ueber">
        <h1>ToDos offen</h1>
        <section id="todoOpen">
          <div className="addTodo">
            <button onClick={toggleModal} id="open-dialog">
              +
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
