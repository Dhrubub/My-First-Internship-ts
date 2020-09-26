import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
      backgroundColor: "#454545",
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
  const [selectedIndex, setSelectedIndex] = useState(0);
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
                  onClick={() => {
                    handleClose();
                    handleSelect(index);
                  }}
                  selected={index === selectedIndex}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Takor Internship
          </Typography>
          <Typography variant="h6" color="inherit">
            Dhruv
          </Typography>
        </Toolbar>
      </AppBar>

      <MyBody selectedIndex={selectedIndex} />
    </div>
  );
}
