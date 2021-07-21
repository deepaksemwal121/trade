import React from "react";
import { Avatar, Container, Grid, Typography } from "@material-ui/core";

const OnlineFriends = () => {
  const FriendWidget = ({friendName}) => {
    return (
      <Grid container alignItems ='center' style={{margin : '0.8rem 0'}}>
        <Grid item>
          <Avatar
            alt="group_image"
            src="https://cdn.pixabay.com/photo/2021/07/10/17/51/woman-6401957_960_720.jpg"
          />
        </Grid>
        <Grid>
          <Typography
            variant="h6"
            component="h6"
            style={{fontSize: "1rem", margin : '0 1rem', fontWeight : '600', color : '#5c5c5c'}}
          >
            {friendName}
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
        Friends
      </Typography>
      <div>
          <FriendWidget friendName='Jhon Doe'/>
          <FriendWidget friendName='Anna Doe'/>
          <FriendWidget friendName='Lily Simon'/>
          <FriendWidget friendName='Sam curon'/>
          <FriendWidget friendName='Jimmy Cartal'/>
          <FriendWidget friendName='Justin Bieber'/>
          <FriendWidget friendName='Hailey'/>
      </div>
    </Container>
  );
};

export default OnlineFriends;
