import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { PiSoccerBallFill } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tran Nhat Tuan </span>
            <br />I am currently employed as a software developer at{" "}
            <a
              href="https://gofiber.vn/"
              target="_blank"
              rel="noopener"
              className="link_g"
            >
              <span className="purple">Gofiber</span>
            </a>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <PiSoccerBallFill /> Football
            </li>
            <li className="about-activity">
              <IoGameControllerOutline /> Playing Games
            </li>

            <li className="about-activity">
              <FaMotorcycle /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            Learning never exhausts the mind.{" "}
          </p>
          <footer className="blockquote-footer">Leonardo da Vinci.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
