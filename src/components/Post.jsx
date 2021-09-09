import { Row, Card, Col, ListGroup, ListGroupItem, Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import {putIntoPost}from '../utils/PostPut'
import { getPosts } from "../utils/Post";
import NewPost from "./NewPost";

const Post = ({ postData }) => {
  console.log("this is postdata", postData);

  const[showModal,setShowModal]=useState(false)
  const handleClose=()=>setShowModal(false);
  const handleShow=()=>setShowModal(true);


  const[text, setText]=useState("")
    const[thisNewPost, setThisNewPost]=useState([])

  const sendAndClose=(e)=>{
    sendProfileData(e)
    handleClose()
    getPosts()
}
const sendProfileData=async(e)=>{
    e.preventDefault()
    setText({thisNewPost})
    await putIntoPost({thisNewPost})
     console.log("nuovo post",thisNewPost)
} 

  return (
    <div>
      <Button
        variant="primary"
        id="edit-btn"
        className="mx-1 mt-2 mb-2 "
        onClick={() => setShowModal(!showModal)}
      >
        <span>New Post</span>
      </Button>
  
  <NewPost text={thisNewPost} />


      <Modal show={showModal} onHide={handleShow}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create a new post!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Label>What do you have in mind?</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder=""
                                value={text}
                                 onChange={(e)=>setText(e.target.value)}
                                />
                    
                    </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={sendAndClose}>
                        Pubblish
                    </Button>
                    </Modal.Footer>

                </Modal>

      {postData.slice(0, 7).map((post) => (
        <div>
          <Row className="m-auto">
            <Col md={{ span: 6, offset: 3 }} className="m-auto my-5">
              <Card style={{ width: "18rem" }} className="mb-5">
                <Card.Img variant="top" src={post.user.image} alt="userImg" />
                <Card.Body>
                  <Card.Title>{post.user.name}</Card.Title>
                  <h5>{post.username} </h5>
                  <Card.Text>{post.user.bio}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{post.text}</ListGroupItem>
                  <ListGroupItem>{post.user.area}</ListGroupItem>
                  <ListGroupItem>{post.user.id}</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      ))}

    </div>
  );
};
export default Post;
