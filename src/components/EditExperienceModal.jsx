import { useEffect, useState } from "react";
import { Alert, Button, Form, Modal, Spinner } from "react-bootstrap";

const EditExperienceModal = ({ userId, experienceId, getExperiences }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const defaultExperience = {
    role: "",
    company: "",
    description: "",
    area: "",
    startDate: "",
    endDate: null,
  };

  const [thisExperience, setThisExperience] = useState(defaultExperience);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
  let BEARER_TOKEN = ''
  if( userId === "613884772068d2001522b4c6"){
    BEARER_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4ODQ3NzIwNjhkMjAwMTUyMmI0YzYiLCJpYXQiOjE2MzEwOTM4ODAsImV4cCI6MTYzMjMwMzQ4MH0.Ckf38QVqF801iXzjIknOZtireFH6vgeoNw9nXSiH7cA"
  } else if (userId ==='613888102068d2001522b4d4'){
    BEARER_TOKEN ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4ODgxMDIwNjhkMjAwMTUyMmI0ZDQiLCJpYXQiOjE2MzEwOTQ4MDAsImV4cCI6MTYzMjMwNDQwMH0.5U4TIdYxh2YFwTVkvYg4muu1_s4EW1EEsP_E0rZLESA"
  } else if (userId === "61360d537be6c10015f9dbac") {
    BEARER_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo"
  }
  const getSingleExperience = async (userId, expId) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${PROFILES_URL}${userId}/experiences/${expId}`,
        {
          headers: {
            Authorization: BEARER_TOKEN
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setThisExperience(data);
        setIsLoading(false);
        // console.log(data)
        // console.log("from this experience",thisExperience)
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

  const editExperience = async (userId, expId) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${PROFILES_URL}${userId}/experiences/${expId}`,
        {
          method: "PUT",
          body: JSON.stringify(thisExperience),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const editedData = await response.json();
        setThisExperience(editedData);
        getExperiences();
        setIsLoading(false);
        // alert("Experience edited")
        // console.log(editedData)
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
  //   console.log("from this experience",thisExperience)

  useEffect(() => {
    getSingleExperience(userId, experienceId);
  }, []);

  const handleInput = (e) => {
    setThisExperience({ ...thisExperience, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editExperience(userId, experienceId);
    handleClose();
  };

  return (
    <>
      {isLoading && (
        <>
          <Spinner animation="border" variant="primary" />
          <Alert variant="success"> Completed! </Alert>
        </>
      )}

      {isError && <Alert variant="danger"> Something went wrong </Alert>}
      <Button id="editExp-btn" variant="warning" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="role" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                value={thisExperience.role}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Your role"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="company" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                value={thisExperience.company}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Company name"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="area" controlId="area">
              <Form.Label>Area</Form.Label>
              <Form.Control
                value={thisExperience.area}
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
                value={thisExperience.description}
                onChange={(e) => handleInput(e)}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3" id="startDate" controlId="startDate">
              <Form.Label>From</Form.Label>
              <Form.Control
                value={thisExperience.startDate}
                onChange={(e) => handleInput(e)}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="endDate" controlId="endDate">
              <Form.Label>To</Form.Label>
              <Form.Control
                value={thisExperience.endDate}
                onChange={(e) => handleInput(e)}
                type="text"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleClose}>
              PUT
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditExperienceModal;
