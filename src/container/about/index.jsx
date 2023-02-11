import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
// import { DiApple, DiAndroid } from "react-icons/di";
// import { FaDev, FaDatabase } from "react-icons/fa";
// import { Animate } from "react-simple-animate";
// import { personalData } from "./utils";
//import "./styles.scss";
import '../../style.scss';
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import AboutImage from "../../images/about.png";
//import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
<Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "4.1em", paddingBottom: "20px", color:"white" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={AboutImage} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

       
      </Container>
    
      
    </section>
  );
};

export default About;
