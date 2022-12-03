import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./otp.css";
import UserService from "../../services/UserService";

const Otp = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  };

  const handleCheck = (e) => {
    e.preventDefault();
    UserService.getUser(email).then((res) => {
      if ("+91" + res.data.phone === phone) {
        setHasFilled(true);
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phone, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
          })
          .catch((error) => {
            // Error; SMS not sent
            console.log(error);
          });
      } else {
        alert("Phone number is not associated with this email");
      }
    });
  };

  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // verifu otp
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          localStorage.setItem("fpemail", email);
          window.location.href = "/forgotpassword";
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert("User couldn't sign in (bad verification code?)");
        });
    }
  };

  return (
    <div className="app__container">
      {hasFilled && (
        <Card sx={{ width: "300px" }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ padding: "20px" }} variant="h5" component="div">
              Enter the OTP
            </Typography>
            <TextField
              sx={{ width: "240px" }}
              variant="outlined"
              label="OTP "
              value={otp}
              onChange={verifyOtp}
            />
          </CardContent>
        </Card>
      )}

      {!hasFilled && (
        <Card sx={{ width: "320px" }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ padding: "20px" }} variant="h5" component="div">
              Enter your details
            </Typography>
            <form onSubmit={handleCheck}>
              <TextField
                sx={{
                  width: "240px",
                  marginBottom: "20px",
                  marginLeft: "20px",
                }}
                variant="outlined"
                autoComplete="off"
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                sx={{ width: "240px", marginLeft: "20px" }}
                variant="outlined"
                autoComplete="off"
                label="Phone Number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "240px", marginTop: "20px", marginLeft: "20px" }}
              >
                Send Code
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
      <div id="recaptcha"></div>
    </div>
  );
};

export default Otp;
