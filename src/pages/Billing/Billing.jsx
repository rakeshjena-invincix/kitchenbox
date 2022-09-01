import React from "react";
import logo from "../../assets/images/logo.png";
import AddRemoveInputField from "../../components/AddRemoveInputField/AddRemoveInputField";
import "./billing.css";

export const Billing = () => {
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
                  <button type="button" className="btn btn-light btn-sm mx-3">
                    <i className="fa fa-file mr-2"></i> Save
                  </button>
                  <button type="button" className="btn btn-light btn-sm ml-3">
                    <i className="fa fa-print mr-2"></i> Print
                  </button>
                </div>
              </div>

              <div className="card-body">
                <div className="row d-flex justify-content-between">
                  <div className="col-md-3">
                    <div className="mb-4 pull-left">
                      <img src={logo} width="40%" alt="logo" />
                      <ul className="list list-unstyled mb-0 text-left">
                        {/* <li>2269 Six Sigma</li>
                        <li>New york city</li>
                        <li>+1 474 44737 47 </li> */}
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="mb-4 ">
                      <div className="text-sm-right">
                        <h4 className="invoice-color mb-2 mt-md-2">
                          Billing #KB{Math.floor(Math.random() * 1000 + 1)}
                        </h4>
                        <ul className="list list-unstyled mb-0">
                          <li>
                            Date:{" "}
                            <span className="font-weight-semibold">
                              {Date(Date.now()).slice(0, 16)}
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
                  {/* <thead>
                    <tr>
                      <th>Dishes</th>
                      <th>Quantity</th>

                      <th>Total</th>
                    </tr>
                  </thead> */}
                  <tbody>
                    <tr>
                      <td>
                        {/* <h6 className="mb-0">Arts and design template</h6>
                        <span className="text-muted">
                          in reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur.Duis aute irure dolor in
                          reprehenderit
                        </span> */}
                        <AddRemoveInputField />
                      </td>
                      {/* <td> 1</td>
                      <td>&#8377;180</td> */}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card-body">
                <div className="d-md-flex flex-md-wrap justify-content-end">
                  <div className="pt-2 mb-3 wmin-md-400 ml-auto">
                    <h6 className="mb-3 text-left">Total due</h6>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th className="text-start">Subtotal:</th>
                            <td className="text-end">&#8377; 1,090</td>
                          </tr>
                          <tr>
                            <th className="text-start">
                              GST:{" "}
                              <span className="font-weight-normal">(25%)</span>
                            </th>
                            <td className="text-end">&#8377; 27</td>
                          </tr>
                          <tr>
                            <th className="text-start">Total:</th>
                            <td className="text-end text-primary">
                              <h5 className="font-weight-semibold">
                                &#8377; 1,160
                              </h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="text-right mt-3">
                      <button type="button" className="btn btn-primary">
                        <b>
                          <i className="fa fa-paper-plane-o mr-1"></i>
                        </b>{" "}
                        Send invoice
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer text-center">
                <span className="text-muted ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
