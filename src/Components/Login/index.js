import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LogImg from "../../Assets/Login.svg";
import LoginWithGoogleBtn from "../../hoc/LoginWithGoogleBtn";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  OutlinedInput,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [remember, setRemember] = useState(true);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRemember = () => {
    setRemember(!remember);
  };

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ backgroundColor: "white", padding: "2rem" }}
        >
          <Container
            maxWidth="sm"
            style={{
              display: "flex",
              alignItems: "stretch",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" component="h3" gutterBottom>
              Login
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Welcome back to your community of amazing people
            </Typography>
            <LoginWithGoogleBtn />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: "1rem 0",
              }}
            >
              <hr
                style={{
                  width: "5rem",
                  border: "1px solid #daddfe",
                  height: "0px",
                }}
              />
              <Typography variant="caption">or sign in with email</Typography>
              <hr
                style={{
                  width: "5rem",
                  border: "1px solid #daddfe",
                  height: "0px",
                }}
              />
            </div>
            <div>
              <div>
                <TextField
                  id="outlined-required"
                  label="Email"
                  defaultValue="jhondoe@gmail.com"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
              <div className="password-input" style={{ margin: "1rem 0" }}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    // labelWidth={70}
                  />
                </FormControl>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={remember}
                    onChange={handleRemember}
                    name="checked"
                    color="primary"
                  />
                }
                label="Remember Me"
              />
              <Link to="/">Forgot Password ?</Link>
            </div>
            <Button variant="outlined" color="primary" size="small">
              Login
            </Button>
            <div style={{ margin: "0.5rem 0" }}>
              Not yet registered ?<Link to="/">Create account</Link>
            </div>
          </Container>
        </Grid>
        <Grid style={styles.loginTextBox} item xs={12} sm={6}>
          <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '100%'}}>
            <img style={{ width: "80%" }} alt="login" src={LogImg} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

var styles = {
  loginTextBox: {
    padding: "1rem",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "3px 0 0 3px",
  },
};

export default Login;
