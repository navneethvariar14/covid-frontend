import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "reactjs-navbar";
import { HiMenu, HiSearch } from "react-icons/hi";

export default function NavBar() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const spot = document.querySelector(".spot");
    const handleScroll = (entries) => {
      const spotIsVisible = entries[0].isIntersecting;
      if (spotIsVisible) navbar.classList.remove("scrolled-nav");
      else navbar.classList.add("scrolled-nav");
    };
    const options = {
      root: null, // null means that root element = browser viewport.
      rootMargin: "0px", // margin around the browser viewport.
      threshhold: 0, // see below what 0 means.
    };
    // initialize and start the observer.
    const observer = new IntersectionObserver(handleScroll, options);
    observer.observe(spot);
  });
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Psycos
          </a>
          {/* <button
         
          {/* <span class="navbar-toggler-icon"></span> 
        </button> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Statistics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Medical
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contacts
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  c
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Emergency
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      How To
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Fact Check
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex search">
              <input
                class="form-control me-2 search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn " type="submit"></button>
            </form>
          </div>
        </div>
      </nav>
      <div className="spot d-none d-md-block"></div>
    </>
  );
}
