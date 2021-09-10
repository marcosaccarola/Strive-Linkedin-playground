import React,{useState} from 'react'
import {Jumbotron, ListGroup, Button, Modal, Form} from 'react-bootstrap'
import img from '../assets/img.jpg'
import {putIntoProfile}from '../utils/profilePut'
import "./ProfileHeaderStyle.css"
import {searchProfile}from '../utils/profiles'
import {GoPencil} from 'react-icons/go'
// import {useHistory, useParams } from 'react-router-dom'
// import { useCallback } from 'react'


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

    // const params = useParams()
    // const history = useHistory()
    let sendAndClose=''
    let thisProfile={}
    if(profilesData!==undefined){
        thisProfile=profilesData.find(profile=>profile._id===id)
            
        const thisObj={name, surname, email, username, title, area, image, bio}
               
        sendAndClose=async(e)=>{
            e.preventDefault()
                // if( name.length>0 || undefined
                //     &&surname.length>0 || undefined
                //     &&email.length>0 || undefined
                //     &&username.length>0 || undefined
                //     &&title.length>0 || undefined
                //     &&area.length>0 || undefined
                //     &&image.length>0 || undefined
                //     )  
                    // {
                    const firstWaiter=await sendProfileData(e)
                    handleClose()
                    const secondWaiter=await fetchProfiles()
                    // } else {
                    //     handleClose()
                    //     alert("at least one character for each field (CHANGES UNSENT)")
                    // }   
        }     
        const sendProfileData=(e)=>{
            e.preventDefault()
            try {
                putIntoProfile({thisObj,id})
            } catch (error) {
                setErrMess(error.message)
            }
        }  
        
        // const addData = []
        const fetchProfiles= async()=>{
            setIsLoading(true)
            try {
                const data=await searchProfile();
                setProfilesData(data);
                setIsLoading(false)
                // if(stateApp!== undefined){addData.push(stateApp)}
                // setStateApp(data)
            } catch (error) {
                setIsLoading(false)
            }
        }
    }
   
    
    return(profilesData!==undefined && (
        <Jumbotron fluid className="mt-5 jumbocontainer">
           
                <div className="backgroundImg">
                    <img src={img} className="rounded-top"/>
                </div>
                <img src={thisProfile.image} className="img-profile" />
                            <ListGroup className="listgroup">
                                <p className="text-left">{thisProfile.name} {thisProfile.surname} </p>
                                <p className="text-left"> {thisProfile.title}</p>
                                <p className="text-left">{thisProfile.area}</p>
                            </ListGroup>
                   
                <div className="d-flex mt-3 mb-2">
                    <Button variant="primary" className="ml-3">
                        Connect
                    </Button>
                    <Button variant="primary" className="mx-2">
                        Other
                    </Button>

                {((id==='61360d537be6c10015f9dbac')||(id==='613888102068d2001522b4d4')||(id==='613884772068d2001522b4c6')) &&(
                    <Button 
                    variant="light" 
                    id="edit-btn" 
                    className="ml-auto mr-3 mt-2 mb-3 border-0"
                    onClick={()=>setShowModal(!showModal)}
                    style={{color:"rgba(0, 0, 0, 0.733)",backgroundColor:"white",marginLeft:"auto",marginTop:10}}
                    >
                        <GoPencil size={30}/>
                    </Button>
                )}

                


                </div>

                <Modal show={showModal} onHide={handleShow}>
                    <Modal.Header closeButton>
                    <Modal.Title>Change Introduction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group className="mb-3">

                                <Form.Label>name</Form.Label>
                                <Form.Control                                
                                type="text"  
                                defaultValue={thisProfile.name} 
                                onChange={(e)=>setName(e.target.value)}
                                />
                                
                                <Form.Label>surname</Form.Label>
                                <Form.Control                                
                                type="text" 
                                defaultValue={thisProfile.surname} 
                                onChange={(e)=>setSurname(e.target.value)}
                                />

                                <Form.Label>email</Form.Label>
                                <Form.Control                                
                                type="email" 
                                defaultValue={thisProfile.email}
                                onChange={(e)=>setEmail(e.target.value)}
                                />

                                <Form.Label>username</Form.Label>
                                <Form.Control                                
                                type="text" 
                                defaultValue={thisProfile.username} 
                                onChange={(e)=>setUsername(e.target.value)}
                                />

                                <Form.Label>title</Form.Label>
                                <Form.Control                                
                                type="text" 
                                defaultValue={thisProfile.title} 
                                onChange={(e)=>setTitle(e.target.value)}
                                />

                                <Form.Label>area</Form.Label>
                                <Form.Control                                
                                type="text" 
                                defaultValue={thisProfile.area}
                                onChange={(e)=>setArea(e.target.value)}
                                />

                                <Form.Label>image</Form.Label>
                                <Form.Control                                
                                type="text" 
                                defaultValue={thisProfile.image}
                                onChange={(e)=>setImage(e.target.value)}
                                />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>bio</Form.Label>
                                <Form.Control 
                                
                                as="textarea"
                                defaultValue={thisProfile.bio} 
                                rows={3} 
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