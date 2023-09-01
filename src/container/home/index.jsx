import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { MdContactPage } from "react-icons/md";

import "./styles.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "react-bootstrap/Button";
import pdf from "C:\\DSH\\devindra-portfolio\\src\\container\\contact\\Devindra Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../images/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import { useState } from 'react';
import ChatButton from './ChatButton';
const Home = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  const openChatBot = () => {
    setShowChatBot(true);
  };
  let navigate = useNavigate();
  const handleNewProcess = () => {
    navigate(`/contact/`);
    //HOW DO I REDIRECT THE CLICK FROM HERE TO "/contact" page
  };
  return (
    <section className="home" id="home">
      {/* <div className="home__text-wrapper">
        <h1>Hello,My name is Devindra</h1>
      </div>
      <div className="home__text-wrapper__animated_typing">
        <h1 style={{ margin: "50px" }}>
          I'm a {" "}
          <span
            style={{
              fontWeight: "bold",
              color: "var(--selected-theme-sub-text-color)",
            }}
          >
            {text}
          </span>
          <span style={{ color: "var(--selected-theme-main-color)" }}>
            <Cursor cursorStyle="<" />
          </span>
        </h1>
          </div> */}

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name" > Devindra Hirabatti</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <Button
              variant="var(--selected-theme-main-color)"
              onClick={handleNewProcess}
              style={{ maxWidth: "270px", height: "70px" }}
              className="Button_responsive"
            >
              <MdContactPage />
              &nbsp;Contact Me
            </Button>
            <Row style={{ justifyContent: "center" }}>
              <Button
                variant="var(--selected-theme-main-color)"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "2700x", height: "70px" }}
                className="Button_responsive"
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </Row>
          </div>
          <ChatButton/>
        </div>
      </Animate>
      
     
      <Home2 />

    </section>
  );
};

export default Home;
