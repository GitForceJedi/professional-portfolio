import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import TypeSkills from "./TypeSkills";
import TypeSkillsTitle from "./TypeSkillsTitle";
import TypeTools from "./TypeTools";
import TypeToolsTitle from "./TypeToolsTitle";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Container>
        {/*<h1 className="project-heading">
          <strong className="maincolor">Skills</strong>
        </h1>*/}
        <TypeSkillsTitle />
        <TypeSkills />
        <Techstack />

        {/*<h1 className="project-heading">
          <strong className="maincolor">Tools</strong>
        </h1>*/}
        <TypeToolsTitle />
        <TypeTools />
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
