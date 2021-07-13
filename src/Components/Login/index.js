import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LogImg from '../../Assets/Login.svg'

const Login = () => {
  return(
    <Container maxWidth="lg">
      <Grid container>
        <Grid style={styles.loginTextBox} item xs={12} sm={6}>
          <Typography variant="h5" component="h3" gutterBottom>
            Login
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Welcome back to your community of amazing people
          </Typography>
        </Grid>
        <Grid style={{backgroundColor : '', padding : '1rem'}} item xs={12} sm={6}>
          <img style={{width : '80%'}} alt='login' src={LogImg}/>
        </Grid>
      </Grid>
    </Container>
    );
};

var styles = {
  loginTextBox : {
    padding : '1rem',
    backgroundColor : 'blue',
    color : 'white',
    borderRadius : '10px 0 0 10px'
  }
}

export default Login;
