import React from "react";
import preorderBanner from "../../assets/images/Meal Subscription 3.png";
import Navbar from "../../components/AddRemoveInputField/Navbar";
import { Link } from "react-router-dom";
import addBtn from "../../assets/images/Vector.png";
import card1 from "../../assets/images/Rectangle 35.png";
import card2 from "../../assets/images/Rectangle 36.png";
import card3 from "../../assets/images/Rectangle 37.png";
import card4 from "../../assets/images/Rectangle 38.png";
import card5 from "../../assets/images/Rectangle 39.png";
import card6 from "../../assets/images/Rectangle 40.png";
import Button from "@mui/material/Button";

const PreOrder = () => {
  return (
    <>
      <Navbar />
      <section className="container" style={{ marginTop: "83px" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={preorderBanner}
                className="w-100 d-none d-sm-block"
                alt="..."
              />
              <img
                src={preorderBanner}
                className="d-block w-100 d-sm-none"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
      <div className="food-banner">
        <div className="container">
          <h2 className="text-center" style={{ fontSize: "32px" }}>
            Pre-Order
          </h2>
          <hr />
          <div className="row g-2">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <Link to="/">
                <div className="offercard_1">
                  <img src={card1} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between align-items-center flex-column">
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <p>4.7</p>
                      <p>60-80 min</p>
                    </div>
                    <div>
                      <h3>Crispy Masala Dosa</h3>
                      <p>
                        Dosa is a popular south indian thin <br /> crepe made
                        with fermented rice <br /> and lentil batter.
                      </p>
                    </div>
                    <div className="AddBtnd d-flex justify-content-between align-items-center">
                      <h1
                        style={{
                          fontSize: "20px",
                          lineHeight: "30px",
                          marginRight: "17px",
                        }}
                      >
                        ₹ 120
                      </h1>
                      <div className="d-flex">
                        <p style={{ fontSize: "10px", lineHeight: "15px" }}>
                          Customizable
                        </p>
                        <Button
                          variant="contained"
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
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <Link to="/">
                <div className="offercard_1">
                  <img src={card3} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between align-items-center">
                    <div>
                      <h3>Satvik (No Onion & Garlic)</h3>
                      <p>
                        Weekly Starting from - ₹ 1000 <br /> Monthly Starting
                        from - ₹ 4000
                      </p>
                    </div>
                    <div className="AddBtn">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <Link to="/">
                <div className="offercard_1">
                  <img src={card2} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between align-items-center">
                    <div>
                      <h3>Veg & Non-Veg Combo</h3>
                      <p>
                        Weekly Starting from - ₹ 1200 <br /> Monthly Starting
                        from - ₹ 4800
                      </p>
                    </div>
                    <div className="AddBtn">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <Link to="/">
                <div className="offercard_1">
                  <img src={card4} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between align-items-center">
                    <div>
                      <h3>Non-Veg Only</h3>
                      <p>
                        Weekly Starting from - ₹ 1400 <br /> Monthly Starting
                        from - ₹ 5600
                      </p>
                    </div>
                    <div className="AddBtn">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <Link to="/">
                <div className="offercard_1">
                  <img src={card6} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between align-items-center">
                    <div>
                      <h3>Odisha Special</h3>
                      <p>
                        Weekly Starting from - ₹ 1100 <br /> Monthly Starting
                        from - ₹ 4400
                      </p>
                    </div>
                    <div className="AddBtn">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <Link to="/">
                <div className="offercard_1">
                  <img src={card5} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between align-items-center">
                    <div>
                      <h3>North Indian Special</h3>
                      <p>
                        Weekly Starting from - ₹ 1300 <br /> Monthly Starting
                        from - ₹ 5200
                      </p>
                    </div>
                    <div className="AddBtn">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <Link to="/">
                <div className="offercard_1">
                  <img src={card5} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between align-items-center">
                    <div>
                      <h3>North Indian Special</h3>
                      <p>
                        Weekly Starting from - ₹ 1300 <br /> Monthly Starting
                        from - ₹ 5200
                      </p>
                    </div>
                    <div className="AddBtn">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <Link to="/">
                <div className="offercard_1" style={{}}>
                  <img src={card5} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between align-items-center">
                    <div>
                      <h3>North Indian Special</h3>
                      <p>
                        Weekly Starting from - ₹ 1300 <br /> Monthly Starting
                        from - ₹ 5200
                      </p>
                    </div>
                    <div className="AddBtn">
                      <img
                        style={{ width: "26.67px", height: "18.67px" }}
                        src={addBtn}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreOrder;
