import React,{useState,useEffect} from 'react'
import {Container} from 'react-bootstrap'

const ProfileCenter=()=>{
    const[suggestions,setSuggestions]=useState([])

    let myId='61360d537be6c10015f9dbac'

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

    return(
        <Container className="rounded mt-5" style={{backgroundColor:"yellow",height:300,width:"100%"}}>
        {
            suggestions.map(suggestion=>(

                <div>
                    {suggestion.bio}
                </div>
            )
            )
        }
        </Container>
    )
}
export default ProfileCenter