import { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
// import AddExpForm from './AddExpForm';

const ExperienceModal = ({id}) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newExp, setNewExp] = useState({
      role: '',
      company: '',
      description: '',
      area: '',
      startDate: '',
      endDate: null
    })
    
    const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
    const postNewExp = async (e) => {
      e.preventDefault()
      try {
        const response = await fetch(`${PROFILES_URL}${id}/experiences`, {
          method: 'POST',
          body: JSON.stringify(newExp),
          headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
              'Content-type': 'application/json'
          }
        })
        if(response.ok){
          alert('Experience added')
        }
      } catch (error) {
        throw error
      }
    }

    const handleInput = (e) => {
      setNewExp(
        {...newExp, [e.target.id]: e.target.value}
      )
    }

   return (
    <>
      <Button id="addExp-btn" variant="primary" onClick={handleShow}>
        Add experience +
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postNewExp}>
            <Form.Group className="mb-3" id="role" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control value={newExp.role} onChange={(e)=>handleInput(e)} type="text" placeholder="Your role" />
            </Form.Group>

            <Form.Group className="mb-3" id="company" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control value={newExp.company} onChange={(e)=>handleInput(e)} type="text" placeholder="Company name" />
            </Form.Group>

            <Form.Group className="mb-3" id="area" controlId="area">
              <Form.Label>Area</Form.Label>
              <Form.Control value={newExp.area} onChange={(e)=>handleInput(e)} type="text" placeholder="Area" />
            </Form.Group>

            <Form.Group className="mb-3" id="description" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control value={newExp.description} onChange={(e)=>handleInput(e)} as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" id="startDate" controlId="startDate">
              <Form.Label>From</Form.Label>
              <Form.Control value={newExp.startDate} onChange={(e)=>handleInput(e)} type="number" />
            </Form.Group>

            <Form.Group className="mb-3" id="endDate" controlId="endDate">
              <Form.Label>To</Form.Label>
              <Form.Control value={newExp.endDate} onChange={(e)=>handleInput(e)} type="number" />
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
    </>
  );
};

export default ExperienceModal

{/* <AddExpForm handleClose={handleClose}/> */}