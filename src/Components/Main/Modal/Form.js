import React, { useRef } from "react";
import Button from "./Button";

export default function Form({ modalOpen, setModalOpen, input, setInput }) {
  let inputValue;
  function handleChange(event) {
    inputValue = event.target.value;
  }

  function submitToDo() {
    setInput(inputValue);
    setModalOpen(false);
    console.log(input);
  }
  function cancelToDo() {
    inputValue = "";
    setInput("");
    setModalOpen(false);
  }

  return (
    <form method="dialog">
      <input
        onChange={handleChange}
        id="todoTitle"
        type="text"
        placeholder="What's to do?"
      />
      {/* <Button onCLick={submitToDo} />
      <Button onCLick={submitToDo} /> */}
      <Button onClick={submitToDo} text={"Submit"} />
      <Button onClick={cancelToDo} text={"Cancel"} />
    </form>
  );
}
