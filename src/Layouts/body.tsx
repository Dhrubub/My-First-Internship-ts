import React from "react";

import Home from "../Components/home";
import MyWork from "../Components/mywork";
import MyProfile from "../Components/myprofile";

import logo from "../images/logo5.png";

interface MyBodyProps {
  selectedIndex: number;
}
const MyBody = (props: MyBodyProps) => {
  return (
    <div>
      <img className="background-image" src={logo}/>
      {props.selectedIndex === 0 && <Home />}
      {props.selectedIndex === 1 && <MyWork />}
      {props.selectedIndex === 2 && <MyProfile />}
    </div>
  );
};

export default MyBody;
