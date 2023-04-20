import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../Images/Squishypenguinstitle.png";
import logoimg from "../Images/Buypenguin.png";
import { NavLink } from "react-router-dom";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import useFetch from "../../utils/useFetch";
const BASE_URL = "https://fakestoreapi.com/products/categories";

const NavBar = (props) => {
  const [data] = useFetch(BASE_URL);

  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo"></img>
        <img className="logoimg" src={logoimg} alt="logo"></img>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active " id="navbarNavAltMarkup">
            <ListOptionNavBarComponent
              nameOption={data}
            ></ListOptionNavBarComponent>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
