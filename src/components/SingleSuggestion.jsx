import React from "react";
import { ListGroup } from "react-bootstrap";
import "./SingleSuggestionStyle.css";

const SingleSuggestion = ({ profilesData, setId }) => {
    const teamArr=[]
    if(profilesData!==undefined){
      teamArr.push(profilesData.find(profile=>profile._id==='613884772068d2001522b4c6')) //Dovile
      teamArr.push(profilesData.find(profile=>profile._id==='613888102068d2001522b4d4')) //Lia
      teamArr.push(profilesData.find(profile=>profile._id==='61360d537be6c10015f9dbac')) //Marco
    //console.log(teamArr)
    }
  return (
    <ListGroup>
      {teamArr.map((suggestion)=>(
          <ListGroup.Item
            key={suggestion._id}
            className="groupitem"
            onClick={(e) => setId(suggestion._id)}
          >
            <img src={suggestion.image} />
            <div className="infoSuggestions">
                <p className="name">{suggestion.name} {suggestion.surname}</p>
                <p className="title">{suggestion.title}</p>
            </div>
          </ListGroup.Item>
      ))}
      {profilesData!==undefined && (
      profilesData.slice(0, 7).map((suggestion) => (
        <ListGroup.Item
          key={suggestion._id}
          className="groupitem"
          onClick={(e) => setId(suggestion._id)}
        >
          <img src={suggestion.image} />

          <div className="infoSuggestions">
              <p className="name">{suggestion.name} {suggestion.surname}</p>
              <p className="title">{suggestion.title}</p>
          </div>

        </ListGroup.Item>
      )))
    }
    </ListGroup>
  );
};
export default SingleSuggestion;
