import React from "react";
import { Link } from "react-router-dom";
import subscriptionBanner from "../../assets/images/Meal Subscription 1.png";
import card1 from "../../assets/images/Rectangle 35.png";
import card2 from "../../assets/images/Rectangle 36.png";
import card3 from "../../assets/images/Rectangle 37.png";
import card4 from "../../assets/images/Rectangle 38.png";
import card5 from "../../assets/images/Rectangle 39.png";
import card6 from "../../assets/images/Rectangle 40.png";
import addBtn from "../../assets/images/Vector.png";
import { Banner } from "../../components/Banner";
import Navbar from "../../components/Navbar";
const Subscription = () => {
  return (
    <>
      <Navbar />
      <section className="container" style={{ marginTop: "83px" }}>
        <Banner imgBanner={subscriptionBanner} />

        <div className="food-banner">
          <div className="container">
            <h2 className="text-center" style={{ fontSize: "32px" }}>
              Meal Plans
            </h2>
            <hr />
            <div className="row g-2">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <Link to="/subscription-plan">
                  <div className="offercard_1">
                    <img src={card1} alt="" className="card_img" />
                    <div className="card_text d-flex justify-content-between align-items-center">
                      <div>
                        <h3>Veg Only</h3>
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
              <div className="col-md-4 col-sm-6 col-xs-12">
                <Link to="/subscription-plan">
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
              <div className="col-md-4 col-sm-6 col-xs-12">
                <Link to="/subscription-plan">
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
              <div className="col-md-4 col-sm-6 col-xs-12">
                <Link to="/subscription-plan">
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
              <div className="col-md-4 col-sm-6 col-xs-12">
                <Link to="/subscription-plan">
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
              <div className="col-md-4 col-sm-6 col-xs-12">
                <Link to="/subscription-plan">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
