import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";

const Holdings = () => {
    const HoldingWidget = () => {
        return(
            <div style={{backgroundColor : 'white', padding : '1rem', margin : '0.5rem  0', borderRadius : '1rem'}}>
                <Grid container justifyContent='space-between'>
                    <Grid item>
                        <Typography variant='subtitle-2'>1 QTY | Avg. 1.25</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle-2' secondary>-5.5%</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='space-between'>
                    <Grid item>
                        <Typography variant='subtitle-2'>Reliance</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle-2' secondary>-50.44</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='space-between'>
                    <Grid item>
                        <Typography variant='subtitle-2'>Invested 10.24</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle-2' secondary>LTP 9.46(0.00%)</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
  return (
    <div>
      <Typography variant="h6">Holdings</Typography>
      <Box
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          padding: "0.5rem 0",
        }}
      >
        <Grid
          container
          justifyContent="space-around"
          style={{ margin: "0.5rem 0" }}
        >
          <Grid item>
            <Typography variant="subtitle-1">Invested</Typography>
            <Typography variant="h6">52000</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle-1">Current</Typography>
            <Typography variant="h6">60000</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Typography variant="subtitle-1">P & L</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">+8000</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <HoldingWidget/>
        <HoldingWidget/>
      </Box>
    </div>
  );
};

export default Holdings;
