/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import card1 from "../../assets/images/card1.svg";
import card2 from "../../assets/images/card2.svg";
import card3 from "../../assets/images/card3.svg";
import card4 from "../../assets/images/card4.svg";
import dishes1 from "../../assets/images/dishes-1.svg";
import dishes2 from "../../assets/images/dishes-2.svg";
import dishes3 from "../../assets/images/dishes-3.svg";
import logo from "../../assets/images/logo.png";
import menuImage from "../../assets/images/menu-img.svg";
import NonVeg from "../../assets/images/non-veg.png";
import order1 from "../../assets/images/order-1.svg";
import order2 from "../../assets/images/order-2.svg";
import order3 from "../../assets/images/order-3.svg";
import order4 from "../../assets/images/order-4.svg";
import {
  default as todayspecial1,
  default as topselling1,
} from "../../assets/images/top-selling-1.svg";
import {
  default as todayspecial2,
  default as topselling2,
} from "../../assets/images/top-selling-2.svg";
import {
  default as todayspecial3,
  default as topselling3,
} from "../../assets/images/top-selling-3.svg";
import topselling4 from "../../assets/images/top-selling-4.svg";
import topselling5 from "../../assets/images/top-selling-5.svg";
import veg from "../../assets/images/veg.png";

import { Button } from "@mui/material";
import {
  AiFillStar,
  AiOutlinePercentage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "../Login/MyVerticallyCenteredModal";
import "./Home.css";
const HomePage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    setModalShow(true);
  }, []);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
      <section style={{ marginTop: "83px" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active eventBannerContainer">
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
                style={{ width: "50%", margin: "0px auto" }}
              />
            </div>
          </div>
        </div>

        <div className="food-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="offercard1">
                  <img src={card1} alt="" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="offercard1">
                  <img src={card2} alt="" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="offercard1">
                  <img src={card3} alt="" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="offercard1">
                  <img src={card4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-selling">
          <div className="container">
            <h2>Top Selling/Trending Items</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-5">
              <div className="col">
                <div className="top-selling">
                  <img src={topselling1} alt="" />
                  <h5>Satvik Veg Thali</h5>
                </div>
              </div>
              <div className="col">
                <div className="top-selling">
                  <img src={topselling2} alt="" />
                  <h5>Dum Handi Biryani</h5>
                </div>
              </div>
              <div className="col">
                <div className="top-selling">
                  <img src={topselling3} alt="" />
                  <h5>Paneer Butter Masala</h5>
                </div>
              </div>
              <div className="col">
                <div className="top-selling">
                  <img src={topselling4} alt="" />
                  <h5>Satvik Veg Thali</h5>
                </div>
              </div>
              <div className="col">
                <div className="top-selling">
                  <img src={topselling5} alt="" />
                  <h5>Dum Handi Biryani</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="allorder">
          <div className="container">
            {/* <h2>Our offerings</h2> */}
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="allorder-1">
                  <img src={order1} alt="" />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="allorder-1">
                  <img src={order2} alt="" />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="allorder-1">
                  <img src={order3} alt="" />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="allorder-1">
                  <img src={order4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="today-special">
          <div className="container">
            <h3>Today’s Special</h3>
            <div className="row">
              <div className="col-md-2">
                <img src={todayspecial1} alt="" />
                <h5>Satvik Veg Thali</h5>
              </div>
              <div className="col-md-2">
                <img src={todayspecial2} alt="" />
                <h5>Dum Handi Biryani</h5>
              </div>
              <div className="col-md-2">
                <img src={todayspecial3} alt="" />
                <h5>Paneer Butter Masala</h5>
              </div>
              <div className="col-md-2">
                <img src={todayspecial1} alt="" />
                <h5>Satvik Veg Thali</h5>
              </div>
              <div className="col-md-2">
                <img src={todayspecial2} alt="" />
                <h5>Dum Handi Biryani</h5>
              </div>
              <div className="col-md-2">
                <img src={todayspecial3} alt="" />
                <h5>Paneer Butter Masala</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="delicacies">
          <div className="container">
            <div className="row">
              <h2>Delicacies</h2>
              <div className="col-md-3">
                <div className="delicacies-dishes">
                  <img src={dishes1} alt="" />
                  <h4>Dum Handi Biryani</h4>

                  <div className="rating">
                    <div style={{ width: "10px" }}>
                      <img src={NonVeg} alt="" />
                    </div>

                    <div className="starrate">
                      <div style={{ width: "10px" }}>
                        {/* <img src={veg} alt="" /> */}
                        <AiFillStar
                          style={{
                            color: "black",
                          }}
                        />
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          margin: "0",
                        }}
                        className="mx-2"
                      >
                        4.7
                      </p>
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      20-25 min
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      Customizable
                    </p>
                  </div>
                  <div className="price">
                    <p>₹ 250</p>

                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        marginTop: "5px",
                        backgroundColor: "#FFC727",
                        borderRadius: "50px",
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="delicacies-dishes">
                  <img src={dishes3} alt="" />
                  <h4>Paneer Butter</h4>

                  <div className="rating">
                    <div style={{ width: "10px" }}>
                      <img src={veg} alt="" />
                    </div>

                    <div className="starrate">
                      <div style={{ width: "10px" }}>
                        {/* <img src={veg} alt="" /> */}
                        <AiFillStar />
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          margin: "0",
                        }}
                        className="mx-2"
                      >
                        4.7
                      </p>
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      20-25 min
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      Customizable
                    </p>
                  </div>
                  <div className="price">
                    <p>₹ 150</p>

                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        marginTop: "5px",
                        backgroundColor: "#FFC727",
                        borderRadius: "50px",
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="delicacies-dishes">
                  <img src={dishes2} alt="" />
                  <h4>Satvik Veg Thali</h4>

                  <div className="rating">
                    <div style={{ width: "10px" }}>
                      <img src={veg} alt="" />
                    </div>

                    <div className="starrate">
                      <div style={{ width: "10px" }}>
                        {/* <img src={veg} alt="" /> */}
                        <AiFillStar />
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          margin: "0",
                        }}
                        className="mx-2"
                      >
                        4.7
                      </p>
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      20-25 min
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      Customizable
                    </p>
                  </div>
                  <div className="price">
                    <p>₹ 200</p>

                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        marginTop: "5px",
                        backgroundColor: "#FFC727",
                        borderRadius: "50px",
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="delicacies-dishes">
                  <img src={dishes1} alt="" />
                  <h4>Dum Handi Biryani</h4>

                  <div className="rating">
                    <div style={{ width: "10px" }}>
                      <img src={NonVeg} alt="" />
                    </div>

                    <div className="starrate">
                      <div style={{ width: "10px" }}>
                        {/* <img src={veg} alt="" /> */}
                        <AiFillStar />
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          margin: "0",
                        }}
                        className="mx-2"
                      >
                        4.7
                      </p>
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      20-25 min
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      Customizable
                    </p>
                  </div>
                  <div className="price">
                    <p>₹ 250</p>

                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        marginTop: "5px",
                        backgroundColor: "#FFC727",
                        borderRadius: "50px",
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="delicacies-dishes">
                  <img src={dishes3} alt="" />
                  <h4>Paneer Butter</h4>

                  <div className="rating">
                    <div style={{ width: "10px" }}>
                      <img src={veg} alt="" />
                    </div>

                    <div className="starrate">
                      <div style={{ width: "10px" }}>
                        {/* <img src={veg} alt="" /> */}
                        <AiFillStar />
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          margin: "0",
                        }}
                        className="mx-2"
                      >
                        4.7
                      </p>
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      20-25 min
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      Customizable
                    </p>
                  </div>
                  <div className="price">
                    <p>₹ 150</p>

                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        marginTop: "5px",
                        backgroundColor: "#FFC727",
                        borderRadius: "50px",
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="delicacies-dishes">
                  <img src={dishes2} alt="" />
                  <h4>Satvik Veg Thali</h4>

                  <div className="rating">
                    <div style={{ width: "10px" }}>
                      <img src={veg} alt="" />
                    </div>

                    <div className="starrate">
                      <div style={{ width: "10px" }}>
                        {/* <img src={veg} alt="" /> */}
                        <AiFillStar />
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          margin: "0",
                        }}
                        className="mx-2"
                      >
                        4.7
                      </p>
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      20-25 min
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      Customizable
                    </p>
                  </div>
                  <div className="price">
                    <p>₹ 200</p>

                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        marginTop: "5px",
                        backgroundColor: "#FFC727",
                        borderRadius: "50px",
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="delicacies-dishes">
                  <img src={dishes1} alt="" />
                  <h4>Dum Handi Biryani</h4>

                  <div className="rating">
                    <div style={{ width: "10px" }}>
                      <img src={NonVeg} alt="" />
                    </div>

                    <div className="starrate">
                      <div style={{ width: "10px" }}>
                        {/* <img src={veg} alt="" /> */}
                        <AiFillStar />
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          margin: "0",
                        }}
                        className="mx-2"
                      >
                        4.7
                      </p>
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      20-25 min
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      Customizable
                    </p>
                  </div>
                  <div className="price">
                    <p>₹ 250</p>

                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        marginTop: "5px",
                        backgroundColor: "#FFC727",
                        borderRadius: "50px",
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="delicacies-dishes">
                  <img src={dishes3} alt="" />
                  <h4>Paneer Butter</h4>

                  <div className="rating">
                    <div style={{ width: "10px" }}>
                      <img src={veg} alt="" />
                    </div>

                    <div className="starrate">
                      <div style={{ width: "10px" }}>
                        {/* <img src={veg} alt="" /> */}
                        <AiFillStar />
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          margin: "0",
                        }}
                        className="mx-2"
                      >
                        4.7
                      </p>
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      20-25 min
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "500" }}>
                      Customizable
                    </p>
                  </div>
                  <div className="price">
                    <p>₹ 150</p>

                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        marginTop: "5px",
                        backgroundColor: "#FFC727",
                        borderRadius: "50px",
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    marginTop: "5px",
                    backgroundColor: "#FFC727",
                    // borderRadius: "50px",
                  }}
                >
                  See All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="d-flex justify-content-center mb-5">
            <img className="img-fluid" src={menuImage} alt="menuImage" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
