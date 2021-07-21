import React from "react";
import { Avatar, Container, Grid, Typography } from "@material-ui/core";

const Groups = () => {
  const GroupWidget = ({groupName}) => {
    return (
      <Grid container alignItems ='center' style={{margin : '1rem 0'}}>
        <Grid item>
          <Avatar
            alt="group_image"
            src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg"
          />
        </Grid>
        <Grid>
          <Typography
            variant="h6"
            component="h6"
            style={{fontSize: "1rem", margin : '0 1rem', fontWeight : '600', color : '#5c5c5c'}}
          >
            {groupName}
          </Typography>
        </Grid>
      </Grid>
    );
  };
  return (
    <Container>
      <Typography
        variant="h3"
        component="h6"
        style={{ color: "grey", fontSize: "1.3rem" }}
      >
        Your Groups
      </Typography>
      <div>
          <GroupWidget groupName='Dehradun Traders'/>
          <GroupWidget groupName='Tecnical Analysis Learnings'/>
      </div>
    </Container>
  );
};

export default Groups;
