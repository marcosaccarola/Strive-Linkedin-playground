import React, { useState,useEffect } from 'react'
import {ListGroup}from'react-bootstrap'
import SingleSuggestion from './SingleSuggestion'

const Suggestions=()=>{
    const[suggestions,setSuggestions]=useState([])

    useEffect(()=>{
        async function getSuggestions(){
            try {
                let response=await fetch('https://striveschool-api.herokuapp.com/api/profile/',{
                    headers:{
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo'
                    }
                })
                //console.log(response)
                if(response.ok){
                    let suggestions=await response.json()
                    //console.log(suggestions)
                    setSuggestions(suggestions)
                }

            } catch (error) {
                
            }
        }getSuggestions()
    },[])

    return(
        <>
            <ListGroup>
                <SingleSuggestion suggestions={suggestions}/>
            </ListGroup>

        </>
    )
}
export default Suggestions