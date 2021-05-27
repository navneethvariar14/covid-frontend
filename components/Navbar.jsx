import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenu, HiSearch } from "react-icons/hi";
export default function Navbar() {
  const [sideBar, setSidebar] = useState(false);

  const navLinks = [
    { pageName: "Home", route: "/" },
    { pageName: "Statistics", route: "/Stats" },
    { pageName: "Medical", route: "/medical" },
  ];

  const drops = [
    {
      droptitle: "Contacts",
      dropItems: [
        { pageName: "Action", route: "#" },
        { pageName: "Another", route: "#" },
        { pageName: "Yet Another", route: "#" },
      ],
    },
    {
      droptitle: "Emergency",
      dropItems: [
        { pageName: "Action", route: "#" },
        { pageName: "Another", route: "#" },
        { pageName: "Yet Another", route: "#" },
      ],
    },
    {
      droptitle: "More",
      dropItems: [
        { pageName: "Action", route: "#" },
        { pageName: "Another", route: "#" },
        { pageName: "Yet Another", route: "#" },
      ],
    },
  ];

  function NavOptions() {
    return navLinks.map((link) => (
      <li class="nav-item">
        <Link href={link.route}>
          <a class="nav-link active" aria-current="page">
            {link.pageName}
          </a>
        </Link>
      </li>
    ));
  }

  function Dropdown() {
    return drops.map((drop) => (
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {drop.droptitle}
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          {drop.dropItems.map((item) => {
            return (
              <li>
                <Link href={item.route}>
                  <a className="dropdown-item" href="#">
                    {item.pageName}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    ));
  }

  function Sidenav(objectArray) {
    return objectArray.map((link) => (
      <div>
        {" "}
        <Link href="/">
          <a>{link.pageName}</a>
        </Link>
      </div>
    ));
  }

  function SideDropDown() {
    return drops.map((index, drop) => (
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {drop.droptitle}
          </button>
        </h2>
        <div
          id={index}
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">{Sidenav(drop.dropItems)}</div>
        </div>
      </div>
    ));
  }

  const toggleSideBar = () => {
    setSidebar(!sideBar);
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const spot = document.querySelector(".spot");

    //Intersection observer
    const handleScroll = (entries) => {
      const spotIsVisible = entries[0].isIntersecting;
      if (spotIsVisible) navbar.classList.remove("scrolled-nav");
      else navbar.classList.add("scrolled-nav");
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshhold: 0,
    };

    const observer = new IntersectionObserver(handleScroll, options);
    observer.observe(spot);
  }, []);

  return (
    <>
      <nav class="navbar fixed-top navbar-expand-md d-none d-sm-none d-md-block  ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            PSYCHOS
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavOptions />
              <Dropdown />
            </ul>
            <form class="d-flex search">
              <input
                class="form-control me-2 search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn " type="submit">
                <HiSearch style={{ color: "gray" }} size={30} />
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="spot d-none d-md-block "></div>
      <nav className="d-sm-block d-md-none sidenav">
        <button className="toggle-icon">
          <HiMenu
            color={sideBar && "white"}
            onClick={() => {
              toggleSideBar();
            }}
          />
        </button>
      </nav>
      <div
        className={
          sideBar
            ? "d-sm-block d-md-none sidebar active"
            : "d-sm-block d-md-none sidebar "
        }
        id="mySidebar"
      >
        {Sidenav(navLinks)}
        <div class="accordion" id="accordionExample">
          {SideDropDown()}
        </div>
      </div>
    </>
  );
}
