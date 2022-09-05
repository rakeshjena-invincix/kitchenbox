import React from "react";
import { AiOutlinePercentage, AiOutlineShoppingCart } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import card1 from "../../assets/images/card1.svg";
import card2 from "../../assets/images/card2.svg";
import card3 from "../../assets/images/card3.svg";
import card4 from "../../assets/images/card4.svg";
import logo from "../../assets/images/logo.png";

const Subscription = () => {
  return (
    <>
      <section className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                style={{ width: "40px", position: "", top: "" }}
                src={logo}
                alt=""
              />
            </a>
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
                <a className="nav-link" href="menu.html">
                  <IoFastFoodOutline /> Kitchen Box
                </a>
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
      <section className="container" style={{ marginTop: "83px" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active subscriptionBanner"></div>
          </div>
        </div>

        <div className="food-banner">
          <div className="container">
            <div className="row g-2">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard1">
                  <img src={card1} alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard1">
                  <img src={card2} alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard1">
                  <img src={card3} alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard1">
                  <img src={card4} alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard1">
                  <img src={card4} alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard1">
                  <img src={card4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
