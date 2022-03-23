import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card,} from "react-bootstrap";

const MovieDetails = () => {
  /*const params = useParams();
  console.log("PARAMS", params);

   const [movieToShow, setMovieToShow] = useState(null);

  useEffect(() => {
   getMovieDetails()
  }, [])
 
   const getMovieDetails = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?apikey=24ad60e9&i=" + params.movieId
      );
      if (response.ok) {
        let data = await response.json();
        setMovieToShow(data);
      } else {
        alert("We got an error");
      }
    } catch (error) {
      console.log(error);
    }
  };
 */


  return (
  
    <Container>
      <h1>MOVIE DETAILS</h1>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    
  );
};

export default MovieDetails;
