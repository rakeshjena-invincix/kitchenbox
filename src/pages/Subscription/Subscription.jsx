import React from "react";
import { AiOutlinePercentage, AiOutlineShoppingCart } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import card1 from "../../assets/images/Rectangle 35.png";
import card2 from "../../assets/images/Rectangle 36.png";
import card3 from "../../assets/images/Rectangle 37.png";
import card4 from "../../assets/images/Rectangle 38.png";
import card5 from "../../assets/images/Rectangle 39.png";
import card6 from "../../assets/images/Rectangle 40.png";
import addBtn from "../../assets/images/Vector.png";

const Subscription = () => {
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
            <div className="row">
              <h2 className="text-center" style={{ fontSize: "32px" }}>
                Meal Plans
              </h2>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard_1">
                  <img src={card1} alt="" className="card_img" />
                  <div className="card_text">
                    <h3>Veg Only</h3>
                    <p>
                      Weekly Starting from - ₹ 1000 <br /> Monthly Starting from
                      - ₹ 4000
                    </p>
                  </div>
                  <div className="AddBtn">
                    <Link to="#">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard_1">
                  <img src={card3} alt="" className="card_img" />
                  <div className="card_text">
                    <h3>Satvik (No Onion & Garlic)</h3>
                    <p>
                      Weekly Starting from - ₹ 1000 <br /> Monthly Starting from
                      - ₹ 4000
                    </p>
                  </div>
                  <div className="AddBtn">
                    <Link to="#">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard_1">
                  <img src={card2} alt="" className="card_img" />
                  <div className="card_text">
                    <h3>Veg & Non-Veg Combo</h3>
                    <p>
                      Weekly Starting from - ₹ 1200 <br /> Monthly Starting from
                      - ₹ 4800
                    </p>
                  </div>
                  <div className="AddBtn">
                    <Link to="#">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard_1">
                  <img src={card4} alt="" className="card_img" />
                  <div className="card_text">
                    <h3>Non-Veg Only</h3>
                    <p>
                      Weekly Starting from - ₹ 1400 <br /> Monthly Starting from
                      - ₹ 5600
                    </p>
                  </div>
                  <div className="AddBtn">
                    <Link to="#">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard_1">
                  <img src={card6} alt="" className="card_img" />
                  <div className="card_text">
                    <h3>Odisha Special</h3>
                    <p>
                      Weekly Starting from - ₹ 1100 <br /> Monthly Starting from
                      - ₹ 4400
                    </p>
                  </div>
                  <div className="AddBtn">
                    <Link to="#">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="offercard_1">
                  <img src={card5} alt="" className="card_img" />
                  <div className="card_text">
                    <h3>North Indian Special</h3>
                    <p>
                      Weekly Starting from - ₹ 1300 <br /> Monthly Starting from
                      - ₹ 5200
                    </p>
                  </div>
                  <div className="AddBtn">
                    <Link to="#">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </Link>
                  </div>
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
