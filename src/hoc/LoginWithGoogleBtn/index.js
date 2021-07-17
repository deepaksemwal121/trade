import { Typography } from "@material-ui/core";
import React from "react";
import GoogleIcon from "../../Assets/google-logo.svg";
import "./LWGB.css";

const LoginWithGoogleBtn = () => {
  return (
    <button className="btn-A">
      <img alt="Google-logo" style={{ width: "10px", padding : '0 0.2rem' }} src={GoogleIcon} />
      <Typography variant="subtitle-2" component="h5">
        Login With Google
      </Typography>
    </button>
  );
};

export default LoginWithGoogleBtn;
