import React from "react";
import FooterList from "./FooterList";

export default function Footer() {
  return (
    <footer>
      <div className="containerFooter">
        <div id="contactField">
          <p>Kontakt</p>
        </div>
        <FooterList />
        <div id="copyright">
          <p>&copy; MyToDo 2022</p>
        </div>
      </div>
    </footer>
  );
}
