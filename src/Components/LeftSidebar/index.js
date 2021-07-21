import { FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import Groups from "../../hoc/Groups";
import OnlineFriends from "../../hoc/OnlineFriends";

const LeftSidebar = () => {
  return (
    <div>
      <Grid container alignItems='center' style={{margin : '2rem 0.3rem',}}>
        <Grid item style={{margin : '0 .4rem'}}>
          <Typography variant='h4' style={{fontSize : '1.2rem', fontWeight : '600'}}>Trade In</Typography>
        </Grid>
        <Grid item>
        <FormControl variant="outlined" size='small'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={'abc'}
            onChange={console.log('')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={console.log('')}
                  edge="end"
                >
                    <Search/>
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </Grid>
      </Grid>
      <Groups/>
      <OnlineFriends/>
    </div>
  );
};

export default LeftSidebar;
