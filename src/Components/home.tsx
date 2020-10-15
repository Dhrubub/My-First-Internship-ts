import React, {useState} from "react";

import {Card} from "@material-ui/core"

const Home = () => {
  const [index, setIndex] = useState(0);
  const [view, setView] = useState(false);

  const images = [
    {
      photo: "assets/images/mydesk.jpg",
      caption: "This is the desk that I worked on everyday.",
    },
    {
      photo: "assets/images/kitchen.jpg",
      caption: "This is the kitchen in the office.",
    },
    {
      photo: "assets/images/kitchen2.jpg",
      caption: "This is also the kitchen."
    },
    {
      photo: "assets/images/golf.jpg",
      caption: "A mini golf set if you ever suddenly have the urge to play mini golf while at work."
    },
    {
      photo: "assets/images/Investors_day.jpg",
      caption: "This is a photo taken during the day when investors had come into the office. \
        Everyone had come dressed up today, and since this was the one day people had dressed up, we took a group photo."
    },
    {
      photo: "assets/images/Drone_day.jpg",
      caption: "We went to a ground nearby to take an aerial footage of the area with a drone."
    },
    {
      photo: "assets/images/Drone.jpg",
      caption: "The actual drone."
    }
  ]

  return (
    <div className="home-container mt-3">
      {
        !view && 
        <div>
          <Card
            className="home-initial"
            onClick={()=>setView(true)}>
            <h1>Click anywhere to view the pictures from my internship</h1>
          </Card>
        </div>
      }
      {view &&
      <div>         
        <div className="home-images">
            <img src={images[index].photo}   
            onClick={()=> setIndex((index+1) % images.length)}/>
        </div>
        <Card className="home-caption">
          <p>{images[index].caption}</p>
        </Card>
      </div>
      }

    </div>
  );
};
export default Home;
