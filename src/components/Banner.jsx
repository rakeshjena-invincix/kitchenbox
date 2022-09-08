import React from "react";

const Banner = ({ imgBanner }) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={imgBanner}
              className="w-100 d-none d-sm-block"
              alt="..."
            />
            <img
              src={imgBanner}
              className="d-block w-100 d-sm-none"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
