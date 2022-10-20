import React, { useRef } from "react";
import Button from "./Button";
import H2Div from "../createList/h2div";



<<<<<<< HEAD
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
=======
export default function Form() {
  const listInput = []
  function handleChange(event) {
    listInput.push(event.target.value) 
     console.log(event.target.value);
     console.log(listInput)
>>>>>>> main
  }
 
 
 
  return (
    

   

    <form method="dialog">
      <input
        onChange={handleChange}
        id="todoTitle"
        type="text"
        placeholder="What's to do?"
      />
<<<<<<< HEAD
      {/* <Button onCLick={submitToDo} />
      <Button onCLick={submitToDo} /> */}
      <Button onClick={submitToDo} text={"Submit"} />
      <Button onClick={cancelToDo} text={"Cancel"} />
    </form>
=======
      <Button id="submit" type="submit" name={"Submit"} />
      <Button id="cancel" name={"Cancel"} />
      </form>
      
>>>>>>> main
  );
}
