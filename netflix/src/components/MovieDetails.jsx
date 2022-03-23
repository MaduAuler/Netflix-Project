import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import {Image,Col} from "react-bootstrap";




const MovieDetails = () => {
    const params = useParams()
    console.log("PARAMS", params);
    const [movies, setMovies] = useState(null);
  

    useEffect( () => {
        fetchMovies();
    })

  const fetchMovies = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=9448849c&i=" +  params ) 
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
        <Col>
    
            <Image src={movies.Poster}  className="ml-2"/>
        </Col>
    )

}

export default MovieDetails;