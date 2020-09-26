import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";

interface menuProps {
  isOpen: boolean;
  handleClose: () => void;
}

const MyMenu = (props: menuProps) => {
  const options = ["Home", "My Work", "My Profile"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Menu open={props.isOpen} onClose={props.handleClose}>
      {options.map((option, index) => (
        <MenuItem
          key={option}
          onClick={() => {
            props.handleClose();
            handleSelect(index);
          }}
          selected={index === selectedIndex}
        >
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
};
export default MyMenu;
