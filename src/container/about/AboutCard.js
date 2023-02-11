import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import '../../style.scss';
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" ,fontSize:"2rem"}}>
            Hi Everyone, I am <span className="purple">Devindra Hirabatti </span>
             from <span className="purple">Karnataka, India.</span>
            <br />I am currently pursuing my <span className="purple">CSE degree from KLS Gogte Institute Of Technology, Belagavi</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            <br />
            <br/>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
          </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;