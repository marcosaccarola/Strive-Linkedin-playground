import { Row, Card, Col, ListGroup, ListGroupItem, Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import  { getPosts }  from "../utils/Post"

const Post = ( {postsData,setPostsData} ) => {
      
    const [newPost, setNewPost] = useState(true)
    const handleInput = (key, value) => {
      setNewPost({
      ...newPost, [key] : value
    })
    }
    
    const POST_URL = "https://striveschool-api.herokuapp.com/api/posts/";
    let bearer =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo";

// {FETCH POST}
   const sendPost=async(e)=>{
     e.preventDefault()
     try {
      const response = await fetch(`${POST_URL}` , {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${bearer}`,
        },
      });
      if (response.ok) {
         alert("NEW POST CREATE");
      } else {
        alert("oi oi");
      }
    } catch (error) {
      throw error;
    }
   }

// {SEND DATA & CLOSE MODAL}
  const sendAndClose= async (e) => {
    e.preventDefault()
    const firstWaiter=await sendPost(e)
    const secondWaiter=await anotherGetPosts()
    handleClose()
}
const anotherGetPosts=async()=>{
  const data=await getPosts()
  setPostsData(data)
}
const[posts,setPosts]=useState({postsData})

// {SHOW/HIDE MODAL}
    const[showModal,setShowModal]=useState(false)
    const handleClose=()=>{setShowModal(false);}
    const handleShow=()=>setShowModal(true);


// {RENDER}
  return (postsData!==undefined && (
    <div>

  {/* BUTTON "NEW POST" */}
      <Button
        variant="primary"
        id="edit-btn"
        className="mx-1 mt-2 mb-2 "
        onClick={() => setShowModal(!showModal)}
      >
        <span>New Post</span>
      </Button>
  
  {/* MODAL WITH FORM   */}
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
                      //placeholder=""
                      //value = {newPost.text}
                        onChange = {(e)=> handleInput( "text", e.target.value)}
                      />
                </Form.Group>
              </Form>

          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
              Close
          </Button>
          <Button variant="primary" onClick={sendAndClose} >
              Pubblish
          </Button>
          </Modal.Footer>
      </Modal>
  
  {/* DISPLAYS GET DATA */}
      {postsData.slice(Math.max(postsData.length -8, 0)).reverse().map((post) => (
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
                  <ListGroupItem>{post.user._id}</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      ))}


    </div>
  ));
};
export default Post;
