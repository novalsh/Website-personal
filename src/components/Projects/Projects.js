import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tickat from "../../Assets/Projects/tickat.png";
import vue from "../../Assets/Projects/vueStore.png";
import gh from "../../Assets/Projects/github.jpg";

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
              imgPath={tickat}
              isBlog={false}
              title="Tickat"
              description="This website is a website that was created
              to carry out ticket purchase transactions if there is an event. Ticket website
              It was created with the Laravel framework and MySQL as the database"
              ghLink="https://github.com/latifulfikri/website_tickat"
              demoLink="https://tickat.fikriyuwi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vue}
              isBlog={false}
              title="E-Commerce Website"
              description="This website is an e-commerce website
              created to buy and sell goods. The Store website was created with Vue.js
              as the front-end, Node express as the back-end, and MongoDB as
              the database"
              ghLink="https://github.com/novalsh/Store/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gh}
              isBlog={false}
              title="Gitbuh.io"
              description="For more details, see my Github."
              ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
