import React from "react";
import ToDoDone from "./createList/toDoDone";

export default function BotDiv() {
  return (
    <>
      <h1>ToDos fertig</h1>
      <div id="bottomDiv" className="toDoTop">
      <ToDoDone/>
      </div>
    </>
  );
}
