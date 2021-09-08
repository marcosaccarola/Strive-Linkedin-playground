import { Row, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
const Post = ({ postData }) => {
  console.log("this is postdata", postData);

  return (
    <div>
      {postData.slice(0, 7).map((post) => (
        <div>
        
          <Row>
            <Col sm={6} className="m-auto my-5">
              <Card style={{ width: "18rem" }} className="mb-5" >
                <Card.Img variant="top" src={post.user.image} alt="userImg" />
                <Card.Body>
                  <Card.Title>{post.user.name}</Card.Title>
                  <h5>{post.username} </h5>
                  <Card.Text>{post.user.bio}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{post.text}</ListGroupItem>
                  <ListGroupItem>{post.user.area}</ListGroupItem>
                  <ListGroupItem>{post.user.id}</ListGroupItem>
                </ListGroup>
            
              </Card>
            </Col>
          </Row>
        </div>
      ))}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
     
      </Card>
    </div>
  );
};
export default Post;
