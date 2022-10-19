import React from "react";

export default function Ueber() {
  const modal = document.querySelector("dialog");

  function toggleModal() {
    modal.showModal();
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
