import React from "react";
import CreateList from "./createList/creatList";

export default function TopDiv({ input }) {
  return (
    <div id="topDiv" className="toDoTop">
      <CreateList input={input} />
    </div>
  );
}
