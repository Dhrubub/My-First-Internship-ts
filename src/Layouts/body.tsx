import React from "react";

import Home from "../Components/home";
import MyWork from "../Components/mywork";
import MyProfile from "../Components/myprofile";

interface MyBodyProps {
  selectedIndex: number;
}
const MyBody = (props: MyBodyProps) => {
  return (
    <div>
      {props.selectedIndex === 0 && <Home />}
      {props.selectedIndex === 1 && <MyWork />}
      {props.selectedIndex === 2 && <MyProfile />}
    </div>
  );
};

export default MyBody;
