import React from "react";
import "./ProfileStyle.css"
import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import ProfileCenter from "./ProfileCenter";
import ProfileRightSide from "./ProfileRightSide";

const Profile=()=>{


    return(
        <Container className="profileBody">
            <Row>
                <Col md={8}
                className="mt-5 col"
                >
                    <ProfileHeader/>
                    <ProfileCenter/>
                </Col>
                <Col md={4}
                 className="mt-5 col"
                >
                    <ProfileRightSide />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile