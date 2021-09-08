import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ExperienceModal from "./ExperienceModal";


const SingleExperience = (props) => {
  const {role, description, company, startDate, endDate, area, user, _id} = props.exp

  // const [singleExp, setSingleExp] = useState({
  //   role: props.role,
  //   company: props.company,
  //   description: props.description,
  //   area: props.area,
  //   startDate: props.startDate,
  //   endDate: props.endDate
  // })
  
const [exp, setEexperience] = useState({})

useEffect(()=>{
  setEexperience(props.exp)
}, [props.exp])

  const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/"
  const getSingleExp = async (userId, expId) => {
    try {
        const response = await fetch(`${PROFILES_URL}${userId}/experiences/${expId}`, {
          headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
          }
        })
        if(response.ok){
          const data = await response.json()
          // return data
          // console.log('Single Experience: ', data)
    
        } else {
          throw new Error 
        }
      } catch (error) {
        throw error
      }
    }

    const deleteExp = async (userId, expId) => {
      try {
          const response = await fetch(`${PROFILES_URL}${userId}/experiences/${expId}`, {
              method: 'DELETE',
              headers: {
                 Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo"
              }
          })
          if(response.ok){
              props.getExps()
              // console.log(`Hasta la vista`)
          } 
      } catch (error) {
          throw error
      }
    }

    // const editExp = async (userId, expId) => {
    //   try {
    //     let singleExpData = await getSingleExp(userId, expId)
    //     console.log(singleExpData)
    //     const response = await fetch(`${PROFILES_URL}${userId}/experiences/${expId}`, {
    //         method: 'PUT',
    //         headers: {
    //           body: JSON.stringify(singleExpData),
    //           Authorization:
    //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
    //           'Content-type': 'application/json'
    //         }
    //     })
    //     if(response.ok){
    //         const editedData = await response.json()
    //         setSingleExp(editedData)
            
    //     } 
    //   } catch (error) {
    //     throw error
    //   }
    // }
    
    return (
      <>
        <p>{role}</p>
        <p>{company}</p>
        <p>{description}</p>
        <p>{startDate}</p>
        { endDate && <p>{endDate}</p> }

        {user === "613884772068d2001522b4c6" || user === "613888102068d2001522b4d4" || user === "61360d537be6c10015f9dbac"  && 
            <>
              <Button id="deleteExp-btn" variant="danger" onClick={()=>{deleteExp(user, _id)}}>
                Trash icon
              </Button>
              
              <Button id="editExp-btn" variant="warning" onClick={props.handleShow}>
                Edit
              </Button>
              {/* expId={props._id} editExp={editExp} */}
              <ExperienceModal show={props.show} handleClose={props.handleClose} experienceId={exp._id}  exp={exp} />
            </>
        }
      </>
    )
}

export default SingleExperience

// id={_id} getExps={getExps} 