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
import { Link } from "react-router-dom";
import LeftSidebar from "../../Components/LeftSidebar";
import RightSidebar from "../../Components/RightSidebar";
import PostWidget from "../../hoc/PostWidget";
import StoryWidget from "../../hoc/StoryWidget";

const Home = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={3}>
          <LeftSidebar />
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
                borderRadius: "0 0 1rem 1rem",
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
              <Link to="/chat" target="_blank">
                <BottomNavigationAction
                  label="Chats"
                  value="chats"
                  icon={<ChatBubbleOutline />}
                />
              </Link>
              <BottomNavigationAction
                label="Settings"
                value="settings"
                icon={<Settings />}
              />
            </BottomNavigation>
          </Container>
          <Container>
            <div>
              <StoryWidget />
            </div>
            <div>
              <PostWidget />
              <PostWidget />
            </div>
          </Container>
        </Grid>
        <Grid item xs={12} lg={3}>
          <RightSidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
