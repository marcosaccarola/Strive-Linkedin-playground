import React,{useState} from 'react'
import {Jumbotron, Container, Row, Col, ListGroup, Button, Modal, Form} from 'react-bootstrap'
import img from '../assets/img.jpg'
import {putIntoProfile}from '../utils/profilePut'
import "./ProfileHeaderStyle.css"
import {searchProfile}from '../utils/profiles'


const ProfileHeader=({profilesData,id,setProfilesData,setErrMess,setIsLoading})=>{




    const[showModal,setShowModal]=useState(false)
    const handleClose=()=>setShowModal(false);
    const handleShow=()=>setShowModal(true);
    const[name,setName]=useState()
    const[surname,setSurname]=useState()
    const[email,setEmail]=useState()
    const[username,setUsername]=useState()
    const[title,setTitle]=useState()
    const[area,setArea]=useState()
    const[image,setImage]=useState()
    const[bio,setBio]=useState()
    
    let sendAndClose=''
    let thisProfile={}
    if(profilesData!==undefined){
        thisProfile=profilesData.find(profile=>profile._id===id)
        //console.log(thisProfile)
        //console.log(thisProfile.name)
            
        const thisObj={name, surname, email, username, title, area, image, bio}
        
        sendAndClose=(e)=>{
            sendProfileData(e)
            handleClose()
            fetchProfiles()
        }        
        const sendProfileData=async(e)=>{
            e.preventDefault()
            try {
                putIntoProfile({thisObj,id})
            } catch (error) {
                setErrMess(error.message)
            }
        }     
        const fetchProfiles=async()=>{
            setIsLoading(true)
            try {
                const data=await searchProfile();
                // console.log(data)
                setProfilesData(data);
                setIsLoading(false)
                //console.log(profilesData)
            } catch (error) {
                setIsLoading(false)
                //setErrMess(error.message)
                //console.log(error);
            }
        };  
    }

    const [validated, setValidated] = useState(false)
    
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
                                //placeholder={thisProfile.name} 
                                defaultValue={thisProfile.name} 
                                onChange={(e)=>setName(e.target.value)}
                                />
                                
                                <Form.Label>surname</Form.Label>
                                <Form.Control 
                                type="text" 
                                defaultValue={thisProfile.surname}
                                //value={surname}  
                                onChange={(e)=>setSurname(e.target.value)}
                                />

                                <Form.Label>email</Form.Label>
                                <Form.Control 
                                type="email" 
                                defaultValue={thisProfile.email}
                                //value={email} 
                                onChange={(e)=>setEmail(e.target.value)}
                                />

                                <Form.Label>username</Form.Label>
                                <Form.Control 
                                type="text" 
                                defaultValue={thisProfile.username} 
                                //value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                />

                                <Form.Label>title</Form.Label>
                                <Form.Control 
                                type="text" 
                                defaultValue={thisProfile.title} 
                                //value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                />

                                <Form.Label>area</Form.Label>
                                <Form.Control 
                                type="text" 
                                defaultValue={thisProfile.area}
                                //value={area}
                                onChange={(e)=>setArea(e.target.value)}
                                />

                                <Form.Label>image</Form.Label>
                                <Form.Control 
                                type="text" 
                                defaultValue={thisProfile.image}
                                //value={image}
                                onChange={(e)=>setImage(e.target.value)}
                                />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>bio</Form.Label>
                                <Form.Control 
                                as="textarea"
                                defaultValue={thisProfile.bio} 
                                rows={3} 
                                //value={bio}
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