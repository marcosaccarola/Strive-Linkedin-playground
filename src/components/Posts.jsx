import { useState, useEffect } from "react"
import  { getPosts }  from "../utils/Post"
import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post.jsx"
import ProfileRightSide from "./ProfileRightSide";

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
        <Col xs={0} md={3}>

        </Col>
            <Col xs={12} md={6} className="col">          
                <Post postData={postData} />
            </Col>
            <Col xs={0} md={3}>
                 <ProfileRightSide/>
            </Col>
        </Row>
    </Container>
    )
}
export default Posts