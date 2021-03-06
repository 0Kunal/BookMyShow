import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./movies.json";

function AllMovies() {
    return (
        <div>
            <Container fluid style={{padding:"5%", backgroundColor:"pink"}}>
                <Row style={{textAlign: 'center',justifyContent:"center"}}>
                    {data.map((mov) =>
                        <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginTop:"2%"}}>
                            <Card style={{cursor:"pointer"}}  onClick={() => window.location.href="/movies/"+ mov.id}>
                                <Card.Img variant="top" src={mov.image} />
                                <Card.Body>
                                <Card.Title>{mov.title}</Card.Title>
                                <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default AllMovies;