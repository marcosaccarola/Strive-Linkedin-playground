import React from 'react'
import {Jumbotron, Container,Row,Col,ListGroup,Button} from 'react-bootstrap'
import img from '../assets/img.jpg'
import "./ProfileHeaderStyle.css"

const ProfileHeader=({profilesData,id})=>{

    let thisProfile=profilesData.find(profile=>profile._id===id)

    return(
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
                    <Button variant="primary" id="edit-btn" className="mx-1 mt-2 mb-2 ">
                        <span>Pencil Icon</span>
                    </Button>
                </div>

           
        </Jumbotron>
    )
}

export default ProfileHeader