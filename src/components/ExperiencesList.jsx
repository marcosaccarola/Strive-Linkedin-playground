import { Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import SingleExperience from "./SingleExperience";
import ExperienceModal from "./ExperienceModal";
import fetchExp from "../utils/profiles";

const ExperiencesList = ({ profilesData, id }) => {
  let thisProfile = profilesData.filter((profile) => profile.user === id);
  // console.log('Current User is ', thisProfile, id)
  const [experiences, setExperiences] = useState([]);

  const getExp = async () => {
    const experiencesData = await fetchExp(id);
    setExperiences(experiencesData);
    // console.log(experiencesData)
  };

  useEffect(() => {
    getExp();
  }, [id]);

  return (
    <>
      <Container
        className="rounded mt-5"
        style={{ backgroundColor: "yellow", height: 300, width: "100%" }}
      >
        <div>
          {experiences.map((exp) => (
            // console.log(exp)
            <Container className="d-flex justify-content-between">
              <SingleExperience
                role={exp.role}
                company={exp.company}
                description={exp.description}
                startDate={exp.startDate}
                endDate={exp.endDate}
                userId={exp.user}
                expId={exp._id}
                key={exp._id}
              />
            </Container>
          ))}
        </div>
        {/* hard coded Marco's id, refactor needed */}
        {id === "61360d537be6c10015f9dbac" && <ExperienceModal id={id}/>}
      </Container>
    </>
  );
};

export default ExperiencesList;
