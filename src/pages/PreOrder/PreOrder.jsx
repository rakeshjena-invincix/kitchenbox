import React from "react";
import preorderBanner from "../../assets/images/Meal Subscription 3.png";
import Navbar from "../../components/AddRemoveInputField/Navbar";

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
    </>
  );
};

export default PreOrder;
