import React,{useState,useEffect} from 'react'
import {Container} from 'react-bootstrap'

const ProfileCenter=({profilesData,id})=>{
    
    console.log(id)
    let thisProfile=[]
    console.log(profilesData)
    thisProfile.push(profilesData.find(profile=>profile._id===id))
    console.log(thisProfile)




    /*
    useEffect(()=>{
        async function getSuggestions(){
            try {
                let response=await fetch('https://striveschool-api.herokuapp.com/api/profile/'+myId,{
                    headers:{
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo'
                    }
                })
                //console.log('RESPONSE',response)
                if(response.ok){
                    let suggestions=await response.json()
                    //console.log('SUGGESTION',suggestions)
                    let profile=[suggestions]
                    setSuggestions(profile)
                }

            } catch (error) {
                
            }
        }getSuggestions()
    },[])
    */

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