import { useState, useEffect } from "react"
import  { getPosts }  from "../utils/Post"
import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post.jsx"
import HomePageLeftSide from './HomePage-LeftSide'
//import ProfileRightSide from "./ProfileRightSide";

const Posts = () => {

// {GET POSTS}
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

// {HOME PAGE CONTAINER}
    return (
        <Container>
            <Row style={{marginTop:50}}>
                <Col xs={0} md={3} style={{backgroundColor:"yellow"}}>
                    <HomePageLeftSide />
                </Col>
                <Col xs={12} md={6} className="col" style={{backgroundColor:"red"}}>          
                    <Post postsData={postsData} setPostsData={setPostsData} />
                </Col>
                <Col xs={0} md={3} style={{backgroundColor:"blue"}}>
                    {/* <ProfileRightSide/> */}
                </Col>
            </Row>
        </Container>

    )
}
export default Posts