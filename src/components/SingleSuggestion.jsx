import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import "./SingleSuggestionStyle.css";

const SingleSuggestion = ({ profilesData, setId }) => {
    const teamArr=[]
    if(profilesData!==undefined){
    teamArr.push(profilesData.find(profile=>profile.surname==='Saccarola'))
    teamArr.push(profilesData.find(profile=>profile.surname==='Maccapani'))
    //teamArr.push(profilesData.find(profile=>profile.surname==='Tumaite'))
    console.log(teamArr)
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
      profilesData.slice(0, 5).map((suggestion) => (
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
