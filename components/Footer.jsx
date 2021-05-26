import React from "react";
import { HiLocationMarker } from "react-icons/hi";


export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-4">
          <a href="#">Emergency</a>
          <br />
          <a href="#">Helpdesk</a>
          <br />
          <a href="#">How To</a>
          <br />
          <a href="#">Fact Check</a>
          <br />
        </div>
        <div className="col-4">
          <a href="#"><HiLocationMarker onClick={() => {
  document.location.href = 'https://stackoverflow.com/';
}} /></a>
          <br />
          <a href="#">Helpdesk</a>
          <br />
          <a href="#">How To</a>
          <br />
          <a href="#">Fact Check</a>
          <br />
        </div>
        <div className="col-4">
          <a href="#">Emergency</a>
          <br />
          <a href="#">Helpdesk</a>
          <br />
          <a href="#">How To</a>
          <br />
          <a href="#">Fact Check</a>
          <br />
        </div>
      </div>
      <small> &copy; Copyright 2021</small>
    </div>
  );
}
