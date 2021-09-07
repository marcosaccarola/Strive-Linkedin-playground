import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddExpForm from './AddExpForm';

const ExperienceModal = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
          <AddExpForm handleClose={handleClose}/>
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