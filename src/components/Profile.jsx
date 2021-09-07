import React from "react";
import "./ProfileStyle.css"
import  { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import ProfileCenter from "./ProfileCenter";
import ProfileRightSide from "./ProfileRightSide";
import {searchProfile}from '../utils/profiles'

const Profile = () => {

    const[profilesData,setProfilesData]=useState([
        {
            "_id": "61360d537be6c10015f9dbac",
            "name": "Marco",
            "surname": "Saccarola",
            "email": "marco.sacca.ads@gmail.com",
            "username": "marcosaccarola",
            "title": "Strive School student",
            "bio": "nothing to declare",
            "area": "Venezia",
            "image": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
            "createdAt": "2021-09-06T12:45:07.983Z",
            "updatedAt": "2021-09-06T22:45:17.877Z",
            "__v": 0
        }
    ])
    const[id,setId] = useState('61360d537be6c10015f9dbac')

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
       <div>
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
      <Container>
          <Row style={{marginTop:50}}>
              <Col md={8} style={{backgroundColor:"red",minHeight:1000}}>
                  <ProfileHeader profilesData={profilesData} id={id}/>
                  <ProfileCenter profilesData={profilesData} id={id} />
              </Col>
              <Col md={4} style={{backgroundColor:"blue",minHeight:1000}}>
                  <ProfileRightSide profilesData={profilesData} setId={setId} />
              </Col>
          </Row>
      </Container>
       </div>
    )
}

export default Profile