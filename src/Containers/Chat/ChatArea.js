import { Avatar, Container, Divider, Grid, IconButton, InputBase, Paper, Typography } from "@material-ui/core";
import { EmojiEmotions, Send } from "@material-ui/icons";
import React from "react";

const ChatArea = () => {
    const MessageWidgetReceive = () =>{
        return(
            <Grid container alignItems='center' style={{margin : '0.5rem 0'}}>
                <Grid item>
                    <Avatar src='https://cdn.pixabay.com/photo/2021/07/10/17/51/woman-6401957_960_720.jpg'/>
                </Grid>
                <Grid item style={{padding : '.5rem', backgroundColor : 'white', borderRadius : '10px 10px 10px 0', margin : '0 .4rem'}}>
                    <Typography>Hello anna how are you</Typography>
                </Grid>
            </Grid>
        )
    }

    const MessageWidgetSend = () => {
        return(
            <Grid container justifyContent='flex-end'>
                <Grid item style={{padding : '.5rem', backgroundColor : 'white', borderRadius : '10px 10px 0 10px'}}>
                    <Typography>I am very good, how are you ?</Typography>
                </Grid>
            </Grid>
        )
    }

  return (
    <div style={{ margin: "0.2rem 0.5rem", height: "99%" }}>
      <Container
        style={{
          backgroundColor: "#daddfe",
          height: "100%",
          borderRadius: "1rem",
        }}
      >
        <Grid container style={{ height: "100%" }}>
          <Grid item xs={12} style={{ height: "10%" }}>
            <Typography variant="h6" style={{ margin: "1rem 0" }}>
              Jhon Doe
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} style={{ height: "80%", overflowY : 'scroll' }}>
            <MessageWidgetReceive/>
            <MessageWidgetSend/>
            <MessageWidgetReceive/>
            <MessageWidgetSend/>
            <MessageWidgetReceive/>
            <MessageWidgetReceive/>
            <MessageWidgetSend/>
            <MessageWidgetReceive/>
            <MessageWidgetSend/>
          </Grid>
          <Grid item xs={12} style={{ height: "10%" }}>
            <Paper component="form" style={{display : 'flex'}}>
              <InputBase
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
                fullWidth
                style={{padding : '0 1rem'}}
              />
              <IconButton
                type="submit"
                aria-label="emoji"
                color='secondary'
              >
                <EmojiEmotions />
              </IconButton>
              <Divider orientation="vertical" />
              <IconButton
                color="primary"
                aria-label="send"
              >
                <Send />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ChatArea;
