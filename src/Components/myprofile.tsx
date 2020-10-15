import React from "react";
import {Card} from "@material-ui/core"

import profile from "../images/dhruv.jpg";
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import mail from "../images/mail.png"

import 'bootstrap/dist/css/bootstrap.css'

const MyProfile = () => {
  return (
    <div className="myprofile-container">
      <Card className="myprofile-card">
        <div className="myprofile-header alert-info">
          <img className="myprofile-photo" src={profile}/>
          <h1 className="myprofile-name">Dhruv Jobanputra</h1>
        </div>

        <Card>
          <div className="myprofile-description">
            <p>I am a software engineering student at UWA. 
              Through the SCIE2205 unit, I received an internship at Takor, a software company.
              This is a website I created using React to demonstrate what I have learned.</p>
          </div>

          <div className="myprofile-section">
            <a href="https://github.com/Dhruv8601" target="_blank">
              <img className="myprofile-image" src={github}/>
            </a>
            <a href="https://www.linkedin.com/in/dhruv-jobanputra-1990b5178/" target="_blank">
            <img className="myprofile-image" src={linkedin}/>
            </a>
              
              <img style={{cursor: 'pointer'}} className="myprofile-image" src={mail} 
                onClick={() => {
                  var textField = document.createElement('textarea');
                  textField.innerText = "22704304@student.uwa.edu.au";
                  document.body.appendChild(textField);
                  textField.select();
                  document.execCommand('copy');
                  textField.remove();
                  alert('Copied email address to clipboard');
                }}/>
          </div>
        </Card>

      </Card>
    </div>
  )
};
export default MyProfile;
