import {
  Avatar,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ArrowForwardIos, Folder, MoreVert } from "@material-ui/icons";
import React from "react";

const ChatRightSidebar = () => {
  const FileTypeWidget = ({ fileName, fileCount, fileSize }) => {
    return (
      <Grid container justifyContent="space-between" alignItems="center" style={{margin : '0.5rem 0'}}>
        <Grid item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <div>
              <Folder
                style={{
                  backgroundColor: "#daddfe",
                  padding: "0.5rem",
                  margin: "0 .4rem",
                  borderRadius: "0.4rem",
                }}
              />
            </div>
            <div>
              <Typography style={{ lineHeight: "1" }} variant="h6">
                {fileName}
              </Typography>
              <Typography style={{ lineHeight: "1" }} variant="subtitle2">
                {fileCount}, {fileSize}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item>
          <IconButton>
            <ArrowForwardIos />
          </IconButton>
        </Grid>
      </Grid>
    );
  };
  return (
    <div>
      <Grid container alignItems="center" style={{ margin: "0.5rem 0" }}>
        <Grid item>
          <IconButton style={{ borderRadius: "0.4rem" }}>
            <ArrowForwardIos />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h6">Shared Files</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "1rem 0",
        }}
      >
        <Avatar
          src="https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178_960_720.jpg"
          style={{ height: "10rem", width: "10rem" }}
        />
        <Typography variant="h5" style={{ margin: "0.5rem 0" }}>
          Jhon Doe
        </Typography>
      </Container>
      <Grid container justifyContent="space-evenly">
        <Grid
          item
          style={{
            backgroundColor: "#daddfe",
            padding: "1rem",
            borderRadius: "0.3rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Folder fontSize="large" />
            </div>
            <div>
              <Typography variant="subtitle1">All Files</Typography>
              <Typography variant="h6">253</Typography>
            </div>
          </div>
        </Grid>
        <Grid
          item
          style={{
            backgroundColor: "#dadd00",
            padding: "1rem",
            borderRadius: "0.3rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Folder fontSize="large" />
            </div>
            <div>
              <Typography variant="subtitle1">All Links</Typography>
              <Typography variant="h6">45</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        style={{ margin: "0.5rem 0.4rem" }}
      >
        <Grid item>
          <Typography variant="h6">All Files</Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <MoreVert />
          </IconButton>
        </Grid>
      </Grid>
      <div>
        <FileTypeWidget
          fileCount="23 files"
          fileName="Documents"
          fileSize="239.3MB"
        />
        <FileTypeWidget
          fileCount="48 files"
          fileName="Photos"
          fileSize="800.3MB"
        />
        <FileTypeWidget
          fileCount="32 links"
          fileName="Links"
          fileSize="23.4KB"
        />
      </div>
    </div>
  );
};

export default ChatRightSidebar;
