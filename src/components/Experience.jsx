import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// import fetchExp from '../utils/profiles';

const Experience = ({profilesData, id}) => {
    let thisProfile = profilesData.filter(profile => profile.user===id)
    // console.log('Current User is ', thisProfile, id) 

    const [experiences, setExperiences] = useState([])

    const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
    const fetchExp = async (query) => {
        try {
          const response = await fetch(`${PROFILES_URL}${query}/experiences`, {
            headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
            }
          })
          if(response.ok){
            const data = await response.json()
            // console.log(data)
            setExperiences(data)
            // console.log(experiences)

          } else {
            throw new Error
          }
        } catch (error) {
          throw error
        }
    }

    useEffect(() => {
        fetchExp(id)
    }, [id])

    return (
        <Container className="rounded mt-5" style={{backgroundColor:"yellow",height:300,width:"100%"}}>
            <div>
                {
                    experiences.map(exp => (
                        <Container className="d-flex justify-content-between">
                            <p>{exp.role}</p>
                        </Container>
                    ))
                }
            </div>
        </Container>
    )
}

export default Experience