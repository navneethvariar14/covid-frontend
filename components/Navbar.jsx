import React, { useEffect,useState } from "react";
import Link from "next/link";
import { HiMenu, HiSearch } from "react-icons/hi";

export default function NavBar() {
  
const [sideBar,setSidebar]=useState(true);
const [sideNavClass, setSideNavClass]=useState("d-sm-block d-md-none sidebar");
  
const navLinks=[{pageName:"Home",route:"/"},{pageName:"Home",route:"/"}];

const toggleSideBar=()=>{
 setSidebar(!sideBar) ; 
//  if(sideBar===true){
//    setSidebar(false);
//  }else {
//   setSidebar(true);
//  }
 console.log(sideBar);
} 
    
 
  useEffect(() => {
    // //sidebar properties
    // const sidebar=document.querySelector(".sidebar");

    // if(sideBar) sidebar.classList.add("active");
    //   else sidebar.classList.remove("active");

      
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
  },[]);

  return (
    <>
      <nav class="navbar fixed-top navbar-expand-md d-none d-sm-none d-md-block  ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            PSYCHOS
          </a>
         
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
              <button class="btn " type="submit"><HiSearch style={{color : "gray"}} size={30}/></button>

            </form>
          </div>
        </div>
      </nav>
      <div className="spot d-none d-md-block "></div>
      <nav className="d-sm-block d-md-none sidenav" ><button className="toggle-icon"><HiMenu onClick={toggleSideBar()}/></button></nav>
        <div className={sideBar?"d-sm-block d-md-none sidebar active":"d-sm-block d-md-none sidebar"} id="mySidebar" >

          <a href="#" className="selected">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
    </>
  );
}
