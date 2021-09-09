import { useEffect, useMemo, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ExperienceModal = ({
  experienceId,
  userId,
  exp,
  getExps,
  show,
  handleClose,
  modalMode = "edit",
}) => {
  const defaultExp = useMemo(
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

  const [newExp, setNewExp] = useState(defaultExp);
  useEffect(() => {
    if (experienceId && modalMode === "edit") {
      // if modalMode is "edit", set experience
      setNewExp(exp);
    } else {
      setNewExp(defaultExp); // if modal mode changes to "add" set experience to default
    }
  }, [experienceId, userId, show, exp, defaultExp, modalMode]);

  // useEffect(() => {
  //   if (experienceId) {
  //     setNewExp(exp);
  //   }
  // }, []);
  const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
  const postNewExp = async () => {
    try {
      const response = await fetch(`${PROFILES_URL}${userId}/experiences`, {
        method: "POST",
        body: JSON.stringify(newExp),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        getExps();
        setNewExp({
          role: "",
          company: "",
          description: "",
          area: "",
          startDate: "",
          endDate: null,
        });
        alert("Experience added");
      }
    } catch (error) {
      throw error;
    }
  };

  const updateExp = () => {
    alert("put");
  };

  //   const updateExp = async (userId, expId) => {
  //     try {
  //     //   let singleExpData = await getSingleExp(userId, expId);
  //     //   console.log(singleExpData);
  //       const response = await fetch(
  //         `${PROFILES_URL}${userId}/experiences/${expId}`,
  //         {
  //           method: "PUT",
  //           headers: {
  //             body: JSON.stringify(exp),
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
  //             "Content-type": "application/json",
  //           },
  //         }
  //       );
  //       if (response.ok) {
  //         const editedData = await response.json();
  // 		setNewExp(editedData)
  //         // setSingleExp(editedData);
  //       }
  //     } catch (error) {
  //       throw error;
  //     }
  //   };

  const handleInput = (e) => {
    setNewExp({ ...newExp, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      postNewExp();
    } else {
      updateExp();
	  console.log('you made it until here!')
    }
    handleClose();
    getExps();
  };

  return (
    <>
      {/* {console.log("in the model", {
        experienceId,
        userId,
        exp,
        getExps,
        show,
        handleClose,
      })}
      {console.log("in the model state", newExp)} */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postNewExp}>
            <Form.Group className="mb-3" id="role" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                value={newExp.role}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Your role"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="company" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                value={newExp.company}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Company name"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="area" controlId="area">
              <Form.Label>Area</Form.Label>
              <Form.Control
                value={newExp.area}
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
                value={newExp.description}
                onChange={(e) => handleInput(e)}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3" id="startDate" controlId="startDate">
              <Form.Label>From</Form.Label>
              <Form.Control
                value={newExp.startDate}
                onChange={(e) => handleInput(e)}
                type="number"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="endDate" controlId="endDate">
              <Form.Label>To</Form.Label>
              <Form.Control
                value={newExp.endDate}
                onChange={(e) => handleInput(e)}
                type="number"
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
