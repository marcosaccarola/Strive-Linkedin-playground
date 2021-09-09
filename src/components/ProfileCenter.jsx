import {Container} from 'react-bootstrap'
import "./ProfileCenterStyle.css"

const ProfileCenter=({profilesData,id})=>{
    
    let thisProfile=[]
    if(profilesData!==undefined){
        thisProfile.push(profilesData.find(profile=>profile._id===id))
        }

    return(
        <Container className="rounded my-3" >
                {
                profilesData!==undefined && (
                    thisProfile.map(profile=>(
                    <div key={profile._id} >
                        <h5>About</h5>
                        {profile.bio}
                    </div>
                    ))
                )
                }
        </Container>
    )

}
export default ProfileCenter