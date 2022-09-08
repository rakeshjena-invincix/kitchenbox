import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import AddRemoveInputField from "../../components/AddRemoveInputField";
import "./billing.css";
const Billing = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handlePrice = (value, event) => {
    console.log(value, event);
    setItems(value);
  };
  useEffect(() => {
    let total = 0;
    const totalValue = items.map(
      (val) => (total += val.item_price * val.quantity)
    );
    setTotalPrice(total);
  }, [items]);

  return (
    <>
      <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header bg-transparent header-elements-inline">
                <div
                  className="col-md-6 col-sm-12 d-flex"
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Link to="/">
                    <img
                      src={logo}
                      width="100px"
                      alt="logo"
                      style={{
                        filter: "drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.25))",
                      }}
                    />
                  </Link>
                  <h6
                    className="card-title mx-1"
                    style={{
                      fontFamily: "Qanelas Soft",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: "40px",
                      lineHeight: "50px",
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    {" "}
                    Billing
                  </h6>
                </div>

                <div className="header-elements ">
                  <h4
                    className="invoice-color mb-2 mt-md-2"
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "30px",

                      textAlign: "end",

                      textTransform: "uppercase",
                    }}
                  >
                    ORder id : #{Math.floor(Math.random() * 1000 + 1)}
                  </h4>
                  <ul className="list list-unstyled mb-0">
                    <li
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "22px",
                        color: "rgba(0, 0, 0, 0.8)",
                        textAlign: "end",

                        textTransform: "uppercase",
                      }}
                    >
                      Date:{" "}
                      <span className="font-weight-semibold">
                        {new Date().toLocaleString()}
                      </span>
                    </li>
                    <li
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "22px",
                        color: "rgba(0, 0, 0, 0.8)",
                        textAlign: "end",

                        textTransform: "uppercase",
                      }}
                    >
                      City:{" "}
                      <span className="font-weight-semibold">Bangalore</span>
                    </li>
                    <li
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "22px",
                        color: "rgba(0, 0, 0, 0.8)",
                        textAlign: "end",
                        textTransform: "uppercase",
                      }}
                    >
                      Phone:{" "}
                      <span className="font-weight-semibold">
                        +91-8904463331
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-body">
                <div className="row d-flex justify-content-between">
                  <div className="col-md-6">
                    <div className="mb-4 pull-left text-start">
                      {/* <Link to="/">
                        <img src={logo} width="40%" alt="logo" />
                      </Link> */}
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "32px",
                          lineHeight: "48px",
                        }}
                      >
                        Customer Information
                      </p>
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        Enter the details of the customer
                      </p>
                      <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField
                          id="outlined-basic"
                          label="Enter Customer Mobile Number"
                          variant="outlined"
                        />
                      </FormControl>
                      <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField
                          id="outlined-basic"
                          label="Enter Name"
                          variant="outlined"
                        />
                      </FormControl>
                      <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField
                          id="outlined-basic"
                          label="Enter Address"
                          variant="outlined"
                        />
                      </FormControl>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-4 ">
                      <div className="text-sm-right text-start">
                        {/* <h4 className="invoice-color mb-2 mt-md-2">
                          Order #{Math.floor(Math.random() * 1000 + 1)}
                        </h4>
                        <ul className="list list-unstyled mb-0">
                          <li>
                            Date:{" "}
                            <span className="font-weight-semibold">
                              {new Date().toLocaleString()}
                            </span>
                          </li>
                          <li>
                            City:{" "}
                            <span className="font-weight-semibold">
                              Bangalore
                            </span>
                          </li>
                          <li>
                            Phone:{" "}
                            <span className="font-weight-semibold">
                              +91-8904463331
                            </span>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                {/* <table className="table table-lg">
                  <tbody>
                    <tr>
                      <td> */}
                <div className="px-3 text-start">
                  {/* <Link to="/">
                        <img src={logo} width="40%" alt="logo" />
                      </Link> */}
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "32px",
                      lineHeight: "48px",
                    }}
                  >
                    Item Details
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    Enter the Item Details
                  </p>
                </div>
                <AddRemoveInputField handlePrice={handlePrice} />
                {/* </td>
                    </tr>
                  </tbody>
                </table> */}
              </div>

              <div className="card-body d-flex justify-content-between row">
                <div className="d-md-flex col-sm-6">
                  <div className="pt-2 mb-3 wmin-md-400 ml-auto text-start">
                    {/* <h6 className="mb-3 text-left">Item Total</h6> */}
                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "32px",
                        lineHeight: "48px",
                      }}
                    >
                      Bill Details
                    </p>
                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      Overview of the bill to be generated
                    </p>
                    <div className="table-responsive">
                      <table className="table">
                        <>
                          <tr>
                            <th
                              className="text-start"
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "rgba(0, 0, 0, 0.6)",
                              }}
                            >
                              Item Total
                            </th>
                            <td
                              className="text-end"
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "rgba(0, 0, 0, 0.6)",
                              }}
                            >
                              ₹ {totalPrice}
                            </td>
                          </tr>
                          <tr>
                            <th
                              className="text-start"
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "rgba(0, 0, 0, 0.6)",
                              }}
                            >
                              Delivery Charges
                            </th>
                            <td
                              className="text-end"
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "rgba(0, 0, 0, 0.6)",
                              }}
                            >
                              Free
                            </td>
                          </tr>
                          <tr>
                            <th
                              className="text-start"
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "rgba(0, 0, 0, 0.6)",
                              }}
                            >
                              Tax
                            </th>
                            <td
                              className="text-end"
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "rgba(0, 0, 0, 0.6)",
                              }}
                            >
                              ₹ 200
                            </td>
                          </tr>
                          <tr>
                            <th
                              className="text-start"
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "#C99C1E",
                              }}
                            >
                              Discount Applied
                            </th>
                            <td
                              className="text-end "
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "#C99C1E",
                              }}
                            >
                              -₹ 38.4
                            </td>
                          </tr>
                          <tr>
                            <th
                              className="text-start mt-3"
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "rgba(0, 0, 0, 0.6)",
                              }}
                            >
                              Total
                            </th>
                            <td
                              className="text-end "
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "rgba(0, 0, 0, 0.6)",
                              }}
                            >
                              ₹{" "}
                              {totalPrice > 0
                                ? Math.floor(totalPrice + 200 - 38.4)
                                : 0}
                            </td>
                          </tr>
                        </>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="d-md-flex col-sm-6">
                  {/* <div className="pt-2 mb-3 wmin-md-400 ml-auto">
                    {items.map((value, i) => (
                      <>
                        <div
                          key={i}
                          className="d-flex justify-content-between fw-bold"
                        >
                          {items.length > 0 ? (
                            <>
                              <span className="mb-3 text-start "> */}
                  {/* <img
                              src={`../../assets/images/${value.item_category}.png`}
                              alt=""
                              width="15"
                            /> */}
                  {/* {value.item_name} x {value.quantity}(
                                {value.item_quantity} {value.item_metric})
                              </span>
                              <span className=" text-end">
                                &#8377;{value.item_price}
                              </span>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </>
                    ))}
                    {/* <div className="d-flex justify-content-between fw-bold"> */}
                  {
                    /* <span className="mb-3 text-start ">
                        <img src={veg} width="15" /> Tandoori Roti x 1
                      </span>
                      <span className=" text-end">&#8377; 62</span>
                    </div> */
                    // } */}
                    // {
                    /* <div className="d-flex justify-content-between fw-bold">
                      <span className="mb-3 text-start ">
                        <img src={veg} width="15" /> Paneer Tika Masala x 2
                      </span>
                      <span className=" text-end">&#8377; 130</span>
                    </div> */
                  }
                  {/* <h6 className="mb-3 text-start">Item Total</h6> */}
                  {/* {items.length > 0 ? (
                      <>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <th className="text-start">Item Total:</th>
                                <td className="text-end">
                                  &#8377; {totalPrice}
                                </td>
                              </tr>
                              <tr>
                                <th className="text-start">
                                  Order Packaging Charges:
                                </th>
                                <td className="text-end">&#8377; 12.00</td>
                              </tr>
                              <tr>
                                <th className="text-start">
                                  Delivery partner fee:
                                </th>
                                <td className="text-end">&#8377; 91.00</td>
                              </tr>
                              <tr>
                                <th className="text-start text-success">
                                  Discount Applied (MISSEDYOU):
                                </th>
                                <td className="text-end text-success">
                                  &#8377; -38.40
                                </td>
                              </tr>
                              <tr>
                                <th className="text-start"> */}
                  {/* Taxes:{" "} */}
                  {/* <span className="font-weight-normal">(25%)</span> */}
                  {/* </th>
                                <td className="text-end">&#8377; 9.05</td>
                              </tr>
                              <tr>
                                <th className="text-end fw-bold">
                                  BILL TOTAL:
                                </th>
                                <td className="text-end fw-bold">
                                  <h5 className="font-weight-semibold">
                                    &#8377;{" "}
                                    {totalPrice > 0
                                      ? Math.floor(
                                          totalPrice + 12 + 91 + -38.4 + 9.05
                                        )
                                      : 0}
                                  </h5>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="text-right mt-3">
                          <Button
                            variant="contained"
                            size="small"
                            style={{
                              marginTop: "5px",
                              backgroundColor: "#FFC727",
                              borderRadius: "50px",
                            }}
                          >
                            Payment Option
                            <PaymentIcon />
                          </Button>{" "}
                          <Button
                            variant="contained"
                            size="small"
                            style={{
                              marginTop: "5px",
                              backgroundColor: "#393E46",
                              borderRadius: "50px",
                            }}
                          >
                            Send Invoice
                            <ReceiptIcon />
                          </Button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )} */}
                  {/* </div> */}
                </div>
                <div className="col-sm-12">
                  <div className="row d-flex">
                    <div className="col-md-3 col-sm-12 pb-1">
                      <Button
                        variant="contained"
                        size="small"
                        style={{
                          // marginTop: "5px",
                          width: "161px",
                          height: "50px",
                          backgroundColor: "#FFC727",
                          borderRadius: "12.695px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "15px",
                          lineHeight: "22px",
                          color: "rgba(0, 0, 0, 0.8)",
                        }}
                        // onClick={addInputField}
                      >
                        Save
                      </Button>
                    </div>
                    <div className="col-md-3 col-sm-12 pb-1">
                      <Button
                        variant="contained"
                        size="small"
                        style={{
                          // marginTop: "5px",
                          width: "161px",
                          height: "50px",
                          backgroundColor: "#CDD4FF",
                          borderRadius: "12.695px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "15px",
                          lineHeight: "22px",
                          color: "rgba(0, 0, 0, 0.8)",
                        }}
                        // onClick={addInputField}
                      >
                        Print KOT
                      </Button>
                    </div>
                    <div className="col-md-3 col-sm-12 pb-1">
                      <Button
                        variant="contained"
                        size="small"
                        style={{
                          // marginTop: "5px",
                          width: "263px",
                          height: "50px",
                          backgroundColor: "#76FF6A",
                          borderRadius: "12.695px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "15px",
                          lineHeight: "22px",
                          color: "rgba(0, 0, 0, 0.8)",
                        }}
                        // onClick={addInputField}
                      >
                        Print Customer Invoice
                      </Button>
                    </div>
                    <div className="col-md-3 col-sm-12 pb-1">
                      <Button
                        variant="contained"
                        size="small"
                        style={{
                          // marginTop: "5px",
                          width: "161px",
                          height: "50px",
                          backgroundColor: "#FDB1DA",
                          borderRadius: "12.695px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "15px",
                          lineHeight: "22px",
                          color: "rgba(0, 0, 0, 0.8)",
                        }}
                        // onClick={addInputField}
                      >
                        Generate New Bill
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Billing;
