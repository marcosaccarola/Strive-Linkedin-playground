import React,{useState} from 'react'
import {Jumbotron, Container,Row,Col,ListGroup,Button,Modal,Form} from 'react-bootstrap'
import img from '../assets/img.jpg'
import {putIntoProfile}from '../utils/profilePut'
import "./ProfileHeaderStyle.css"

const ProfileHeader=({profilesData,id})=>{

    
    
    const[showModal,setShowModal]=useState(false)
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
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
        //thisProfile.push(profilesData.find(profile=>profile._id===id))
        thisProfile=profilesData.find(profile=>profile._id===id)
        console.log(thisProfile)
        console.log(thisProfile.name)
        
        //setName(thisProfile.name)
/*
            setSurname(thisProfile.surname),
            setEmail(thisProfile.email),
            setUsername(thisProfile.username),
            setTitle(thisProfile.title),
            setArea(thisProfile.area),
            setBio(thisProfile.bio)
*/
            
        const thisObj={name, surname, email, username, title, area, bio}
        //console.log(thisObj)

        
        sendAndClose=(e)=>{
            sendProfileData(e)
            handleClose()
        }
        

        
        const sendProfileData=async(e)=>{
            e.preventDefault()
            putIntoProfile({thisObj,id})
            setName(thisObj.name)
            setSurname(thisObj.surname)
            setEmail(thisObj.email)
            setUsername(thisObj.username)
            setTitle(thisObj.title)
            setArea(thisObj.area)
            setBio(thisObj.bio)
        }
        
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
                    <Button variant="primary" onClick={sendAndClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

            

        </Jumbotron>
    ))

}

export default ProfileHeader