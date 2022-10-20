import React from "react";
import Button from "./Button";
import H2Div from "../createList/h2div";



export default function Form() {
  const listInput = []
  function handleChange(event) {
    listInput.push(event.target.value) 
     console.log(event.target.value);
     console.log(listInput)
  }
 
 
 
  return (
    

   

    <form method="dialog">
      <input
        onChange={handleChange}
        id="todoTitle"
        type="text"
        placeholder="What's to do?"
      />
      <Button id="submit" type="submit" name={"Submit"} />
      <Button id="cancel" name={"Cancel"} />
      </form>
      
  );
}
