import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import ProfileCenter from "./ProfileCenter";
import ProfileRightSide from "./ProfileRightSide";
import ExperiencesList from './ExperiencesList';
import {searchProfile}from '../utils/profiles'
import "./ProfileStyle.css"

const Profile = () => {
    
    const[profilesData,setProfilesData]=useState(
        /*
        [
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
    ]
    */
    )
    const[id,setId] = useState('61360d537be6c10015f9dbac')

    const[errMess,setErrMess]=useState()
    const[isLoading,setIsLoading]=useState(false)
    const fetchProfiles = async () => {
        setIsLoading(true)
		try {
			const data=await searchProfile();
            // console.log(data)
			setProfilesData(data);
            //console.log(profilesData)
            setIsLoading(false)
		} catch (error) {
            setErrMess(error.message)
            setIsLoading(false)
			//console.log(error);
		}
	};

    useEffect(()=>{
        fetchProfiles()
    },[])

    return(

      <Container>
            {errMess &&
                <Alert variant="danger" style={{marginTop:50}}>
                    Cannot load the data: {errMess}
                </Alert>
            }
            {isLoading && (
                <div className="ml-2">
                    <Spinner animation="border" variant="success" size="lg" style={{marginTop:200}} />
                </div>
            )}
          <Row style={{marginTop:50}}>
              <Col md={8} className="col">

                  <ProfileHeader profilesData={profilesData} id={id} 
                    setProfilesData={setProfilesData} 
                    setErrMess={setErrMess}
                    setIsLoading={setIsLoading}
                    />               
                  <ProfileCenter profilesData={profilesData} id={id} />
                  <ExperiencesList profilesData={profilesData} id={id}/>

              </Col>
              <Col md={4} className="col">
                    <ProfileRightSide profilesData={profilesData} setId={setId} />                 
              </Col>
          </Row>
      </Container>

    )
}

export default Profile