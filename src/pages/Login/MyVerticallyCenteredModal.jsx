import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import Modal from "react-bootstrap/Modal";
import OtpInput from "react-otp-input";

const MyVerticallyCenteredModal = (props) => {
  const [show, setShow] = React.useState(true);
  const [otp, setOtp] = React.useState("");
  const openOtpFunc = () => {
    setShow(!show);
  };
  const handleChange = (otp) => {
    setOtp(otp);
  };

  const TextFieldStyle = {
    padding: 12,
    fontSize: "0.75rem",
    margin: 7,
  };

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body style={{ marginLeft: "20px" }}>
        <img
          src="./Login2.png"
          width={200}
          height={200}
          alt="login"
          className="img-fluid"
        />
        <h5 className="" style={{ fontSize: "18px", fontWeight: "300" }}>
          Welcome to
          <br />
        </h5>
        <h5 className="pb-3">
          <span style={{ fontWeight: "800", fontSize: "22px" }}>
            Kitchen Box
          </span>
        </h5>
        {show ? (
          <>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              // id="outlined-number"
              label="Enter Your Mobile Number"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              className="pb-3"
            />
          </>
        ) : (
          <>
            <div style={{ position: "relative" }}>
              <OtpInput
                value={otp}
                onChange={(e) => handleChange(e)}
                numInputs={4}
                style={{ width: "2rem" }}
                inputStyle={{ width: "3rem", marginLeft: "5px" }}
              />
              <p
                style={{
                  textAlign: "left",
                  fontSize: "8px",
                  marginTop: "4px",
                }}
              >
                OTP has been sent to your mobile number
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                  position: "absolute",
                  top: "62px",
                  right: "4px",
                }}
              >
                <a>resend OTP</a>
                <span>Time left : 53 sec</span>
              </div>
            </div>
          </>
        )}

        <Button
          variant="contained"
          style={{
            marginTop: "5px",
            backgroundColor: "#FFC727",
            borderRadius: "50px",
          }}
          onClick={openOtpFunc}
        >
          {show ? "Send OTP" : "Login"}
        </Button>
        <p
          className="pt-3"
          style={{ textAlign: "center", fontSize: "8px", marginTop: "4px" }}
        >
          By clicking on login, I accept all the terms and conditions
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
