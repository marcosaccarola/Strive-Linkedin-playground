import {
  Row,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Modal,
  Form,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import  { getPosts }  from "../utils/Post"

import "./Post.css";
import user from "../assets/user.jpeg";
import pic from "../assets/pic.png";
import video from "../assets/video.png";
import event from "../assets/event.png";
import article from "../assets/article.png";

const Post = ( {postsData,setPostsData} ) => {






  const [post, setPost] = useState({
    message: "",
    name: "",
    text: "",
  });

      const [newPost, setNewPost] = useState(true)
    const handleInput = (key, value) => {
      setNewPost({
      ...newPost, [key] : value
    })
    }
  
  const POST_URL = "https://striveschool-api.herokuapp.com/api/posts/";
  let bearer =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo";

// {FETCH POST POST POST POST POST POST}
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


  /////////////////////////////////////////////////////////////////////////////////
  // {FETCH DELETE DELETE DELETE DELETE}
  
  const deletePost=async(e)=>{
    e.preventDefault()
    try {
     const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}` , {

       method: "DELETE",
       //body: JSON.stringify(postChanges),
       headers: {
         //"Content-Type": "application/json",
         Authorization: `${bearer}`,
       },
     });
     if (response.ok) {
        alert("POST DELETED");
     } else {
       alert("SOMETHING WENT WRONG");
     }
   } catch (error) {
     throw error;
   }
 }
 // {DELETE & REFRESH}
 const deleteTHISPost= async (e) => {
  e.preventDefault()
  const firstWaiter=await deletePost(e)
  const secondWaiter=await anotherGetPosts2()
  //handleClose()
}
const anotherGetPosts2=async()=>{
const data=await getPosts()
setPostsData(data)
}
 
const[postId,setPostId]=useState('')


// {SHOW/HIDE MODAL}
    const[showModal,setShowModal]=useState(false)
    const handleClose=()=>{setShowModal(false);}
    const handleShow=()=>setShowModal(true);



// {RENDER}
  return (postsData!==undefined && (
    <div>

      {/* BUTTON "NEW POST" */}
      <div className="postContainer">
        <div className="generateNewPostContainer">
          <div className="picAndButton">
          <img src={user} alt="profile picture" />
            <Button
              variant="primary"
              id="edit-btn"
              className="mx-1 mt-2 mb-2 newPost"
              onClick={() => setShowModal(!showModal)}
            >
              <span>Start a post</span>
            </Button>
          </div>
          <div className="buttonsGroup">
            <div className="button">
            <img src={pic} />
              <p>Photo</p>
            </div>
            <div className="button">
            <img src={video} />
              <p>Video</p>
            </div>
            <div className="button">
            <img src={event}/>
              <p>Event</p>
            </div>
            <div className="button">
            <img src={article} />
              <p>Write article</p>
            </div>
          </div>
        </div>
      </div>

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
      {postsData
        .slice(Math.max(postsData.length - 10, 0))
        .reverse()
        .map((post) => (
          <div key={post._id} onClick={(e) => setPostId(post._id)}>
            
                <div className="cardBody">
                  <div className="infoContainer">
                    <p className="name">{post.user.name}</p>
                     <p className="info" > {post.username}</p>
                      <p className="info">{post.user.area}</p>
                      <p className="info">{post.user.bio}</p>
                     </div>
                      <p className="post">{post.text}</p>
                  <img src={post.user.image} alt="userImg" />
                  {((post.user._id==='61360d537be6c10015f9dbac')||(post.user._id==='613888102068d2001522b4d4')||(post.user._id==='613884772068d2001522b4c6')) &&(
                  <Button variant="danger" onClick={deleteTHISPost}>PLEASE DELETE ME</Button>
                  )}
                </div>
              
            
          </div>
        ))}
  






    </div>
  ));
};
export default Post;
