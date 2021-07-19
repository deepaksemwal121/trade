import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      margin : '0 1rem',
      border : '3px solid blue'
    },
  }));

const StoryWidget = () => {
    const classes = useStyles()
  return (
    <div style={{display : 'flex', justifyContent : 'space-evenly', margin : '2rem 0'}}>
      <Avatar
        alt="Remy Sharp"
        src="https://cdn.pixabay.com/photo/2020/10/26/18/21/man-5688158_960_720.jpg"
        className={classes.large}
      />
      <Avatar
        alt="Remy Sharp"
        src="https://cdn.pixabay.com/photo/2020/10/26/18/21/man-5688158_960_720.jpg"
        className={classes.large}
      />
      <Avatar
        alt="Remy Sharp"
        src="https://cdn.pixabay.com/photo/2020/10/26/18/21/man-5688158_960_720.jpg"
        className={classes.large}
      />
      <Avatar
        alt="Remy Sharp"
        src="https://cdn.pixabay.com/photo/2020/10/26/18/21/man-5688158_960_720.jpg"
        className={classes.large}
      />
      <Avatar
        alt="Remy Sharp"
        src="https://cdn.pixabay.com/photo/2020/10/26/18/21/man-5688158_960_720.jpg"
        className={classes.large}
      />
      <Avatar
        alt="Remy Sharp"
        src="https://cdn.pixabay.com/photo/2020/10/26/18/21/man-5688158_960_720.jpg"
        className={classes.large}
      />
      <Avatar
        alt="Remy Sharp"
        src="https://cdn.pixabay.com/photo/2020/10/26/18/21/man-5688158_960_720.jpg"
        className={classes.large}
      />
    </div>
  );
};

export default StoryWidget;
