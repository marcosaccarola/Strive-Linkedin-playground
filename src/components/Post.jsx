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
import { useEffect, useState } from "react";
import { getPosts } from "../utils/Post";
import "./Post.css";
import user from "../assets/user.jpeg";
import pic from "../assets/pic.png";
import video from "../assets/video.png";
import event from "../assets/event.png";
import article from "../assets/article.png";

const Post = ({ postData }) => {
  // console.log("this is postdata", postData);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // const[message, setMessage]=useState("")
  // const[name, setName]=useState("")
  // const[text, setText]=useState("")

  const [post, setPost] = useState({
    message: "",
    name: "",
    text: "",
  });

  const [newPost, setNewPost] = useState(true);
  // const thisNewPost = {message, name, text}
  const handleInput = (key, value) => {
    setPost({
      ...post,
      [key]: value,
    });
  };

  // const id = "_id"
  const POST_URL = "https://striveschool-api.herokuapp.com/api/posts/";
  let bearer =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log("inside putIntoPost and before fetch",post)
      const response = await fetch(`${POST_URL}`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${bearer}`,
        },
      });
      console.log("this should be the response after the fetch", response);
      if (response.ok) {
        const postData = await response.json();
        alert("NEW POST CREATE");
        console.log("my postData", postData);
        setNewPost(true);
        setPost({
          message: "",
          name: "",
          text: "",
        });
      } else {
        console.log("error");
        alert("oi oi");
      }
    } catch (error) {
      throw error;
    }
  };
  //    console.log("the new post:", post)

  //    let response = await putIntoPost()
  //    if (response.ok) {
  //      setPost({
  //       message:"",
  //       name:"",
  //       text:"",
  //      })
  //       console.log("the new post:", post)
  //    } else {
  //      console.log("something wrong in this post")
  //    }
  //    } catch (error) {
  //      console.log(error)
  //    }
  //  }

  // useEffect((prevPost, newPost ) => {
  //      if ( prevPost!=== newPost) {
  //         setPost(post)
  //      }
  // },[])

  const sendAndClose = async (e) => {
    // sendPostData(e)
    handleClose();
    handleInput(e);
    const awaiter = await handleSubmit(e);
    console.log("this is the last creation", post);
    getPosts();
  };

  //   const sendPostData = async (e) => {
  //     console.log(thisNewPost ,'testttttttt')
  //     e.preventDefault()
  //     setMessage(thisNewPost)
  //     setName(thisNewPost)
  //     setText(thisNewPost)
  //     await putIntoPost(thisNewPost)

  //     console.log("new post", thisNewPost)
  // }

  return (
    <div>
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

      {/* <NewPost thisNewPost={thisNewPost} />  */}

      {/* <> */}
      {/* { newPost && <NewPost post={post}/>} */}
      {/* <p>{post.message}</p>
         <p>{post.name}</p>
         <p>{post.text}</p> */}

      {/* ) }
       </>  */}

      <Modal show={showModal} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new post!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>What do you have in mind?</Form.Label>
              {/* <Form.Control 
                                type="text" 
                                placeholder=""
                                value = {post.message}
                                 onChange = {(e)=> handleInput( "message", e.target.value)}
                                /> */}
              {/* { handleInput(e, 'text/name/...')} */}
              <Form.Control
                type="text"
                placeholder=""
                value={post.text}
                onChange={(e) => handleInput("text", e.target.value)}
              />
              {/* <Form.Control 
                                type="text" 
                                placeholder=""
                                value = {post.name}
                                 onChange = {(e)=> handleInput( "name", e.target.value)}
                                /> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={sendAndClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={sendAndClose}>
            Pubblish
          </Button>
        </Modal.Footer>
      </Modal>

      {postData
        .slice(Math.max(postData.length - 10, 0))
        .reverse()
        .map((post) => (
          <div>
            
                <div className="cardBody">
                  <div className="infoContainer">
                    <p className="name">{post.user.name}</p>
                     <p className="info" > {post.username}</p>
                      <p className="info">{post.user.area}</p>
                      <p className="info">{post.user.bio}</p>
                     </div>
                      <p className="post">{post.text}</p>
                  <img src={post.user.image} alt="userImg" />
  
                </div>
              
            
          </div>
        ))}
    </div>
  );
};
export default Post;
