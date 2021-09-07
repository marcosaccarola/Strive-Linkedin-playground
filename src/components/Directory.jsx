import { Col, Container, Row } from "react-bootstrap";
import "./Directory.css";
import blueLogo from "../assets/linkedin_blue_logo.png";
import DirectoryLists from "./DirectoryLists";

const Directory = () => {
  return (
    <section className="directory--grey py-4">
      <Container
        fluid
        className="logoLists--container container-lg d-flex justify-content-between"
      >
        <div className="logo mb-3 mr-3">
          <img src={blueLogo} alt="LinkedIn" />
        </div>

        <div className="lists--container d-flex justify-content-start w-100">
          <DirectoryLists />
        </div>
      </Container>
    </section>
  );
};

export default Directory;
