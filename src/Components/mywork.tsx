import React, {useState} from "react";

import {Card} from "@material-ui/core"

const MyWork = () => {
  const [index, setIndex] = useState(0);
  const [view, setView] = useState(false);

  const content = [
    {
      title: "Note taking app",
      photo: {before: "", after: ""},
      video: "",
      caption: "My first task was to create a simple note taking app.",
    },
    {
      title: "Comment section",
      photo: {before: "", after: ""},
      video: "",
      caption: "I had to create the UI of a future feature that would allow users to comment on the images \
        of the maps.",
    },
    {
      title: "User deletion",
      photo: {before: "", after: ""},
      video: "",
      caption: "I was given the task to implement the UI of the user deletion page."
    },
    {
      title: "Drone video markers",
      photo: {before: "", after: ""},
      video: "",
      caption: "Working on an experimental feature, I had to create a marker that would play a video \
      when clicked on."
    },
    {
      title: "Changing coordinates",
      photo: {before: "", after: ""},
      video: "",
      caption: "Working with react leaflet, I was given a task to be able to change the display coordinates with \
      the click of a button. I also had to make additional UI changes."
    },
  ]
  return (    
  <div className="mywork-container mt-3">
  {
    !view && 
    <div>
      <Card
        className="work-initial"
        onClick={()=>setView(true)}>
        <h1>Click anywhere to view the pictures from my internship</h1>
      </Card>
    </div>
  }
  {view &&
  <div>    
    {content.map((task, index) => (
      <Card className="work-content">
        <div className="work-title">
          <h1>{task.title}</h1>
        </div>
        <div className="wor-before">
          {task.photo.before != "" && <img src={task.photo.before}/>}
        </div>
        <div className="work-after">
          {task.photo.after != "" && <img src={task.photo.after}/>}
        </div>
        <div className="work-video">
          {task.video != "" && <video src={task.video}/>}
        </div>
      </Card>
    ))}     
    <div className="mywork-images">
        <img src={content[index].photo.after}   
        onClick={()=> setIndex((index+1) % content.length)}/>
    </div>
    <Card className="home-caption">
      <p>{content[index].caption}</p>
    </Card>
  </div>
  }

</div>);
};
export default MyWork;
