import { useState, useEffect } from "react"
import  { getPosts }  from "../utils/Post"
import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post.jsx"

const Posts = () => {

    const [postsData, setPostsData]= useState([])
    const fetchPosts = async () =>{
        try {
            const data = await getPosts();
            setPostsData(data);
        } catch (error) {
        }
    }
    useEffect(()=>{
        fetchPosts()
    },[])

    return (
        <Container>
          <Row style={{marginTop:50}}>
              <Col md={6} className="col">
                       
                  <Post postsData={postsData} setPostsData={setPostsData} />

              </Col>            
          </Row>
      </Container>
    )
}
export default Posts