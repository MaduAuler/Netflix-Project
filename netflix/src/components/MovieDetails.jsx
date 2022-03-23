import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card,Row,Col} from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();
  console.log("PARAMS", params);

   const [movieToShow, setMovieToShow] = useState(null);
   const [commentsToShow, setCommentsToShow] = useState([])

  useEffect(() => {

   getMovieDetails()
   getComments()
  }, [])
 
  const getMovieDetails = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=9448849c&i=" + params.movieID )
        if(response.ok) {
            const data = await response.json()
           console.log(setMovieToShow(data))
              
          } else {
              console.log('error while fetching')
          }
        } catch(e) {
          console.log(e)
        }
      }
 

      const getComments = async () => {
        
            try {
                let response = await fetch(
                  "https://striveschool-api.herokuapp.com/api/comments/" + params.movieID,
                  {
                    headers: {
                      Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThkMzg2YTVmMzRhZDAwMTUzOWYxOWEiLCJpYXQiOjE2NDgwNDI2OTIsImV4cCI6MTY0OTI1MjI5Mn0.GPyJyTwmqj4B9yTk7otvaOvjstZ9iEaOdjvdWfl-sh0",
                    },
                  }
                );
                  if(response.ok) {
                      const data = await response.json()
                    console.log(setCommentsToShow(data))
                        
                    } else {
                        console.log('error while fetching')
                    }
                  } catch(e) {
                    console.log(e)
                  }
          
      }


  return (
    <Container>
    <h3>Movie Details</h3>
    {movieToShow && (
      <>
        <Row className="justify-content-center my-2">
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={movieToShow.Poster} />
              <Card.Body className="text-center">
                <Card.Title>{movieToShow.Title}</Card.Title>
                   <Card.Text>
                    {movieToShow.Plot}
                    {movieToShow.Actors}
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center my-2">
          <Col md={6}>
           {/*  <DishComments dish={pastaToShow} /> */}
          </Col>
        </Row>
      </>
    )}
  </Container>
    
  );
};

export default MovieDetails;
