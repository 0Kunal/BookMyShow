import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import { CardGroup } from 'react-bootstrap';
function Premiers() {
  return (
    <div style={{backgroundColor:"rgb(43, 49, 72)",padding:"5%"}}>
        <h2 style={{color:"white"}}>Premiers</h2>    
        <Carousel indicators={false} variant="dark">
            <Carousel.Item>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00316067-wxbsgezsxq-portrait.jpg" />
                        <Card.Body>
                        <Card.Title>The Investigation</Card.Title>
                        <Card.Text>
                            Head of the Copenhagen Police's Homicide unit Jens Mller investigates the murder of Swedish journalist Kim Wall.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00119705-bvpfcjxsyv-portrait.jpg" />
                        <Card.Body>
                        <Card.Title>GhostBusters: Afterlife</Card.Title>
                        <Card.Text>
                            When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00316141-munvacnnhm-portrait.jpg" />
                        <Card.Body>
                        <Card.Title>The Sister-Season 1</Card.Title>
                        <Card.Text>
                            A devoted married man finds his life is turned upside down when a ghost from his past turns up on his doorstep, bringing some shocking news that leads to disastrous consequences.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-zftjbeevvq-portrait.jpg" />
                        <Card.Body>
                        <Card.Title>Fast and Furious 9</Card.Title>
                        <Card.Text>
                            Dom`s peaceful life with his wife Letty and son Brian is shattered when Dom`s past catches up to him. The gang is up against the most skilled assassin and high-performance driver - his little brother Jakob.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-rvwldkjbqk-portrait.jpg" />
                        <Card.Body>
                        <Card.Title>Venom: Let There Be Carnage</Card.Title>
                        <Card.Text>
                            When deranged serial killer Cletus Kasady becomes host to an alien symbiote, Eddie Brock and Venom must put aside their differences to stop his reign of terror. Available in 4k on BMS stream.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg" />
                        <Card.Body>
                        <Card.Title>Dune</Card.Title>
                        <Card.Text>
                            Feature adaptation of Frank Herbert`s science fiction novel, Dune revolves around Paul Atreides, who leads nomadic tribes in a battle to control the desert planet Arrakis.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Premiers;
