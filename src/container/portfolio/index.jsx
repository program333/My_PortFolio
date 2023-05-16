import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import "./styles.scss";
import { filterOptions, portfolioData } from "./utils";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectcard";
import imageone from '../../images/image1.jpg';
import imagetwo from '../../images/image2.jpg';
import imagethree from '../../images/image3.jpg';
import imagefour from '../../images/image4.jpg';
import imagefive from '../../images/image5.png';
import imagesix from '../../images/image6.jpg';

const Portfolio = () => {
  const [filtervalue, setFilterValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleFilter = (id) => {
    setFilterValue(id);
  };

  

  const filteredPortfolioData =
    filtervalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filtervalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<AiFillProject size={40} />}
      />
      {/* <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
              className = {option.id === filtervalue ? 'active' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredPortfolioData.map((item, key) => (
            <div
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={key}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="project image" />
                </a>
              </div>
              <div className="overlay">
                {hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <button><a href={item.projectLink} target="_blank">Visit</a></button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div> */}
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", fontSize:"2rem" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagefive}
              isBlog={false}
              title="Places Storage Website"
              description="It's a MERN stack application where user can login and add his places to website.He can also view the other users places.He can delete and edit the places he added."
              ghLink="https://github.com/program333/mern_place_finder_frontend"
              demoLink="https://mernplacefinder.netlify.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagesix}
              isBlog={false}
              title="Personal Expenses Tracker App"
              description="Its a Flutter project"
              ghLink="https://github.com/program333/FlutterPersonalExpensesTrackerApp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagethree}
              isBlog={false}
              title="TicTacToe"
              description="Its a JavaScript based project."
              ghLink="https://github.com/program333/TicTacToe"
              demoLink="https://program333.github.io/TicTacToe/"              
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageone}
              isBlog={false}
              title="Coffee Shop Website"
              description="Using HTML, CSS, JS"
              ghLink="https://github.com/program333/Coffee_Website"
              demoLink="https://program333.github.io/Coffee_Website/"
            
            />
          </Col>

          
        </Row>
      </Container>
  

    </section>
  );
};

export default Portfolio;
