import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import fetchExp from '../utils/profiles';

const Experience = ({profilesData, id}) => {
    let thisProfile = profilesData.filter(profile => profile.user===id)
    // console.log('Current User is ', thisProfile, id) 

    const [experiences, setExperiences] = useState([])

    const getExp = async () => {
        const expData = await fetchExp(id)
        setExperiences(expData)
    }

    useEffect(() => {
        getExp(id)
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