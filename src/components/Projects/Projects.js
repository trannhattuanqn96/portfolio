import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="NURIDA TRIP"
              description=" The website that helps people manage travel, booking, and show schedules."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="VISIPAY CLIENT"
              description="The website is about transaction management, transferring money for another customer, management a digital wallet."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="XTREME BUSINESS CONCEPT, INC. (XBC)"
              description="
              XBC is an application that allows users to top up and pay phone services on
              POS devices. Users can pay by cash with the retailer in-store or pay directly in
              cash through the bill acceptor device connected to the POS device. The website is about transaction management, showing transaction reports
              for wholesalers and retailers. XBC launch in the Bahamas. Work with third-party telecommunications providers of the Bahamas (ALIV and BTC - The Bahamas Telecommunications Company Ltd).
              Go live at 09-02-2019."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="CONGDONGSEO.COM"
              description=" This is a website used to share knowledge about SEO. Used to buy, sell, and exchange domains."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="OVH CLOUD"
              description="This is a website used by users to buy VPS. The user and admin  can manage information. Admins have access to a system where they can oversee user accounts. They can also manage and update the listings of hosting providers, ensuring accurate information and a diverse range of VPS options for users. Users can buy VPS through the VNPAY payment gateway."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
