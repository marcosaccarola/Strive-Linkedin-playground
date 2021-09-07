import { Col, Container, Row } from "react-bootstrap";
import "./Directory.css";

const DirectoryList = () => {
  return (
    <>
      <div className="single-list">
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
      </div>

      <div className="single-list">
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
      </div>
      
      <div className="single-list">
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
      </div>
    
      <div className="single-list">
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
      </div>
    </>
  );
};

export default DirectoryList;
