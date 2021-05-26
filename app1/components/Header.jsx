import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="black-div">
      <div className="image-holder">
        <img className="header-image" src="/covid.jpeg" />
        <h2 className="page-heading">HEY THERE</h2>
      </div>
    </header>
  );
}
