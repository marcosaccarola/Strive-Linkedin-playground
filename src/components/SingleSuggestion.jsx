import React from "react";
import {ListGroup,Row,Col} from 'react-bootstrap'

const SingleSuggestion=({suggestions})=>(


    <ListGroup>
        {
            suggestions.slice(0,8).map(suggestion=>(
                    <ListGroup.Item className="text-left">
                <Row>
                    <Col md={2}>
                        {/* <div style={{maxHeight:20,maxWidth:20,display:"inline-block"}}>
                        <img src={suggestion.image}/>
                        </div> */}
                    </Col>
                    <Col md={10}>
                    <div style={{fontSize:12,fontWeight:"700"}}>{suggestion.name} {suggestion.surname}</div>
                    <div style={{fontSize:10,fontWeight:"200",color:"grey"}}>{suggestion.title}</div>
                    </Col>
                </Row>
                </ListGroup.Item>
            )
            )
        }
    </ListGroup>

)
export default SingleSuggestion