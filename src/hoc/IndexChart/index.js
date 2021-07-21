import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Grid,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";

const IndexChart = () => {
  return (
    <Box rounded style={{margin : '1rem 0'}}>
      {/* just for demo purpose real chart will be here */}
      <FormControl variant="outlined" size="small" fullWidth style={{margin : '1rem 0'}}>
        <InputLabel htmlFor="outlined-adornment-password">Search Stocks</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          value={"Reliance"}
          onChange={console.log("")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={console.log("")}
                edge="end"
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <img
        alt="market index"
        style={{ width: "100%", objectFit: "cover", borderRadius: "1rem" }}
        src="https://i.stack.imgur.com/KRxDx.png"
      />
      <Grid container justifyContent='space-between' alignItems='center' style={{backgroundColor : 'white', borderRadius : '1rem', padding : '1rem 0.5rem'}}>
          <Grid item>
            <Typography style={{fontSize : '1.1rem'}} variant='h6' component='h6'>Open</Typography>
            <Typography variant='subtitle-2'>1.24</Typography>
          </Grid>
          <Grid item>
            <Typography style={{fontSize : '1.1rem'}} variant='h6' component='h6'>High</Typography>
            <Typography variant='subtitle-2'>1.24</Typography>
          </Grid>
          <Grid item>
            <Typography style={{fontSize : '1.1rem'}} variant='h6' component='h6'>Low</Typography>
            <Typography variant='subtitle-2'>1.24</Typography>
          </Grid>
          <Grid item>
            <Typography style={{fontSize : '1.1rem'}} variant='h6' component='h6'>Prev. Close</Typography>
            <Typography variant='subtitle-2'>1.24</Typography>
          </Grid>
      </Grid>
    </Box>
  );
};

export default IndexChart;
