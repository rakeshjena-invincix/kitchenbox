import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import preorderBanner from "../../assets/images/Meal Subscription 3.png";
import card1 from "../../assets/images/Rectangle 121.png";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";

const PreOrder = () => {
  return (
    <>
      <Navbar />
      <section className="container" style={{ marginTop: "83px" }}>
        <Banner imgBanner={preorderBanner} />
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
                  <div className="card_text d-flex justify-content-between flex-column">
                    <div className="card-contain">
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        <StarIcon fontSize="3px" style={{ color: "#FFC727" }} />{" "}
                        4.7
                      </div>
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        60-80min
                      </div>
                    </div>

                    <div>
                      <h3>Crispy Masala Dosa</h3>
                      <p>
                        Dosa is a popular south indian thin <br /> crepe made
                        with fermented rice <br /> and lentil batter.
                      </p>
                    </div>
                    <div className="AddBtnd d-flex justify-content-between align-items-center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            lineHeight: "30px",
                            marginRight: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          ₹ 120
                        </h1>
                        <p
                          style={{
                            fontSize: "10px",
                            lineHeight: "15px",
                            marginBottom: "0px",
                          }}
                        >
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
                  <img src={card1} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between flex-column">
                    <div className="card-contain">
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        <StarIcon fontSize="3px" style={{ color: "#FFC727" }} />{" "}
                        4.7
                      </div>
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        60-80min
                      </div>
                    </div>

                    <div>
                      <h3>Crispy Masala Dosa</h3>
                      <p>
                        Dosa is a popular south indian thin <br /> crepe made
                        with fermented rice <br /> and lentil batter.
                      </p>
                    </div>
                    <div className="AddBtnd d-flex justify-content-between align-items-center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            lineHeight: "30px",
                            marginRight: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          ₹ 120
                        </h1>
                        <p
                          style={{
                            fontSize: "10px",
                            lineHeight: "15px",
                            marginBottom: "0px",
                          }}
                        >
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
                  <img src={card1} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between flex-column">
                    <div className="card-contain">
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        <StarIcon fontSize="3px" style={{ color: "#FFC727" }} />{" "}
                        4.7
                      </div>
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        60-80min
                      </div>
                    </div>

                    <div>
                      <h3>Crispy Masala Dosa</h3>
                      <p>
                        Dosa is a popular south indian thin <br /> crepe made
                        with fermented rice <br /> and lentil batter.
                      </p>
                    </div>
                    <div className="AddBtnd d-flex justify-content-between align-items-center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            lineHeight: "30px",
                            marginRight: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          ₹ 120
                        </h1>
                        <p
                          style={{
                            fontSize: "10px",
                            lineHeight: "15px",
                            marginBottom: "0px",
                          }}
                        >
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
                  <img src={card1} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between flex-column">
                    <div className="card-contain">
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        <StarIcon fontSize="3px" style={{ color: "#FFC727" }} />{" "}
                        4.7
                      </div>
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        60-80min
                      </div>
                    </div>

                    <div>
                      <h3>Crispy Masala Dosa</h3>
                      <p>
                        Dosa is a popular south indian thin <br /> crepe made
                        with fermented rice <br /> and lentil batter.
                      </p>
                    </div>
                    <div className="AddBtnd d-flex justify-content-between align-items-center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            lineHeight: "30px",
                            marginRight: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          ₹ 120
                        </h1>
                        <p
                          style={{
                            fontSize: "10px",
                            lineHeight: "15px",
                            marginBottom: "0px",
                          }}
                        >
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
                  <img src={card1} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between flex-column">
                    <div className="card-contain">
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        <StarIcon fontSize="3px" style={{ color: "#FFC727" }} />{" "}
                        4.7
                      </div>
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        60-80min
                      </div>
                    </div>

                    <div>
                      <h3>Crispy Masala Dosa</h3>
                      <p>
                        Dosa is a popular south indian thin <br /> crepe made
                        with fermented rice <br /> and lentil batter.
                      </p>
                    </div>
                    <div className="AddBtnd d-flex justify-content-between align-items-center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            lineHeight: "30px",
                            marginRight: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          ₹ 120
                        </h1>
                        <p
                          style={{
                            fontSize: "10px",
                            lineHeight: "15px",
                            marginBottom: "0px",
                          }}
                        >
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
                  <img src={card1} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between flex-column">
                    <div className="card-contain">
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        <StarIcon fontSize="3px" style={{ color: "#FFC727" }} />{" "}
                        4.7
                      </div>
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        60-80min
                      </div>
                    </div>

                    <div>
                      <h3>Crispy Masala Dosa</h3>
                      <p>
                        Dosa is a popular south indian thin <br /> crepe made
                        with fermented rice <br /> and lentil batter.
                      </p>
                    </div>
                    <div className="AddBtnd d-flex justify-content-between align-items-center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            lineHeight: "30px",
                            marginRight: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          ₹ 120
                        </h1>
                        <p
                          style={{
                            fontSize: "10px",
                            lineHeight: "15px",
                            marginBottom: "0px",
                          }}
                        >
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
                  <img src={card1} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between flex-column">
                    <div className="card-contain">
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        <StarIcon fontSize="3px" style={{ color: "#FFC727" }} />{" "}
                        4.7
                      </div>
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        60-80min
                      </div>
                    </div>

                    <div>
                      <h3>Crispy Masala Dosa</h3>
                      <p>
                        Dosa is a popular south indian thin <br /> crepe made
                        with fermented rice <br /> and lentil batter.
                      </p>
                    </div>
                    <div className="AddBtnd d-flex justify-content-between align-items-center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            lineHeight: "30px",
                            marginRight: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          ₹ 120
                        </h1>
                        <p
                          style={{
                            fontSize: "10px",
                            lineHeight: "15px",
                            marginBottom: "0px",
                          }}
                        >
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
                  <img src={card1} alt="" className="card_img" />
                  <div className="card_text d-flex justify-content-between flex-column">
                    <div className="card-contain">
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        <StarIcon fontSize="3px" style={{ color: "#FFC727" }} />{" "}
                        4.7
                      </div>
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        60-80min
                      </div>
                    </div>

                    <div>
                      <h3>Crispy Masala Dosa</h3>
                      <p>
                        Dosa is a popular south indian thin <br /> crepe made
                        with fermented rice <br /> and lentil batter.
                      </p>
                    </div>
                    <div className="AddBtnd d-flex justify-content-between align-items-center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            lineHeight: "30px",
                            marginRight: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          ₹ 120
                        </h1>
                        <p
                          style={{
                            fontSize: "10px",
                            lineHeight: "15px",
                            marginBottom: "0px",
                          }}
                        >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PreOrder;
