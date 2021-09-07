import React,{useState} from 'react'
import {Jumbotron, Container,Row,Col,ListGroup,Button,Modal,Form} from 'react-bootstrap'
import img from '../assets/img.jpg'
import {putIntoProfile}from '../utils/profilePut'

const ProfileHeader=({profilesData,id})=>{
    const[showModal,setShowModal]=useState(false)
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    let thisProfile=profilesData.find(profile=>profile._id===id)

    const[name,setName]=useState(thisProfile.name)
    const[surname,setSurname]=useState(thisProfile.surname)
    const[email,setEmail]=useState(thisProfile.email)
    const[username,setUsername]=useState(thisProfile.username)
    const[title,setTitle]=useState(thisProfile.title)
    const[area,setArea]=useState(thisProfile.area)
    const[bio,setBio]=useState(thisProfile.bio)

    const thisObj={name, surname, email, username, title, area, bio}
    console.log(thisObj)

    const sendProfileData=(e)=>{
        e.preventDefault()
        putIntoProfile({thisObj,id})
    }


    return(
        <Jumbotron fluid className="rounded mt-5" style={{paddingTop:0, paddingBottom:0}}>
            <Container style={{paddingLeft:0,paddingRight:0}}>
                <div className="rounded-top" style={{backgroundColor:"darkGrey", height:160, width:"100%"}}>
                    <img src={img} className="rounded-top" style={{backgroundColor:"darkGrey", maxHeight:"100%", width:"100%"}}/>
                </div>
                <Container style={{}}>
                    <Row>
                        <Col className="d-flex d-column">
                            <ListGroup variant="flush">
                                <ListGroup.Item className="text-left" style={{backgroundColor:"#E9ECEF",fontSize:26,fontWeight:"700"}}>{thisProfile.name} {thisProfile.surname} </ListGroup.Item>
                                <ListGroup.Item className="text-left" style={{backgroundColor:"#E9ECEF",fontSize:16,fontWeight:"400"}}> {thisProfile.title}</ListGroup.Item>
                                <ListGroup.Item className="text-left" style={{backgroundColor:"#E9ECEF",fontSize:12,fontWeight:"200",color:"grey"}}>{thisProfile.area}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-flex">
                    <Button variant="primary" className="mx-1 mt-2 mb-2 rounded rounded-pill">
                        Message
                    </Button>
                    <Button variant="light" className="mx-1 mt-2 mb-2 rounded rounded-pill">
                        Other
                    </Button>
                    <Button variant="light" id="edit-btn" className="mx-1 mt-2 mb-2 rounded"
                    onClick={()=>setShowModal(!showModal)}
                    >
                        <span>Pencil Icon</span>
                    </Button>
                </Container>

                <Modal show={showModal} onHide={handleShow}>
                    <Modal.Header closeButton>
                    <Modal.Title>Change Introduction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Label>name</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="insert your name" 
                                value={name} 
                                onChange={(e)=>setName(e.target.value)}
                                />
                                
                                <Form.Label>surname</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="insert your surname"
                                value={surname}  
                                onChange={(e)=>setSurname(e.target.value)}
                                />

                                <Form.Label>email</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="insert your email"
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)}
                                />

                                <Form.Label>username</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="insert your username" 
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                />

                                <Form.Label>title</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="insert your title" 
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                />

                                <Form.Label>area</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="insert your area" 
                                value={area}
                                onChange={(e)=>setArea(e.target.value)}
                                />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>bio</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                value={bio}
                                onChange={(e)=>setBio(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={sendProfileData}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

            </Container>
        </Jumbotron>
    )
}

export default ProfileHeader