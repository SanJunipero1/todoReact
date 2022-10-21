import React from "react";
import Button from "./button";
import H2 from "./h2";

export default function Todo(item) {
  return (
    <div className="listItemButton">
      <Button className="button2" />
      <div className="h2div">
        <H2 text={item} />
      </div>
      <Button className="button3" />
      <Button className="button1" />
    </div>
  );
}
