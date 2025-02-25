import React from "react";
import Card from "react-bootstrap/Card";
import { GoDotFill } from "react-icons/go";

function AboutBody() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="maincolor">Ken Crawford </span>
            I am a <span className="maincolor"> Full Stack Developer.</span>
            <br /><br />
            With a robust background as a Full Stack Developer, I offer over five years of diverse experience in 
            software development, web development, application development, and API development. My expertise spans 
            various modern technologies, including ReactJS, NestJS, NodeJS, TypeScript, and databases such as MySQL, 
            MSSQL, and PostgreSQL. Additionally, I have extensive experience deploying applications and microservices 
            on leading cloud platforms like IBM Cloud, AWS, and Microsoft Azure.
            <br /><br />
            In my career, I have seamlessly transitioned between roles, including Dynamics 365 Developer, Power Platform 
            Developer, Web Developer, and Full Stack Developer. As a Senior Full Stack Developer and team lead, I have 
            mentored new team members and development teams, fostering a collaborative and innovative environment. My 
            responsibilities have included web application and microservice development, project architecture and design, 
            full-stack code contributions, implementing new project features, REST API server monitoring and management, 
            and database administration.
            <br /><br />
            Notably, I have worked extensively with FHIR (Fast Healthcare Interoperability Resources), applying it as a 
            data standard for multiple health sector applications. My experience includes deploying FHIR Servers, 
            implementing FHIR guidelines, maintaining interoperability standards, and enhancing FHIR Servers with custom 
            operations and search parameters.
            <br /><br />
            I have a strong background in Agile/Scrum environments, where I have actively contributed to development teams 
            to bring applications to production successfully. Additionally, I have implemented CI/CD pipelines, optimizing 
            the development process for efficient and high-quality software delivery.
            <br /><br />
            Early in my career, I worked as a Graphic Designer, a background that provides me with a creative edge as a Full 
            Stack Developer. The transition from Graphic Designer to Web Developer allowed me to merge aesthetic 
            sensibilities with technical expertise, enabling me to develop visually appealing and functionally robust 
            applications. This creative foundation enhances my ability to deliver user-friendly and engaging solutions.
            <br /><br />
            With a combination of technical proficiency, leadership experience, Agile methodologies, and a unique blend of 
            design and development skills, I am passionate about contributing to innovative and impactful projects in the 
            software development space.
          </p>
          <br /><br />
          <p>
            Personal Interests:
          </p>
          <br></br>
          <ul>
            <li className="about-activity">
              <GoDotFill /> Virtual Reality
            </li>
            <li className="about-activity">
              <GoDotFill /> Automobile Enthusiast
            </li>
            <li className="about-activity">
              <GoDotFill /> Computer Games
            </li>
            <li className="about-activity">
              <GoDotFill /> Developing Coding Projects
            </li>
            <li className="about-activity">
              <GoDotFill /> Self Learning New Technologies and Frameworks
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutBody;