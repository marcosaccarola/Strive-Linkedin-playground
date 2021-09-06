import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import ProfileCenter from "./ProfileCenter";
import ProfileRightSide from "./ProfileRightSide";

const Profile=()=>{


    return(
        <Container>
            <Row>
                <Col md={8} style={{backgroundColor:"red",minHeight:1000}}>
                    <ProfileHeader/>
                    <ProfileCenter/>
                </Col>
                <Col md={4} style={{backgroundColor:"blue",minHeight:1000}}>
                    <ProfileRightSide />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile