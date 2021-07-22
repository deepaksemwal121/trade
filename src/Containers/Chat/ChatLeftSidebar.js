import React from 'react'
import {
    Avatar,
    Divider,
    Grid,
    Typography,
    Box,
    Chip,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    IconButton,
    Fab,
  } from "@material-ui/core";
  import { ExpandMore, Search, Add, MoreVert } from "@material-ui/icons";
import ChatWidget from './ChatWidget';
const ChatLeftSidebar = () => {
    return (
        <div>
          <Typography
            variant="h5"
            component="h3"
            style={{ margin: "0.5rem 0" }}
          >
            Chat
          </Typography>
          <Divider />
          <Box
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              padding: ".5rem 0",
            }}
          >
            <Avatar
              src="https://cdn.pixabay.com/photo/2021/07/10/17/51/woman-6401957_960_720.jpg"
              style={{ width: "6rem", height: "6rem" }}
            />
            <Typography variant="h5" component="h6">
              Anna Doe
            </Typography>
            <Chip
              size="small"
              avatar={
                <Avatar>
                  <ExpandMore />
                </Avatar>
              }
              label="Available"
              onClick={console.log("")}
              clickable
              color="primary"
            />
          </Box>
          <FormControl
            variant="outlined"
            size="small"
            fullWidth
            style={{ margin: "0.5rem 0" }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Search
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-Search"
              value={""}
              onChange={console.log("")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search btn"
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
          <Box>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">Recent Chats</Typography>
              </Grid>
              <Grid item style={{ alignItems: "center", display: "flex" }}>
                <Fab color="primary" aria-label="add" size="small">
                  <Add />
                </Fab>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Box
            style={{
              overflowY: "scroll",
              height: "18rem"
            }}
          >
            <ChatWidget />
            <ChatWidget />
            <ChatWidget />
            <ChatWidget />
            <ChatWidget />
          </Box>
        </div>
    )
}

export default ChatLeftSidebar
