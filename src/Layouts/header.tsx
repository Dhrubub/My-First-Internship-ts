import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import logo from "../images/logo2.png";
import profile from "../images/dhruv.jpg";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import MyBody from "./body";
import Footer from './footer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    color: {
      backgroundColor: "#343a40",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const options = ["Home", "My Work", "My Profile"];
  const [selectedIndex, setSelectedIndex] = useState(2);
  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={handleOpen} />
            <Menu open={isOpen} onClose={handleClose}>
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  className="alert-info menu"
                  onClick={() => {
                    handleClose();
                    handleSelect(index);
                  }}
                >
                  {index === 0 && <i className="fa fa-home icon" />}
                  {index === 1 && <i className="fa fa-tasks icon" />}
                  {index === 2 && <i className="fa fa-user icon" />}

                  {option}
                </MenuItem>
              ))}
            </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} height="50px" />
            <span>
              <a
                href="https://takor.com.au/"
                style={{ textDecoration: "none", color: "white", marginRight: "3px" }}
              >
                Takor
              </a>
              Internship
            </span>
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            style={{ marginRight: "10px" }}
          >
            <img
              src={profile}
              height="40px"
              width="40px"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <span>Dhruv</span>
          </Typography>
        </Toolbar>
      </AppBar>

      <MyBody selectedIndex={selectedIndex} />  
    </div>
  );
}
