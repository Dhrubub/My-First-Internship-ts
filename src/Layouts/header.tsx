import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Grid, Divider } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#3f434d", padding: "8px" }}
    >
      <Toolbar>
        <Grid container sm>
          <Grid item>
            <Typography variant="h5" color="inherit">
              Takor Internship
            </Typography>
          </Grid>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            style={{
              marginRight: "8px",
              marginLeft: "8px",
              backgroundColor: "black",
            }}
          />
          <Grid item>
            <Typography variant="h6" color="inherit">
              Dhruv
            </Typography>
          </Grid>
        </Grid>

        <Grid container sm>
          <Grid item className="ml-auto">
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                margin: "auto",
                marginRight: "40px",
              }}
            >
              <li className="link">
                <a>Home</a>
              </li>
              <li className="link">
                <a>About me</a>
              </li>
              <li className="link">
                <a>Contact Me</a>
              </li>
            </ul>
            {/* <Typography
              variant="body1"
              color="inherit"
              style={{ marginRight: "8px" }}
            >
              Home
            </Typography> */}
          </Grid>

          <Grid item></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
