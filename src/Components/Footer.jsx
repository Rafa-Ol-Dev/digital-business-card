import React from "react";
import Face from "../images/face-icon.png";
import Insta from "../images/insta-icon.png";
import GitHub from "../images/hub-icon.png";

export default function Footer() {
  return (
    <footer className="rodape">
      <a href="https://www.facebook.com/rafabetooliveira">
        <img src={Face} alt="ícone do Facebook" />
      </a>
      <a href="https://www.instagram.com/rafaelrool/">
        <img src={Insta} alt="ícone do Instagram" />
      </a>
      <a href="https://github.com/Rafa-Ol-Dev">
        <img src={GitHub} alt="ícone do GitHub" />
      </a>
    </footer>
  );
}
