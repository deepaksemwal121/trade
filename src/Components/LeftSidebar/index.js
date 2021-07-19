import { FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import Groups from "../../hoc/Groups";
import OnlineFriends from "../../hoc/OnlineFriends";

const LeftSidebar = () => {
  return (
    <div>
      <Grid container style={{margin : '1rem'}}>
        <Grid item xs={5}>
          logo
        </Grid>
        <Grid item xs={5}>
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
