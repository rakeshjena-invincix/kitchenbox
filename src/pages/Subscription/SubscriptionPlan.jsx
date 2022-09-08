import { CalendarMonth } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import subscriptionBanner from "../../assets/images/Meal Subscription 1.png";
import card1 from "../../assets/images/Rectangle 73.png";
import card2 from "../../assets/images/Rectangle 76.png";
import Navbar from "../../components/Navbar";
import { Banner } from "./../../components/Banner";
import "./../Home/Home.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#FFC727",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SubscriptionPlan = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar />
      <section className="container" style={{ marginTop: "83px" }}>
        <Banner imgBanner={subscriptionBanner} />

        <h6 className="text-center mt-3 ">Veg Only</h6>
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-sm-12 col-md-6">
            <div>
              <p className="fw-bold pt-3">Meals</p>
            </div>
            <div>
              <Accordion>
                <AccordionSummary
                  sx={{
                    backgroundColor: "#FFC727",
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <CalendarMonth /> Monday
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="d-flex justify-content-start align-items-center">
                    <div style={{ position: "relative" }}>
                      <img src={card2} style={{ width: "150px" }} />
                      <div className="bottom_text">
                        <p>Lunch</p>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="ms-3"
                        style={{
                          fontWeight: "400",
                          fontSize: "20px",
                          LineHeight: "30px",
                        }}
                      >
                        Mix Veg, Dal, Roti, Rice, Papad
                      </h4>
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "14px",
                          LineHeight: "20px",
                        }}
                      >
                        Mix Veg - 100g,Dal - 100g,Pickle - 10g <br />
                        Roti - 2pcs,Rice - 150g,Papad - 2pcs
                      </p>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <CalendarMonth /> Tuesday
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="d-flex justify-content-start align-items-center">
                    <div style={{ position: "relative" }}>
                      <img src={card1} style={{ width: "150px" }} />
                      <div className="bottom_text">
                        <p>Dinner</p>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="ms-3"
                        style={{
                          fontWeight: "400",
                          fontSize: "20px",
                          LineHeight: "30px",
                        }}
                      >
                        Mix Veg, Dal, Roti, Rice, Papad
                      </h4>
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "14px",
                          LineHeight: "20px",
                        }}
                      >
                        Mix Veg - 100g,Dal - 100g,Pickle - 10g <br />
                        Roti - 2pcs,Rice - 150g,Papad - 2pcs
                      </p>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <CalendarMonth /> Wednesday
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="d-flex justify-content-start align-items-center">
                    <div style={{ position: "relative" }}>
                      <img src={card2} style={{ width: "150px" }} />
                      <div className="bottom_text">
                        <p>Lunch</p>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="ms-3"
                        style={{
                          fontWeight: "400",
                          fontSize: "20px",
                          LineHeight: "30px",
                        }}
                      >
                        Mix Veg, Dal, Roti, Rice, Papad
                      </h4>
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "14px",
                          LineHeight: "20px",
                        }}
                      >
                        Mix Veg - 100g,Dal - 100g,Pickle - 10g <br />
                        Roti - 2pcs,Rice - 150g,Papad - 2pcs
                      </p>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <CalendarMonth /> Thursday
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="d-flex justify-content-start align-items-center">
                    <div style={{ position: "relative" }}>
                      <img src={card1} style={{ width: "150px" }} />
                      <div className="bottom_text">
                        <p>Dinner</p>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="ms-3"
                        style={{
                          fontWeight: "400",
                          fontSize: "20px",
                          LineHeight: "30px",
                        }}
                      >
                        Mix Veg, Dal, Roti, Rice, Papad
                      </h4>
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "14px",
                          LineHeight: "20px",
                        }}
                      >
                        Mix Veg - 100g,Dal - 100g,Pickle - 10g <br />
                        Roti - 2pcs,Rice - 150g,Papad - 2pcs
                      </p>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <CalendarMonth /> Friday
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="d-flex justify-content-start align-items-center">
                    <div style={{ position: "relative" }}>
                      <img src={card2} style={{ width: "150px" }} />
                      <div className="bottom_text">
                        <p>Lunch</p>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="ms-3"
                        style={{
                          fontWeight: "400",
                          fontSize: "20px",
                          LineHeight: "30px",
                        }}
                      >
                        Mix Veg, Dal, Roti, Rice, Papad
                      </h4>
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "14px",
                          LineHeight: "20px",
                        }}
                      >
                        Mix Veg - 100g,Dal - 100g,Pickle - 10g <br />
                        Roti - 2pcs,Rice - 150g,Papad - 2pcs
                      </p>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <CalendarMonth /> Saturday
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="d-flex justify-content-start align-items-center">
                    <div style={{ position: "relative" }}>
                      <img src={card1} style={{ width: "150px" }} />
                      <div className="bottom_text">
                        <p>Dinner</p>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="ms-3"
                        style={{
                          fontWeight: "400",
                          fontSize: "20px",
                          LineHeight: "30px",
                        }}
                      >
                        Mix Veg, Dal, Roti, Rice, Papad
                      </h4>
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "14px",
                          LineHeight: "20px",
                        }}
                      >
                        Mix Veg - 100g,Dal - 100g,Pickle - 10g <br />
                        Roti - 2pcs,Rice - 150g,Papad - 2pcs
                      </p>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <CalendarMonth /> Sunday
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="d-flex justify-content-start align-items-center">
                    <div style={{ position: "relative" }}>
                      <img src={card2} style={{ width: "150px" }} />
                      <div className="bottom_text">
                        <p>Lunch</p>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="ms-3"
                        style={{
                          fontWeight: "400",
                          fontSize: "20px",
                          LineHeight: "30px",
                        }}
                      >
                        Mix Veg, Dal, Roti, Rice, Papad
                      </h4>
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "14px",
                          LineHeight: "20px",
                        }}
                      >
                        Mix Veg - 100g,Dal - 100g,Pickle - 10g <br />
                        Roti - 2pcs,Rice - 150g,Papad - 2pcs
                      </p>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div>
              <p className="fw-bold pt-3">Customization</p>
            </div>
            <div className="mb-3 mt-3">
              <p className="">Select Days:</p>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <Item className="px-5 fw-bold">Weekly</Item>
                <Item className="px-5 fw-bold">Monthly</Item>
              </Stack>
            </div>
            <Divider />
            <div className="mb-3 mt-3">
              <p className="">Meal Preference:</p>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <Item className="px-5 fw-bold">Lunch</Item>
                <Item className="px-5 fw-bold">Dinner</Item>
                <Item className="px-5 fw-bold">Both</Item>
              </Stack>
            </div>
            <Divider />
            <div className="mb-3 mt-3">
              <p className="">Budget:</p>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <Item className="px-5 fw-bold">Economy</Item>
                <Item className="px-5 fw-bold">Medium</Item>
                <Item className="px-5 fw-bold">Premium</Item>
              </Stack>
            </div>
            <Divider />
            <div className="d-flex justify-content-between ">
              <span className="mb-3 mt-3 text-start ">Sub Total:</span>
              <span className="mb-3 mt-3  text-end fw-bold">&#8377; 4800</span>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                variant="contained"
                size="large"
                style={{
                  color: "black",
                  width: "200px",
                  backgroundColor: "#FFC727",
                }}
                onClick={handleShow}
              >
                NEXT
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <p className="">Meals:</p>

              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SubscriptionPlan;
