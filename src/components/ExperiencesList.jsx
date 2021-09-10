import { Container, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import SingleExperience from "./SingleExperience";
import ExperienceModal from "./ExperienceModal";
import fetchExperiences from "../utils/profiles";
import "./ExperiencesListStyle.css"


const ExperiencesList = ({id}) => {
  const [experiences, setExperiences] = useState([]);

  const getExperiences = async () => {
    const experiencesData = await fetchExperiences(id);
    setExperiences(experiencesData);
    // console.log(experiencesData, id)
  };

  useEffect(() => {
    getExperiences();
  }, [id]);

  return (
    <>
      <Container className="rounded my-5 jumbocontainer">
        <div>
          <p className="experiences pt-2">Experiences</p>
          {experiences.map((experience) => (
            <Container className="d-flex justify-content-between">
              <SingleExperience
              // console.log({experience})
                role={experience.role}
                company={experience.company}
                description={experience.description}
                startDate={experience.startDate}
                endDate={experience.endDate}
                userId={experience.user}
                experienceId={experience._id}
                key={experience._id}
                getExperiences={getExperiences}
              />
            </Container>
          ))}
        </div>
        {(id === "613884772068d2001522b4c6" || id === "613888102068d2001522b4d4" || id === "61360d537be6c10015f9dbac")  
          && <ExperienceModal id={id} getExperiences={getExperiences}/>}
      </Container>
    </>
  );
};

export default ExperiencesList;