import React from "react";
import {ListGroup} from 'react-bootstrap'

const SingleSuggestion=({suggestions})=>(

    <ListGroup>
        {
            suggestions.slice(0,7).map(suggestion=>(
                <ListGroup.Item>
                    <div>{suggestion.name} {suggestion.surname}</div>
                    <div>{suggestion.title}</div>
                </ListGroup.Item>
            )
            )
        }
    </ListGroup>

)
export default SingleSuggestion