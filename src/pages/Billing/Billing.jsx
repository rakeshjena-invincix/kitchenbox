import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

import AddRemoveInputField from "../../components/AddRemoveInputField/AddRemoveInputField";
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
    const totalValue = items.map((val) => {
      total += val.price * val.quantity;
    });
    setTotalPrice(total);
  }, [items]);

  return (
    <>
      <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header bg-transparent header-elements-inline">
                <h6 className="card-title">Billing</h6>
                {/* <img src={logo} width="10%" alt="logo" /> */}

                <div className="header-elements ">
                  <Button
                    // variant="contained"
                    size="small"
                  >
                    Save
                  </Button>

                  <Button
                    // variant="contained"
                    size="small"
                  >
                    Print
                  </Button>
                </div>
              </div>

              <div className="card-body">
                <div className="row d-flex justify-content-between">
                  <div className="col-md-3">
                    <div className="mb-4 pull-left">
                      <img src={logo} width="40%" alt="logo" />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="mb-4 ">
                      <div className="text-sm-right text-start">
                        <h4 className="invoice-color mb-2 mt-md-2">
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-lg">
                  <tbody>
                    <tr>
                      <td>
                        <AddRemoveInputField handlePrice={handlePrice} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card-body d-flex justify-content-between">
                <div className="d-md-flex">
                  <div className="pt-2 mb-3 wmin-md-400 ml-auto">
                    {/* <h6 className="mb-3 text-left">Item Total</h6> */}
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th className="text-start">Order:</th>
                            <td className="text-end">#8377</td>
                          </tr>
                          <tr>
                            <th className="text-start">Address:</th>
                            <td className="text-end">
                              Bangalore, Karnataka, India
                            </td>
                          </tr>
                          <tr>
                            <th className="text-start">Delivered Time:</th>
                            <td className="text-end">
                              {new Date().toLocaleString()}
                            </td>
                          </tr>
                          <tr>
                            <th className="text-start">Ordered By</th>
                            <td className="text-end ">Kishore</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="d-md-flex">
                  <div className="pt-2 mb-3 wmin-md-400 ml-auto">
                    {items.map((value, i) => (
                      <>
                        <div className="d-flex justify-content-between fw-bold">
                          <span className="mb-3 text-start ">
                            {/* <img
                              src={value.dish == "Chicken" ? nonVeg : veg}
                              width="15"
                            />{" "} */}
                            {value.dish} &#8377; -{value.price} x{" "}
                            {value.quantity}
                          </span>
                          <span className=" text-end">
                            &#8377;{value.price * value.quantity}
                          </span>
                        </div>
                      </>
                    ))}
                    {/* <div className="d-flex justify-content-between fw-bold">
                      <span className="mb-3 text-start ">
                        <img src={veg} width="15" /> Tandoori Roti x 1
                      </span>
                      <span className=" text-end">&#8377; 62</span>
                    </div> */}
                    {/* <div className="d-flex justify-content-between fw-bold">
                      <span className="mb-3 text-start ">
                        <img src={veg} width="15" /> Paneer Tika Masala x 2
                      </span>
                      <span className=" text-end">&#8377; 130</span>
                    </div> */}
                    {/* <h6 className="mb-3 text-start">Item Total</h6> */}
                    {items.length > 0 ? (
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
                                <th className="text-start">
                                  Taxes:{" "}
                                  {/* <span className="font-weight-normal">(25%)</span> */}
                                </th>
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
                          </Button>

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
                          </Button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
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
