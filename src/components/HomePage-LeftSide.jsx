import {useState,useEffect} from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

const HomePageLeftSide=({postsData})=>{

// {DEFINING SINGLE USER}
    const[userData,setUserData]=useState()
    useEffect(()=>{
        setUserData(postsData.find(profile=>profile._id==='6138c4562068d2001522b51d'))
    },[postsData])

// {SINGLE USER'S CARD + CONDITIONAL RENDER}
    return(
        <div>
            {userData && (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={userData.user.image} />

                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>

                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            )
            }
        </div>
    )
}
export default HomePageLeftSide