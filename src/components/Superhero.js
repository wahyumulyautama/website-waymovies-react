import { Card, Col, Container, Row, Image } from "react-bootstrap"
import ageofultron from "../assets/images/superhero/ageofultron.jpg"
import blackpanther from "../assets/images/superhero/blackpanther.jpg"
import captainmarvel from "../assets/images/superhero/captainmarvel.jpg"
import drstrange from "../assets/images/superhero/drstrange.jpg"
import endgame from "../assets/images/superhero/endgame.jpg"
import infinitywar from "../assets/images/superhero/infinitywar.jpg"
import quantumania from "../assets/images/superhero/quantumania.jpg"

const Superhero = () => {
    return (
        <div>
          <Container>
            <br/>
            <h1 className="text-white">MARVEL MOVIES</h1>
            <br/>
            <Row>
              
              <Col md={4} className="movieWrapper" id="superhero">
                <Card 
                className="movieImage">
                  <Image
                  src={ageofultron} 
                  alt="AgeOfUltron Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Avengers - Age Of Ultron</Card.Title>
                    <Card.Text className="text-left">
                      This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card> 
              </Col>

              <Col md={4} className="movieWrapper">
                <Card 
                className="movieImage">
                  <Image
                  src={blackpanther} 
                  alt="BlackPantherWakandaForever Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Black Panther - Wakanda Forever</Card.Title>
                    <Card.Text className="text-left">
                      This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card> 
              </Col>
              
              <Col md={4} className="movieWrapper">
                <Card 
                className="movieImage">
                  <Image
                  src={captainmarvel} 
                  alt="CaptainMarvel Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Captain Marvel</Card.Title>
                    <Card.Text className="text-left">
                      This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card> 
              </Col>

              <Col md={4} className="movieWrapper">
                <Card 
                className="movieImage">
                  <Image
                  src={drstrange} 
                  alt="DrStrangeMultiverse Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Doctor Strange - Multiverse Madness</Card.Title>
                    <Card.Text className="text-left">
                      This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card> 
              </Col>

              <Col md={4} className="movieWrapper">
                <Card 
                className="movieImage">
                  <Image
                  src={endgame} 
                  alt="EndGame Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Avengers - Endgame</Card.Title>
                    <Card.Text className="text-left">
                      This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card> 
              </Col>

              <Col md={4} className="movieWrapper">
                <Card 
                className="movieImage">
                  <Image
                  src={infinitywar} 
                  alt="InfinityWar Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Infinity War</Card.Title>
                    <Card.Text className="text-left">
                      This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card> 
              </Col>

              <Col md={4} className="movieWrapper">
                <Card 
                className="movieImage">
                  <Image
                  src={quantumania} 
                  alt="Quantumania Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Ant-man and Wasp - Quantumania</Card.Title>
                    <Card.Text className="text-left">
                      This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card> 
              </Col>

            </Row>
          </Container>
          
        </div>
    )
}

export default Superhero