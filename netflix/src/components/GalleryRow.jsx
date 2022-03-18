import {Image,Col} from "react-bootstrap";

const colStyle= {
    height:'15vh',
    width: '10vw',
    objectFit: 'cover'
  };

const Gallery =(props)=> (

<>
<Col>
{props.movies.map((res) => (
    <Image src={res.Poster} rounded style={colStyle} className="ml-2"/>
    )).slice(5, 10)
  }
</Col>
 </>
 
)

export default Gallery