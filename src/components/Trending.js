import { useEffect, useState } from "react"
import { Card, Col, Container, Row, Image } from "react-bootstrap"
import amsterdamImage from "../assets/images/trending/amsterdam.jpg"
import barbarian from "../assets/images/trending/barbarian.jpg"
import dontworry from "../assets/images/trending/dontworry.jpg"
import halloweenends from "../assets/images/trending/halloweenends.jpg"
import lylecrocodile from "../assets/images/trending/lylecrocodile.jpg"
import smile from "../assets/images/trending/smile.jpg"
import womanking from "../assets/images/trending/womanking.jpg"
import axios from "axios"

const Trending = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
        api_key:process.env.REACT_APP_TMDB_KEY
      }
    }).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

    return (
        <div>
          <Container>
            <br/>
            <h1 className="text-white">TRENDING MOVIES</h1>
            <br/>
            <Row>
              
              {movies.map((result,index) => {
                return (
                  <Col md={4} className="movieWrapper" id="trending" key={index}>
                    <Card 
                    className="movieImage">
                      <Image
                      src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} 
                      alt="test"
                      className="images"
                      />
                      <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center"> {result.title} </Card.Title>
                        <Card.Text className="text-left">
                          {result.overview}
                        </Card.Text>
                        <Card.Text className="text-left">
                          {result.release_date}
                        </Card.Text>
                        </div>
                      </div>
                    </Card> 
                  </Col>
                )
              })}

              




              {/* <Col md={4} className="movieWrapper">
                <Card 
                className="movieImage">
                  <Image
                  src={barbarian} 
                  alt="Barbarian Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Barbarian</Card.Title>
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
                  src={dontworry} 
                  alt="DontWorry Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Dont Worry</Card.Title>
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
                  src={halloweenends} 
                  alt="Halloween Ends Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">halloween Ends</Card.Title>
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
                  src={lylecrocodile} 
                  alt="Lyle Crocodile Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Lyle Crocodile</Card.Title>
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
                  src={smile} 
                  alt="Smile Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Smile</Card.Title>
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
                  src={womanking} 
                  alt="Woman King Movies"
                  className="images"/>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Woman King</Card.Title>
                    <Card.Text className="text-left">
                      This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card> 
              </Col> */}

            </Row>
          </Container>
          
        </div>
    )
}

export default Trending