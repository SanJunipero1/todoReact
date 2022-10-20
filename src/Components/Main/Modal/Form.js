import React, { useRef } from "react";
import Button from "./Button";

export default function Form() {
  const input = useRef(null);

  function handleChange(event) {
    console.log(event.target.value);
  }

  function submitToDo() {
    console.log("Submitted!");
  }
  function cancelToDo() {
    //input.value = "";
    console.log("cancelBtn works!");
  }

  return (
    <form method="dialog">
      <input
        ref={input}
        onChange={handleChange}
        id="todoTitle"
        type="text"
        placeholder="What's to do?"
      />
      <Button onCLick={submitToDo} id="submit" type="submit" name={"Submit"} />
      <Button onClick={cancelToDo} id="cancel" name={"Cancel"} />
    </form>
  );
}
