import React from 'react'
import {Container} from 'react-bootstrap'
import SingleSuggestion from './SingleSuggestion'
import "./ProfileRightSideStyle.css"

const ProfileRightSide=({profilesData,setId})=>{

    return(
        <div className="rounded my-5">
            <SingleSuggestion profilesData={profilesData} setId={setId}/>
            <div className="show">Show more</div>
        </div>
    )
}
export default ProfileRightSide