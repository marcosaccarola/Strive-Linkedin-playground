import React, { useState,useEffect } from 'react'
import {ListGroup}from'react-bootstrap'
import SingleSuggestion from './SingleSuggestion'
import {searchProfile}from '../utils/profiles'

const Suggestions=()=>{
    const[rightSideProfiles,setRightSideProfiles]=useState([])

    const fetchProfiles = async () => {
		try {
			const data=await searchProfile();
            //console.log(data)
			setRightSideProfiles(data);
            //console.log(rightSideProfiles)
		} catch (error) {
			console.log(error);
		}
	};

    useEffect(()=>{
        fetchProfiles()
    },[])

    /*
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
    */

    return(
        <>
            <ListGroup>
                <SingleSuggestion rightSideProfiles={rightSideProfiles}/>
            </ListGroup>

        </>
    )
    
}
export default Suggestions