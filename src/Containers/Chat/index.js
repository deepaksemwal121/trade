import { Container, Grid } from "@material-ui/core";
import React from "react";
import ChatArea from "./ChatArea";
import ChatLeftSidebar from "./ChatLeftSidebar";
import ChatRightSidebar from "./ChatRightSidebar";

const Chat = () => {
  return (
    <Container>
      <Grid
        container
        style={{
          backgroundColor: "white",
          margin: "0.5rem 0",
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
        }}
      >
        <Grid item xs={3}>
          <ChatLeftSidebar />
        </Grid>
        <Grid item xs={6}>
          <ChatArea />
        </Grid>
        <Grid item xs={3}>
          <ChatRightSidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
