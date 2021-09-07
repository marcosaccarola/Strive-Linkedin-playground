import React from 'react'
import {Container} from 'react-bootstrap'
import SingleSuggestion from './SingleSuggestion'

const ProfileRightSide=({profilesData,setId})=>{

    return(
        <Container className="rounded mt-5" style={{backgroundColor:"yellow",height:500,width:"100%"}}>
            <SingleSuggestion profilesData={profilesData} setId={setId}/>
        </Container>
    )
}
export default ProfileRightSide