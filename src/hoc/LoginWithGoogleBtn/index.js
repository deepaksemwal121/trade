import { Typography } from "@material-ui/core";
import React from "react";
import GoogleIcon from "../../Assets/google-logo.svg";
import "./LWGB.css";
import { auth, provider } from "../../firebase";
import { connect } from "react-redux";
import { addUser } from "../../Store/User/UserAction";

const LoginWithGoogleBtn = ({addUser}) => {
  const handleGoogleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((response) => {
        console.log(response);
        addUser(response.user)
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <button className="btn-A" onClick={handleGoogleLogin}>
      <img
        alt="Google-logo"
        style={{ width: "10px", padding: "0 0.2rem" }}
        src={GoogleIcon}
      />
      <Typography variant="subtitle2" component="h5">
        Login With Google
      </Typography>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(LoginWithGoogleBtn);
