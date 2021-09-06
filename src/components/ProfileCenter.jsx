import {Container} from 'react-bootstrap'

const ProfileCenter=({profilesData,id})=>{
    
    let thisProfile=[]
    thisProfile.push(profilesData.find(profile=>profile._id===id))

    return(
        <Container className="rounded mt-5" style={{backgroundColor:"yellow",height:300,width:"100%"}}>
                {
                thisProfile.map(profile=>(
                <div>
                    {profile.bio}
                </div>
                ))
                }
        </Container>
    )
}
export default ProfileCenter