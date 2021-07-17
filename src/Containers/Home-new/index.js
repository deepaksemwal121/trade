import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Grid,
} from "@material-ui/core";
import {
  ChatBubbleOutline,
  DashboardOutlined,
  GroupOutlined,
  HomeOutlined,
  Settings,
} from "@material-ui/icons";
import React from "react";

const Home = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={3}>
          groups and online friends area
        </Grid>
        <Grid item xs={12} lg={6} style={{ backgroundColor: "white" }}>
          <Container maxWidth="sm">
            <BottomNavigation
              value={value}
              onChange={handleChange}
              style={{
                backgroundColor: "#daddfe",
                margin: "1rem 0",
                padding: "0.4rem",
                borderRadius : '0 0 1rem 1rem'
              }}
            >
              <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeOutlined />}
              />
              <BottomNavigationAction
                label="Groups"
                value="groups"
                icon={<GroupOutlined />}
              />
              <BottomNavigationAction
                label="Dashboard"
                value="dashboard"
                icon={<DashboardOutlined />}
              />
              <BottomNavigationAction
                label="Chats"
                value="chats"
                icon={<ChatBubbleOutline />}
              />
              <BottomNavigationAction
                label="Settings"
                value="settings"
                icon={<Settings />}
              />
            </BottomNavigation>
          </Container>
        </Grid>
        <Grid item xs={12} lg={3}>
          indexing area
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
