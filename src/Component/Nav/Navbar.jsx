import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              {props.title}
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink to="/" className='nav-link'>Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="about" className='nav-link'>About Us</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="services" className='nav-link'>Services</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="contactUs" className='nav-link'>Contact</NavLink>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
