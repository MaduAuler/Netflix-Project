import {Image,Col} from "react-bootstrap";
import { Component } from "react";

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
            <Image src={res.Poster} rounded style={colStyle} className="ml-2"/>
            )).slice(5, 10)
          }
        </Col>
       
       
            
            )}
 
}

export default GalleryRow