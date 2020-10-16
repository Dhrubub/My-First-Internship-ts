import React, {useState} from "react";

import {Card} from "@material-ui/core"

import Collapse from 'react-bootstrap/Collapse'

import github from "../images/github.png"
import react from "../images/react4.png"
import typescript from "../images/typescript2.png"

const MyWork = () => {
  const [view, setView] = useState(false);
  
  const open = [false,
  false,
  false,
  false,
  false];

  const [isOpen, setIsOpen] = useState<Array<boolean>>(open)


  const content = [
    {
      title: "Note taking app",
      photo: {before: "", after: ""},
      video: "assets/images/Note-taking2.mp4",
      caption: "My first task was to create a simple note taking app.",
    },
    {
      title: "Comment section",
      photo: {before: "assets/images/BeforeCommentSection.jpg", after: "assets/images/AfterCommentSection.jpg"},
      video: "",
      caption: "I had to create the UI of a future feature that would allow users to comment on the images \
        of the maps.",
    },
    {
      title: "User deletion",
      photo: {before: "", after: "/assets/images/DeleteModal.jpg"},
      video: "",
      caption: "I was given the task to implement the UI of the user deletion page."
    },
    {
      title: "Drone video markers",
      photo: {before: "", after: ""},
      video: "assets/images/Video-marker2.mp4",
      caption: "Working on an experimental feature, I had to create a marker that would play a video \
      when it was clicked on."
    },
    {
      title: "Changing coordinates",
      photo: {before: "", after: ""},
      video: "assets/images/ChangeCoordinates.mp4",
      caption: "Working with react leaflet, I was given a task to be able to change the display coordinates with \
      the click of a button. I also had to make additional UI changes."
    },
  ]
  return (    
  <div className="work-container">
  {
    !view && 
    <div>
      <Card
        className="work-initial"
        onClick={()=>setView(true)}>
        <h3>Throughout the internship, I made use of React.js, Typescript, Github and various CSS frameworks 
          such as material-ui, bootstrap and reactstrap. Click anywhere to view the work I did. </h3>
          <img className="work-image-icon" src={react}/>
          <img className="work-image-icon" src={typescript}/>
          <img className="work-image-icon" src={github}/>
      </Card>
    </div>
  }
  {view &&
  <div>    
    {content.map((task, index) => (
      <Card className="work-content-home" key={index}>
        <div className="work-title">
        <button className="collapsible"
                onClick={() => {
                  open[index] = !isOpen[index]; 
                  setIsOpen(open)}}

                aria-controls="collapse-content"
                aria-expanded={isOpen[index]}>{task.title}</button>
        <Collapse in={isOpen[index]}>
        <div id="collapse-content">
            <div className="work-caption">
                <h4>{task.caption}</h4>
            </div>
            <div className="work-before">
              {task.photo.before != "" && <div>
                  <h3>Before</h3> 
                  <img className="work-image" src={task.photo.before}/>
                </div>}
            </div>
            <div className="work-after">
              {task.photo.after != "" && <div>
                  <h3>After</h3> 
                  <img className="work-image" src={task.photo.after}/>
                </div>}
            </div>
            <div className="work-video">
              {task.video != "" && <div>
                  <h3>A video demonstration</h3>
                  <video controls className="work-image" src={task.video}/>
                </div>}
            </div>
          </div>

        </Collapse>
        </div>
      </Card>
    ))}     
  </div>
  }

</div>);
};
export default MyWork;

