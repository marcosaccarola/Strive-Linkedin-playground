import { useState, useEffect } from "react"
import  { getPosts }  from "../utils/Post"
import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post.jsx"

const Posts = () => {

    const [postData, setPosts]= useState([])
    // const[id,setId] = useState()
  
    const fetchPosts = async () =>{
        try {
            const post = await getPosts();
             console.log(post)
            setPosts(post);
            //console.log(profilesData)
        } catch (error) {
            //console.log(error);
        }
    }
    useEffect(()=>{
        fetchPosts()
    },[])

    return (
        <Container>
          <Row style={{marginTop:50}}>
              <Col md={6} className="col">

                          
                  <Post postData={postData} />


              </Col>
             
          </Row>
      </Container>
    )
}
export default Posts