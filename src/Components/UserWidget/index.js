import { Avatar, Grid, IconButton, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";

const UserWidget = ({ user }) => {
  return (
    <Grid container spacing={2} justifyContent="start" alignItems="center">
      <Grid item>
        <Avatar src={user.photoURL} />
      </Grid>
      <Grid item>
        <Typography variant="p">{user.displayName}</Typography>
      </Grid>
      <Grid item>
        <IconButton size="small" style={{ width: "2rem" }}>
          <ExpandMore />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(UserWidget);
