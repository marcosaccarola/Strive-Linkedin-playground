import { Button } from "react-bootstrap";


const SingleExperience = ({role, company, description, startDate, endDate, userId}) => {
    return (
        <>
            <p>{role}</p>
            <p>{company}</p>
            <p>{description}</p>
            <p>{startDate}</p>
            { endDate && <p>{endDate}</p> }

            {userId === "61360d537be6c10015f9dbac" && 
               <>
                    <Button id="deleteExp-btn" variant="danger">
                     Trash icon
                    </Button>
                    <Button id="editExp-btn" variant="warning">
                     Edit
                    </Button>
               </>}
        </>
    )
}

export default SingleExperience