import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import {Card,Col, Container, Row} from "react-bootstrap";




const MovieDetails = () => {
    const params = useParams()
    console.log("PARAMS", params);
    const [movies, setMovies] = useState(null);
  

    useEffect( () => {
        fetchMovies();
    }, [])

  const fetchMovies = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=9448849c&i=" +  params.moviesId ) 
        if(response.ok) {
            const data = await response.json()
           setMovies(data )
           console.log(data)
              
          } else {
              console.log('error while fetching')
          }
        } catch(e) {
          console.log(e)
        }
      }
    return (
        <Container className="d-flex justify-content-center">
            <>
            <Row>
        <Col className="m-5">
    
           {movies && 
           
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movies.Poster} />
  <Card.Body >
    <Card.Title>{movies.Title}e</Card.Title>
    <Card.Text>
      {movies.Actors}
    </Card.Text>

  </Card.Body>
</Card>}
        </Col>
        </Row>
        </>
        </Container>
    )

}

export default MovieDetails;