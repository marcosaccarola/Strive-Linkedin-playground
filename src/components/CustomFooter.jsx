import { Col, Container, Row } from "react-bootstrap";
import "./CustomFooter.css";
import logo from "../assets/linkedin_logo.png";
import logoGrey from "../assets/linkedin_grey_logo.png";


const CustomFooter = () => {
  return (
    <>
      <Container fluid className="directory--grey">
        {/* <div className="d-inline"> */}
          {/* <div className="logo">
            <img src={logo} alt="LinkedIn" />
          </div> */}
        {/* </div> */}
        <Row className="d-flex justify-content-start px-0 py-4">
          <Col xs="auto">
            <div className="logo">
              <img src={logo} alt="LinkedIn" />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <h6>General</h6>
            <ul className="general">
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h6>Browse LinkedIn</h6>
            <ul className="browse-linkedin">
              <li>
                <a href="#">Learning</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Salary</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <h6>Business Solutions</h6>
            <ul className="business-solutions">
              <li>
                <a href="#">Talent</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Learning</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <h6>Directories</h6>
            <ul className="directories">
              <li>
                <a href="#">Members</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Companies</a>
              </li>
              <li>
                <a href="#">Salaries</a>
              </li>
              <li>
                <a href="#">Featured</a>
              </li>
              <li>
                <a href="#">Learning</a>
              </li>
              <li>
                <a href="#">Posts</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Schools</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">News Letters</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Interview Prep</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container fluid className="footer--info">
        <ul className="d-flex flex-sm-column flex-md-row py-4">
          <li className="justify-content-center">
            <div className="logoGrey d-inline-block">
              <img src={logoGrey} />
            </div>
            <span>© 2021</span>
          </li>
          <li className="justify-content-center">
            <a href="#">About</a>
          </li>
          <li className="justify-content-center">
            <a href="#">Accessibility</a>
          </li>
          <li className="justify-content-center">
            <a href="#">User Agreement</a>
          </li>
          <li className="justify-content-center">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="justify-content-center">
            <a href="#">Cookie Policy</a>
          </li>
          <li className="justify-content-center">
            <a href="#">Copyright Policy</a>
          </li>
          <li className="justify-content-center">
            <a href="#">Brand Policy</a>
          </li>
          <li className="justify-content-center">
            <a href="#">Guest Controls</a>
          </li>
          <li className="justify-content-center">
            <a href="#">Community Guidelines</a>
          </li>
          <li className="justify-content-center">
            <a href="#">Language</a>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default CustomFooter;

{
  /* <Container fluid className="footer--main ">
        <Container fluid id="">
          <Row className="footer--gray d-flex justify-content-start px-0 py-4">
            <Col xs={12} md={2}>
              <div className="logo">
                <img src={logo} alt="LinkedIn" />
              </div>
            </Col>
            <Col xs={12} md={2}>
              <h6>General</h6>
              <ul className="general">
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={2}>
              <h6>Browse LinkedIn</h6>
              <ul className="browse-linkedin">
                <li>
                  <a href="#">Learning</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Salary</a>
                </li>
                <li>
                  <a href="#">Mobile</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={2}>
              <h6>Business Solutions</h6>
              <ul className="business-solutions">
                <li>
                  <a href="#">Talent</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Sales</a>
                </li>
                <li>
                  <a href="#">Learning</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={2}>
              <h6>Directories</h6>
              <ul className="directories">
                <li>
                  <a href="#">Members</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Companies</a>
                </li>
                <li>
                  <a href="#">Salaries</a>
                </li>
                <li>
                  <a href="#">Featured</a>
                </li>
                <li>
                  <a href="#">Learning</a>
                </li>
                <li>
                  <a href="#">Posts</a>
                </li>
                <li>
                  <a href="#">Articles</a>
                </li>
                <li>
                  <a href="#">Schools</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">News Letters</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Interview Prep</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container> */
}
