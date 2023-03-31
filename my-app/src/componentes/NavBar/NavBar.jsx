import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
      <a class="navbar-brand" href="#">
        Squishy Penguins
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Remeras
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Accesorios
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Gorras
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
              Stickers
            </a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
