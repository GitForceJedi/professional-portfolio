import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
const pdfUrl = "https://raw.githubusercontent.com/GitForceJedi/resume/main/Kenneth-Crawford-Resume.pdf"; // Public GitHub PDF URL

function Resume() {
  return (
    <div>
      <Container fluid className="resume-section">
        {/* Download Button (Bottom) */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button variant="primary" href={pdfUrl} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        {/* Google Docs Viewer for Scrollable PDF */}
        <Row className="resume" style={{ justifyContent: "center" }}>
          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
            width="100%"
            height="2246px"
            style={{ border: "none" }}
            title="Resume"
          />
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
