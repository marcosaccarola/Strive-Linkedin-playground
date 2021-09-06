import React from 'react'
import {Jumbotron, Container,Row,Col,ListGroup,Button} from 'react-bootstrap'

const ProfileHeader=()=>{

    return(
        <Jumbotron fluid className="rounded mt-5" style={{paddingTop:0, paddingBottom:0}}>
            <Container style={{paddingLeft:0,paddingRight:0}}>
                <div className="rounded-top" style={{backgroundColor:"darkGrey", height:160, width:"100%"}}>
                </div>
                <Container style={{}}>
                    <Row>
                        <Col className="d-flex d-column">
                            <ListGroup variant="flush">
                                <ListGroup.Item className="text-left" style={{backgroundColor:"#E9ECEF",fontSize:26,fontWeight:"700"}}>NAME</ListGroup.Item>
                                <ListGroup.Item className="text-left" style={{backgroundColor:"#E9ECEF",fontSize:16,fontWeight:"400"}}>Summary</ListGroup.Item>
                                <ListGroup.Item className="text-left" style={{backgroundColor:"#E9ECEF",fontSize:12,fontWeight:"200",color:"grey"}}>Country/Place</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-flex">
                    <Button variant="primary" className="mx-1 mt-2 mb-2 rounded rounded-pill">
                        Message
                    </Button>
                    <Button variant="light" className="mx-1 mt-2 mb-2 rounded rounded-pill">
                        Altro
                    </Button>
                </Container>

            </Container>
        </Jumbotron>
    )
}

export default ProfileHeader