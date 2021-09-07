import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import "./SingleSuggestionStyle.css";

const SingleSuggestion = ({ profilesData, setId }) => {
  return (
    <ListGroup>
      {profilesData.slice(0, 8).map((suggestion) => (
        <ListGroup.Item
          key={suggestion._id}
          className="groupitem"
          onClick={(e) => setId(suggestion._id)}
        >
          <img src={suggestion.image} />
<div className="infoSuggestions">
          <p className="name"> {suggestion.surname}</p>
          <p className="title">{suggestion.title}</p>
</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default SingleSuggestion;
