import {Image,Col} from "react-bootstrap";
import { Component } from "react";
import {Link} from 'react-router-dom'

const colStyle= {
    height:'15vh',
    width: '10vw',
    objectFit: 'cover'
  };

  class GalleryRow extends Component{

    render() {

      return (
        <Col>
        {this.props.movies.map((res) => (
           <Link to={"/details/" + res.imdbID}> <Image src={res.Poster} rounded style={colStyle} className="ml-2"/></Link>
            )).slice(5, 10)
          }
        </Col>
            
            )}
 
}

export default GalleryRow