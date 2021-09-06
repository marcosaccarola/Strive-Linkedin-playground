import React from 'react'
import {Container} from 'react-bootstrap'
//import Suggestions from './Suggestions'
import SingleSuggestion from './SingleSuggestion'

const ProfileRightSide=({profilesData})=>{

    return(
        <Container className="rounded mt-5" style={{backgroundColor:"yellow",height:500,width:"100%"}}>
            <SingleSuggestion profilesData={profilesData} />
        </Container>
    )
}
export default ProfileRightSide