import React from "react";
import Button from "./Button";

export default function Form() {
  function handleChange(event) {
    console.log(event.target.value);
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
