import {Image,Col} from "react-bootstrap";
import { Link } from "react-router-dom";


const colStyle= {
    height:'15vh',
    width: '10vw',
    objectFit: 'cover'
  };

  const GalleryRow =({movies})=> {

    

      return (
        <Col>
     
          {movies.map((res) => (
              <Link to={"/movie-details/" + res.imdbID}><Image src={res.Poster} rounded style={colStyle} className="ml-2"/> </Link>
              )).slice(5, 10)
            }
      
        </Col>
       
       
            
            )
 
}

export default GalleryRow