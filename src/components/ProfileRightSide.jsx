import React from 'react'
import {Container} from 'react-bootstrap'
import Suggestions from './Suggestions'

const ProfileRightSide=()=>{

    return(
        <Container className="rounded mt-5" style={{backgroundColor:"yellow",height:500,width:"100%"}}>
            <Suggestions/>
        </Container>
    )
}
export default ProfileRightSide