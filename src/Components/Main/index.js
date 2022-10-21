import React, { useState } from "react";
import TopDiv from "./TopDiv";
import BotDiv from "./BotDiv";
import Dialog from "./Modal/Dialog";
import Ueber from "./Modal/Ueber";

export default function Main() {
  let [modalOpen, setModalOpen] = useState(false);
  let [input, setInput] = useState("");
  return (
    <>
      <div className="modal-container">
        <Dialog
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          input={input}
          setInput={setInput}
        />
      </div>
      <main>
        <Ueber
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setInput={setInput}
        />
        <TopDiv input={input} />
        <BotDiv />
      </main>
    </>
  );
}
