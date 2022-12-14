/* eslint-disable jsx-a11y/anchor-is-valid */
import { Percent } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";
import account from "../assets/images/Vector (1).png";
import cart from "../assets/images/Vector (2).png";
import "../pages/Home/Home.css";

const Navbar = () => {
  return (
    <>
      <section className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              {/* <img
                style={{ width: "35px", position: "", top: "" }}
                src={logo}
                alt=""
              /> */}
              <p
                style={{
                  fontFamily: "Qanelas Soft",
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "40px",
                  lineHeight: "20px",
                }}
              >
                <span
                  style={{
                    color: "#FFC727",
                  }}
                >
                  Kitchen
                </span>{" "}
                Box
              </p>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
                outline: "none",
                background: "transparent",
                border: "none",
              }}
            >
              <MenuIcon />
              {/* <span className="navbar-toggler-icon"></span> */}
            </button>
            <div
              className="collapse navbar-collapse"
              style={{ justifyContent: "flex-end" }}
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link className="nav-link " aria-current="page" to="/">
                  <Percent /> Offers
                </Link>
                <Link to="/" className="nav-link">
                  <span className="fw-bold">KB</span> Kitchen Box
                </Link>
              </div>
              <div className="navbar-nav">
                <Link to="/" className="nav-link">
                  <img src={account} alt="" /> Account
                </Link>

                <Link to="/billing" className="nav-link">
                  <img src={cart} alt="" /> Cart
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
