import { Button } from "react-bootstrap";
import { useEffect } from "react";


const SingleExperience = ({role, company, description, startDate, endDate, userId, expId}) => {

  // const [exp, setExp] = useState({
  //   role: '',
  //   company: '',
  //   description: '',
  //   area: '',
  //   startDate: '',
  //   endDate: null
  // })

  const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
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
          // console.log('Single Experience: ', data)
    
        } else {
          throw new Error 
        }
      } catch (error) {
        throw error
    }
  }

    // useEffect((prevState) => {
    //     getSingleExp(userId, expId)
    // }, () => {
    //   if(prevState !== exp)
    // })

    const deleteExp = async (userId, expId) => {
      try {
          const response = await fetch(`${PROFILES_URL}${userId}/experiences/${expId}`, {
              method: 'DELETE',
              headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
              }
          })
          if(response.ok){
              const deletedData = await response.json()
              alert(`Hasta la vista ${deletedData.role}`)
          } 
      } catch (error) {
          throw error
      }
    }

    // const editExp = async (userId, expId) => {
    //   try {
    //     const response = await fetch(`${PROFILES_URL}${userId}/experiences/${expId}`, {
    //         method: 'PUT',
    //         headers: {
    //             Authorization:
    //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
    //         }
    //     })
    //     if(response.ok){
    //         const deletedData = await response.json()
    //         console.log(`Hasta la vista ${deletedData.role}`)
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

        {userId === "61360d537be6c10015f9dbac" && 
            <>
                <Button id="deleteExp-btn" variant="danger" onClick={()=>{deleteExp(userId, expId)}}>
                  Trash icon
                </Button>
                <Button id="editExp-btn" variant="warning" >
                  Edit
                </Button>
            </>
        }
      </>
    )
}

export default SingleExperience