import { useState, useEffect } from "react";
import { Alert, Button, Form, Modal, Spinner } from "react-bootstrap";
import {BiPlus} from 'react-icons/bi';
import addNewExperience from '../utils/profiles';

const ExperienceModal = ({ id, getExperiences }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedFile, setSelectedFile] = useState(null);
	const [isFilePicked, setIsFilePicked] = useState(false);

  const defaultExperience = {
    role: "",
    company: "",
    description: "",
    area: "",
    startDate: "",
    endDate: null,
  };

  const [newExperience, setNewExperience] = useState({ defaultExperience });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
  let BEARER_TOKEN = ''
  if( id === "613884772068d2001522b4c6"){
    BEARER_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4ODQ3NzIwNjhkMjAwMTUyMmI0YzYiLCJpYXQiOjE2MzEwOTM4ODAsImV4cCI6MTYzMjMwMzQ4MH0.Ckf38QVqF801iXzjIknOZtireFH6vgeoNw9nXSiH7cA"
  } else if (id ==='613888102068d2001522b4d4'){
    BEARER_TOKEN ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4ODgxMDIwNjhkMjAwMTUyMmI0ZDQiLCJpYXQiOjE2MzEwOTQ4MDAsImV4cCI6MTYzMjMwNDQwMH0.5U4TIdYxh2YFwTVkvYg4muu1_s4EW1EEsP_E0rZLESA"
  } else if (id === "61360d537be6c10015f9dbac") {
    BEARER_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo"
  }
  
  const postNewExperience = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${PROFILES_URL}${id}/experiences`, {
        method: "POST",
        body: JSON.stringify(newExperience),
        headers: {
          Authorization: BEARER_TOKEN,
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        getExperiences();
        setNewExperience(defaultExperience);
        // alert("Experience added");
        setIsLoading(false);
      } else {
        setIsError(true);
        setIsLoading(false);
        throw new Error();
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      throw error;
    }
  };

  const handleInput = (e) => {
    setNewExperience({ ...newExperience, [e.target.id]: e.target.value });
  };


  return (
    <div className="experiences-container">
      {isLoading && (
        <>
          <Spinner animation="border" variant="primary" />
          <Alert variant="success"> Completed! </Alert>
        </>
      )}

      {isError && <Alert variant="danger"> Something went wrong </Alert>}
      <Button id="add-btn" variant="light" className="mt-4 mr-3 ml-auto px-0 py-0 border-0"
        style={{color:"rgba(0, 0, 0, 0.733)",backgroundColor:"white",marginBottom:5}} 
        onClick={handleShow}
      >
         <BiPlus size={40} /> 
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postNewExperience}>
            <Form.Group className="mb-3" id="role" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                value={newExperience.role}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Your role"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="company" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                value={newExperience.company}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Company name"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="area" controlId="area">
              <Form.Label>Area</Form.Label>
              <Form.Control
                value={newExperience.area}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Area"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              id="description"
              controlId="description"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={newExperience.description}
                onChange={(e) => handleInput(e)}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3" id="startDate" controlId="startDate">
              <Form.Label>From</Form.Label>
              <Form.Control
                value={newExperience.startDate}
                onChange={(e) => handleInput(e)}
                type="month"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="endDate" controlId="endDate">
              <Form.Label>To</Form.Label>
              <Form.Control
                value={newExperience.endDate}
                onChange={(e) => handleInput(e)}
                type="month"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="picture" controlId="endDate">
              <Form.Label>Upload File</Form.Label>
              <Form.Control
                // value={newExperience.endDate}
                onChange={(e) => handleInput(e)}
                type="file"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleClose}>
              POST
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExperienceModal;
