import { Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import SingleExperience from "./SingleExperience";
import ExperienceModal from "./ExperienceModal";
import fetchExperiences from "../utils/profiles";

const ExperiencesList = ({ id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [modalMode, setModalMode] = useState("edit");
  const handleShow = (mode = "add") => {
    setShow(true);
    setModalMode(mode); // <-- whenever modal is opening we are setting "mode"  for modal
    // modal role can be edit or add
  };

  const [experiences, setExperiences] = useState([]);

  const getExperiences = async () => {
    const experiencesData = await fetchExperiences(id);
    setExperiences(experiencesData);
    // console.log('experiences data ', experiencesData)
  };

  useEffect(() => {
    //console.log('Current User is ', {profilesData}, {id})
    getExperiences();
  }, [id]);

  return (
    <>
      <Container
        className="rounded mt-5"
        style={{ backgroundColor: "yellow", height: 300, width: "100%" }}
      >
        {id === "613884772068d2001522b4c6" ||
          id === "613888102068d2001522b4d4" ||
          (id === "61360d537be6c10015f9dbac" && (
            <>
              <ExperienceModal
                userId={id}
                getExperiences={getExperiences}
                show={show}
                handleClose={handleClose}
              />
              <Button
                id="addExp-btn"
                variant="primary"
                onClick={() => handleShow("add")}
              >
                Add
              </Button>
            </>
          ))}
        <div>
          <h5>Experiences</h5>
          {experiences.map((experience) => (
            <Container className="d-flex justify-content-between">
              {/* {  console.log({experience})} */}
              <SingleExperience
                experience={experience}
                show={show}
                setModalMode={setModalMode}
                modalMode={modalMode} // we are passing modalMode to SingleExperience
                handleClose={handleClose}
                handleShow={handleShow}
                getExperiences={getExperiences}
              />
            </Container>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ExperiencesList;
