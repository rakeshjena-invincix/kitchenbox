/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import logo from "../../assets/images/logo.png";

import { AiOutlinePercentage, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./../../pages/Home/Home.css";
const Navbar = () => {
  return (
    <>
      <section className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                style={{ width: "40px", position: "", top: "" }}
                src={logo}
                alt=""
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              style={{ justifyContent: "flex-end" }}
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link " aria-current="page" href="#">
                  <AiOutlinePercentage /> Offers
                </a>
                <Link to="/subscription" className="nav-link" href="menu.html">
                  <IoFastFoodOutline /> Kitchen Box
                </Link>
              </div>
              <div className="navbar-nav">
                <Link to="/" className="nav-link">
                  <MdOutlineAccountCircle /> Account
                </Link>

                <Link to="/billing" className="nav-link">
                  <AiOutlineShoppingCart /> Cart
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
      ;
    </>
  );
};

export default Navbar;
