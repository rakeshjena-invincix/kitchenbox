import React from "react";
import cateringOrderBanner from "../../assets/images/Meal Subscription 1 (1).png";
import Navbar from "../../components/AddRemoveInputField/Navbar";

const CateringOrder = () => {
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
      </section>
    </>
  );
};

export default CateringOrder;
