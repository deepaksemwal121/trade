import React from "react";
import {
    Avatar,
    Container,
    Grid,
    Typography,
  } from "@material-ui/core";
  
const ChatWidget = () => {
  return (
    <Container
      style={{
        backgroundColor: "#daddfe",
        padding: ".6rem",
        borderRadius: ".5rem",
        margin: ".6rem 0",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Grid container alignItems="center" spacing="1">
            <Grid item>
              <Avatar src="https://cdn.pixabay.com/photo/2021/07/10/17/51/woman-6401957_960_720.jpg" />
            </Grid>
            <Grid item>
              <Typography
                style={{ lineHeight: "1" }}
                display="block"
                variant="h6"
              >
                Jhon doe
              </Typography>
              <Typography
                style={{ lineHeight: "1" }}
                display="block"
                variant="subtitle1"
              >
                typing...
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle-2">11:15 pm</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatWidget;
