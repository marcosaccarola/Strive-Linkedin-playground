import { Button } from "react-bootstrap";
// import { useEffect } from "react";

const SingleExperience = ({
  role,
  company,
  description,
  startDate,
  endDate,
  userId,
  experienceId,
  getExperiences
}) => {
 

  const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
  const getSingleExperience = async (userId, expId) => {
    try {
      const response = await fetch(
        `${PROFILES_URL}${userId}/experiences/${expId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        // console.log('Single Experience: ', data)
      } else {
        throw new Error();
      }
    } catch (error) {
      throw error;
    }
  };

  const deleteExperience = async (userId, expId) => {
    try {
      const response = await fetch(
        `${PROFILES_URL}${userId}/experiences/${expId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
          },
        }
      );
      if (response.ok) {
        // const deletedData = await response.json();
        getExperiences()
        console.log("Hasta la vista");
      }
    } catch (error) {
      throw error;
    }
  };

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
      {endDate && <p>{endDate}</p>}

      {(userId === "613884772068d2001522b4c6" || userId === "613888102068d2001522b4d4" || userId === "61360d537be6c10015f9dbac") && 
        <>
          <Button
            id="deleteExp-btn"
            variant="danger"
            onClick={() => {
              deleteExperience(userId, experienceId);
            }}
          >
            Trash icon
          </Button>
          <Button id="editExp-btn" variant="warning">
            Edit
          </Button>
        </>
      }
    </>
  );
};

export default SingleExperience;
