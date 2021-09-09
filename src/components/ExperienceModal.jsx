import { useEffect, useMemo, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ExperienceModal = ({
  experienceId, // exp id from single exp
  userId, //id from explist
  experience, //whole single exp object
  getExperiences,
  show,
  handleClose,
  modalMode = "edit",
}) => {

  const defaultExperience = useMemo(
    () => ({
      role: "",
      company: "",
      description: "",
      area: "",
      startDate: "",
      endDate: null,
    }),
    []
  );

  const [newExperience, setNewExperience] = useState(defaultExperience);
  useEffect(() => {
    if (experienceId && modalMode === "edit") {
      // if modalMode is "edit", set experience
      setNewExperience(experience);
    } else {
      setNewExperience(defaultExperience); // if modal mode changes to "add" set experience to default
    }
  }, [experienceId, userId, show, experience, defaultExperience, modalMode]);

  const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
  const postNewExperience = async (userId) => {
    try {
      const response = await fetch(`${PROFILES_URL}${userId}/experiences`, {
        method: "POST",
        body: JSON.stringify(newExperience),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        getExperiences();
        setNewExperience({
          role: "",
          company: "",
          description: "",
          area: "",
          startDate: "",
          endDate: null,
        });
        alert("Experience added", userId);
      }
    } catch (error) {
      throw error;
    }
  };

  // const updateExperience = (userId, experienceId) => {
  //   alert("put", userId, experienceId);
  // };

  const updateExperience = async (userId, experienceId) => {
    try {
    //   let singleExpData = await getSingleExp(userId, expId);
    //   console.log(singleExpData);
      const response = await fetch(
        `${PROFILES_URL}${userId}/experiences/${experienceId}`,
        {
          method: "PUT",
          headers: {
            body: JSON.stringify(newExperience),
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        const editedData = await response.json();
        setNewExperience(editedData)
        alert('Experience edited')
        // setSingleExp(editedData);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleInput = (e) => {
    setNewExperience({ ...newExperience, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalMode==='add') {
      postNewExperience(userId);
    } else {
      updateExperience(userId, experienceId);
      // console.log("you made it until here!");
    }
    handleClose();
    // console.log("you made it until here!");
    getExperiences();
  };

  return (
    <>
      {/* {console.log("in the model", {
        experienceId,
        userId,
        experience,
        getExperiences,
        show,
        handleClose,
      })}
      {console.log("in the model state", newExperience)} */}
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
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="endDate" controlId="endDate">
              <Form.Label>To</Form.Label>
              <Form.Control
                value={newExperience.endDate}
                onChange={(e) => handleInput(e)}
                type="text"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            POST
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExperienceModal;
