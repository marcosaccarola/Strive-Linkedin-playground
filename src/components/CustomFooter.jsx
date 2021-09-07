import { Col, Container, Row } from "react-bootstrap";
import "./CustomFooter.css";
import greyLogo from "../assets/linkedin_grey_logo.png";

const CustomFooter = () => {
  return (
    <footer>
      <Container fluid className="footer-links d-flex py-4">
        <ul className="d-flex flex-md-wrap">

          <li>
            <div className="copyright--container d-flex justify-content-start">
              <img src={greyLogo} alt="LinkedIn"/>
              <span className="pl-2">© 2021</span>
            </div>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">User Agreement</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
          <li>
            <a href="#">Copyright Policy</a>
          </li>
          <li>
            <a href="#">Brand Policy</a>
          </li>
          <li>
            <a href="#">Guest Controls</a>
          </li>
          <li>
            <a href="#">Community Guidelines</a>
          </li>
          <li>
            <a href="#">Language</a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default CustomFooter;
