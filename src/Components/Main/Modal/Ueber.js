import React from "react";

export default function Ueber({ modalOpen, setModalOpen, setInput }) {
  function toggleModal() {
    setInput("");
    setModalOpen(!modalOpen);
  }
  return (
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
  );
}
