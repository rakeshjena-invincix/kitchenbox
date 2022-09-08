import { Button } from "@mui/material";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AiFillStar } from "react-icons/ai";
import dishes1 from "../../assets/images/dishes-1.svg";
import dishes2 from "../../assets/images/dishes-2.svg";
import dishes3 from "../../assets/images/dishes-3.svg";
import cateringOrderBanner from "../../assets/images/Meal Subscription 1 (1).png";
import NonVeg from "../../assets/images/non-veg.png";
import veg from "../../assets/images/veg.png";
import Navbar from "../../components/AddRemoveInputField/Navbar";

import "../Home/Home.css";
const CateringOrder = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                src={cateringOrderBanner}
                className="w-100 d-none d-sm-block"
                alt="..."
              />
              <img
                src={cateringOrderBanner}
                className="d-block w-100 d-sm-none"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <h2 className="text-center" style={{ fontSize: "32px" }}>
              Catering Orders
            </h2>
            <hr />
          </div>
        </div>

        <div className="delicacies">
          <div className="container">
            <div className="row">
              <h2 className="text-center" style={{ fontSize: "32px" }}>
                Economy
              </h2>
              <hr />
            </div>
            <div className="row">
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
                      onClick={handleShow}
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
            </div>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

export default CateringOrder;
