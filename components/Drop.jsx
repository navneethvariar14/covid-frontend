const drops = [
  { droptitle: "Contacts", dropItems: ["Action", "Another", "Yet Another"] },
  { droptitle: "Emergency", dropItems: ["Action", "Another", "Yet Another"] },
  { droptitle: "More", dropItems: ["Action", "Another", "Yet Another"] },
];

<li class="nav-item dropdown">
  <a
    class="nav-link dropdown-toggle"
    href="#"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {drops.droptitle}
  </a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    {() => {
      return drops.dropItems.map((item) => (
        <>
          <li>
            <Link>
              <a className="dropdown-item">{item}</a>
            </Link>
          </li>
        </>
      ));
    }}
  </ul>
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
</li>;
