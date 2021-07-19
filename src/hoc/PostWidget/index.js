import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Share, TrendingDown, TrendingUp } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const PostWidget = () => {
  const classes = useStyles();
  return (
    <Box style={{ margin: "1rem 0", borderRadius : '5px' }} boxShadow={3}>
      <Grid container spacing={5} style={{ display: "flex", margin: "1rem 0" }}>
        <Grid item xs={4}>
          <img
            alt="post-img"
            style={{ width: "100%",height : '100%', objectFit : 'cover', borderRadius: "5px" }}
            src="https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_960_720.jpg"
          />
        </Grid>
        <Grid item xs={7}>
          <Grid container alignItems="center">
            <Grid item xs={2} style={{ margin: "0 1rem 0 0" }}>
              <Avatar
                variant="rounded"
                alt="Remy Sharp"
                src="https://cdn.pixabay.com/photo/2020/10/26/18/21/man-5688158_960_720.jpg"
                className={classes.large}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography
                style={{ lineHeight: "1" }}
                component="h6"
                variant="h6"
              >
                How to manage your time and get more done.
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Thu | 2-05-2021 | 16:00
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="subtitle2" color="textSecondary">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry Lorem Ipsum has been the industry's
            standard dummy text ever.
          </Typography>
          <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', margin : '1rem 0'}}>
            <div item xs={4}>
              <Button variant="outlined" color="primary">
                Read More
              </Button>
            </div>
            <div item xs={5}>
                <TrendingDown style={{color : 'red', margin : '0 0.5rem'}}/>
                <TrendingUp style={{color : 'green', margin : '0 0.5rem'}}/>
                <Share color='primary'/>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostWidget;
