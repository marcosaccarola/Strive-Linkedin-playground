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
            <Card style={{ width: '18rem',marginTop:50 }}>
                <Card.Img variant="top" src={userData.user.image} style={{height:80,width:80,borderRadius:40}} className="mx-auto mt-5" />

                <Card.Body className="mx-auto">
                    <Card.Title>{userData.user.name} {userData.user.surname}</Card.Title>
                    <Card.Text>{userData.user.title}</Card.Text>                
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