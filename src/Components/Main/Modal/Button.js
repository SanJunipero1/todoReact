import React from "react";

export default function Button({ name, onClick, id, type }) {
  return (
    <button onClick={onClick} name={name} id={id} type={type}>
      {name}
    </button>
  );
}
