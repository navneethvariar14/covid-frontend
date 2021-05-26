import React from "react";
import Image from "next/image";

export default function Header({title}) {
  return (
    <header className="black-div">
        <div className="header-image">
          <h2 className="page-heading">{title}</h2>
        </div>
    </header>
  );
}
