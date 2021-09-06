import React from 'react'
import {Container} from 'react-bootstrap'
import Suggestion from './Suggestion'

const ProfileRightSide=()=>{

    return(
        <Container className="rounded mt-5" style={{backgroundColor:"yellow",height:500,width:"100%"}}>
            <Suggestion/>
        </Container>
    )
}
export default ProfileRightSide