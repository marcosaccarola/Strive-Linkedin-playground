import { Alert, Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import EditExperienceModal from "./EditExperienceModal";
import {GoPencil} from 'react-icons/go'
import {ImBin} from 'react-icons/im'

const SingleExperience = ({
  company,
  description,
  endDate,
  experienceId,
  getExperiences,
  role,
  startDate,
  userId 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
  let BEARER_TOKEN = ''
  if(userId === "613884772068d2001522b4c6"){
    BEARER_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4ODQ3NzIwNjhkMjAwMTUyMmI0YzYiLCJpYXQiOjE2MzEwOTM4ODAsImV4cCI6MTYzMjMwMzQ4MH0.Ckf38QVqF801iXzjIknOZtireFH6vgeoNw9nXSiH7cA"
  } else if (userId ==='613888102068d2001522b4d4'){
    BEARER_TOKEN ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4ODgxMDIwNjhkMjAwMTUyMmI0ZDQiLCJpYXQiOjE2MzEwOTQ4MDAsImV4cCI6MTYzMjMwNDQwMH0.5U4TIdYxh2YFwTVkvYg4muu1_s4EW1EEsP_E0rZLESA"
  } else if (userId === "61360d537be6c10015f9dbac") {
    BEARER_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo"
  }
  const deleteExperience = async (userId, expId) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${PROFILES_URL}${userId}/experiences/${expId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: BEARER_TOKEN,
          },
        }
      );
      if (response.ok) {
        getExperiences()
        setIsLoading(false);
        // console.log("Hasta la vista");
      } else {
        setIsError(true);
        setIsLoading(false);
        throw new Error();
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      throw error;
    }
  };

  return (
    <>
      {isLoading && (
        <>
          <Spinner animation="border" variant="primary" />
          <Alert variant="success"> Completed! </Alert>
        </>
      )}
      <p>{role}</p>
      <p>{company}</p>
      <p>{description}</p>
      <p>{startDate}</p>
      {endDate && <p>{endDate}</p>}
       
      {((userId === "613884772068d2001522b4c6") || (userId === "613888102068d2001522b4d4") || (userId === "61360d537be6c10015f9dbac")) && (
          <>
            <Button
              id="deleteExp-btn"
              variant="danger"
              onClick={() => {
                deleteExperience(userId, experienceId)}}
              style={{color:"white",marginBottom:5}}
              className="mx-1 border-0"
             >
              <ImBin  size={15}/>
            </Button>
            <EditExperienceModal experienceId={experienceId} userId={userId} getExperiences={getExperiences}/>
          </>   
      )}
    </>
  );
};

export default SingleExperience;
