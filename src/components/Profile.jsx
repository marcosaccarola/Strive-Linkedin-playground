import React,{useState,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import ProfileCenter from "./ProfileCenter";
import ProfileRightSide from "./ProfileRightSide";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {searchProfile}from '../utils/profiles'


const Profile=()=>{

    const[profilesData,setProfilesData]=useState([])


    const fetchProfiles = async () => {
		try {
			const data=await searchProfile();
            //console.log(data)
			setProfilesData(data);
            //console.log(profilesData)
		} catch (error) {
			console.log(error);
		}
	};

    useEffect(()=>{
        fetchProfiles()
    },[])

    
    return(
        <Container>
            <Row style={{marginTop:50}}>
                <Col md={8} style={{backgroundColor:"red",minHeight:1000}}>
                    <ProfileHeader profilesData={profilesData} />
                    <ProfileCenter profilesData={profilesData} />
                </Col>
                <Col md={4} style={{backgroundColor:"blue",minHeight:1000}}>
                    <ProfileRightSide profilesData={profilesData} />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile