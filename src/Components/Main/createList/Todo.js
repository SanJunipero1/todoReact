import React from "react";
import EditButton from "./EditButton";
import H2 from "./h2";

export default function Todo(item) {
  return (
    <div className="listItemButton">
      <EditButton className="button2" />
      <div className="h2div">
        <H2 text={item} />
      </div>
      <EditButton className="button3" />
      <EditButton className="button1" />
    </div>
  );
}
