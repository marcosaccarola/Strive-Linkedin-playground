import React,{useState} from 'react'
import {Jumbotron, Container, Row, Col, ListGroup, Button, Modal, Form} from 'react-bootstrap'
import img from '../assets/img.jpg'
import {putIntoProfile}from '../utils/profilePut'
import "./ProfileHeaderStyle.css"
import {searchProfile}from '../utils/profiles'


const ProfileHeader=({profilesData,id,setProfilesData})=>{




    const[showModal,setShowModal]=useState(false)
    const handleClose=()=>setShowModal(false);
    const handleShow=()=>setShowModal(true);
    const[name,setName]=useState()
    const[surname,setSurname]=useState()
    const[email,setEmail]=useState()
    const[username,setUsername]=useState()
    const[title,setTitle]=useState()
    const[area,setArea]=useState()
    const[bio,setBio]=useState()
    
    let sendAndClose=''
    let thisProfile={}
    if(profilesData!==undefined){
        thisProfile=profilesData.find(profile=>profile._id===id)
        //console.log(thisProfile)
        //console.log(thisProfile.name)
            
        const thisObj={name, surname, email, username, title, area, bio}
        
        sendAndClose=(e)=>{
            sendProfileData(e)
            handleClose()
            fetchProfiles()
        }        
        const sendProfileData=async(e)=>{
            e.preventDefault()
            putIntoProfile({thisObj,id})
        }     
        const fetchProfiles=async()=>{
            try {
                const data=await searchProfile();
                // console.log(data)
                setProfilesData(data);
                //console.log(profilesData)
            } catch (error) {
                //console.log(error);
            }
        };  
    }
    
    return(profilesData!==undefined && (
        <Jumbotron fluid className="mt-5 jumbocontainer">
           
                <div className="backgroundImg">
                    <img src={img} className="rounded-top"/>
                </div>
              
                            <ListGroup className="listgroup">
                                <p className="text-left">{thisProfile.name} {thisProfile.surname} </p>
                                <p className="text-left"> {thisProfile.title}</p>
                                <p className="text-left">{thisProfile.area}</p>
                            </ListGroup>
                   
                <div className="d-flex">
                    <Button variant="primary" className="mx-1 mt-2 mb-2 ">
                        Connect
                    </Button>
                    <Button variant="primary" className="mx-1 mt-2 mb-2 ">
                        Other
                    </Button>

                    <Button variant="primary" id="edit-btn" className="mx-1 mt-2 mb-2 "

                    onClick={()=>setShowModal(!showModal)}
                    >
                        <span>Pencil Icon</span>
                    </Button>

                </div>

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
                                placeholder={thisProfile.name} 
                                value={name} 
                                onChange={(e)=>setName(e.target.value)}
                                />
                                
                                <Form.Label>surname</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder={thisProfile.surname}
                                value={surname}  
                                onChange={(e)=>setSurname(e.target.value)}
                                />

                                <Form.Label>email</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder={thisProfile.email}
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)}
                                />

                                <Form.Label>username</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder={thisProfile.username} 
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                />

                                <Form.Label>title</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder={thisProfile.title} 
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                />

                                <Form.Label>area</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder={thisProfile.area}
                                value={area}
                                onChange={(e)=>setArea(e.target.value)}
                                />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>bio</Form.Label>
                                <Form.Control 
                                as="textarea"
                                placeholder={thisProfile.bio} 
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
                    <Button variant="primary" onClick={sendAndClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>

                </Modal>

        </Jumbotron>
    ))
}

export default ProfileHeader