import React from 'react'
import {Jumbotron, Container,Row,Col,ListGroup,Button} from 'react-bootstrap'
import img from '../assets/img.jpg'
import { useState,useEffect } from 'react'
import {searchProfile}from '../utils/profiles'

const ProfileHeader=()=>{
    const[headerData,setHeaderData]=useState([])

    let myId='61360d537be6c10015f9dbac'

    const fetchProfiles = async () => {
		try {
			const data=await searchProfile();
            //console.log(data)
            let thisProfile=data.find(profile=>profile._id===myId)
			setHeaderData(thisProfile);
            //console.log(headerData)
		} catch (error) {
			console.log(error);
		}
	};

    useEffect(()=>{
        fetchProfiles()
    },[])

    /*
    useEffect(()=>{
        async function getSuggestions(){
            try {
                let response=await fetch('https://striveschool-api.herokuapp.com/api/profile/'+myId,{
                    headers:{
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo'
                    }
                })
                //console.log(response)
                if(response.ok){
                    let suggestions=await response.json()
                    //console.log(suggestions)
                    setSuggestions(suggestions)
                }

            } catch (error) {
                
            }
        }getSuggestions()
    },[])
    */

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
                                <ListGroup.Item className="text-left" style={{backgroundColor:"#E9ECEF",fontSize:26,fontWeight:"700"}}>{headerData.name} {headerData.surname} </ListGroup.Item>
                                <ListGroup.Item className="text-left" style={{backgroundColor:"#E9ECEF",fontSize:16,fontWeight:"400"}}> {headerData.title}</ListGroup.Item>
                                <ListGroup.Item className="text-left" style={{backgroundColor:"#E9ECEF",fontSize:12,fontWeight:"200",color:"grey"}}>{headerData.area}</ListGroup.Item>
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