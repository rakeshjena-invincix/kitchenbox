import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { AiOutlinePercentage, AiOutlineShoppingCart } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./../Home/Home.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#FFC727",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SubscriptionPlan = () => {
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
        <h6 className="text-center mt-3 mb-3">Veg Only</h6>
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-6">
            <div>
              <p className="fw-bold">Meals</p>
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
                  <Typography>Monday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Tuesday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Wednesday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Thursday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Friday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Saturday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Sunday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="col-6">
            <div>
              <p className="fw-bold">Customization</p>
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
                  // marginTop: "5px",
                  color: "black",
                  width: "200px",
                  backgroundColor: "#FFC727",
                  // borderRadius: "50px",
                }}
              >
                NEXT
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscriptionPlan;
